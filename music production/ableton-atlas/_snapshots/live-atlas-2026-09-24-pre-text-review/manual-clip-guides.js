// Original clip properties and audio timing guides, checked against chapters 8–9.
(() => {
  const key=(action,mac,win=mac.replace(/⇧/g,'Shift'))=>({action,mac,win});
  const add=(chapter,rows)=>rows.forEach(([anchor,body,title,steps,terms=[],note='',images=[],keys=[]])=>{
    manualGuides.put(chapter,anchor,body,title,steps,terms,note,images);
    manualGuides.items[chapter+'#'+anchor].keys=keys;
  });
  add('clip-view',[
    ['clip-title-bar','The title bar identifies the selected clip and holds its activator. Audio clips also have a default-settings save button.','Check the target',[
      'Select a clip and read its name and color in Clip View.',
      'Confirm that this is the intended clip before changing its controls.'
    ],[['Multiple clips','The header represents the selection rather than one named clip.']], '',['midiSample']],
    ['clip-activator-toggle','Deactivate a clip while leaving it in its slot or timeline position.','Compare without this clip',[
      'Select the clip body, not a note inside it.',
      'Deactivate it, listen to the surrounding material, then reactivate it.'
    ],[['Clip activator','Only the selected clip or clips.'],['Track activator','A separate control for the whole track.']], '',[],[key('Deactivate / reactivate','0')]],
    ['clip-color','A clip can have its own color independently of its track.','Mark a variation',[
      'Open the clip’s context menu and choose a color.',
      'Use the track’s Assign Track Color to Clips command if you want to restore the track color.'
    ],[['Assignment scope','Session and Arrangement clip colors are reassigned separately.']], 'Color is a reference cue; it does not create a musical or playback relationship.'],
    ['saving-default-audio-clip-settings-with-the-sample','Store an audio sample’s clip settings so future imports start with them.','Reuse a checked Warp map',[
      'Verify the clip’s timing and settings, then use Save Default Clip in its title bar.',
      'Import the sample again to check the saved default.'
    ],[['Analysis file','Holds the saved clip information beside the sample.'],['Future clips','Existing instances are not retroactively updated.']], 'This differs from saving a Live Clip with devices. Core Library and Pack samples cannot receive your saved default settings.'],
    ['clip-panels','Panels on the left contain clip settings; the editor on the right contains notes, audio or envelopes.','Make room for the editor',[
      'Drag the panel/editor divider to choose horizontal or vertical panel arrangement.',
      'Fold the panels from the title bar when you only need the editor.'
    ],[['Automatic arrangement','Changes panel arrangement with the available Clip View height.']], 'Rearranging the panels does not change any clip settings.'],
    ['editor-view-modes','The selected editor determines whether you are changing notes, sample timing, envelopes or per-note expression.','Choose the right editor',[
      'Open the clip and choose its Notes or Sample tab for the underlying material.',
      'Choose Envelopes for parameter motion, or MPE for per-note expression in a MIDI clip.'
    ],[['Audio clip','Sample and Envelopes.'],['MIDI clip','Notes, Envelopes and MPE.']], 'Check the editor label when the expected grid or waveform is missing.'],
    ['main-clip-properties-panel','Playback region, looping, clip meter, groove and scale are grouped together.','Read the playback boundaries',[
      'Select the clip and inspect Start, End, Loop Position and Loop Length.',
      'Compare those values with the markers in its editor.'
    ],[['Start','Where a newly launched clip begins.'],['Loop Position','Where repeated playback cycles.']], 'Start and loop start need not be the same position.',['clipLoop']],
    ['clip-time-signature','Clip meter changes how its time ruler is labeled. It does not change the Set meter or the clip’s playback by itself.','Relabel a passage',[
      'Set the clip’s numerator and denominator.',
      'Inspect the ruler and loop boundaries without assuming the sound has been stretched.'
    ],[['Clip meter','Local display reference.'],['Set meter','The project’s separate timing reference.']]],
    ['clip-groove','Assign a Groove Pool pattern to this clip, or commit its timing and accent changes.','Compare an assignment',[
      'Choose a groove for the clip and listen.',
      'Choose None to compare without it; commit only when you want its effects written into the clip.'
    ],[['Hot-swap','Can replace the shared pool groove, affecting other users of that groove.']], 'Committing groove velocity to audio can overwrite an existing clip volume envelope.'],
    ['clip-scale','Scale settings provide a pitch reference and context for scale-aware tools and devices.','Separate the display from an edit',[
      'Choose a root and scale and inspect the highlighted piano keys.',
      'Use a pitch-changing tool only if you actually want to alter the notes.'
    ],[['Audio clip','The scale setting does not retune the sample itself.'],['Scale-aware devices','Can use the clip’s scale context.']], 'Changing this setting is not the same as applying Fit to Scale.'],
    ['extended-clip-properties','Session launch behavior and MIDI program messages sit outside the basic clip region controls.','Find a missing launch panel',[
      'Check whether the selected clip is in Session or Arrangement.',
      'Use a Session clip for launch properties; inspect MIDI clips for bank/program fields.'
    ],[['Arrangement audio','Has neither Session launch controls nor MIDI program fields.']], 'Arrangement clips play from their timeline positions rather than a launch trigger.'],
    ['follow-action-and-launch-controls','Launch controls define the immediate trigger response; Follow Actions define what happens later.','Compare trigger behavior',[
      'Select a Session clip and open Extended Clip Properties.',
      'Inspect Launch Mode and Quantization before enabling any Follow Action.'
    ],[['Clip group','Contiguous Session clips in one track; empty slots separate groups.']], 'A Follow Action can move playback to another clip, so test it away from an active performance.'],
    ['midi-clip-bank-and-program-change-controls','Send sound-selection messages to a compatible MIDI destination when the clip launches.','Select an external sound',[
      'Check the receiving instrument’s documented bank and program numbering.',
      'Set the clip fields and launch it once to verify the chosen sound.'
    ],[['—','Sends no message for that field.'],['Bank / Sub-bank / Program','Different parts of the destination’s preset address.']], 'This does not replace a native Live instrument preset. Receiver support and numbering conventions vary.'],
    ['audio-utilities-panel','Audio-specific controls cover timing, pitch, level, sample processing and playback resources.','Identify the kind of change',[
      'Open an audio clip and locate Warp, Gain and Pitch.',
      'Adjust only the control for the change you intend, then compare with Undo.'
    ],[['Clip gain','Level before track devices.'],['Warp','Sample-time to beat-time mapping.'],['Pitch','Clip transposition.']], '',['audioClip']],
    ['warp-controls','Warp makes the clip follow musical time. With Warp off, its playback speed does not follow the Set tempo.','Check a loop’s timing reference',[
      'Enable Warp and inspect the source BPM and first-beat alignment.',
      'Play with the metronome before moving markers or changing the Warp mode.'
    ],[['Source BPM','Live’s interpretation of the original material.'],['Set tempo','The current project playback tempo.']], 'Enabling Warp does not guarantee that the first beat and bar count were detected correctly.',['warp']],
    ['reversing-samples','Audio reversal creates a reversed sample while retaining a relationship to the original clip settings.','Reverse a copy',[
      'Duplicate the audio clip and use Reverse.',
      'Inspect its loop and envelope behavior, then compare with the original.'
    ],[['Warp markers','Their source positions are reflected with the audio.'],['Clip envelopes','Stay at their positions in clip time.'],['Saved file','Samples/Processed/Reverse in the project.']], 'Reversing a long file may take time; avoid testing this during a live performance.'],
    ['destructive-sample-editing','The Edit command opens the underlying sample in a configured external editor. This can affect every clip using that file.','Protect the source first',[
      'Make a separate source copy before external editing.',
      'Stop playback, open the sample in the configured editor, then check its length and timing on return.'
    ],[['Shared file','Other clips may use the same audio.'],['Changed length','Can invalidate the existing Warp markers.']], 'Do not treat this as an ordinary non-destructive clip adjustment.'],
    ['clip-start-and-end-fades','Session’s Fade switch applies tiny edge fades to reduce clicks. Arrangement uses editable fade envelopes.','Check an edge click',[
      'On a Session audio clip, enable Fade.',
      'Listen to the start and end; use Arrangement fade handles for a longer shaped transition.'
    ],[['Short fade','Up to a few milliseconds, not a musical fade-out.']], 'The same Fade toggle is not shown for Arrangement clips.'],
    ['clip-ram-mode','RAM mode reads the clip’s sample from memory instead of streaming it from disk.','Compare a disk-heavy clip',[
      'Check the disk indicator and available memory before changing the clip.',
      'Enable RAM for the specific clip and compare playback stability.'
    ],[['Tradeoff','Less real-time disk work, more memory use.']], 'Loading every sample into RAM can worsen performance if the system runs short of memory.'],
    ['high-quality-interpolation','Hi-Q changes sample-rate conversion and transposition quality at a CPU cost.','Compare a transposed sample',[
      'Play a transposed audio clip and switch Hi-Q on and off.',
      'Listen for high-frequency artifacts while watching CPU load.'
    ],[['Interpolation','Reconstructs sample values during rate changes.']], 'Hi-Q cannot restore detail missing from the recording.'],
    ['clip-gain-and-pitch','Set this audio clip’s input level and transposition independently of the track’s mixer.','Match two clip levels',[
      'Compare the clips through the same track processing.',
      'Adjust Clip Gain on the quieter or louder source, then listen through the devices again.'
    ],[['Gain','Can change how downstream compressors or distortion react.'],['Pitch','Semitone offset, with a separate cents adjustment.']], 'Re-Pitch Warp mode ties pitch to speed and disables independent transposition.',['audioClip']],
    ['pitch-and-time-utilities-panel','Quick MIDI edits operate on the selected notes or time range; many buttons use the whole clip if nothing is selected.','Restrict a quick edit',[
      'Select the notes before using a utility.',
      'Apply one operation, then inspect the changed pitches or boundaries.'
    ],[['Pitch tools','Transpose, fit, invert and add intervals.'],['Time tools','Stretch, length, timing variation, reverse and legato.']]],
    ['pitch-tools','Change existing pitches or add new notes at an interval.','Check the intended operation',[
      'Select a small phrase and choose the pitch tool.',
      'Inspect whether notes moved or new notes were added; compare with Undo.'
    ],[['Transpose / Invert / Fit','Change existing pitches.'],['Add Interval','Creates additional notes.']], 'With a clip scale active, some values represent scale degrees rather than semitones.'],
    ['time-tools','Duration, timing and note order have separate controls.','Compare duration with timing',[
      'Use Set Length on selected notes when only their ends should change.',
      'Use a timing operation only when their starts or order should change too.'
    ],[['Humanize','Offsets starts.'],['Reverse','Reverses event order.'],['Legato','Brings note ends to the next starts.']], 'A clip copy makes larger timing comparisons easier to keep.'],
    ['transform-and-generate-panels','Transform changes existing content. MIDI’s Generate panel creates new note patterns.','Choose the content type',[
      'For audio, open Transform for quantization on a warped clip.',
      'For MIDI, choose Transform or Generate and verify the selected notes or target region.'
    ],[['Audio','No Generate panel.'],['MIDI Generate','Uses the selection or loop region.']], 'Generated material can replace existing notes in the target region.'],
    ['zooming-and-scrolling-in-the-clip-views-editor','Zoom changes the visible editing area, not the clip length or pitch range.','Inspect a detail and return',[
      'Select a short region and zoom to it.',
      'Use the previous-zoom command to return; drag in the ruler for a different framing.'
    ],[['Clip overview','Its outline shows the portion currently visible.'],['Follow','Scrolls with playback, but pauses during editing.']], '',[],[key('Selection','Z'),key('Previous zoom','X')]],
    ['playing-and-scrubbing-clips','Scrubbing changes where the clip plays without moving its stored events.','Listen from inside the clip',[
      'Click the scrub region at the point you want to hear.',
      'If permanent scrub areas are disabled, use Shift-click in the scrub region or ruler.'
    ],[['Global quantization','Can delay or quantize the playback jump.'],['Chase MIDI Notes','Allows playback inside an already-started MIDI note.']], 'Moving Start or End markers is a separate edit to the playback region.'],
    ['looping-clips','Loop Position and Length define the repeating region; Start can precede that region.','Move the loop as a unit',[
      'Enable Loop, then select the loop brace.',
      'Use left/right arrows to move it by the grid; compare its position with Start.'
    ],[['Audio prerequisite','Warp must be enabled.'],['Lead-in','The clip can play from Start into a later loop.']], '',['clipLoop'],[key('Move brace','← / →'),key('Move by its length','↑ / ↓'),key('Resize brace','⌘ ← / →','Ctrl ← / →')]],
    ['clip-view-sample-details','The audio editor reports the actual sample file, sample rate, bit depth and channel count.','Locate the source file',[
      'Read the sample details above the waveform.',
      'Click its filename or use Show in Browser to locate it.'
    ],[['Asterisk','A mixed value when multiple samples are selected.']], 'The clip’s display name and the underlying file name can differ.'],
    ['cropping-clips','Crop keeps a selected region and removes material outside it from the clip’s working source.','Crop a copy',[
      'Duplicate the clip and choose an explicit time selection.',
      'Use the matching Crop to Time Selection command and verify the result.'
    ],[['Audio','Creates a new sample under Samples/Processed/Crop.'],['MIDI','Changes clip data rather than writing a new audio file.']], 'Without a time selection, start and loop markers determine the crop. Check any lead-in before cropping.',[],[key('Crop','⌘ ⇧ J','Ctrl Shift J')]],
    ['replacing-and-editing-the-sample','Replace the audio referenced by a clip while keeping many of its clip settings.','Try another source',[
      'Duplicate the clip and drag a new sample directly into its Clip View.',
      'Check retained Gain, Pitch, loop and Warp settings against the new recording.'
    ],[['Warp markers','Only retained when the replacement has exactly the same length.'],['Manage Sample File','Can affect every reference to the source, not only this clip.']], 'Use a clip-level replacement for a local variation; treat file-level changes as a broader operation.'],
    ['editing-clip-properties-for-multiple-clips','Shared controls can edit several selected clips together. Mixed values are shown as ranges or asterisks.','Adjust a group deliberately',[
      'Select the intended clips and check the selection count.',
      'Change one shared property and inspect the result on individual clips.'
    ],[['Relative change','A control may preserve differences within the selection.'],['Absolute extremes','Dragging to a limit can make all selected values identical.']], 'Deselect extra clips before editing a property intended for only one.'],
    ['clip-defaults-and-update-rate','Defaults affect new clips. Clip Update Rate affects when edits reach a running clip.','Check a delayed change',[
      'Inspect Clip Update Rate in Record, Warp & Launch Settings.',
      'Compare the same edit stopped and during playback before changing the default.'
    ],[['Defaults','Initial Launch or Warp choices for newly created clips.']], 'A delayed audible change is not necessarily a failed edit.']
  ]);
  add('audio-clips-tempo-and-warping',[
    ['tempo','The Set tempo supplies a shared beat clock. MIDI and warped audio can follow it; unwarped audio keeps its own playback rate.','Compare two kinds of clip',[
      'Play a MIDI clip or warped loop and make a small tempo change.',
      'Compare an unwarped recording, then restore the intended tempo.'
    ],[['Set tempo','Project playback speed in beats per minute.'],['Source BPM','The timing interpretation stored for an audio clip.']], '',['timing']],
    ['setting-the-tempo','Enter a tempo directly in the Control Bar. A leader, automation or external sync can take control of it instead.','Enter a precise tempo',[
      'Select the tempo value and type the intended BPM.',
      'If it will not stay at that value, inspect automation, clip leadership and sync.'
    ],[['Coarse / fine','Whole BPM and fractional adjustment.']], '',['timing']],
    ['tapping-the-tempo','Tap a steady pulse to estimate the Set tempo.','Match a played phrase',[
      'Tap once per beat over several beats.',
      'Compare the resulting click with the phrase and adjust numerically if needed.'
    ],[['Mapped Tap','A key, controller or pedal can trigger the same control.']], 'Start Playback with Tap Tempo can launch transport after a bar of taps; check it before tapping during a session.'],
    ['nudging-the-tempo','Phase Nudge temporarily speeds or slows the Set to align it with an unsynchronized source.','Correct a small timing drift',[
      'First bring the Set close to the other source’s tempo.',
      'Briefly use Nudge Up or Down to align their beats, then release.'
    ],[['Nudge','Temporary speed change.'],['BPM field','The underlying tempo setting.']], 'Nudging is not a persistent synchronization connection.'],
    ['clip-tempo-followers-and-leaders','An Arrangement audio clip can make the Set follow its timing map instead of following the Set.','Follow a recorded performance',[
      'Check the recording’s Warp map, then set its Lead/Follow switch to Lead.',
      'Play the passage and inspect the resulting Main-track tempo automation.'
    ],[['Overlapping leaders','The playing leader on the lowest track takes precedence.'],['Unfollow Tempo Automation','Keeps the derived automation as editable tempo automation.']], 'EXT disables this clip control. A tempo leader is not the same feature as audio-input Tempo Follower.'],
    ['warping','Warp anchors points in the recorded waveform to positions on Live’s beat grid.','Check the map before editing',[
      'Open the audio clip and enable Warp.',
      'Verify the first downbeat and another clear beat later in the clip against the metronome.'
    ],[['Correct map','Represents the source performance’s timing.'],['Changed map','Can deliberately alter that performance.']], 'Use as few anchors as needed to establish the intended relationship.',['warp']],
    ['warping-options-in-settings','Import defaults decide whether short and long samples arrive warped or looped.','Set the appropriate import behavior',[
      'Inspect Loop/Warp Short Samples and Auto-Warp Long Samples in Record, Warp & Launch.',
      'Load a test sample and check its actual Warp and Loop states.'
    ],[['Short samples','One-shot, warped one-shot, warped loop or automatic choice.'],['Long samples','Automatic analysis can be enabled independently.'],['Default Warp Mode','The initial stretching method.']], 'A sample with saved default clip settings can override the expected import behavior.'],
    ['transients-and-pseudo-warp-markers','A transient marks a detected attack. It is only a candidate for a timing anchor until it becomes a Warp Marker.','Anchor one attack',[
      'Hover over a gray transient marker and inspect the candidate marker.',
      'Double-click it to create a Warp Marker, then move it only if that attack needs retiming.'
    ],[['Transient','Detected or manually added attack location.'],['Pseudo-marker','A gray candidate under the pointer.'],['Warp Marker','An active timing anchor.']], 'Adding a marker without a later anchor can affect the clip’s interpreted tempo.'],
    ['saving-warp-markers-with-a-sample-file','Warp maps are saved in the Set; saving sample defaults also makes them available to future imports.','Keep a reusable timing map',[
      'Verify the full clip, then use the save-default button in its title bar.',
      'Reimport your sample and check that its markers are restored.'
    ],[['Saved defaults','Prevent automatic re-analysis from replacing that stored map.']], 'This is available for your own samples, not Core Library or Pack content. Warp From Here can still deliberately recalculate the map.'],
    ['warping-short-samples','A short loop needs a correct downbeat, duration and bar count before local timing edits are useful.','Establish the loop',[
      'Listen once and identify the first beat and intended loop end.',
      'Check those boundaries against Live’s detected length before editing individual attacks.'
    ],[['Regular loop','Often needs only a correct source BPM and endpoints.'],['Uneven recording','May need silence excluded or its first downbeat identified.']]],
    ['even-length-loops','A neatly cut loop often needs only its correct source tempo or bar count.','Correct a half/double-speed guess',[
      'Check the detected source BPM and the number of bars the loop occupies.',
      'Use the clip’s ×2 or ÷2 tempo control if the interpretation is half or double the intended value.'
    ],[['Source tempo','Describes the original loop, not a separate tempo for the track.']], 'Do not compensate for a wrong source interpretation by changing the whole Set tempo.'],
    ['odd-length-loops','Live’s automatic length guess may mistake an unusual bar count for a more common one.','Keep the actual phrase length',[
      'Count the source’s real bars and identify its final boundary.',
      'Correct the timing anchors and loop end so the entire phrase occupies that length.'
    ],[['Example','A three-bar phrase beginning at 1.1.1 ends at 4.1.1.']], 'Zoom out if the guessed loop hides the final part; hidden material has not necessarily been deleted.'],
    ['uneven-length-loops','Leading silence or an imprecise tail can make an otherwise steady phrase appear out of time.','Define the first downbeat',[
      'Locate the real first downbeat and use Set 1.1.1 Here.',
      'Check the intended loop end and remove trailing silence from the playback region, then audition.'
    ],[['Warp From Here','Can recalculate the material after the chosen point.']], 'Changing the region is non-destructive; cropping the sample is a separate operation.'],
    ['multi-clip-warping','Matching-length clips can share Warp Marker edits when selected together.','Keep related recordings aligned',[
      'Select the matching-length recordings and inspect their shared reference point.',
      'Make one small marker edit, then verify it across all selected clips.'
    ],[['Shared edit','The same timing adjustment reaches every selected clip.']], 'Verify source alignment first. Equal file length alone does not prove that unrelated performances should share a timing map.'],
    ['auto-warping-long-samples','Auto-Warp estimates a timing map across a longer recording. The estimate still needs checking.','Check the whole recording',[
      'Inspect the first downbeat, then listen with the metronome at several later points.',
      'Correct the first mismatch rather than adding markers everywhere.'
    ],[['Steady source','May need a straight tempo interpretation.'],['Variable source','May need separate anchors along the performance.']], 'The imported clip can look aligned at its start but drift later.'],
    ['adjusting-auto-warp-results','Recalculate only the unchecked part of a timing map, keeping already-correct material to the left.','Repair from the first mismatch',[
      'Anchor the end of a correctly aligned section.',
      'Choose the appropriate Warp From Here option for the remaining material and recheck later beats.'
    ],[['Warp From Here','Estimates the following region.'],['Start At…','Uses the Set tempo as an initial estimate.'],['Straight','Assumes stable tempo.'],['…BPM From Here','Uses the specified known tempo.']], 'Use a clip copy when comparing different analyses.'],
    ['manipulating-grooves','Warp can change one attack’s timing while nearby anchors hold surrounding material in place.','Move one hit',[
      'Anchor the surrounding attacks, then anchor the hit you want to move.',
      'Move only the middle marker and compare the result.'
    ],[['Local anchors','Limit how much adjacent audio stretches.']], 'Even a local shift stretches audio on either side; listen for artifacts as well as timing.'],
    ['quantizing-audio','Audio quantization uses Warp Markers to move detected attacks toward grid positions.','Align a short selection',[
      'Use a clip copy, enable Warp and select the intended region in the Sample Editor.',
      'Choose Quantize settings and compare a partial Amount with full alignment.'
    ],[['Amount','How far the attacks travel toward the target grid.'],['Division','The timing target, including triplet choices.']], 'Check the transient detection first; the command cannot know which attacks you intended.',[],[key('Quantize','⌘ U','Ctrl U'),key('Settings','⌘ ⇧ U','Ctrl Shift U')]],
    ['warp-modes','Warp modes are alternative stretching methods. The same timing map can sound different through each one.','Compare without changing the map',[
      'Choose a short passage and leave its tempo and markers unchanged.',
      'Switch between plausible modes and listen for attack, sustain and pitch artifacts.'
    ],[['Beats','Attack-oriented material.'],['Tones','Clear single-pitch material.'],['Texture','Sustained or noise-like material.'],['Re-Pitch','Speed and pitch move together.'],['Complex / Pro','Mixed and polyphonic material.']], 'A more CPU-intensive mode is not automatically a better-sounding choice.'],
    ['beats-mode','Stretch between rhythmic divisions while controlling what happens to each segment’s tail.','Compare the gaps between hits',[
      'Choose Preserve: Transients and slow the loop slightly.',
      'Compare the transient loop modes, then adjust the transient envelope.'
    ],[['Loop Off','Lets a segment end, leaving silence before the next attack if needed.'],['Forward / Back-and-Forth','Repeat portions of the segment to fill time.'],['Envelope','Shapes the decay within each segment.']], 'A short envelope can intentionally gate the spaces between hits.'],
    ['tones-mode','A pitch-sensitive stretching method for exposed melodic material.','Check a sustained note',[
      'Choose Tones on a solo recording and apply a modest tempo change.',
      'Compare Grain Size values around a clear sustained note and its transition.'
    ],[['Grain Size','Adjusts the average processing segment size.']], 'The best setting depends on the recording; listen for roughness and unstable tone.'],
    ['texture-mode','Stretch using a chosen grain size with optional random variation.','Compare a sustained texture',[
      'Choose Texture and change Grain Size while a sustained passage plays.',
      'Add a little Fluctuation and compare its variation with zero.'
    ],[['Grain Size','Not automatically derived from the source’s pitch.'],['Fluctuation','Random variation in the processing.']], 'This mode can be a deliberate sound change rather than transparent timing correction.'],
    ['re-pitch-mode','Playback speed and pitch change together, like changing a record’s speed.','Hear the coupling',[
      'Choose Re-Pitch and make a small Set-tempo change.',
      'Compare both the duration and pitch before restoring the tempo.'
    ],[['Double speed','One octave higher.'],['Half speed','One octave lower.']], 'Independent clip transposition is unavailable in this mode.'],
    ['complex-and-complex-pro-mode','Stretch mixed or polyphonic audio without the simple speed/pitch coupling of Re-Pitch.','Compare a mixed passage',[
      'Compare Complex and Complex Pro at the same tempo and pitch settings.',
      'When transposing in Pro, adjust Formants and listen for the intended vocal or instrumental character.'
    ],[['Formants','At 100%, attempts to preserve the source’s resonant character during transposition.'],['Envelope','Adjusts the processing response for the source.']], 'Formants does not affect an untransposed sample. These modes can use more CPU and can color even unstretched audio.']
  ]);
})();
