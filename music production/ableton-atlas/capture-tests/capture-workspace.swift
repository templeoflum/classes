// Native window capture only. No input events, state changes or desktop capture.
import CoreGraphics
import Foundation

let args = CommandLine.arguments
guard args.count == 3, ["document", "settings", "menu"].contains(args[1]),
      args[2].range(of: "^ws-[a-z0-9-]+$", options: .regularExpression) != nil else {
    fatalError("Usage: capture-workspace.swift document|settings|menu ws-name")
}
let windows = CGWindowListCopyWindowInfo([.optionOnScreenOnly, .excludeDesktopElements], kCGNullWindowID) as? [[String:Any]] ?? []
let candidates = windows.filter { w in
    guard w[kCGWindowOwnerName as String] as? String == "Live" else { return false }
    let title = w[kCGWindowName as String] as? String ?? ""
    let layer = w[kCGWindowLayer as String] as? Int ?? -1
    switch args[1] {
    case "document": return title == "Untitled" && layer == 0
    case "settings": return title == "Settings" && layer == 0
    default: return title.isEmpty && layer == 101
    }
}
guard candidates.count == 1, let window = candidates.first,
      let id = window[kCGWindowNumber as String] as? Int else {
    fatalError("Expected exactly one matching Live window; inspect the UI before capturing.")
}
let output = "/Users/donovan/work/classes/music production/ableton-atlas/live-atlas/assets/native/" + args[2] + ".png"
guard !FileManager.default.fileExists(atPath: output) else { fatalError("Output already exists; no overwrite.") }
print("Capturing Live \(args[1]) window \(id) → \(args[2]).png")
let process = Process()
process.executableURL = URL(fileURLWithPath: "/usr/sbin/screencapture")
process.arguments = ["-x", "-o", "-t", "png", "-l\(id)", output]
try process.run()
process.waitUntilExit()
guard process.terminationStatus == 0 else { fatalError("Native capture failed.") }
