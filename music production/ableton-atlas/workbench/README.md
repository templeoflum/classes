# Local Atlas workbench

This is the private authoring board and a revised musical-exploration sketch, not a released student Atlas. No source-course files or actual student notes are included in `dist`.

Run `node serve.mjs` in this directory. It prints the loopback-only address. Open that address in the side panel and keep the process alive while using it. The server exposes only the seven explicitly listed assets, not the surrounding project or research files. No dependencies or deployment required.

- `dist/index.html`: build board; reads the authored `status.json` every three seconds.
- `dist/sketch.html`: six connected viewpoints, global sample search, practical lookup, visit-only flags, and fictional teacher return notes.
- Studio retains the signal/capture map; Sound & Form contains the existing sound and phrase scales. Actions has 12 representative operations with Mac/Windows keys; Devices has eight representative instruments/effects. Approaches and Lineages now have separate maps, replacing the old attached four-node historical diagrams.
- `dist/status.json`: manually maintained work record. Use `working` only during actual work; update the timestamp from the clock and finish with `ready`. A working report older than five minutes is labeled unconfirmed, never shown as live progress.

The retained preview this round is at `http://127.0.0.1:54867/`. A restarted server may choose a different port. The server continuing to run is not an agent continuing to build.

## Current six-view sketch · September 20, 2026

Surface-copy revision: removed repeated category/caption layers, the frame badge, sample-count footers, and interface self-description. Headings now name the subject directly. Definitions, sources, and uses remain collapsed; prototype scope lives under About. Functional labels, relationships, shortcut context, and the example-note label remain. All six views, search, and the example note were rechecked without browser errors. Sites skill used for this local copy/layout pass; no publication.

The frame is now clickable; the catalogs and wider history are not complete. Actions shows context and shortcut lookup, not a keyboard simulator. Device entries show signal roles, mechanisms, useful controls, possible uses, and reference links; edition/Pack coverage still needs checking. Approaches compares two sourced practices; Lineages separates collaboration from the development of a compositional practice. No connection between the two historical branches is asserted.

Navigation examples were revised at the teacher's request: Tab, Shift–Tab, and the Browser toggle replace the initial Option–2/3/4 focus examples. Tab-mode/context exceptions are included. The Browser keys are Command–Option–B on Mac and Ctrl–Alt–B on Windows; this is Live's panel, not Finder. The sample count remains 12.

Search accepts names, partial words, common action terms, and example key chords. Result selection and labelled connections navigate between views; Sound & Form has sound/phrase scale controls. Back and deliberate flags remain temporary and memory-only. No real learner preferences or records are in the served assets.

Checked this pass: all six views at 420px with page width equal to viewport width; normal-width Studio, Devices, Approaches, and Lineages visually inspected; narrow Actions and Devices visually inspected. Tested Mac/Windows display, device-to-concept navigation, phrase/sound switching, name/chord search, no-result state, keyboard selection from search, marking/reopening/removing a place, and restored default viewport. No browser warning/error logs appeared during checks. Syntax and local HTTP checks passed. These are UI checks, not an accessibility audit or testing in Live.

Sites building skill was used to preserve the existing static project and local preview, with no registration or publication. Retained server this pass: session 14478 at the same loopback URL. A server session may expire; restart explicitly when needed.

## Earlier three-study direction · design history

The user rejected the earlier task-based map as drab and exhausting, including its concepts. The current sketch replaces that presentation, not merely its colors. Reinspection of the correct public Piano Atlas informed the concept-led studies, editorial hierarchy, restrained palette, and content-specific diagrams. No reference code, artwork, or explanatory prose was copied.

- **The studio — Gesture & instrument:** gesture, instrument, listening, and recording; labeled MIDI, audio, and capture connections.
- **The sound — The life of a note:** onset, held sound, and release/tail, placed on a schematic envelope.
- **The phrase — Phrase & form:** repeat, variation, and space, shown as contrasting phrase traces.

The user's next correction was that a map makes connections and routes visible; it does not tell the reader what to think. The current revision removes default interpretations and invitations, places labeled concept connections first, and collapses definitions and Live details. Tabs are unnumbered; relationships are not a lesson order. Fictional notes and signal help remain directly readable when explicitly opened. These are provisional studies, not an approved replacement for the broader curriculum or its six territories. Local presentation keys do not replace any of the existing 42 canonical content IDs.

An intermediate correction added people, aims, decisions, and collaborators as small historical branches. The user rejected that repeated miniature-story structure. The six-view sketch above supersedes it while retaining the source records and factual limits. Comparisons to present-day concepts do not imply a direct ancestry to Live.

## Revised-sketch checks · September 20, 2026

- Human-branch revision: tested area → person → aim → present-day concept, source disclosure, keyboard selection of a work, marking/reopening a historical place, and Back from signal help. Both branches measured 390px page width at a 390px viewport; corrected an overlong relationship label. No browser console errors reported. Normal viewport restored.
- Restored the loopback server at the existing port after it had stopped. `ATLAS_PREVIEW_PORT` may select a port on restart; omitted, the server still chooses a free port. The standalone sketch also has relative assets, but the status board needs the HTTP server for its status fetch.
- Connection-first revision: confirmed definitions initially hidden, Instrument → Onset changed area, optional definition opened, Back restored Instrument, and a marked place reopened through Bookmarks. Studio still fits a 390px viewport without horizontal overflow.
- Also checked the sound area at 390px, explicitly opened signal help and fictional notes, and used keyboard Enter to reach Variation. Explanations remain closed on concept selection; no console errors were reported. Temporary viewport override was reset.
- All three JavaScript files passed syntax checks. The revised page and local assets loaded successfully.
- Visually inspected all three studies at the normal side-panel width and the studio/phrase studies at 390px. Fixed narrow-screen diagram overflow; measured page width now equals the 390px viewport.
- Tested cross-study connection and Back, keeping/removing a curiosity, reopening an idea from the curiosity list, and reload clearing visit-only flags.
- Tested keyboard Enter on a musical landmark, no-sound help, unresolved return, and the clearly fictional lesson note. No browser console errors were reported during these checks.
- The drawings are original schematics, not playable audio, measured envelopes, or scores. No production, hardware, accessibility audit, or real-learner validation is implied.

## Earlier sketch checks · historical

- Both pages returned HTTP 200; all relative asset/page references exist; all three JavaScript files passed syntax checks.
- Browser-tested: play → no-sound help → unresolved return point; Back restored recovery; fictional lesson note returned to Play; deliberate marker appeared; wider-map return retained the selected place; list alternative worked.
- Reload cleared temporary markers as promised. Keyboard Enter opened the sound-response concept.
- At a 390px viewport, page width equaled viewport width; selected detail and controls were visually inspected. Desktop map and live board updates were inspected too.
- The board displayed actual work as “In progress,” then the checked result as “Ready to try.” This is an authored status record, not integration with agent runtime.

Not tested: real learner clarity, actual Live operations, hardware, media, device compatibility, real student-note storage/sharing, or a production release. The wider Atlas remains outlined in the private authoring documents; representative entries do not constitute the full catalogs or historical coverage. No audio, downloadable Sets, persistent notes, accounts, or automatic Live integration exist. Temporary flags and navigation history are memory-only.
