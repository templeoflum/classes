// Original action-oriented synthesis, checked against the cached Live 12 manual.
// Source keys identify the particular explanation, not merely a chapter landing.
const manualCompletion=(()=>{
  const make=(chapter)=>(anchor,label,body,steps=[],terms=[],note='',details=[])=>({
    key:chapter+'#'+anchor,label,body,steps,terms,note,details,images:[],keys:[]
  });
  const v=make('working-with-video'),s=make('synchronizing-with-link-tempo-follower-and-midi'),
    cpu=make('computer-audio-resources-and-strategies'),q=make('audio-fact-sheet'),
    midi=make('midi-fact-sheet'),a=make('accessibility-and-keyboard-navigation'),
    remote=make('midi-and-key-remote-control');
  const concept=make('live-concepts');
  manualGuides.put('welcome-to-live','welcome-to-live','Live brings clip launching, a timeline, recording, instruments and effects into one working document.','About this source',[],[['Source','Ableton Live 12 reference manual for macOS and Windows.'],['Atlas','Independent, original explanations arranged around places and actions. This is not an Ableton publication.']], 'Feature availability depends on Live edition and release.',[]);
  manualGuides.put('welcome-to-live','the-ableton-team-says-thank-you','Ableton introduces Live as software developed by musicians for creating, producing and performing music.','The team’s introduction',[],[], 'The manual is intended as a reference to features and workflows.',[]);
  manualGuides.put('credits','credits','Ableton Live 12 Manual · © 2026 Ableton AG.','Manual credits',[],[
    ['Reference authors','Sara Riegel, Ania Kuźbik, Jeremy Cohen, Michelle Hughes, Chandler Tipton, Timothy Beutler, Dennis DeSantis, Ian Gallagher, Kevin Haywood, Rose Knudsen, Gerhard Behles, Jakob Rang, Robert Henke and Torsten Slama.'],
    ['Content contributors','SONiVOX, Chocolate Audio, Puremagnetik, Cycling ’74, SonArte, e-instruments, Zero-G, Goldbaby, Sample Magic, Soniccouture, Loopmasters and Uppercussion.'],
    ['Physical modeling','Applied Acoustics Systems.'],['Source and changes','The manual accompanies licensed software and can change without notice; the original source is authoritative.'],['Attribution','Ableton and product names remain their owners’ trademarks. Manual figures are Ableton material, not original atlas artwork.']
  ],'Attribution is not a redistribution license. Permission or applicable license terms must be checked before publicly distributing manual figures.',[]);
  function extend(areas){
    const place=id=>{const p=areas.find(p=>p.id===id);if(!p)throw Error('Missing place '+id);return p;};
    const add=(family,id,label,items)=>areas.push({family,id,label,items});
    const append=(id,item)=>{const parent=place(id).items[0];(parent.details||=[]).push(item);};
    append('views',concept('live-concepts','Find the working object','A Set contains tracks. A track holds clips and a device chain. Select the object you want to change before entering its editor.'));
    append('views',concept('clip-and-device-view','Stack the editors','Clip View edits one clip’s content and playback settings; Device View edits the selected track’s signal-processing chain.',[
      'Use the small triangles beside the Clip and Device selectors at the bottom right to stack both editors.',
      '⌘ ⌥ 3 / Ctrl Alt 3 shows Clip View; ⌘ ⌥ 4 / Ctrl Alt 4 shows Device View.'
    ]));
    append('transport',concept('the-control-bar','Locate a global control','The Control Bar groups Browser visibility; tempo, Link and metronome; clip scale; Follow and position; transport; recording/automation; Arrangement loop and punch; MIDI/CPU tools; and the main-view selector.'));
    append('browser-search',concept('the-browser','Choose a source','The Browser combines installed content, saved presets and samples, devices and plug-ins, Packs, Cloud, connected Push files and your added folders. Use its configuration menu for full-height display, Tunings and Groove Pool.'));
    add('browser','browser-similarity','Find similar sounds',[
      concept('sound-similarity','Find / swap','Start from a sound already close to what you want.',[
        'Select a compatible Browser item and click Show Similar Files, use its context menu, or press ⌘ ⇧ F / Ctrl Shift F.',
        'Audition the results, ordered from most to least similar. The reference remains visible in the search field.',
        'Use Similar Sample Swapping in Drum Rack, Simpler or Drum Sampler to try related samples in place.'
      ],[['Supported material','Samples up to 60 seconds, instrument presets and drum presets.'],['Libraries','Compares against analyzed Core Library and User Library content.'],['Analysis','New user audio is analyzed in the background; progress and Pause appear in the Status Bar. Core Library is pre-analyzed.'],['Saved search','A custom User Label retains its reference sound at the top.']])
    ]);
    append('files-sets',concept('live-sets','Set / Project','The .als Set stores clips, positions, devices and settings. Its Project folder can contain several related Sets and their supporting files. Current Project in the Browser exposes that folder.'));
    append('files-export',concept('saving-and-exporting','Save / render / reuse','Save preserves the editable Set; Export Audio/Video renders what is playing. Collect All and Save copies selected external dependencies into the Project.',[],[['Audio clip Save','Stores that sample’s default clip settings, including Warp, for later imports.'],['Live Clip','Drag a Session clip into the User Library to retain its clip settings and track devices for reuse.'],['MIDI export','Exports note/controller data, not the instrument’s audio.']]));
    append('mixer-tracks',concept('tracks','Follow a track between views','The same tracks appear as Session columns and Arrangement rows. A track plays one clip at a time.',[],[['Session takes priority','Launching a Session clip interrupts that track’s Arrangement playback without changing other tracks.'],['Back to Arrangement','Use the global button to return all overridden tracks, or the individual track button to return just one.'],['Record a performance','Arrangement Record captures the Session performance onto the timeline.']]));
    append('mixer-levels',concept('the-mixer','Follow the output','Audio travels through devices left to right, then through the track mixer. Session and Arrangement share that mixer.',[],[['Return tracks','Receive sends and hold effects, not clips.'],['MIDI-only track','Without an instrument, the output remains MIDI and audio volume/send controls are absent.'],['Channels','Audio-device connections are stereo; hardware inputs/outputs can be configured as mono.']]));
    append('routing-audio',concept('routing','Connect a source and destination','Show In/Out in the mixer. Audio From / MIDI From chooses a source; Audio To / MIDI To chooses where the signal goes.',[],[['Monitor','Determines when incoming sound is heard through the track.'],['Internal / external','Route between tracks or to hardware. External Instrument and External Audio Effect put hardware connections into a device chain.']]));
    append('arrangement-automation',concept('automation-envelopes','Record / override a movement','Automation stores control values over time. Arm automation and record to write movements to Arrangement or Session clips.',[],[['Override','Changing an automated control outside recording uses the new value until automation is re-enabled or a Session clip with automation is launched.']]));
    append('controllers',concept('midi-and-key-remote','Assign / play','MIDI Map and Key Map connect physical controls to highlighted destinations. Exit the mapping mode to use the assignment.',[],[['Mapped notes','Are consumed by remote control and no longer passed to MIDI tracks.'],['Computer keys','Remote assignments differ from the Computer MIDI Keyboard, which plays notes.']]));
    place('arrangement-video').items=[
      v('working-with-video','Import','Video plays in Arrangement; Session treats the same movie as audio.',[
        'Drag a supported QuickTime .mov file from the Browser onto an Arrangement audio track.','Open the Video Window to see the picture while the soundtrack plays.'
      ],[], '',[v('importing-video','Place a movie','Use Arrangement for picture playback. Dropping the movie into Session makes an audio clip instead.'),v('the-appearance-of-video-in-live','Find the picture','Video clips have film-perforation marks in their title bars.',[],[], '',[v('video-clips-in-the-arrangement-view','Trim the clip','Drag either clip edge to change the played region.',[],[['Consolidate, Reverse, Crop','These commands replace the video clip with audio only inside Live. The original movie file is not changed.']])])]),
      v('the-video-window','Show / resize','The floating Video Window stays above Live.',[
        'Show or hide it from the View menu. Drag the window to position it, or its lower-right corner to resize.','Double-click the picture for full screen. Option-double-click (Mac) or Alt-double-click (Windows) restores the movie’s original size.'
      ],[['Window position','Reused across Sets; it is not saved independently for each Set.']], '',[v('movies-with-partial-tracks','Read a gap','A QuickTime movie can have unequal audio and picture spans. Missing picture displays black; missing audio is silent.')]),
      v('matching-sound-to-video','Align','Let the picture lead tempo, then align musical beats to hit points.',[
        'Place the movie and the music on separate Arrangement tracks.','Open the movie in Clip View, enable Warp, and set Leader/Follower to Leader.','Place and drag Warp Markers at the picture’s hit points. Watch the corresponding frame in the Video Window.','Loop a passage to check the alignment. Export Audio/Video when the timing is settled.'
      ],[], '',[v('clip-view','Choose the tempo leader','Only the lowest currently playing Arrangement clip with Leader enabled actually leads tempo.',[],[['Follower video','A video that is not the active leader can itself be stretched.'],['Warp','Must be enabled to make a clip the tempo leader.']]),v('warp-markers','Place hit points','Dragging a video Warp Marker updates the displayed frame. Embedded QuickTime markers provide additional reference points.')]),
      v('video-trimming-tricks','Restore pre-roll','Keep the picture’s synchronization lead-in available for delivery.',[
        'Place the movie at 1.1.1. In Clip View, move its Start Marker past the blank pre-roll while composing.','Before delivery, select the whole Arrangement and move it right far enough to restore the pre-roll.','Select only the video clip, then extend its left edge back to reveal the original lead-in.','Check the export range against the full movie, including pre-roll.'
      ],[], 'Move the music and picture together. Trimming the start is not the same as permanently cropping the source.')
    ];
    place('routing-sync').items=[
      s('synchronizing-with-link-tempo-follower-and-midi','Choose a clock','Link shares a beat over a network. Tempo Follower listens to audio. MIDI sync follows or drives an external clock.',[],[['Link','Peers can change tempo and join or leave independently.'],['MIDI Clock','Tempo and song-position messages. Live can send or receive.'],['MIDI Timecode','Seconds and frames; Live receives but does not send it. Set tempo separately.']], '',[s('synchronizing-via-midi','Clock / timecode','Choose MIDI Clock for tempo-following sequencers; choose timecode for an external timeline. Timecode does not carry tempo or meter.')]),
      s('synchronizing-via-link','Join Link','Join other Link-enabled apps and devices on the same wired or wireless network.',[
        'Enable Link in Live’s Control Bar and on the other peers. Check the peer count.','Start playback. Live waits for the shared launch-quantization boundary; each peer can otherwise start and stop independently.'
      ],[], '',[s('setting-up-link-and-link-audio','Set up Link','Open Settings → Link, or Configure Link from the Control Bar’s Link menu.',[],[['Show Link Toggle','Shows or hides the Control Bar control.'],['Start Stop Sync','Shares transport commands only with peers that also enable it.'],['Audio','Enables Link Audio; Link itself must also be on.'],['Name','Your name in other peers’ input lists.'],['Latency','Buffers incoming network audio; the peers list shows buffered amounts.'],['Sync to Incoming Audio','Delays Live’s playback to align with the incoming audio. Enable this on only one participant.']]),s('using-link','Follow the shared beat','The first peer supplies the starting tempo; any peer may then change it.',[],[['Competing changes','The last tempo change wins. It also overrides Set tempo automation.'],['Stopped transport','The position display shows progress toward the shared launch boundary.'],['Count-in','The recording metronome count-in is unavailable while Link is enabled.']])]),
      s('using-link-audio','Receive audio','Receive another peer’s track as an audio input.',[
        'Enable Link and Link Audio on both peers.','On an audio track, choose the peer under Audio From and its source track in the channel chooser.','Set Monitor to In to listen, or arm the track and use Auto. Arm before recording.'
      ],[['Send','Live can stream tracks that have audio output.'],['Compatibility','Some other Link Audio apps only send; Live and Push can send and receive.']], 'Link Audio is release-dependent; ordinary Link synchronization alone does not stream sound.'),
      s('synchronizing-via-tempo-follower','Follow audio','Derive Live’s tempo from a live rhythmic input.',[
        'Open Settings → Tempo & MIDI → Tempo Follower. Choose the interface input connected to the rhythmic source.','Show the Tempo Follower toggle, then enable Follow in the Control Bar.'
      ],[], '',[s('setting-up-tempo-follower','Choose the input','A clear rhythmic signal is easiest to follow; a dedicated drum microphone or DJ mixer output can supply it.',[],[['Hidden toggle','Tempo Follower does not run while its control is hidden.'],['Gray control','The chosen input is unavailable.'],['External Sync','Cannot receive MIDI sync while following audio. Sending MIDI Clock and sharing the followed tempo over Link remain possible.']])]),
      s('synchronizing-external-midi-devices-to-live','Send clock','Make an external sequencer follow Live.',[
        'Connect the MIDI output and enable Sync for that output in Tempo & MIDI Settings.','Set the receiving device to follow external MIDI Clock; start Live.'
      ],[['Lower EXT indicator','Shows outgoing sync messages.']]),
      s('synchronizing-live-to-external-midi-devices','Receive clock','Make Live follow an external sync source.',[
        'Enable Sync on the receiving MIDI input in Tempo & MIDI Settings.','Enable EXT in the Control Bar, then start the external clock.'
      ],[['Upper EXT indicator','Shows usable incoming sync.'],['Song position','Live follows incoming position pointers; with Arrangement Loop enabled, positions wrap within that loop.']], '',[
        s('midi-timecode-options','Set timecode','Expand the device’s MIDI port settings and choose MIDI Timecode.',[],[['Frame Rate','Match the source, or use SMPTE All to detect the incoming format.'],['Offset','The timecode position treated as Arrangement start.'],['Display','Options → Time Ruler Format changes the displayed ruler, not the incoming clock.']]),
        s('sync-delay','Align the clocks','Play a sharp rhythmic pattern from both systems. Adjust the relevant port’s Sync Delay until their beats coincide.',[],[['Per port','Delay is set independently for each MIDI device.'],['Signal path','Compare the actual outputs you will use; interface and hardware delays matter.']])
      ])
    ];
    place('mixer-timing').items.push(
      cpu('computer-audio-resources-and-strategies','Reduce load','Audio has a deadline: each buffer must finish processing before it is heard.',[],[], '',[
        cpu('managing-the-cpu-load','Check peak demand','Play the heaviest passage with the tracks and devices you intend to use together.',[],[['CPU meter','Measures audio-buffer processing time, not general computer usage. 50% means processing took half the available buffer time.'],['Current / Average','Current reveals brief peaks; Average smooths them. Enable the overload warning in the meter menu.'],['Other load','Other applications, heat-related throttling, drivers and memory access can cause spikes.']]),
        cpu('cpu-load-from-multichannel-audio','Disable unused channels','Open Audio Settings → Input Config and Output Config; disable hardware channels you do not need.',[],[], 'Do this while stopped: changing the driver’s channel configuration may interrupt audio.'),
        cpu('cpu-load-from-tracks-and-devices','Find a heavy track','Show Performance Impact in the Session mixer; compare the tracks while the demanding passage plays.',[],[['Idle effects','May stop processing after their tails end. Idle readings do not predict peak load.'],['Reduce demand','Freeze a demanding clip track or remove unneeded processing.']])
      ]),
      cpu('track-freeze','Freeze / unfreeze','Render a clip track’s instrument, effects and clip processing for lower-cost playback.',[
        'Select a clip track and choose Freeze Track from its context menu or Edit menu when available in your Live version.','Use Unfreeze Track before changing frozen device or clip processing.'
      ],[['Scope','Creates a file for each Session clip and one for the Arrangement. Group Tracks cannot use this Freeze command.'],['Hardware','External Instrument / External Audio Effect may require real-time rendering.'],['Still editable','Launch, move, trim, copy and consolidate clips; adjust volume, pan, sends and their automation; arrange scenes or record launches into Arrangement.'],['Tails','Move the crosshatched Arrangement tail with its clip. Stopping frozen playback also stops the rendered tail.'],['Session loops','Only two cycles are rendered; longer unlinked-envelope behavior can change.'],['Randomness','The rendered result stops generating new random values.'],['Storage','Samples/Processed/Freeze in the Project, or the temporary folder before saving. External-hardware freeze files are discarded on unfreeze.'],['Transfer','Frozen playback can work without the original devices. Keep the original Set and dependencies for later editing.']], 'Changing frozen clips can produce a different result after unfreezing because effects then respond to the edited input again. Newer releases also provide Bounce to Audio; it is a separate operation.')
    );
    place('routing-midi').items.push(midi('midi-fact-sheet','Check timing','Separate a consistent delay from uneven timing before changing the setup.',[],[], '',[
      midi('ideal-midi-behavior','Follow an event','Recording stores incoming events; playback sends stored events to an instrument; playthrough listens while you play into Live.'),
      midi('midi-timing-problems','Delay / jitter','Latency is a repeatable wait. Jitter varies from event to event; a fixed offset cannot remove it.'),
      midi('lives-midi-solutions','Account for monitoring','Live uses driver timestamps to place incoming notes and schedule outgoing events.',[],[['Playthrough','A small predictable delay helps avoid unpredictable timing.'],['Monitored recording','Monitoring and buffer size affect recorded timing. Check the track’s Keep Monitoring Latency setting as well.'],['MME','Windows MME drivers cannot schedule timestamped output, so Live schedules it internally.'],['Audio dropout','MIDI may still record correctly even when monitored sound breaks up.']]),
      midi('variables-outside-of-lives-control','Check the chain','Driver timestamps, interface quality and hardware scanning affect timing. Traditional serial MIDI sends simultaneous chord notes one after another.',[],[['External hardware','Does not use the computer’s timestamps; longer chains and dense messages can add timing variation.'],['Published tests','Ableton compared incoming MIDI with a split signal converted directly to audio, and also tested outgoing MIDI. Across 36 configurations, results varied substantially by interface, OS, sample rate and buffer. The anonymous interfaces are not current product rankings.'],['Reported spread','Most events clustered near ±1 ms; some tested configurations reached roughly 10–11 ms. These are measurements of those systems, not guarantees for yours.']]),
      midi('tips-for-achieving-optimal-midi-performance','Listen through one path','Choose the lowest stable audio buffer, then test with the actual instrument and routing.',[
        'If listening directly to hardware, turn Live’s track monitoring off. Do the same when recording a sequencer without live playthrough.','If listening through Live, keep the intended monitoring path and compare recorded timing before applying offsets.'
      ],[['Drivers','Use a supported, current driver; changing a MIDI offset cannot repair irregular timestamps.']]),
      midi('summary-and-conclusions','Recheck after changes','Test recording, playback and playthrough separately. A system that records accurately can still feel delayed while monitoring.')
    ]));
    add('navigation','accessibility','Accessibility',[
      a('accessibility-and-keyboard-navigation','Set up','Use Live’s keyboard navigation and your operating system’s screen reader together.',[],[['Supported scope','Most views and basic controls expose accessible names.'],['Known limits','Browser filtering/tagging, MPE editing, Max for Live, some plug-ins and advanced device controls are not fully supported in the cited manual. Arrangement fade editing is also unsupported.'],['Contrast','Choose a high-contrast theme in Settings.']], '',[
        a('menu-and-keyboard-navigation-settings','Choose navigation behavior','Display & Input Settings and the Navigate menu control keyboard focus.',[],[], '',[
          a('using-tab-for-navigation','Move focus with Tab','Enable Use Tab Key to Move Focus to visit controls with Tab and Shift Tab.',[],[['Tab off','Tab switches Session / Arrangement instead.'],['Next neighbor','Option Tab on Mac; Ctrl Tab on Windows. Add Shift to move backward across the same mixer row.'],['Wrap Tab Navigation','Return to the first control after the last control in an area.'],['Move Clips with Arrow Keys','On: left/right moves selected Arrangement clips. Off: collapses the time selection to its start/end.']])
        ]),
        a('options-menu','Choose announcements','Open Options → Accessibility to choose whether the screen reader speaks menu commands, minimum/maximum slider values and time in seconds.'),
        a('speak-help-text','Hear a control’s help','Enable help-text announcements in the Windows screen reader, or help text in VoiceOver Utility’s verbosity settings on Mac.',[],[['VoiceOver','VO Shift H requests the help text manually.'],['Info View','The same control descriptions are available visually in Info View.']])
      ]),
      a('settings-menu','Move through Settings','Open Settings with ⌘ , on Mac or Ctrl , on Windows.',[
        'Use Tab / Shift Tab between controls even when Tab navigation is off elsewhere.','Use up/down to adjust values or choices; Enter can switch toggles.','Use Option Tab on Mac or Ctrl Tab on Windows to change Settings pages; add Shift for the previous page.','Shift Tab from a page’s first control returns to the page chooser. Esc closes Settings.'
      ],[['Language','Changing Live’s interface language takes effect after restarting.']], '',[
        a('audio-setup','Choose audio hardware','Choose the Audio page and Tab through driver, input and output controls. macOS supports CoreAudio; Windows driver configuration may open the driver’s own panel.'),
        a('connecting-midi-devices','Connect a controller','Many MIDI devices are recognized automatically. Select a supported surface and its input/output ports in the MIDI settings when necessary.',[],[], 'A third-party surface’s own screen-reader support varies by manufacturer.')
      ]),
      a('navigating-in-live','Jump to a view','Use Navigate to focus a view, then move inside it.',[],[], '',[
        a('navigate-menu','Open Navigate','Alt N opens Navigate on Windows. With VoiceOver on Mac, use VO M, then N.'),
        a('control-bar---alt-0-win--option-0-mac','Control Bar','Option 0 on Mac / Alt 0 on Windows focuses the Control Bar. Tab through its control groups; it remembers the last focused control.'),
        a('session-view---alt-1-win--option-1-mac','Session','Option 1 / Alt 1 focuses Session.',[],[['Arrow keys','Move among track headers, clip slots and scenes.'],['Enter','Launch the selected clip or scene.'],['Empty MIDI slot','⌘ ⇧ M / Ctrl Shift M inserts a clip.'],['Tab','Moves into and through mixer controls when Tab navigation is enabled.'],['Esc','Returns focus to the track title.'],['Neighbor','Option Tab / Ctrl Tab moves to the same mixer control on the next track.']]),
        a('arrangement-view---alt-2-win--option-2-mac','Arrangement','Option 2 / Alt 2 focuses Arrangement.',[],[['Up / down','Move between tracks.'],['Left / right','Move the insert marker; Shift extends the time selection.'],['Option / Ctrl + left/right','Jump between clip edges or locators in a content lane.'],['Clip edge','Place the insert marker at the edge, press Enter, adjust with left/right, then Enter to accept or Esc to cancel.'],['Locator','Focus Set Locator and press Enter. Select a locator and Delete to remove it.'],['Export','Select the desired range; use ⌘ ⇧ R / Ctrl Shift R for Export Audio/Video.']]),
        a('device-view---alt-4-win--option-4-mac','Devices','Option 4 / Alt 4 focuses Device View. Left/right selects devices; Tab visits the selected device’s controls.',[],[['Edit','Cut, copy, paste and duplicate act on the selected device. Delete removes it.'],['Accessibility','Complex device areas may need an alternative control path.']])
      ]),
      a('clip-view---alt-3-win--option-3-mac','Move within a clip','Option 3 / Alt 3 focuses the active clip editor. Option Shift P / Alt Shift P focuses its panels.',[],[['Select time','Shift + left/right, then Enter to select notes in that time range.'],['Jump notes','Option (Mac) / Ctrl (Windows) with up/down moves to a neighboring note; left/right moves to another note of the same pitch. Add Shift to extend.'],['Move notes','Arrow keys change time or pitch; Shift + up/down transposes octaves.'],['Resize notes','Shift + left/right changes duration by the grid.'],['Velocity','⌘ / Ctrl + up/down. Add Option / Alt to change probability instead.'],['Audition','Enable MIDI Note Editor Preview to hear added, selected or moved notes.'],['Warp markers','⌘ I / Ctrl I inserts and selects a Warp Marker at the cursor. ⌘ ⇧ I / Ctrl Shift I inserts a transient. Left/right moves a selected marker.']]),
      a('browser---alt-5-win--option-5-mac','Browse','Press ⌘ F / Ctrl F to search all Browser content; down moves to the results.',[],[['Tab','Moves through search, filter controls, sidebar and content. Filtering and tagging themselves are not yet screen-reader supported.'],['Arrows','Up/down chooses an item; right expands a folder, left collapses it or moves toward the sidebar.'],['Select several','Shift + up/down extends the selection.'],['Preview','Enable Browser File Preview in Options; right can audition a selected item even when automatic preview is off.']], '',[
        a('groove-pool---alt-6-win--option-6-mac','Groove Pool','Option 6 / Alt 6 focuses the Groove Pool. Tab visits parameters; up/down changes values.'),
        a('learn-view---alt-7-win--option-7-mac','Learn View','Option 7 / Alt 7 focuses Live’s built-in lessons.')
      ]),
      a('editing-automation-and-modulation-envelopes','Move breakpoints','Use the same keyboard operations in Arrangement automation lanes and clip envelopes.',[],[], '',[
        a('navigating-between-breakpoints','Find / insert','Move the insert marker with left/right; Option (Mac) / Alt (Windows) + left/right jumps between breakpoints.',[
          'At an empty position, press Enter to create a point. Move it left/right before pressing Enter again to confirm.'
        ]),
        a('selecting-and-editing-breakpoints','Select / change','At an existing breakpoint, press Enter to select it.',[
          'Tab / Shift Tab selects adjacent points. Up/down adjusts value, or type the value.','Press Enter to accept and deselect; Esc cancels. Delete removes the selected point.'
        ],[['Pointer shortcut','Option/Alt-click moves the insert marker to a point and selects it.'],['Feedback','Selected points pulse. Undo briefly highlights the point affected.']]),
        a('switching-between-automation-envelopes-in-arrangement-view','Change the lane','Option / Alt + up/down cycles automated parameters on the track. Add Shift to include parameters that have no automation yet.')
      ])
    ]);
    // Keep the existing controller action bar small; related controls are inline.
    const controllers=place('controllers');
    controllers.items[0].details.push(
      remote('midi-and-key-remote-control','Assign a physical control','Manual mappings bind MIDI notes, controllers or computer keys to Live controls. A Session mapping belongs to the slot, not the clip occupying it.'),
      remote('assigning-midi-remote-control','Make the assignment','Enter MIDI Map Mode, select a blue-highlighted destination, then move the hardware control. Leave Map Mode to use it.',[],[], 'Mapped MIDI notes are intercepted for remote control and no longer play or record into MIDI tracks.'),
      remote('mapping-to-midi-notes','Use a note','Note On toggles a switch, advances a radio choice, or switches a continuous parameter between its mapped endpoints.',[],[['Note range','A continuous control gets evenly spaced values across the assigned notes.'],['Launch a pitched clip','Hold its root key, then a lower and upper key to set the playable range. The root plays the original pitch.'],['Clip launch','Note On/Off behavior depends on the slot’s Launch Mode.']]),
      remote('mapping-to-absolute-midi-controllers','Use a fader','Absolute controllers report a position, usually 0–127, which is scaled to the mapping’s Min/Max.',[],[['Clips / transport','64–127 acts as on; 0–63 as off.'],['Device / track activators','Values inside the mapped range enable the control; values outside disable it. Reversing Min and Max reverses that behavior.'],['Radio controls','The incoming range selects among the available choices.'],['High resolution','Pitch bend and 14-bit absolute controllers use 0–16383, with the central threshold at 8191/8192.']]),
      remote('mapping-to-relative-midi-controllers','Use an endless encoder','Relative messages request an increment or decrement instead of an absolute position.',[
        'While learning the assignment, turn the encoder slowly left. Check Live’s detected mode in the Status Bar and correct it if needed.'
      ],[['Modes','Signed Bit, Signed Bit 2, Bin Offset and Two’s Complement, each with a linear variant. Match the hardware’s encoding and acceleration.'],['Switch / clip','Increment acts as on, decrement as off.'],['Radio controls','Increment advances an option; decrement goes back.']], '',[
        remote('relative-session-view-navigation','Move the highlighted scene','In Key or MIDI Map Mode, map the special controls below the Session grid.',[],[['Scene up/down','Move the highlighted row.'],['Scene number','Map an encoder to scroll scenes.'],['Launch / cancel','Launch the highlighted scene or cancel its pending launch.'],['Track launch','Launch the slot on the highlighted row in that track.'],['Select Next Scene on Launch','Advance after launching when this Recording setting is enabled.']]),
        remote('mapping-to-clip-view-controls','Follow the selected clip','Clip View mappings act on the currently selected clip or clips—not a permanently chosen clip.',[],[], 'Relative encoders reduce jumps when moving between clips with different parameter values.')
      ])
    );
    controllers.items[4].details.push(
      remote('natively-supported-control-surfaces','Connect a supported surface','Choose its name in a Control Surface slot, then the correct input and output ports. Up to six surfaces can be configured.',[],[['Dump','Only send a preset dump if the button is enabled and the hardware is ready to receive it. Follow that controller’s instructions.']], '',[
        remote('instant-mappings','Follow / lock a device','Supported surfaces follow the selected device automatically. Use the device title’s Lock to… menu to keep a compatible surface on one device.',[],[['Manual override','Enable Remote for the relevant MIDI ports before creating custom assignments.'],['Mapping Browser','Context-dependent instant mappings do not appear there.'],['Hand indicator','Identifies the controlled device; locking support varies by surface.']])
      ]),
      remote('manual-control-surface-setup','Connect an unlisted surface','Enable Remote on its MIDI input. Enable Remote on its output too if it needs LED or motor-fader feedback.',[
        'Move a hardware control and check Live’s MIDI indicator. Then choose a Takeover Mode before making mappings.'
      ],[['Track / Remote','Track receives musical notes; Remote accepts control assignments. They serve different purposes.']])
    );
    const quality=place('files-quality');
    quality.items=[
      q('audio-fact-sheet','Compare','Neutral means the digital signal is unchanged under specified conditions. It does not mean musically preferable.',[],[], '',[
        q('testing-and-methodology','Test the output','Ableton uses automated tests and phase-cancellation comparisons to check signal behavior. These tests do not predict audibility on every listening system.'),
        q('neutral-operations','Keep a neutral path','A neutral operation cannot undo changes made elsewhere in the signal path. Check the whole path, not only the final render.'),
        q('non-neutral-operations','Change the signal','Gain, processing, stretching and format conversion can change samples. Such a change may be exactly what the music needs.'),
        q('conclusion','Read the limits','The fact sheet describes measured behavior in selected conditions, not a complete inventory of every operation or a comparison with other DAWs.')
      ]),
      q('matching-sample-rateno-transposition','Play / warp','Unstretched, untransposed playback at the Set’s sample rate can preserve the source samples.',[],[], '',[
        q('unstretched-beatstonestexturere-pitch-warping','Match the original tempo','Beats, Tones, Texture and Re-Pitch can be neutral when no stretching occurs. Returning to the original tempo restores that condition.',[],[['Tempo automation','Beats with Preserve Transients can introduce artifacts; preserving sixteenths or using Re-Pitch can avoid this case.']]),
        q('playback-in-complex-and-complex-pro-mode','Use Complex deliberately','Complex and Complex Pro process the signal even at original tempo and use more CPU. Compare them with the other modes for the material.'),
        q('sample-rate-conversiontransposition','Convert once','Changing sample rate or transposing is non-neutral. Plan the Project rate before recording; offline conversion can avoid repeated real-time conversion.',[],[['Export','Live uses the SoX resampler for export sample-rate conversion.']]),
        q('grooves','Move timing','A groove moves audio Warp Markers, so even playback at the source tempo is no longer neutral.')
      ]),
      q('recording-external-signals-bit-depth--ad-converter','Record','Use a recording bit depth at least as high as the interface converter to preserve the digital data it delivers.',[],[], '',[
        q('recording-internal-sources-at-32-bit','Record internally at 32-bit','A 32-bit internal recording can preserve the processed source. A larger word length does not improve an already unprocessed low-bit-depth recording.'),
        q('recording-external-signals-bit-depth--ad-converter-1','Avoid truncating the input','Recording below the converter’s bit depth discards information.'),
        q('recording-internal-sources-below-32-bit','Avoid truncating processing','A processed internal signal can lose precision when recorded below 32-bit. An unchanged source already at the lower depth is the exception.')
      ]),
      q('summing-at-single-mix-points','Mix / route','Live sums at a single mix point in 64-bit precision; the surrounding signal path uses 32-bit processing.',[],[], '',[
        q('routing','Choose the tap point','Internal routing itself preserves the tapped signal. Pre-FX, Post-FX and Post-Mixer can sound different because they tap different processing stages.'),
        q('bypassed-effects','Bypass processing','A disabled effect is removed from the signal processing path. Its delay may remain to keep delay compensation stable.'),
        q('volume-automation','Move the level','Volume automation changes gain; Live updates the curve each sample to minimize automation artifacts.'),
        q('panning','Pan','The cited fact sheet describes constant-power sinusoidal panning: center is 0 dB and a fully panned signal can gain 3 dB. This is a gain change, not a neutral pass-through.')
      ]),
      q('splitting-clips','Edit / freeze','Splitting a neutral clip changes its playback boundaries without rewriting its source samples.',[],[], '',[
        q('consolidate','Join regions','Consolidation writes a new file at the configured rate and bit depth. It normalizes the file and compensates with clip gain, so equivalent playback is not bit-identical source data.'),
        q('clip-fades','Fade edges','Declicking fades and editable fades alter gain. Automatic clip-edge fades can be up to 4 ms.'),
        q('freezing-tracks','Read a frozen result','Freeze renders 32-bit audio, but also fixes random behavior and time-dependent processing.',[],[['Arrangement','Includes parameter automation and effect tails.'],['Session','Renders two loop cycles and takes Arrangement parameter values from 1.1.1.'],['Stopped playback','A rendered tail stops with the clip; an unfrozen effect can continue decaying.'],['Tempo changes','Frozen clips use Warp/Beats and can be stretched afterward.']])
      ]),
      q('undithered-rendering','Render','An unprocessed export can cancel against the source when sample rate matches and the output bit depth is equal or higher.',[],[], '',[
        q('dithering','Reduce bit depth','Dither adds a small amount of noise to reduce quantization artifacts at a final bit-depth reduction.',[],[['Once','Avoid dithering intermediate files repeatedly.'],['Further work','32-bit-float export preserves processing precision without an integer-depth reduction.']]),
        q('tips-for-achieving-optimal-sound-quality-in-live','Preserve / transform','For an unchanged reference, keep sample rate consistent, avoid transpose, Warp and fades, and use sufficient recording/export precision.',[],[], 'These are conditions for signal neutrality, not instructions to disable musical processing. They deliberately give up stretching and synchronization.')
      ])
    ];
  }
  function attach(model){
    const {entries,manual,workspace,clips,devices}=model;
    const additions=[
      [clips,'audio-source',concept('audio-clips-and-samples','Clip / source','An audio clip references a file and stores which region plays, at what gain, pitch and timing. Different clips can use the same source without rewriting it.')],
      [clips,'midi-clip',concept('midi-clips-and-midi-files','Notes / sound','MIDI clips store notes and controller envelopes. The receiving instrument supplies the sound. Imported MIDI becomes part of the Set, without a continuing reference to the .mid file.')],
      [clips,'record-midi',concept('recording-new-clips','Arm / start a take','Arm chooses recording destinations. Arrangement Record writes armed tracks onto the timeline; Session Record starts new clips in the selected scene on armed tracks.',[],[['Multiple tracks','Arm selected tracks together, or ⌘-click / Ctrl-click additional Arm buttons.'],['Exclusive Arm','Loading an instrument on an empty MIDI track can arm it automatically.'],['Session recording','Press Session Record again to finish and launch the takes; launch quantization sets their boundary.']])],
      [clips,'ca-envelope',concept('clip-envelopes','Move a parameter with a clip','Clip envelopes automate or modulate mixer/device controls. Audio adds clip-specific pitch and volume envelopes; MIDI adds controller envelopes.',[],[['Independent loops','Unlink an envelope to give it a length independent of the clip’s notes or audio.']])],
      [clips,'ca-scale',concept('scale-awareness','Choose a scale','Scale Mode in Clip View or the Control Bar sets root and scale for the selected clip. With no clip selected it supplies defaults for new clips.',[],[['Selected clips','The Control Bar reflects the selection and can apply one scale to several selected clips.'],['Fold / highlight','Fold to Scale hides other pitches; Highlight Scale marks scale pitches in purple. Neither is required for ordinary note editing.'],['Tools','Pitch-related MIDI tools can work in scale degrees.'],['Devices','Use Current Scale in Arpeggiator, Chord, Pitch, Random and Scale follows the clip; Auto Shift’s Quantizer and Meld also support scale-aware functions.']])],
      [devices,'chain',concept('devices','Follow the chain','MIDI effects output MIDI, an instrument converts it to audio, and audio effects process that audio. Audio and return tracks accept audio effects, not MIDI instruments.',[],[['Load','Select a track, search the Browser, then Enter or drag the device into its chain.'],['Plug-ins','VST is available through Plug-Ins; Audio Units are macOS-only.']])],
      [devices,'da-presets',concept('presets-and-racks','Keep a sound','A device preset stores parameter values independently of a Set. A Rack preset can store several devices and chains as one reusable item.')]
    ];
    for(const [owner,id,data]of additions){
      const loc=owner.locations.get(id),node=manual.nodes.get(data.key);
      if(!loc||!node)throw Error('Missing concept destination '+id);
      const guide={...data,title:data.label};
      if(owner===clips)loc.item.parts.push({key:data.key,label:data.label,guide,url:node.url});
      else (loc.item.contexts||=[]).push({key:data.key,guide,url:node.url});
      owner.sourceHomes.set(data.key,loc);owner.locations.set(node.id,loc);
      const entry=entries.get(node.id);entry.view=owner===clips?'clips':'devices';node.view=entry.view;entry.atlasContext=loc.area.label+' › '+loc.item.label;
    }
    // Identical keyboard procedures get the same rendered action, not a new page.
    for(const [from,to]of [
      ['navigating-between-controls-in-the-settings-menu','settings-menu'],
      ['editing-automation-and-modulation-envelopes-with-the-keyboard','editing-automation-and-modulation-envelopes']
    ]){
      const key='live-keyboard-shortcuts#'+from,loc=workspace.sourceHomes.get('accessibility-and-keyboard-navigation#'+to),node=manual.nodes.get(key);
      workspace.sourceHomes.set(key,loc);workspace.locations.set(node.id,loc);
    }
  }
  return {extend,make,attach};
})();
