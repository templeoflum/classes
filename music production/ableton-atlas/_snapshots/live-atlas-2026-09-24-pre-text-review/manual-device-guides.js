// Original small demonstrations for devices absent from the initial pilot.
(() => {
  const groups={
    'live-audio-effect-reference':{
      amp:['Amplifier-model coloration for an audio signal.','Compare Clean and a higher-gain model with the same short phrase.',['Model','Gain','Output']],
      'auto-pan-tremolo':['Repeat changes in stereo position or amplitude.','Compare Panning and Tremolo, then change Rate while the sound sustains.',['Mode','Rate','Amount']],
      'auto-shift':['Track and adjust the pitch of a monophonic audio source.','Use a clear solo vocal; compare gentle correction with the unprocessed phrase.',['Pitch correction','Formant','Vibrato']],
      'beat-repeat':['Capture and repeat small portions of incoming audio.','Play a short rhythm and compare two Grid values at low effect level.',['Interval','Grid','Chance']],
      cabinet:['Model a speaker cabinet and microphone coloration.','Place it after Amp and compare two speaker choices.',['Speaker','Microphone','Position']],
      'channel-eq':['Three broad tone controls and a switchable high-pass filter.','Lower Mid slightly, then bypass to compare without changing the arrangement.',['Low','Mid','High']],
      corpus:['Excite a modeled resonating object with incoming sound.','Use a short percussive source; compare two resonator models quietly.',['Model','Decay','Tune']],
      'drum-buss':['Combined dynamics, distortion and low-end shaping for drums.','Raise Drive slightly on a drum group, then level-match the bypass comparison.',['Drive','Transient','Boom']],
      'dynamic-tube':['Tube-style nonlinear processing whose character responds to level.','Compare the tube models with a repeated phrase at a low listening level.',['Tube model','Drive','Bias']],
      'eq-three':['Separate level controls for low, middle and high frequency bands.','Turn one band off and back on to hear what that band contains.',['Low','Mid','High']],
      erosion:['Add noisy or pitched digital degradation.','Move Frequency with a small Amount, then compare its available modes.',['Mode','Frequency','Amount']],
      'external-audio-effect':['An audio round trip through hardware, placed inside a device chain.','With hardware connected safely, choose a dedicated output and its return input.',['Audio To','Audio From','Hardware Latency']],
      'filter-delay':['Three delay paths with independently filtered repeats.','Enable one path and compare its filter position before combining paths.',['Filter','Delay time','Feedback']],
      gate:['Attenuate quiet parts of a signal relative to a threshold.','Raise Threshold between repeated hits, then listen for any truncated tails.',['Threshold','Return','Release']],
      'glue-compressor':['Bus-style compression for individual sources or groups.','Lower Threshold until a little gain reduction appears, then compare at matched levels.',['Threshold','Attack','Release']],
      'grain-delay':['Break sound into delayed grains that can also change pitch.','Use a modest wet balance and move Pitch while a phrase repeats.',['Pitch','Frequency','Feedback']],
      'hybrid-reverb':['Combine an impulse-response space with algorithmic reverberation.','Compare the convolution and algorithm contributions using the same short chord.',['Convolution','Algorithm','Routing']],
      limiter:['Control peaks against an output ceiling.','Play a loud section and inspect gain reduction while keeping the output safely below clipping.',['Ceiling','Gain','Release']],
      looper:['Record and overdub audio into a performance loop.','Record a short phrase, switch to playback, then add one overdub.',['Record','Overdub','Feedback']],
      'multiband-dynamics':['Apply dynamics processing separately to frequency regions.','Inspect one band at a time before changing its above- or below-threshold behavior.',['Crossovers','Thresholds','Time controls']],
      overdrive:['Distortion focused by an input filter.','Move the input filter at low Drive, then compare the affected frequency region.',['Filter','Drive','Tone']],
      pedal:['Overdrive, distortion and fuzz-style processing.','Start with low Gain and compare the modes at a comfortable output level.',['Mode','Gain','Tone controls']],
      'phaser-flanger':['Moving phase, delay and doubling effects.','Compare the three modes with a sustained sound and a small wet contribution.',['Mode','Rate','Feedback']],
      redux:['Reduce time or amplitude resolution to change digital texture.','Lower Rate gradually, then compare changing Bits instead.',['Rate','Bits','Dry/Wet']],
      resonators:['Five tuned resonant paths excited by incoming audio.','Feed a short noise or percussion sound and adjust the first resonator’s pitch.',['Pitch','Decay','Filter']],
      roar:['Multi-stage saturation with routing and modulation.','Begin with one simple routing and modest Drive; compare shaping curves quietly.',['Routing','Shapers','Drive']],
      shifter:['Pitch shifting, frequency shifting and ring modulation.','Compare Pitch and Frequency modes with the same note; keep the wet amount modest.',['Mode','Shift','Modulation']],
      'spectral-resonator':['Apply tuned resonances to the frequency components of incoming sound.','Use a short source and compare pitch and decay changes.',['Frequency / MIDI','Decay','Harmonics']],
      'spectral-time':['Freeze and delay spectral components of a sound.','Freeze a short moment, then release it and compare the delayed result.',['Freezer','Delay','Dry/Wet']],
      spectrum:['Display a sound’s frequency distribution without being an equalizer.','Play a bass note, then a high note and compare their displays.',['Frequency axis','Level axis','Resolution']],
      tuner:['Measure the pitch of an incoming monophonic sound.','Play one sustained note and watch its deviation from the nearest note.',['Note','Cents','Reference pitch']],
      'vinyl-distortion':['Add record-like distortion and surface noise.','Raise Crackle a little and compare it separately from the distortion sections.',['Tracing Model','Pinch','Crackle']],
      vocoder:['Use one signal’s spectral envelope to shape a carrier.','Start with the built-in noise carrier and a clear voice input before adding external routing.',['Carrier','Bands','Envelope']]
    },
    'live-instrument-reference':{
      'drum-sampler':['Play and reshape a single drum sample.','Drop a short hit into the device and compare one playback-effect setting.',['Sample','Playback effect','Envelope']],
      'external-instrument':['Send MIDI to an external instrument and return its audio to Live.','Choose MIDI To and the instrument’s audio return, then play a note quietly.',['MIDI To','Audio From','Hardware Latency']],
      impulse:['Eight sample slots with independent drum-sound controls.','Drop a hit into one slot, trigger it, then change its decay.',['Sample slots','Stretch','Decay']],
      meld:['Two sound engines with macro oscillators and extensive modulation.','Choose one engine, hold a note and move one oscillator macro.',['Engine A / B','Oscillator macros','Modulation matrix']],
      tension:['Model a vibrating string, its excitation and resonating body.','Compare two excitation types with the same short phrase.',['Excitator','String','Body']]
    },
    'live-midi-effect-reference':{
      'cc-control':['Send controller messages to a receiving MIDI instrument or device.','Choose a known CC destination on your hardware before moving a custom control.',['CC number','Value','MIDI destination']],
      random:['Alter incoming note pitches probabilistically.','Use a small pitch range and compare Chance at zero and a modest value.',['Chance','Choices','Interval']],
      scale:['Remap incoming note classes to outgoing pitches.','Inspect one input column in the matrix and change its output row.',['Input column','Output row','Root']]
    },
    'max-for-live-devices':{
      'ds-clang':['A synthesized metallic or clave-like percussion source.','Trigger a repeated note and compare the tone balance.',['Tone A / B','Noise','Filter']],
      'ds-clap':['A layered synthetic clap built from noise and delayed impulses.','Repeat a hit while moving Sloppy from tight to loose.',['Sloppy','Tail','Spread']],
      'ds-cymbal':['A synthetic cymbal made from oscillators and filtered noise.','Compare short and long Decay on a repeated note.',['Tone','Pitch','Decay']],
      'ds-fm':['FM percussion ranging from pitched hits to noisy bursts.','Raise the modulation amount gradually while repeating one note.',['Amount','Feedback','Pitch']],
      'ds-hh':['A synthetic hi-hat combining noise with a pitched component.','Compare short and long decay using the same MIDI pattern.',['Noise','Tone','Decay']],
      'ds-kick':['A kick voice based on a pitch-shaped sine wave.','Adjust Pitch, then the envelope amount while repeating one hit.',['Pitch','Env','Decay']],
      'ds-snare':['A snare voice combining a pitched component and noise.','Compare the pitched and noisy portions of the same hit.',['Color','Tone','Decay']],
      'ds-tom':['A tom voice with pitch movement and resonant filtering.','Compare a straight pitch with a little Bend.',['Pitch','Bend','Decay']],
      'align-delay':['Delay a signal in time, samples or distance units.','Choose the unit needed for the alignment job, then compare a small delay.',['Time','Samples','Distance']],
      'envelope-follower':['Turn incoming audio level into a mapped control signal.','Map it to a filter with a narrow range, then compare quiet and loud input.',['Map','Rise','Fall']],
      lfo:['Use periodic motion to modulate a parameter.','Map it to a filter and begin with slow motion over a narrow range.',['Waveform','Rate','Map range']],
      shaper:['Draw a repeating control shape and map it to a parameter.','Map a small envelope shape to a filter and compare two curve shapes.',['Breakpoints','Rate','Map']],
      'envelope-midi':['Trigger a mapped envelope from incoming MIDI notes.','Map a small movement to a parameter, then compare short and held notes.',['Attack','Decay / Sustain','Release']],
      'expression-control':['Map playing gestures such as velocity or pressure to parameters.','Choose Velocity as a source and map a modest range to a sound parameter.',['Source','Map','Range']],
      'midi-monitor':['Inspect incoming notes, controller messages and expression data.','Place it before an instrument and compare what arrives from a clip and a keyboard.',['Note display','Flow display','Freeze']],
      'mpe-control':['Reshape expression data before an MPE-capable destination.','Inspect one expression curve and compare its input and output behavior.',['Input expression','Response curve','Output']],
      'note-echo':['Generate delayed MIDI-note repeats rather than delayed audio.','Place it before an instrument and compare a short echo time with a longer one.',['Delay time','Feedback','Velocity']],
      'shaper-midi':['Trigger a drawn modulation shape with each incoming note.','Map a small parameter range and compare two envelope shapes with the same phrase.',['Shape','Trigger','Velocity response']]
    }
  };
  for(const [chapter,devices] of Object.entries(groups))for(const [anchor,[body,gesture,controls]] of Object.entries(devices)){
    const instrument=chapter==='live-instrument-reference'||anchor.startsWith('ds-');
    const midi=chapter==='live-midi-effect-reference'||['envelope-midi','expression-control','midi-monitor','mpe-control','note-echo','shaper-midi'].includes(anchor);
    const load=instrument?'Load the instrument on a MIDI track. Check its input, Monitor and Arm.':midi?'Place the device before the instrument on a MIDI track.':'Load the device on an audio path after the sound source.';
    manualGuides.put(chapter,anchor,body,'Use the device',[load,gesture],[],
      anchor.startsWith('external-')?'Hardware routing requires the real device and correctly connected inputs and outputs. Avoid feedback loops.':
      'Compare at a comfortable level. Availability and panel details depend on the installed Live version and edition.');
    manualGuides.items[chapter+'#'+anchor].controls=controls;
  }
  // Each tool is a clip operation, not a track device.
  const tools={
    arpeggiate:['Resequence selected notes as an arpeggiated pattern.','Select a held chord and compare two pattern settings.'],
    chop:['Divide notes into smaller repeated events.','Select one long note and compare two division settings.'],
    connect:['Add connections between notes.','Select separated notes and inspect the added transitions.'],
    glissando:['Connect successive pitches with per-note pitch-bend curves.','Select two notes and inspect the bend in the MPE editor with an MPE-capable sound.'],
    lfo:['Apply repeating variation to per-note pitch bend, slide or pressure.','Select an MPE target and compare slow and fast variation.'],
    ornament:['Add decorative note gestures around selected notes.','Select one note and compare two ornament shapes.'],
    quantize:['Move note boundaries toward a timing grid.','Compare a partial Amount with full alignment.'],
    recombine:['Rearrange combinations of selected note properties.','Duplicate a phrase and inspect which properties change.'],
    span:['Change note durations using legato, tenuto or staccato articulation.','Use a short selection and compare its note ends before and after.'],
    strum:['Spread simultaneous note starts in time.','Select a chord and apply a small stagger.'],
    'time-warp':['Reshape note timing across a selected region.','Use a duplicated phrase and compare its timing contour.'],
    'velocity-shaper':['Shape the velocity pattern of selected notes.','Draw a simple rise across a repeated-note phrase.'],
    rhythm:['Generate a rhythmic note pattern.','Choose an empty region and inspect the generated rhythm.'],
    seed:['Generate note material from bounded settings.','Choose an empty clip and compare two generated results.'],
    shape:['Generate notes following a drawn shape.','Draw a simple ascending shape and inspect the resulting notes.'],
    stacks:['Generate stacked note combinations.','Generate into an empty clip and inspect the individual pitches.'],
    euclidean:['Distribute a number of hits across a cycle of steps.','Compare three hits over eight steps with four over eight.']
  };
  for(const [anchor,[body,gesture]] of Object.entries(tools))manualGuides.put('midi-tools',anchor,body,'Apply to a copy',[
    'Use a copied or empty MIDI clip. Choose this tool in Transform or Generate and turn Auto off.',gesture,'Apply, inspect the notes, and use Undo to compare.'
  ],[['Auto','Changes can apply while settings move.'],['Selection','Defines the material or region acted on.']], 'A Generator can replace notes in its target region.');
  const drift=[
    ['subtractive-synthesis','In Drift, oscillators supply the starting sound; filters remove frequency regions and envelopes shape its movement.','Trace a sustained note',[
      'Hold a note with one oscillator audible and the low-pass filter fairly open.',
      'Lower the filter cutoff, then change the amplitude envelope’s Release.'
    ],[['Oscillator','Starting waveform.'],['Filter','Frequency shaping.'],['Envelope','A change triggered by a note.']]],
    ['oscillator-section','Two oscillators and white noise form Drift’s sound source.','Separate the sources',[
      'Turn down Osc 2 and Noise, then compare Osc 1 waveforms.',
      'Bring the second oscillator in gradually and listen to the combined tone.'
    ],[['Source level','Also affects drive into the filter.'],['Routing arrow','Determines whether that source passes through the filter.']]],
    ['oscillator-1','Osc 1 combines a waveform choice with a continuously variable Shape control.','Compare shape on one waveform',[
      'Choose a waveform with Osc 1 audible on its own.',
      'Move Shape while holding a note; watch the waveform and compare the tone.'
    ],[['Oct','Octave offset.'],['Shape','Changes the chosen waveform’s harmonic structure.'],['Shape Mod','A source and amount that move Shape over time or with playing.']]],
    ['oscillator-2','Osc 2 adds a second waveform, with its own octave and detuning.','Hear a small detuning',[
      'Choose comparable waveforms for both oscillators and keep their levels moderate.',
      'Move Osc 2 Detune slightly, then compare with its centered setting.'
    ],[['Oct','Octave offset.'],['Detune','Pitch offset expressed in semitones.']]],
    ['pitch-mod','Two modulation routes can move the pitch of both oscillators.','Add gentle vibrato',[
      'Choose LFO as one Pitch Mod source with a slow LFO rate.',
      'Raise its amount slightly, then return it to zero to compare.'
    ],[['Source','The control signal causing pitch movement.'],['Amount','Its strength and direction.']], 'Large amounts or audio-rate modulation can change the sound dramatically; start quietly.'],
    ['waveform-display','The display follows the combined oscillator and noise signal. It is not a spectrogram.','Compare sources visually',[
      'Show one oscillator with Noise off and inspect the waveform.',
      'Add the other oscillator or Noise and compare the displayed shape.'
    ],[['Waveform','Signal shape over time, rather than a list of frequency peaks.']]],
    ['oscillator-mixer','The mixer sets source levels and whether each source goes through the filter.','Check filter routing',[
      'Use one audible oscillator and lower the filter cutoff.',
      'Compare its routing arrow enabled and disabled, then restore the intended path.'
    ],[['Arrow off','The source bypasses the filter.'],['R','Restarts oscillator phase for each note.'],['Gain','Can drive the filter into saturation.']], 'Reducing Main Volume is not the same operation as reducing the signal driving the filter.'],
    ['filter-section','A low-pass filter and high-pass filter shape the source spectrum.','Move the cutoff',[
      'Use a harmonically rich oscillator and make sure its filter routing is enabled.',
      'Lower Freq, then add a small amount of Res and compare the two filter types.'
    ],[['Freq','Low-pass cutoff.'],['HP','High-pass cutoff.'],['Res','Emphasis near the low-pass cutoff.'],['Key','Makes cutoff follow played pitch.'],['Freq Mod','Two control sources that move low-pass cutoff.']], 'Resonance and oscillator drive can raise peaks; compare at a comfortable level.'],
    ['envelopes-section','Envelope 1 shapes loudness. Envelope 2 is available as a modulation source.','Choose the envelope before editing',[
      'Select envelope 1 in the display and lengthen its Attack.',
      'Compare envelope 2: it needs a modulation destination before its shape produces that destination’s movement.'
    ],[['Envelope 1','Amplitude, and also available for modulation.'],['Envelope 2 / Cyc','ADSR or cycling control source.']]],
    ['envelope-1','The amplitude contour from note-on through note release.','Make the end last longer',[
      'Play and release a note with a short Release.',
      'Lengthen Release and repeat the same note gesture.'
    ],[['Attack','Time to reach the peak.'],['Decay','Time from peak to Sustain.'],['Sustain','Held level, not a duration.'],['Release','Fade after note-off.']]],
    ['envelope-2','A second contour for modulation, with an optional repeating cycle.','Move the filter with a note',[
      'Choose Env 2 / Cyc as a Freq Mod source and apply a modest amount.',
      'Change envelope 2’s shape, then compare ADSR and Cycling modes.'
    ],[['Cycling','Repeats a contour and restarts on incoming notes.'],['Tilt','Moves the contour’s midpoint.'],['Hold','Time spent at its maximum.'],['Time mode','Hz, note-related ratio, milliseconds or beat divisions.']]],
    ['lfo-section','A modulation source with repeating waveforms and one-shot envelope shapes.','Make a slow filter movement',[
      'Select LFO as a Freq Mod source and set a modest destination amount.',
      'Choose a slow Rate and compare free-running with Retrigger enabled.'
    ],[['R','Restarts LFO phase on each note.'],['Amount','Overall LFO intensity.'],['Sync','A rate measured in tempo-related beat divisions.']], 'The LFO needs a destination amount as well as its own Amount to make that route audible.'],
    ['mod-section','Three additional routes connect playing gestures or internal modulators to Drift parameters.','Let velocity open the filter',[
      'Choose Velocity as a source and LP Frequency as its destination in one Mod row.',
      'Set a modest positive amount and compare soft and strong notes.'
    ],[['Source','What causes the change.'],['Destination','What changes.'],['Signed amount','Depth and direction of movement.']], 'A parameter can receive more than one modulation route. Inspect all routes when movement is unexpected.'],
    ['global-section','Voice allocation, overall pitch, output level and playing response.','Compare voice modes',[
      'Play a held chord in Poly mode, then compare Stereo or Unison.',
      'Check available polyphony and level before increasing voice count or Drift.'
    ],[['Poly','One voice per note.'],['Stereo','Two voices per note, panned apart.'],['Unison','Four detuned voices per note.'],['Mono','One played note at a time, with adjustable thickness.'],['Drift','Voice-to-voice pitch and filter variation.'],['Vel > Vol','How velocity changes loudness.']], 'A voice count is not always a note count. Stereo and Unison consume multiple voices for each played note.']
  ];
  for(const [anchor,body,title,steps,terms,note=''] of drift)manualGuides.put('live-instrument-reference',anchor,body,title,steps,terms,note);
})();
