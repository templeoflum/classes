import AVFoundation
import AppKit
import Foundation

// Trim a real on/off capture; do not synthesize/reverse a button interaction.
let root = URL(fileURLWithPath: "/Users/donovan/work/classes/music production/ableton-atlas/")
let asset = AVURLAsset(url: root.appendingPathComponent("capture-tests/arm-toggle-source.mov"))
let generator = AVAssetImageGenerator(asset: asset)
generator.appliesPreferredTrackTransform = true
generator.requestedTimeToleranceBefore = .zero
generator.requestedTimeToleranceAfter = .zero
let probe = CGRect(x: 970, y: 1710, width: 60, height: 30)
var redTimes: [Double] = []
for tenth in 0..<Int(CMTimeGetSeconds(asset.duration)*10) {
    let second = Double(tenth)/10
    let frame = try generator.copyCGImage(at: CMTime(seconds: second, preferredTimescale: 600), actualTime: nil)
    let patch = NSBitmapImageRep(cgImage: frame.cropping(to: probe)!)
    var red = 0
    for y in stride(from: 0, to: patch.pixelsHigh, by: 3) {
        for x in stride(from: 0, to: patch.pixelsWide, by: 3) {
            let c = patch.colorAt(x: x, y: y)!.usingColorSpace(.deviceRGB)!
            if c.redComponent > 0.55 && c.redComponent > c.greenComponent*1.5 { red += 1 }
        }
    }
    if red > 30 { redTimes.append(second) }
}
guard let on = redTimes.first, let lastOn = redTimes.last else { fatalError("No armed state found; inspect the recording before export.") }
let start = max(0, on-0.45)
let end = min(CMTimeGetSeconds(asset.duration), lastOn+0.55)
print("Armed interval sampled:",on,"to",lastOn,"; source trim:",start,"to",end)
let crop = CGRect(x: 930, y: 1458, width: 468, height: 320)
for (name,second) in [("off",start),("on",on),("off-again",end-0.1)] {
    let frame = try generator.copyCGImage(at: CMTime(seconds: second, preferredTimescale: 600), actualTime: nil)
    let image = NSBitmapImageRep(cgImage: frame.cropping(to: crop)!)
    try image.representation(using: .png, properties: [:])!.write(to: root.appendingPathComponent("capture-tests/arm-loop-\(name).png"))
}
let composition = AVMutableComposition()
let track = composition.addMutableTrack(withMediaType: .video, preferredTrackID: kCMPersistentTrackID_Invalid)!
let range = CMTimeRange(start: CMTime(seconds:start,preferredTimescale:600), duration:CMTime(seconds:end-start,preferredTimescale:600))
try track.insertTimeRange(range, of: asset.tracks(withMediaType:.video)[0], at:.zero)
let duration = CMTime(seconds:2,preferredTimescale:600)
composition.scaleTimeRange(CMTimeRange(start:.zero,duration:range.duration),toDuration:duration)
let layer = AVMutableVideoCompositionLayerInstruction(assetTrack:track)
layer.setTransform(CGAffineTransform(translationX:-crop.minX,y:-crop.minY),at:.zero)
let instruction = AVMutableVideoCompositionInstruction()
instruction.timeRange = CMTimeRange(start:.zero,duration:duration)
instruction.layerInstructions = [layer]
let video = AVMutableVideoComposition()
video.renderSize = crop.size
video.frameDuration = CMTime(value:1,timescale:30)
video.instructions = [instruction]
let exporter = AVAssetExportSession(asset:composition,presetName:AVAssetExportPresetHighestQuality)!
exporter.outputURL = root.appendingPathComponent("live-atlas/assets/arm-toggle.mp4")
exporter.outputFileType = .mp4
exporter.shouldOptimizeForNetworkUse = true
exporter.videoComposition = video
exporter.exportAsynchronously { }
while exporter.status == .waiting || exporter.status == .exporting { RunLoop.current.run(until:Date().addingTimeInterval(0.1)) }
guard exporter.status == .completed else { fatalError(exporter.error?.localizedDescription ?? "Export failed") }
print("Exported two-second silent on/off loop.")
