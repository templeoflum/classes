import AVFoundation
import AppKit
import Foundation

// Only trims/crops an actual screen recording. No synthetic interface frames.
let root = URL(fileURLWithPath: "/Users/donovan/work/classes/music production/ableton-atlas/")
let asset = AVURLAsset(url: root.appendingPathComponent("capture-tests/arm-track-source.mov"))
let mode = CommandLine.arguments.dropFirst().first ?? "inspect"
if mode == "inspect" {
    let generator = AVAssetImageGenerator(asset: asset)
    generator.appliesPreferredTrackTransform = true
    for second in [0.0, 5.0, 10.0] {
        let image = try generator.copyCGImage(at: CMTime(seconds: second, preferredTimescale: 600), actualTime: nil)
        let png = NSBitmapImageRep(cgImage: image).representation(using: .png, properties: [:])!
        try png.write(to: root.appendingPathComponent("capture-tests/arm-frame-\(Int(second)).png"))
    }
    print("Extracted actual frames at 0, 5 and 10 seconds.")
} else {
    // Coordinates confirmed against the actual recorded frame, not the UI preview.
    let crop = CGRect(x: 930, y: 1458, width: 468, height: 320)
    let composition = AVMutableComposition()
    let track = composition.addMutableTrack(withMediaType: .video, preferredTrackID: kCMPersistentTrackID_Invalid)!
    let source = asset.tracks(withMediaType: .video)[0]
    let range = CMTimeRange(start: .zero, duration: asset.duration)
    try track.insertTimeRange(range, of: source, at: .zero)
    let layer = AVMutableVideoCompositionLayerInstruction(assetTrack: track)
    layer.setTransform(CGAffineTransform(translationX: -crop.minX, y: -crop.minY), at: .zero)
    let instruction = AVMutableVideoCompositionInstruction()
    instruction.timeRange = range
    instruction.layerInstructions = [layer]
    let video = AVMutableVideoComposition()
    video.renderSize = crop.size
    video.frameDuration = CMTime(value: 1, timescale: 30)
    video.instructions = [instruction]
    let exporter = AVAssetExportSession(asset: composition, presetName: AVAssetExportPresetHighestQuality)!
    exporter.outputURL = root.appendingPathComponent("live-atlas/assets/arm-track.mp4")
    exporter.outputFileType = .mp4
    exporter.shouldOptimizeForNetworkUse = true
    exporter.videoComposition = video
    exporter.exportAsynchronously { }
    while exporter.status == .waiting || exporter.status == .exporting { RunLoop.current.run(until: Date().addingTimeInterval(0.1)) }
    guard exporter.status == .completed else { fatalError(exporter.error?.localizedDescription ?? "Export failed") }
    print("Exported cropped, silent arm-track.mp4.")
}
