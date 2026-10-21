# Manual content review

September 22, 2026 · Live 12 manual snapshot

## What is complete in this pass

The previous missing-placement queue is closed. Video, Link/Link Audio,
Tempo Follower, external synchronization, controller mappings, separate Push 1
and Push 2 areas, performance strategy, audio/MIDI behavior and accessibility
now have authored local action/control explanations. Shared Live Concepts
are attached to the relevant existing places. About and credits are accessible
from Sources & scope, not disguised as actions. The sources for those additions
were read in full; their original wording was not imported as atlas prose.

All cached headings have a local destination. This is verified separately by
`manual-card-audit.cjs`; it does **not** certify every parameter explanation.

The image pass replaced active custom media with the official manual figures.
See `MANUAL_IMAGES.md` for the upstream missing image and provenance.

## Content repairs found during the image pass

The older device cards were too thin to explain some of their new figures.
Existing action bars were retained; named controls and behavior were added
inside the final cards, without additional disclosures:

| Device | Repairs checked against the source |
| --- | --- |
| Saturator | Curve choices, Bass Shaper threshold, current Post Clip/Color controls, all six Waveshaper controls, quality/DC options. |
| Compressor | Transfer/detector/envelope modes, lookahead, displays, gain compensation, external detector mix and EQ. |
| EQ Eight | Filter types, multiselection, Q gestures, Adaptive Q, Scale, channel editing, audition and oversampling. |
| EQ Three | Crossover slopes, band ranges, LEDs and coloration at flat gain. |
| Utility | Mid/side limits, disabled width behavior, Bass Mono audition, DC filtering and mute placement. |
| Limiter | Current ceiling/routing modes, lookahead values, Maximize transformations and linked reduction. |
| Auto Filter | Every current filter type, circuit scope, LFO/envelope quantization, stereo modulation and sidechain controls. |
| Sampler | Layer menus, zone fades and round robin, per-layer/global scope, sustain/release loops, oscillator and pitch modes, filter/shaper order, envelope stages, LFO/MIDI routing and import qualifications. |

## What remains open

**The entire manual has not yet passed a line-by-line semantic content review.**
Do not rename placement coverage or figure coverage as complete conversion.
Some older cards still explain a general action without all its options.

`node manual-content-audit.cjs --json` compares each source section's emphasized
control names with its actual rendered card text. It excludes figure captions,
source links and hidden index data. Every heading is checked. The report keeps
exact source URLs and local destinations for follow-up. It does not write files.

This is triage only: alternate wording can be correct; a repeated name can lack
an explanation; many controls and important caveats are not emphasized in the
source at all. No zero-gap or completion score can be inferred from it.

Priority review queue from that comparison and direct inspection:

- Workspace: exact Browser/tag/Splice commands; export encoding, real-time render
  and video options; missing-file candidate handling; MIDI resync modes.
- Clips: Auto-Warp command variants, Beats loop behavior, tuning-controller
  layouts, stem-separation merge/crop behavior and newer bounce commands.
- Devices: plug-in window behavior and VST banks; Delay transition/quality modes;
  Looper transport/tempo/input-monitor modes; Roar shaper/filter/modulation details;
  spectral-device controls; Chord's expression/duplicate-note options; Drum Sampler,
  Tension and the rest of the synthesizer parameter reference.
- Cross-check the remaining legacy device families even where vocabulary triage
  finds nothing. Inspect illustrations beside their actual explanations, not as
  evidence that the pictured controls have been described.

Review in the existing order: Workspace → Clips → Devices. Record actual
behavioral corrections, not totals of “explained sections.” History expansion
remains after manual content completion. No history research was added here.

## Checks

`node --test` runs the local model suites; the local-server suite needs access to
the preview port. `manual-images.test.cjs` checks each figure's real render target,
dimensions, local file, provenance and absence of active custom stills/videos.
`device-control-details.test.cjs` checks the repaired control families above.
These tests supplement, but do not replace, editorial review.
