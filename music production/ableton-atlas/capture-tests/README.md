# Native capture test

One Ableton-only capture, explicitly authorized by the user, on September 21, 2026. No atlas images were changed, and no music, settings, zoom, or clip contents were changed during this test.

`native-live-window.png` is an unmodified 4112 × 2628 PNG of Live's Untitled window. This matches the 4112-pixel width of the user's supplied MIDI-region screenshot. The earlier computer-use image was only about 1224 pixels wide. Keep the native PNG as the source; a tool or chat preview may itself display a smaller rendition.

## Working route

1. Inspect and identify the current Ableton window through Computer Use. The Screenshot toolbar did not expose usable controls in this test.
2. For the user-authorized direct native-capture route, read macOS window metadata filtered to Ableton/Live and the normal window layer. Choose the matching document title and bounds, not a helper window. Sandbox escalation was required to see the relevant window metadata.
3. Run macOS `/usr/sbin/screencapture` with `-x -o -t png -l<verified-window-id>` and a fresh explicit output filename. The capture also required sandbox approval. Never reuse the test's window identifier without checking the current window list.
4. Verify PNG dimensions with `sips`, visually inspect the saved file, and only then copy the unchanged source into the intended project location.

The test used window 34100, titled Untitled; that identifier is session-specific. No desktop-wide screenshot was taken. No OS privacy permissions were changed, no new dependencies were installed, and the existing user-supplied MIDI sample remains the one used by the atlas.

## Authorized atlas rollout · September 21

The subsequent full screenshot pass used this method to capture 37 native PNGs into `../live-atlas/assets/native/`. Those, plus the user's approved MIDI PNG, now supply 55 focused/context views across 68 atlas entries. The earlier one-image restriction above describes the initial test, not the current scope.

- Keep source PNGs unmodified. Use CSS crop coordinates and a declared `pixelRatio: 2`; never substitute the smaller Computer Use observation preview.
- Verify actual PNG dimensions individually. Most source windows are 4112×2580; Delay was 3884×2436, Settings 1450×1576, and Export 754×1586. Do not assume every window capture has the same bounds.
- Inspect each rendered crop, not only the full source. A track can move vertically between actions; the Consolidate crop needed correction for this reason.
- For introductory MIDI imagery, retain the approved full user image with Fold and Highlight Scale off. Do not reuse the old folded JPEG.
- `make-capture-audio.py` produces `Atlas pulse.wav`, a two-second original four-pulse waveform for Simpler, Sampler, and Audio Clip View. No course sample or third-party recording was used. This is capture scaffolding, not a lesson template or `.als` deliverable.
- Two disposable tracks (`Atlas Capture`, `Atlas Audio`) and a temporary Places shortcut were used, then removed. Original tracks/devices/clip remain; playback and record arm were off. Browser preview, Utility search, Computer MIDI Keyboard, the prior Settings tab, and Session/no-clip-selected view were restored. No default preset or audio preference was saved or changed. No `.als` was saved; Live's Consolidate action did create its normal temporary rendered audio for the disposable example.
- `atlas-native-preview.png` is a browser QA screenshot of the updated Simpler entry, not a source image to crop for the atlas.
