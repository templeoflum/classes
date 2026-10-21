# Manual figures

September 22, 2026 · official Live 12 manual snapshot

The active capture registry now contains only manual imagery. Custom stills and
the Record MIDI loop are removed from the active atlas, but their original files
are retained for recovery and later custom-media work. They were not deleted.

- 1,146 occurrences across the 42 cached manual chapters: 1,097 figures and
  49 standalone inline images/icons.
- 1,094 distinct source assets, of which 1,093 downloaded successfully.
- Every occurrence has an explicit local card/source-section placement; repeated
  figures retain their separate contexts. One occurrence is unavailable upstream.
- Original-resolution assets are kept as supplied, with no cropping, stretch or
  re-encoding. Larger views retain the whole figure and can show native size.
- Local image paths, native dimensions, byte sizes, original URLs, source headings
  and captions are in `manual-images.json`. `manual-images-data.js` is the browser
  copy; `manual-images.js` attaches figures to real action renderers.
- `import-manual-images.mjs --download` validates or refreshes these assets from
  the official host. The private manual cache and audit files are not served.

## Upstream exception

[The VST Plug-In Folder, §23.4.1](https://www.ableton.com/en/live-manual/12/working-with-instruments-and-effects/#the-vst-plug-in-folder)
references `VstPluginFolderWinL12.png`, which returned HTTP 404 at both original
and supplied responsive URLs. The current public page still references that
filename. Its local card identifies the unavailable figure and links to the
source instead of showing a broken image or substituting the macOS controls.

## Rights and release gate

Figures and original captions are Ableton material, © Ableton AG. They are
credited in the atlas and are not represented as original artwork. Attribution
does not confer permission: check applicable terms or obtain permission before
publicly distributing these images. This pass is a local prototype update;
nothing was published or deployed.

## Verification

`manual-images.test.cjs` checks all occurrences against actual rendered action
cards, local dimensions and complete files. `serve.test.cjs` checks every available
asset returns its exact byte length, with no private source/audit files exposed.
Browser checks covered desktop/narrow layout, enlargement/actual size and
uncropped figures. Assets below the viewport are loaded lazily.

Image placement is complete except for the upstream exception. Text-depth
review is separate and remains open in `MANUAL_CONTENT_REVIEW.md`.
