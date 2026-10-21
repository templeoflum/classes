// Original file-management operations; checked against Live 12 chapter 5.
(() => {
  const key=(action,mac,win=mac)=>({action,mac,win});
  const add=(rows)=>rows.forEach(([anchor,body,title,steps,terms=[],note='',images=[],keys=[]])=>{
    manualGuides.put('managing-files-and-sets',anchor,body,title,steps,terms,note,images);
    manualGuides.items['managing-files-and-sets#'+anchor].keys=keys;
  });
  add([
    ['sample-files','An audio clip points to a sample file; the clip is not itself a second copy of the audio.','Check the source of a clip',[
      'Select an audio clip and inspect its sample information.',
      'Use Manage Files → Manage Set → View Files to see where its source is stored.'
    ],[['Uncompressed audio','Can be read directly from disk.'],['Compressed audio','Decoded to temporary uncompressed data for playback.'],['Multiple clips','Can refer to one file with different settings.']], 'Moving or deleting a source file can affect every clip that refers to it.'],
    ['the-decoding-cache','The decoding cache holds temporary playback data for compressed audio.','Inspect cache usage',[
      'Open the Decoding Cache section in File & Folder Settings.',
      'Check its size and free-space limits if storage is constrained.'
    ],[['Automatic maintenance','Older decoded files are removed to make room.'],['Cleanup','Clears cached files not used by the current Set.']], 'The cache is not an archive of your original samples and is not a substitute for collecting Project files.'],
    ['analysis-files-asd','An .asd file stores analysis and can also store default clip settings beside a sample.','Keep a sample’s default Warp setup',[
      'Set the audio clip’s Warp markers and other desired defaults.',
      'Use the clip’s Save control to store defaults with its analysis file; import the sample again to check them.'
    ],[['Analysis data','Helps waveform display and audio analysis; most can be rebuilt.'],['Saved defaults','Can include Warp, gain and pitch settings and are not recreated from analysis alone.'],['Live Clip','A separate reusable clip file, not an .asd file.']], 'Existing clips can retain their own settings; a new import uses the saved defaults.'],
    ['selection-options','Export selection chooses both the signal to render and the time range.','Export a defined passage',[
      'Return intended tracks to Arrangement playback and select the desired time span.',
      'Open Export Audio/Video, choose Main or the intended tracks, and verify Render Start and Render Length.'
    ],[['Main','The post-fader Main signal.'],['Individual tracks','Separate post-fader files with aligned start and length.'],['Selected Tracks Only','Uses the tracks selected before opening Export.']], 'Active Session overrides can be included even when Arrangement is visible. Check what is actually playing, not just the current view.',['exportRange'],[key('Export Audio/Video','⌘ ⇧ R','Ctrl Shift R')]],
    ['rendering-options','Rendering options determine processing, rate and channel format before encoding.','Check a stem export',[
      'Decide whether each exported track should include its return and Main effects.',
      'Check Render as Loop, Mono, Normalize and sample rate against the intended use before exporting.'
    ],[['Render as Loop','Makes a preparatory pass so effect tails wrap into the start.'],['Normalize','Changes peak level; it is not loudness matching.'],['Include Return and Main Effects','Prints that processing with each selected track.']], 'Separate stems through shared nonlinear Main processing may not sum exactly like one full-mix render.',['exportRange']],
    ['encoding-options','PCM export stores a lossless file; MP3 makes a compressed listening copy.','Choose the delivery format',[
      'Enable PCM and choose the required file type and bit depth, or enable MP3 for a listening copy.',
      'If reducing to an integer bit depth, choose the intended dither once at that final reduction.'
    ],[['WAV / AIFF / FLAC','Available lossless export formats.'],['32-bit float','Useful for further processing without a fixed-bit-depth reduction at this step.'],['PCM + MP3','Can be exported together.']], 'Avoid repeatedly applying dither. A 32-bit-float file cannot undo clipping already introduced by hardware or a device.',['exportFormat']],
    ['video-rendering-options','Video export combines the Arrangement’s picture with rendered audio.','Check a video export setup',[
      'With a video clip in Arrangement, enable Create Video in Export Audio/Video.',
      'Choose an available encoder and inspect its size, aspect and quality settings before rendering.'
    ],[['Availability','Depends on installed encoders and supported system/video setup.'],['Output','Creates the video alongside the rendered audio.']], 'The option requires video in Arrangement; Live does not provide a video-only export without audio rendering.'],
    ['real-time-rendering','External hardware must run in real time while Live captures its return.','Prepare an external-instrument export',[
      'Check the hardware’s sound, MIDI route and audio return before opening Export.',
      'Allow existing tails to fade during the render wait, then monitor the render status for dropouts.'
    ],[['Offline tracks','Tracks without external hardware in their path can render offline.'],['Auto-Restart','Can restart a render when a dropout is detected.'],['Cancel','Stops and removes the partial render.']], 'A repeated dropout needs a setup or load check; repeated retries alone do not ensure a clean file.'],
    ['midi-files','Imported MIDI becomes editable data inside the Set rather than a continuing link to its original file.','Bring in a MIDI part',[
      'Choose a destination MIDI track and slot or Arrangement insert position.',
      'Import the MIDI file, then load or choose the instrument that should play it.'
    ],[['Audio file','Stores sound.'],['MIDI file','Stores events for a receiving instrument.']], 'Importing MIDI does not reproduce the original software instrument or its sound automatically.'],
    ['exporting-midi-files','Export MIDI Clip saves note/controller data for use outside the Set.','Save one MIDI part',[
      'Select the MIDI clip and choose File → Export MIDI Clip.',
      'Choose a name and location; check the file in the destination application when exchanging it.'
    ],[['Not an audio render','No instrument sound is printed.'],['Not a Live Clip','Does not preserve the full Live device chain and clip context.']], 'Use a Live Clip or Set when the reusable item needs its Live instruments and effects.'],
    ['live-clips','A saved Live Clip keeps a clip’s settings and its track’s devices for reuse.','Save a reusable clip',[
      'Drag the clip into a destination folder in the Browser’s Places section.',
      'Name it and collect its dependent samples when needed.',
      'Test it on an empty track to restore its saved device chain.'
    ],[['Empty destination','Loads the clip and saved devices.'],['Occupied track','Uses the clip with the destination’s existing devices.'],['Audio dependency','An audio Live Clip still refers to sample files.']], 'An .alc file alone may not include every file needed on another computer.'],
    ['merging-sets','The Browser can expose another Set’s tracks, clips and device chains without opening it as the current Set.','Import one track',[
      'Expand the saved Set in the Browser and locate the wanted track.',
      'Drag that track into the current Set, then check its clips, devices and routing.'
    ],[['Whole Set drag','Reconstructs its tracks except return tracks.'],['Devices item','Imports the device chain without the track’s clips.'],['Expanded track','Exposes its Session clips individually.']], 'Check return/send dependencies and collect external samples if the imported material should be self-contained.'],
    ['exporting-session-clips-as-new-sets','Several selected Session clips can become a small reusable Set.','Save a clip collection separately',[
      'Select the intended Session clips and drag them into a Browser folder.',
      'Name the new Set and check how its dependent files are collected.'
    ],[['Selection','Choose more than one clip for a Set rather than a single Live Clip.'],['Source Set','Remains available; this is not an audio mixdown.']], 'Reopen the saved result before relying on it as a transferable lesson or performance Set.'],
    ['template-sets','A template starts a new untitled Set with saved tracks, devices and routing.','Save a reusable starting setup',[
      'Prepare the setup without unwanted recordings or test material.',
      'Choose Save Live Set As Template, then test it from the Browser’s Templates category.'
    ],[['Template','One selectable starting point.'],['Default Set','The template automatically used for new Sets.'],['Mappings and routing','Can be saved in the template too.']], 'Making a template does not require replacing the default Set. Hardware routes may need adjustment on another computer.'],
    ['viewing-and-changing-a-live-sets-file-references','View Files lists each dependency and where it is used in the Set.','Find every use of a sample',[
      'Open Manage Files → Manage Set → View Files.',
      'Expand the sample’s row to inspect all clips or instruments using it before replacing anything.'
    ],[['Replace / Hot-Swap','Changes every reference to that file in this Set.'],['External Edit','Can change the sample itself, affecting other users of that file.'],['Location','Shows whether the dependency is internal, external or missing.']], 'A replacement that is shorter can invalidate Warp markers. Duplicate the source before destructive external editing.'],
    ['live-projects','A Project is the folder that holds related Sets and their supporting files.','Inspect the whole Project',[
      'Open a Set and locate its Current Project in the Browser.',
      'Inspect the .als files, Samples folder and other dependencies rather than treating the .als file as the whole project.'
    ],[['Set','One saved arrangement of clips, devices and settings.'],['Project','Can hold multiple related Set versions.']], 'External references remain external until collected.'],
    ['projects-and-live-sets','Save As inside a Project keeps another related Set there; saving outside it can start a new Project.','Branch into an independent Project',[
      'Use Save Live Set As and choose a location outside the current Project.',
      'Collect the needed external files into the new Project before moving or archiving the original.'
    ],[['Shared Project','Related versions can share sample files.'],['New Project','May initially still refer to samples in the old location.']], 'Save As alone does not make every audio dependency independent.'],
    ['projects-and-presets','A preset can be stored with a Project or kept in a library for wider reuse.','Save a sound with its Project',[
      'Drag the device title bar to a folder under Current Project in the Browser.',
      'Name the preset and collect referenced samples if it contains sample-based devices.'
    ],[['User Library','A reusable home across Projects.'],['Project preset','Keeps the saved sound beside this piece’s files.']], 'A preset file and the samples it references are separate dependencies.'],
    ['managing-files-in-a-project','Manage Project checks the combined dependencies of the Project, not only the open Set.','Inspect project-wide dependencies',[
      'Open a Set belonging to the Project, then choose Manage Files → Manage Project.',
      'Review missing and external files before collecting or packing.'
    ],[['Manage Set','The current Set only.'],['Manage Project','Related Sets and other items within the Project.'],['Unused files','Not referenced within that managed scope.']], 'Review the scope before accepting cleanup suggestions.'],
    ['locating-missing-files','Offline clips or sample slots indicate that Live cannot find a referenced file at its saved location.','Open the missing-file list',[
      'Click the missing-media warning in the status bar, or open Manage Set in File Manager.',
      'Locate the original files, repair the references and audition the affected material before saving.'
    ],[['Missing reference','May be a moved file, disconnected drive or unavailable folder.'],['Silence','The clip can remain in the Set while its audio is unavailable.']], 'Do not replace the file merely with one sharing its name; verify that it is the intended recording.'],
    ['manual-repair','Manual repair points a broken reference at a file you choose.','Relink a known recording',[
      'Find the original file in the Browser.',
      'Drag it onto its matching missing-file row in File Manager, then check playback and clip boundaries.'
    ],[['No identity guarantee','Live can accept a different file as the replacement.']], 'A successful relink message is not proof that the audio content matches. Save after checking.'],
    ['automatic-repair','Automatic Search looks for candidate files in chosen locations.','Search a known source folder',[
      'Expand Automatic Search, select the relevant folder and enable the appropriate Project/Library scope.',
      'Run the search and inspect unresolved or multiple-candidate results.',
      'Audition the repaired material, then save the corrected references.'
    ],[['One candidate','Can be accepted automatically.'],['Several candidates','Requires choosing the correct file.'],['No candidate','Check another known location or repair manually.']], 'Prefer the known recording or archive folder before a broad search.'],
    ['collect-files-on-export','This preference controls dependent-file copying when saving clips, tracks or presets into the Browser.','Keep a reusable item portable',[
      'Inspect Collect Files on Export in Library Settings.',
      'Use Ask to review dependencies at the save, or Always when they should be copied automatically.'
    ],[['Never','Keeps references to the existing source paths.'],['Export here','Means saving an item to the Browser—not rendering a WAV through Export Audio/Video.']], 'Check available storage when collecting large sample-based presets.'],
    ['aggregated-locating-and-collecting','File Manager can repair and collect across a Project or the User Library.','Collect across related Set versions',[
      'Choose Manage Project rather than only Manage Set.',
      'Resolve missing files, choose which external locations to collect, then use Collect and Save.'
    ],[['Manage User Library','Applies the same kind of review to the library.'],['Another Project','Can be opened for management from its Browser context menu.']], 'Collection copies dependencies; it does not render instruments or install third-party plug-ins.'],
    ['finding-unused-files','“Unused” means unreferenced within the Project or Library being inspected, not unused everywhere.','Review without deleting',[
      'Open Manage Project and expand Unused Files.',
      'Use Show to inspect the listed files; check other Projects and backups before removing any.'
    ],[['Cross-Project references','Another Project may still use a file marked unused here.'],['Safer preparation','Collect dependencies into the Projects that need them before cleaning shared locations.']], 'Do not treat this list as an automatic deletion queue.'],
    ['packing-projects-into-packs','A Project Pack bundles the files already inside a Project into an .alp archive.','Make a transferable archive',[
      'Resolve missing files and collect the required external dependencies first.',
      'Open Manage Project → Packing and create the Pack.',
      'Install it into a separate test location and reopen a Set before relying on the archive.'
    ],[['External files','Are not automatically collected just by packing.'],['Original Project','Remains unchanged.'],['Plug-ins','May still require a compatible installation on the destination computer.']], 'Keep the original until the restored copy has been checked.'],
    ['file-management-faqs','File choices depend on whether you need another version, another Project or a reusable sound.','Choose the kind of save',[
      'For an alternate version of this piece, save another Set within its Project.',
      'For an independent piece, save outside that Project and collect its dependencies.',
      'For a reusable sound or phrase, save a preset or Live Clip to the intended library folder.'
    ],[['Audio delivery','Use Export Audio/Video, not a Set save.']]],
    ['how-do-i-create-a-project','Saving a Set outside an existing Project creates a Project folder for it.','Start a separate Project',[
      'Use Save Live Set As and choose a location that is not inside another Project.',
      'Inspect the resulting Project folder and its .als file in the Browser.'
    ],[['Existing Project destination','Adds the Set there instead of creating a separate Project.']], 'Collect external files if the new Project should travel independently.'],
    ['how-can-i-save-presets-into-my-current-project','Drag a device to Current Project to keep its preset with the piece.','Store the current device settings',[
      'Drag the device’s title bar into the Current Project destination in the Browser.',
      'Name the preset, then use File Manager to inspect any referenced samples.'
    ],[['Preset','Stores device settings, not an audio performance.']], 'Check sample collection when the preset uses Simpler, Sampler or another sample-based device.'],
    ['can-i-work-on-multiple-versions-of-a-set','Related Set versions can share one Project and its samples.','Save an alternate version',[
      'Use Save Live Set As with a distinct name inside the current Project.',
      'Confirm the new name before making the alternate edits.'
    ],[['Shared samples','Avoids duplicate copies of the same dependencies.'],['Undo history','Is not a substitute for saved versions; it resets when the Set is reopened.']], 'Editing a shared sample destructively can affect both versions.'],
    ['where-should-i-save-my-live-sets','Keep related versions together and unrelated pieces in separate Projects.','Check the destination',[
      'In Save As, inspect the enclosing folder rather than only the file name.',
      'Choose the existing Project for a related version, or a location outside it for unrelated work.'
    ],[['Nested unrelated Sets','Can make collection and cleanup confusing.']], 'Copying only an .als file is not the same as transferring a complete Project.'],
    ['can-i-use-my-own-folder-structure-within-a-project-folder','Project subfolders can be reorganized, but moved dependencies may need relinking.','Verify a reorganized Project',[
      'Keep a recoverable copy before moving files.',
      'Use Manage Project to locate missing references; search the Project with a full folder rescan if needed.',
      'Collect and Save, then reopen and check the relevant Sets.'
    ],[['Organization','Does not remove the need for valid file paths.']], 'Avoid reorganizing shared sample sources until you know which other Projects use them.']
  ]);
})();
