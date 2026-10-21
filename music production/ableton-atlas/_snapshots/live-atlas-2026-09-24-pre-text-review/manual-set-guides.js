// Original operations, checked against Live 12 chapters 6, 7 and 16.
(() => {
  const key=(action,mac,win=mac.replace(/⇧/g,'Shift'))=>({action,mac,win});
  const add=(chapter,rows)=>rows.forEach(([anchor,body,title,steps,terms=[],note='',images=[],keys=[]])=>{
    manualGuides.put(chapter,anchor,body,title,steps,terms,note,images);
    manualGuides.items[chapter+'#'+anchor].keys=keys;
  });
  add('arrangement-view',[
    ['layout','Tracks run down the page; Set time runs across it. Clip View below edits the contents of the selected clip.','Locate a clip in the Set',[
      'Switch to Arrangement and select a clip.',
      'Read its position against the upper beat ruler; open Clip View to inspect the material inside it.'
    ],[['Overview','A miniature of the whole Arrangement, with the visible region outlined.'],['Lower ruler','Elapsed time rather than bars and beats.'],['Waveform zoom','Changes the display height, not the signal level.']], '',['arrangement'],[key('Session / Arrangement','Tab')]],
    ['navigation-and-zooming','Zoom into the edit without losing your place in the larger Set.','Frame a passage',[
      'Drag a time selection across the passage and press Z.',
      'Press X to step back through the previous zoom states.'
    ],[['H / W','Fit track height / Arrangement width.'],['Follow','Scrolls with playback; editing or horizontal scrolling can pause it.']], 'Focus the Arrangement first. Letter shortcuts can be intercepted by the Computer MIDI Keyboard.',[],[key('Zoom selection','Z'),key('Previous zoom','X'),key('Fit height / width','H / W')]],
    ['launching-the-arrangement-with-locators','A locator names a point in the Set and can launch playback there.','Mark a place to return to',[
      'With playback stopped, put the insert marker at the desired point and choose Add Locator.',
      'Rename the locator. Double-click it to start there; use its context menu to loop to the next locator.'
    ],[['Set button','Adds a locator; becomes Delete for the selected locator.'],['Set Song Start Time Here','Makes this locator the start used instead of the current selection.']], 'Locator jumps during playback follow global launch quantization.',[],[key('Rename selected locator','⌘ R','Ctrl R')]],
    ['time-signature-changes','Arrangement meter changes live at markers on the Set timeline.','Place a meter change',[
      'Put the insert marker at the intended barline and choose Insert Time Signature Change.',
      'Enter the meter, then inspect the surrounding bar numbers.'
    ],[['Marker position','Can fall inside an existing bar.'],['Fragmentary bar','Hatching marks an incomplete measure.']], 'Completing or deleting fragmentary bar time inserts or removes time across every track; it is not merely a ruler adjustment.'],
    ['audio-clip-fades-and-crossfades','Fades belong to audio clips. They are separate from track-volume automation.','Soften one clip edge',[
      'Enlarge the audio track and hover over the clip edge to reveal its fade handles.',
      'Drag the fade duration handle, then adjust its curve. Listen across the boundary.'
    ],[['Crossfade','A fade extending across the boundary of adjacent audio clips on one track.'],['Limits','Fades cannot cross loop boundaries or overlap each other within one clip.']], 'With automatic edge fades enabled, deleting a fade restores the short default fade rather than removing it completely.',[],[key('Show fades while in Automation Mode','Hold F'),key('Fade selected edge range','⌘ ⌥ F','Ctrl Alt F')]],
    ['selecting-clips-and-time','The clip bar selects an object; dragging through its waveform or note display selects time.','Select only the middle',[
      'Unfold the track, then drag across the middle of the clip’s contents.',
      'Check the highlighted time boundaries before copying, splitting or deleting.'
    ],[['Empty background click','Places the insert marker.'],['Shift + arrows','Extends the current selection.'],['0','Deactivates the selected material—or the track if its header has focus.']], '',[],[key('Unfold selected track','U'),key('Extend selection','⇧ + arrows')]],
    ['using-the-editing-grid','A fixed grid keeps its division while you zoom. An adaptive grid changes division with the view.','Set an editing division',[
      'Open the Arrangement grid context menu and choose a fixed or adaptive grid.',
      'Narrow or widen it with the keys; read the current division at the lower right.'
    ],[['Triplets','Changes the grid division family.'],['Snap toggle','Changes placement constraints, not the notes or audio already present.']], 'The temporary modifier reverses the current snap state while dragging.',[],[key('Narrow / widen','⌘ 1 / 2','Ctrl 1 / 2'),key('Triplet grid','⌘ 3','Ctrl 3'),key('Snap on / off','⌘ 4','Ctrl 4'),key('Fixed / adaptive','⌘ 5','Ctrl 5'),key('Temporary snap toggle','⌘ while dragging','Alt while dragging')]],
    ['using-the-time-commands','Time commands insert or remove a span across all tracks, shifting the material that follows.','Insert a gap across the Set',[
      'Save a version, then place the insert marker where the gap should begin.',
      'Choose Insert Silence, enter the duration and inspect the result across all tracks.'
    ],[['Delete / Cut Time','Closes the selected gap across the entire Arrangement.'],['Duplicate / Paste Time','Inserts duration rather than overwriting the destination.']], 'Ordinary Delete leaves the surrounding timeline in place. Time commands also affect meter markers in their range.'],
    ['linked-track-editing','Linked tracks share supported edits so aligned recordings can stay aligned.','Check the linked set',[
      'Select the related track headers and use Link Tracks.',
      'Hover over a link indicator to see every affected track before editing.'
    ],[['Linking','Edit coordination.'],['Grouping','Organization and an audio submix; not automatically the same thing.']], 'A track can belong to only one linked set at a time.'],
    ['linking-and-unlinking-tracks','Link membership is controlled from track headers.','Remove one track from a link',[
      'Select the header of the track to separate.',
      'Choose Unlink Track(s), then hover a remaining link indicator to check the membership.'
    ],[['Add to a link','Select the added tracks, then hold Cmd on Mac or Ctrl on Windows while choosing Link Tracks on an existing linked track.'],['New selection','Link Tracks can regroup a mixture of linked and unlinked tracks.']], 'Unlinking does not move clips or undo previous shared edits.'],
    ['editing-linked-tracks','Moving, trimming, splitting and comping can operate across linked tracks together.','Check a shared split',[
      'Confirm the linked tracks and put an insert marker at the edit point.',
      'Split, inspect each track at that time, then Undo if the affected set was not what you intended.'
    ],[['Fades','Can move together when their starting positions match.'],['Arm and take lanes','Linking can also coordinate arming and take-lane operations.']], 'Hidden take lanes on linked tracks can still be affected.',[],[key('Split','⌘ E','Ctrl E'),key('Undo','⌘ Z','Ctrl Z')]],
    ['the-mixer-in-arrangement-view','The lower mixer and the controls beside Arrangement tracks adjust the same tracks.','Open the mixer without switching views',[
      'Show the Mixer while staying in Arrangement.',
      'Choose the needed controls in View → Mixer Controls.'
    ],[['Arrangement Track Controls','A separate visibility menu for the controls beside each lane.'],['Mixer-only controls','Includes crossfader, track delay and performance indicators.']], '',[],[key('Show / hide Mixer','⌘ ⌥ M','Ctrl Alt M')]]
  ]);
  add('session-view',[
    ['editing-scene-tempo-and-time-signature-values','A scene can recall its own tempo and meter when launched.','Attach a tempo to a scene',[
      'Select the scene and set its Tempo in Scene View, or widen the Main column to expose the scene fields.',
      'Launch the scene and check the Set tempo; reset the scene field if it should leave tempo unchanged.'
    ],[['Disabled field','Leaves the running Set value alone.'],['Return to Default','Disables and resets the selected scene value.']], 'Typing a tempo into a scene name is a legacy convention. Use the dedicated fields in current Live.'],
    ['scene-view','Scene View holds tempo, meter and Follow Actions for the selected row.','Inspect a scene without launching it',[
      'Click the scene’s name rather than its launch triangle.',
      'Read the scene title and number in Scene View before changing a property.'
    ],[['Multiple selection','Edits can apply to several scenes at once.'],['Follow Actions','Determine what follows a launched scene.']], 'Selecting and launching are separate actions.',['scenes']],
    ['the-track-status-fields','The strip above the mixer reports what a track is currently doing.','Check what is playing',[
      'Find the track’s status field below its Session slots.',
      'Compare the loop/progress display with a monitored-input icon or Arrangement miniature.'
    ],[['Circle','A looping Session clip; the numbers show repeat count and loop length in beats.'],['Progress bar','Remaining time for a non-looping clip.'],['Microphone / keyboard','Audio or MIDI input monitoring.']], 'The global transport may still be running after a Session clip stops.'],
    ['setting-up-the-session-view-grid','Clips stacked in one track are alternatives. Clips across tracks can play together.','Import into separate tracks',[
      'Select several audio or MIDI files in the Browser.',
      'Hold the distribution modifier before dropping them into Session; inspect the destination tracks first.'
    ],[['Default multi-file drop','Stacks clips within one track.'],['Live Clips','May contain saved devices, so their import behavior differs from raw audio/MIDI files.']], '',['session'],[key('Distribute files across tracks','⌘ while dropping','Ctrl while dropping')]],
    ['select-on-launch','Launching can either change the selected clip or leave the editor focused where it was.','Keep an effect in view',[
      'In Launch Settings, turn Select on Launch off.',
      'Select a device, then launch a Session clip and check that the editor stays on the device.'
    ],[['On','The newly launched clip becomes the selection.'],['Off','Playback changes without pulling editing focus to that clip.']], 'This is a preference, not a requirement for launching clips.'],
    ['removing-clip-stop-buttons','An empty slot with a stop button stops its track when that scene launches. An empty slot without one leaves it alone.','Let a clip continue into another scene',[
      'Select the empty slot in the scene that should leave this track playing.',
      'Use Add/Remove Stop Button, then launch that scene and check the track.'
    ],[['Empty slot','Can still contain a stop command.'],['Restore','Use the same command to put the stop button back.']], 'This changes scene-launch behavior, not the running clip’s loop settings.'],
    ['editing-scenes','A scene can store a combination of clips already playing across different rows.','Keep the current combination',[
      'Launch the clips you want to keep together.',
      'Choose Capture and Insert Scene, then rename the new row.'
    ],[['Capture and Insert Scene','Copies the playing clips into a new row and launches it.'],['Insert Scene','Adds an empty row instead.']], 'This does not render audio or record a timeline performance.',['scenes']],
    ['recording-sessions-into-the-arrangement','Arrangement Record writes your Session launches onto the timeline.','Record a sequence of launches',[
      'Choose an Arrangement start position with room for the take; enable Arrangement Record.',
      'Launch clips or scenes, then stop recording.',
      'Switch to Arrangement and press Back to Arrangement before listening to the recorded sequence.'
    ],[['One playback source per track','A Session launch overrides that track’s Arrangement playback.'],['Control movements','Automation in the recorded Session clips and manual changes on Session-recorded tracks are written into Arrangement too.'],['Recorded launches','Become Arrangement clip placements; this does not automatically render the mix to audio.']], 'Stopping a Session clip does not restore Arrangement playback. Use Back to Arrangement.',['transport'],[key('Switch view','Tab')]]
  ]);
  add('launching-clips',[
    ['the-launch-controls','Launch settings determine how a Session clip responds when triggered.','Open a clip’s launch settings',[
      'Double-click a Session clip and choose the Clip View tab with the launch icon.',
      'Check the selected clip name before changing its launch behavior.'
    ],[['Multiple clips','Selecting several clips allows shared launch-setting edits.'],['Arrangement clips','Play at timeline positions; these launch settings do not apply.']], '',['launch']],
    ['launch-modes','Trigger, Gate, Toggle and Repeat respond differently to a press and release.','Compare a tap with a hold',[
      'Set a Session clip to Gate and hold its launch control, then release.',
      'Switch to Toggle and compare two separate presses.'
    ],[['Trigger','Press starts; release does nothing.'],['Gate','Release requests a stop.'],['Toggle','Each press switches between start and stop.'],['Repeat','A held control retriggers at the clip quantization rate.']], 'Quantization still determines when the requested action takes effect.'],
    ['legato-mode','Legato launches a replacement clip at the outgoing clip’s playback position instead of always restarting.','Switch at the same point',[
      'Place two equal-length variations in one Session track and enable Legato on the incoming clips.',
      'Launch one, then the other midway through; compare with Legato off.'
    ],[['Clip length','Different lengths and start markers change which material that position reaches.'],['Launch timing','Quantization still controls the switch time.']], 'For audio files that drop out during unexpected jumps, Clip RAM Mode can help at the cost of memory.'],
    ['velocity','Launch velocity can scale the volume of a clip triggered by a MIDI note.','Make launch strength audible',[
      'Map a MIDI note to the clip’s launch control.',
      'Raise Velocity Amount and trigger the clip softly and firmly; compare with Amount at zero.'
    ],[['Zero','Launch strength has no effect on clip volume.'],['100%','The lowest launch velocities approach silence.']], 'This is the velocity of the note launching the clip, not the velocities of notes stored inside a MIDI clip.'],
    ['clip-offset-and-nudging','Nudge shifts a playing clip in steps based on global quantization.','Shift playback by one division',[
      'Play a Session clip and set a suitable global quantization division.',
      'Use Nudge Forward once, then Nudge Backward once to compare the offset.'
    ],[['Nudge','Changes playback position, not the stored MIDI notes or sample data.'],['Mapped scrub control','Becomes available for assignment in MIDI Map Mode.']], 'A sub-bar offset can place the clip out of phase with the Set’s bar start.'],
    ['follow-actions','A Follow Action schedules what plays after a clip or scene has run for its specified duration.','Hand off to another clip',[
      'Place two Session clips in consecutive slots of one track.',
      'Enable Follow Actions on the first, choose Next at 100%, and set when it should happen.',
      'Launch the first clip and check the handoff.'
    ],[['Group','Consecutive filled slots in one track, separated from other groups by empty slots.'],['Linked','Timing follows clip length or a number of loop repeats.'],['Unlinked','Uses a separately specified duration.'],['A / B chance','Chooses between two actions.'],['Global enable','Suspends all clip and scene Follow Actions without erasing their settings.']], 'Follow Actions bypass global launch quantization, but a clip’s explicit quantization can delay the handoff. Scene Follow Actions take precedence when triggered.',[],[key('Selected Follow Action on / off','⇧ Enter')]],
    ['looping-parts-of-a-clip','A handoff can separate a one-time opening from a repeating section.','Separate the opening and repeat',[
      'Make two clip copies in adjacent Session slots: a non-looping opening and the section that should loop.',
      'Set the opening’s enabled Follow Action to Next at its end; leave Follow Actions off on the looping destination.'
    ],[['Clip boundaries','Choose the source regions before scheduling the handoff.'],['Destination loop','Keeps repeating without further Follow Actions.']], 'Check the boundary by listening across it; clip start and loop start are independent.'],
    ['creating-cycles','A Follow Action chain can advance through several Session clips and return to the start.','Build a two-clip cycle',[
      'Select the clips and choose Create Follow Action Chain from their context menu.',
      'Inspect each action and duration, then launch a clip. Use the global Follow Actions switch to pause the chain while editing.'
    ],[['Next in a group','Wraps from its last clip to its first.'],['Chain command','Can connect a non-contiguous selection.']], 'A clip following another does not mean their audio files have been joined.'],
    ['temporarily-looping-clips','Play Again retriggers; No Action leaves playback to continue under the clip’s own settings.','Inspect the exit behavior',[
      'Use a non-looping clip and an Unlinked Follow Action time shorter than the clip.',
      'Compare Play Again with No Action before adding a chance split between them.'
    ],[['Play Again','Returns to the clip start.'],['No Action','Schedules no further action from that launch.'],['Stop','Stops playback instead of allowing it to continue.']], 'A chance-based exit is not a guaranteed repeat count. Use Linked timing and a multiplier for a fixed number of loops.'],
    ['adding-variations-in-sync','Legato keeps the playback position while Follow Actions choose the next clip.','Compare two versions at matching positions',[
      'Duplicate a Session clip and change one property in the copy.',
      'Enable Legato and a Next handoff on both, then listen for the change without a restart at each boundary.'
    ],[['Matching lengths','Makes the position transfer easier to inspect.'],['Variation','May be notes, a clip envelope or another clip property.']], 'Keep launch quantization and Follow Action timing visible when diagnosing an unexpected jump.'],
    ['mixing-up-melodies-and-beats','Follow Actions can choose among prepared clip regions without rearranging the source file.','Compare Any and Other',[
      'Make a small group of Session clips with distinct start/end regions.',
      'Set their actions to Any, then Other, and compare whether the current clip can be chosen again.'
    ],[['Any','Can pick the same clip again.'],['Other','Excludes the current clip when another clip exists in the group.']], 'To keep a particular run, record the Session launches into Arrangement.'],
    ['creating-nonrepetitive-structures','Independent handoff times and chance choices can make long sequences without a fixed scene order.','Inspect independent timing',[
      'Give clip groups on two tracks different Unlinked Follow Action times.',
      'Launch both, observe their independent changes, and disable Follow Actions globally to stop the scheduling.'
    ],[['Local groups','Clip actions usually navigate within one track.'],['Scene actions','Can replace a whole row when their scheduled action occurs.']], 'Chance does not guarantee a sequence will never repeat. Record a run if you want to preserve its exact order.']
  ]);
})();
