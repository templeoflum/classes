const $ = id => document.getElementById(id);
const marks = new Set();
const trail = [];
const studies = {
 studio:{label:'Studio',title:'Gesture & <em>instrument.</em>',first:'voice'},
 sound:{label:'Sound',title:'<em>Envelope.</em>',first:'arrival'},
 time:{label:'Phrase',title:'<em>Phrase.</em>',first:'return'}
};
// Presentation keys remain local to this sketch; canonical content IDs are unchanged.
const entries = {
 gesture:{study:'studio',category:'PLAYING',title:'Gesture',copy:'MIDI can describe note events, timing, velocity, and controller movement. An audio recording contains the resulting sound instead.',live:'The route shown is for a software instrument. Recording an acoustic piano or a keyboard’s audio output uses an audio-input route.',links:[['voice','received by'],['memory','captured as']]},
 voice:{study:'studio',category:'SOUND SOURCE',title:'Instrument',copy:'A software instrument produces audio in response to playing information. Its source and settings determine how it responds.',live:'Instrument availability depends on the Live edition and installed Packs.',links:[['gesture','responds to'],['arrival','sound begins with'],['variation','a change of voice is one kind of']]},
 listen:{study:'studio',category:'LISTENING',title:'Listening',copy:'The audible result includes the instrument, effects, output route, and listening environment.',live:'Activity at one point in a signal path does not confirm that sound reaches the intended output.',links:[['voice','sound from'],['body','sound over time'],['space','events and gaps']]},
 memory:{study:'studio',category:'CAPTURE',title:'Recording',copy:'MIDI recording retains playing information. Audio recording retains sound. Either can be used as material in a Set.',live:'Recording captures the performance; saving keeps the Set.',links:[['gesture','MIDI can retain'],['return','a recorded span can become'],['note','lesson context']]},
 arrival:{study:'sound',category:'ENVELOPE · ATTACK',title:'Onset',copy:'The beginning of a sound. An amplitude envelope’s attack describes how its level rises; the source itself also has an onset.',live:'Envelope attack is different from system latency. Controls and behavior depend on the instrument.',links:[['voice','part of an instrument’s response'],['body','continues into'],['variation','one possible variable']]},
 body:{study:'sound',category:'DURATION',title:'Held sound',copy:'Sound while a note is held may decay, sustain, or change. Note length and audible duration are related but not identical.',live:'The source, amplitude envelope, pedal, and effects can each affect duration.',links:[['arrival','follows'],['after','continues into'],['space','duration affects']]},
 after:{study:'sound',category:'ENDING',title:'Release & tail',copy:'Sound may continue after a note-off event. Envelope release, pedal, resonance, and effects can contribute through different mechanisms.',live:'Envelope release and reverb are distinct. The diagram shows a simplified amplitude envelope, not every cause of a sound’s tail.',links:[['body','follows'],['space','can extend into']]},
 return:{study:'time',category:'REPETITION',title:'Repeat',copy:'A return of material. A software loop repeats a selected span; that span need not coincide with the perceived musical phrase.',live:'The loop boundary belongs to the software; phrase boundaries belong to the musical material and its interpretation.',links:[['memory','may use a'],['variation','with a change'],['space','separated by']]},
 variation:{study:'time',category:'DIFFERENCE',title:'Variation',copy:'Related material with a change in notes, timing, register, articulation, or sound.',live:'Separate clips or saved versions can retain both states.',links:[['return','relative to a'],['voice','sound can differ through'],['arrival','articulation can differ through']]},
 space:{study:'time',category:'SPACING',title:'Space',copy:'The interval between events or phrases. A gap in new events may still contain a continuing sound.',live:'Note endings, new entrances, and effect tails can occupy different positions in time.',links:[['after','may contain a'],['body','related to duration of'],['return','between returns of']]},
 help:{study:null,category:'SIGNAL CHECK',title:'No sound',copy:'For a software instrument: playing information → instrument → audio output. An indicator shows activity at that point, not the whole route.',live:'Keep output levels modest. Route-specific settings depend on the controller, audio device, Live version, and listening arrangement.',links:[['gesture','input'],['voice','sound source'],['unresolved','unresolved setup note']]},
 note:{study:null,category:'ILLUSTRATIVE LESSON NOTE',title:'Example note',copy:'“Compared two instruments using the same phrase. Working Set: Window sound. No phrase recording saved.”',links:[['voice','instrument'],['memory','recording'],['unresolved','setup note']]},
 unresolved:{study:null,category:'ILLUSTRATIVE LESSON NOTE',title:'Example · no sound',copy:'“MIDI input visible; instrument silent. Check the instrument next lesson. No recording saved.”',links:[['help','signal check'],['voice','instrument']]}
};
const histories = {
 headlock:{sources:[['Imogen Heap · Headlock','https://imogenheap.bandcamp.com/track/headlock'],['Dork · track credits','https://readdork.com/track/imogen-heap-headlock-2006'],['Sound on Sound · Heap on her album-making process','https://www.soundonsound.com/people/imogen-heap-recording-ellipse']],limit:'Credits identify contributions, not the complete session or signal chains. The interview’s account of writing and production together concerns Speak for Yourself; its detailed Ellipse techniques are not assigned to Headlock. Live links are study options, not original equipment credits.'},
 'lost-weekend':{sources:[['Phoebe Bridgers · Lost Weekend','https://phoebebridgers.bandcamp.com/track/lost-weekend'],['Pitchfork · track 6 credits','https://pitchfork.com/story/read-the-full-credits-to-phoebe-bridgers-lost-weekend/']],limit:'These are the published credits for the title track, not the reprise or the whole album. They do not establish who made each production decision. Exact processing, DAW, and time-coded listening notes remain unverified. Live links are study options.'},
 ableton:{sources:[['Robert Henke · Live’s origins and team','https://www.roberthenke.com/technology/ableton_live.html'],['Behles & Henke · their account of making Live','https://www.roberthenke.com/interviews/ableton.html'],['Ableton · early Live and Session View','https://www.ableton.com/en/blog/the-evolution-of-push/']],limit:'A focused origin story, not a complete company or software history. Current Live controls are linked separately from the 2001 release.'}
};
function reference(id,history,study,title,copy,links,extra={}){
 entries[id]={study,history,views:['approaches','lineages'],category:'REFERENCE · '+history,title,copy,links,...extra};
}
reference('headlock','headlock','approaches','Headlock','Imogen Heap · Speak for Yourself · 2005. Heap’s credited roles include writing, production, programming, engineering, and mixing.',[['imogen','written and produced by'],['headlock-layers','recorded and programmed parts'],['mich-gerber','double bass'],['richie-mills','backing vocals']]);
reference('imogen','headlock','lineages','Imogen Heap','After Frou Frou’s Details with Guy Sigsworth, Heap made Speak for Yourself herself. She later described writing and production on that album as intertwined, sometimes requiring a track to be stripped back to make room for the song.',[['headlock','writer and producer'],['frou-frou','earlier collaboration'],['headlock-layers','track materials']],{aliases:'producer self production speak for yourself'});
reference('frou-frou','headlock','lineages','Frou Frou','Imogen Heap and Guy Sigsworth made Details (2002). This is an earlier collaboration, not a production credit for Headlock.',[['imogen','Imogen Heap'],['headlock','later solo work']],{aliases:'Guy Sigsworth Details 2002'});
reference('mich-gerber','headlock','lineages','Mich Gerber','Credited with double bass on Headlock.',[['headlock','double bass'],['headlock-layers','recorded part']]);
reference('richie-mills','headlock','lineages','Richie Mills','Credited with backing vocals on Headlock.',[['headlock','backing vocals'],['headlock-layers','vocal parts']]);
reference('headlock-layers','headlock','approaches','Voice, bass & programming','The credits place performed voice and double bass alongside Heap’s programming. They do not specify the patch, processing chain, or editing method for each sound.',[['headlock','recording'],['memory','Live study · record a part'],['voice','Live study · add an instrument'],['utility','Live study · balance layers']],{live:'Audio tracks can hold recorded performances; MIDI tracks can hold programmed instrument parts. Work with your own material. The device links are not claims about Heap’s session.'});
reference('lost-weekend','lost-weekend','approaches','Lost Weekend','Phoebe Bridgers · 2026 · title track. Published credits include organ, synthesizers, programmed drums, and a sample of Paul Lansky’s Notjustmoreidlechatter.',[['phoebe','artist and co-producer'],['lost-producers','production credits'],['lost-layers','instrument and programming credits'],['lansky-work','sample source']]);
reference('phoebe','lost-weekend','lineages','Phoebe Bridgers','Credited for production, vocals, church organ, and synthesizers on the title track.',[['lost-weekend','title track'],['lost-producers','co-production'],['lost-layers','track materials']],{aliases:'Phoebe Bridgers producer organ'});
reference('lost-producers','lost-weekend','lineages','Lost Weekend · producers','The published track-6 production credits name Phoebe Bridgers, Tony Berg, Ethan Gruska, Jack Antonoff, and Alex G. This list does not assign individual creative decisions.',[['lost-weekend','produced'],['phoebe','Phoebe Bridgers'],['berg-gruska','Tony Berg & Ethan Gruska'],['antonoff-alex','Jack Antonoff & Alex G']]);
reference('berg-gruska','lost-weekend','lineages','Tony Berg & Ethan Gruska','Both are credited as producers on this track; Gruska also has a sound-design credit.',[['lost-producers','production team'],['lost-weekend','title track']]);
reference('antonoff-alex','lost-weekend','lineages','Jack Antonoff & Alex G','Both have production and drum-programming credits on this track.',[['lost-producers','production team'],['lost-layers','programmed parts']]);
reference('lost-layers','lost-weekend','approaches','Organ, synths & programmed drums','These are credited sound sources, not a reconstruction of the session. Their entrances, treatment, and relationship to the vocal remain for a listening pass.',[['lost-weekend','recording'],['memory','Live study · recorded part'],['operator','Live study · synthesized part'],['utility','Live study · level and stereo']],{live:'An audio recording and a MIDI instrument can remain on separate tracks. Level and stereo placement can be explored independently of the notes. These are Live study options, not the original production chain.'});
reference('lansky','lost-weekend','lineages','Paul Lansky','Composer of Notjustmoreidlechatter (1988), one of his computer-music works built around processed speech.',[['lansky-work','composed'],['lost-weekend','work sampled in']],{sources:[['Princeton · Paul Lansky','https://dof.princeton.edu/people/paul-lansky'],...histories['lost-weekend'].sources]});
reference('lansky-work','lost-weekend','lineages','Notjustmoreidlechatter','Paul Lansky · 1988. The title-track credits identify this work as a sample source.',[['lansky','composed by'],['lost-weekend','sampled in'],['sample-study','Live study · a recording as material']],{sources:[...histories['lost-weekend'].sources,['Princeton · Paul Lansky','https://dof.princeton.edu/people/paul-lansky']]});
reference('sample-study','lost-weekend','approaches','A recording as material','A small recording can be played, cut, or layered into another context.',[['lansky-work','credited sample source'],['simpler','Live study · play a recording'],['split','Live study · divide a clip'],['memory','make your own source']],{live:'Use an original recording for exploration. Simpler is a possible study tool, not an identified tool from this record. No commercial recording or stem is included.'});
reference('live-origin','ableton','lineages','Ableton Live · 2001','Live grew from a need to perform and recombine electronic material. Its first release included Session View and time-warped audio playback.',[['monolake','musical context'],['ableton-team','development and company'],['perform-clips','performance approach'],['session-view','Session View'],['warp','Warp']]);
reference('monolake','ableton','lineages','Monolake','Gerhard Behles and Robert Henke describe building a playable studio from sequencers, hardware, and Max. The limits they encountered helped shape Live.',[['behles','Gerhard Behles'],['henke','Robert Henke'],['live-origin','needs carried into Live']],{aliases:'Berlin techno Max software history'});
reference('behles','ableton','lineages','Gerhard Behles','Monolake collaborator and Ableton founder. In Henke’s account, Behles invited him to help develop Live.',[['monolake','made music with Henke'],['ableton-team','company and development'],['live-origin','Live']]);
reference('henke','ableton','lineages','Robert Henke','Monolake collaborator and a creator of Live. His account connects the software’s design to their own musical working needs.',[['monolake','made music with Behles'],['live-origin','helped develop'],['perform-clips','performance needs']]);
reference('ableton-team','ableton','lineages','Ableton · early team','Henke names Gerhard Behles, developer Bernd Roggendorf, and Jan Bohl on the company side, with Henke joining Live’s development. The musical partnership is not the whole team.',[['behles','Gerhard Behles'],['henke','Robert Henke'],['live-origin','software']],{aliases:'Bernd Roggendorf Jan Bohl founders developer'});
reference('perform-clips','ableton','approaches','Performing with clips','Session View lets stored material be launched in different combinations. Warping can make audio with different original tempos play against a common tempo.',[['live-origin','software origins'],['session-view','choose the order'],['warp','relate the timing'],['toggle-views','Session / Arrangement']],{live:'Tab connects Session and Arrangement views. A clip-based performance can be recorded into Arrangement. This is a present-day Live workflow, not a claim about either reference recording.'});
reference('session-view','ableton','studio','Session View','Clips are launched without a fixed left-to-right order. A scene is a horizontal row of clips.',[['perform-clips','performance approach'],['toggle-views','Tab · switch views'],['record','capture in Arrangement']],{sources:[['Ableton · Session View','https://www.ableton.com/en/manual/session-view/']],limit:'Current Live reference. Track arming, clip launch, and Arrangement recording are separate operations.',views:['studio','approaches','lineages']});
reference('warp','ableton','studio','Warp','Audio timing can be related to the Set’s tempo using warp markers and a warp mode. Different modes suit different material.',[['perform-clips','shared-tempo performance'],['return','looped material'],['toggle-detail','Clip View']],{sources:[['Ableton · Audio Clips, Tempo, and Warping','https://www.ableton.com/en/manual/audio-clips-tempo-and-warping/']],limit:'Mode and source material affect the result. Warping is not required for every recording.',views:['studio','approaches','lineages']});
// The frame is complete; these are deliberately representative reference entries.
Object.assign(studies, {
 actions:{label:'Actions',title:'<em>Actions.</em>',first:'search-live'},
 devices:{label:'Devices',title:'Instruments <em>& effects.</em>',first:'simpler'},
 approaches:{label:'Approaches',title:'<em>Approaches.</em>',first:'headlock'},
 lineages:{label:'Lineages',title:'<em>Lineages.</em>',first:'imogen'}
});
studies.sound.label='Sound & form'; studies.time.label='Sound & form';
const shortcutSource=[['Ableton · Live 12 keyboard shortcuts','https://www.ableton.com/en/manual/live-keyboard-shortcuts/']];
const actionRows=[
 {label:'Find',sequence:true,ids:['search-live','search-results','load-device']},
 {label:'Navigate',ids:['toggle-views','toggle-detail','toggle-browser']},
 {label:'Edit',ids:['duplicate','split','undo']},
 {label:'Keep',ids:['record','save-set','save-as']}
];
function action(id,title,mac,win,context,copy,links,aliases=''){
 entries[id]={study:'actions',category:'ACTION · LIVE 12',title,keys:{mac,win},context,copy,links,aliases,sources:shortcutSource,limit:'Live 12. Behavior depends on keyboard settings and focus.'};
}
action('search-live','Search','⌘ F','Ctrl F','Live focused · browser search','Find devices, presets, samples, and other browser content.',[['search-results','move into results'],['simpler','find a device'],['voice','load on an instrument track']],'find sound browser cmd f command f ctrl f');
action('search-results','Results','↓','↓','Browser search field focused','Move from the search field into matching items.',[['search-live','search first'],['load-device','load selected result']],'down arrow choose select');
action('load-device','Load','Return','Enter','Browser result selected · intended track selected','Load the selected browser item.',[['search-live','search'],['simpler','instrument'],['delay','effect']],'enter add instrument effect');
action('toggle-views','Session / Arrangement','Tab','Tab','Live focused · Tab focus-navigation mode off','Switch between Session and Arrangement.',[['toggle-detail','switch the detail view'],['memory','recorded material'],['split','edit in Arrangement']],'switch toggle timeline session arrangement tab navigate');
action('toggle-detail','Clip / Device','⇧ Tab','Shift Tab','Live focused · Tab focus-navigation mode off','Switch between Clip and Device View.',[['toggle-views','switch the main view'],['simpler','instrument controls'],['memory','clip material']],'shift tab clip device details notes audio editor');
action('toggle-browser','Browser','⌘ ⌥ B','Ctrl Alt B','Live focused · show/hide its Browser','Hide or show Live’s Browser.',[['search-live','search browser content'],['load-device','load an item'],['toggle-views','switch the main view']],'hide show browser finder minimize minimise collapse cmd option b command option b ctrl alt b');
entries['toggle-views'].live='With “Use Tab to Move Focus” enabled, Tab moves keyboard focus instead. Text fields and browser navigation can also use Tab locally; view switching is context-dependent.';
entries['toggle-detail'].live='With “Use Tab to Move Focus” enabled, Shift–Tab moves focus backward instead. F12 is also listed for switching Clip/Device View; some keyboards require Fn. Text-entry and browser contexts can use Tab locally.';
entries['toggle-browser'].live='Command–F / Ctrl–F returns to browser search.';
action('duplicate','Duplicate','⌘ D','Ctrl D','Relevant object selected · outside text entry','Make another copy of the selected material.',[['variation','related versions'],['undo','reverse an edit'],['save-as','keep another Set version']],'copy cmd d command d ctrl d');
action('split','Split clip','⌘ E','Ctrl E','Arrangement clip/time selection · outside text entry','Divide a clip at the selection.',[['toggle-views','switch to Arrangement'],['undo','reverse the split'],['return','material and its boundaries']],'cut divide scissors cmd e command e ctrl e');
action('undo','Undo','⌘ Z','Ctrl Z','Live focused · editing context','Reverse the last undoable operation.',[['duplicate','preserve another possibility'],['variation','compare versions']],'back mistake recover cmd z command z ctrl z');
action('record','Record','F9','F9','Arrangement recording · inputs and track arming matter','Toggle Arrangement recording.',[['memory','keeps playing or audio'],['save-set','save the Set'],['help','check the signal']],'capture performance take fn');
entries.record.live='F9 controls Arrangement recording, not Session clip recording. Some keyboards need Fn with function keys. A shortcut alone does not establish input, monitoring, or track arming.';
action('save-set','Save','⌘ S','Ctrl S','Current Live Set','Save changes to the Set.',[['save-as','a separately named version'],['memory','recording is a different action']],'keep project cmd s command s ctrl s');
action('save-as','Save as','⇧ ⌘ S','Ctrl ⇧ S','Current Live Set','Save under a chosen name and location.',[['save-set','update the current Set'],['variation','keep another version']],'version backup save a copy command shift s cmd shift s ctrl shift s');
entries['save-set'].live=entries['save-as'].live='Saving a Set does not gather every referenced sample or make third-party devices portable.';

const deviceGroups=[
 {title:'MIDI effects',signal:'MIDI → MIDI',role:'Playing information',branches:[['Pattern',['arpeggiator']],['Pitch',['scale']]]},
 {title:'Instruments',signal:'MIDI → AUDIO',role:'Sound generation',branches:[['Recorded sound',['simpler']],['Synthesis',['operator']]]},
 {title:'Audio effects',signal:'AUDIO → AUDIO',role:'Sound processing',branches:[['Tone',['eq-eight']],['Time & space',['delay','reverb']],['Level & stereo',['utility']]]}
];
function device(id,title,group,mechanism,controls,copy,uses,links,anchor){
 const family=group==='Instruments'?'live-instrument-reference':group==='MIDI effects'?'live-midi-effect-reference':'live-audio-effect-reference';
 entries[id]={study:'devices',category:group.toUpperCase(),title,mechanism,controls,signal:deviceGroups.find(g=>g.title===group).signal,copy,live:uses.replace(/^Possible uses: /,'').replace(/^./,letter=>letter.toUpperCase()),links:[['load-device','load'],...links],sources:[['Ableton · '+title,'https://www.ableton.com/en/manual/'+family+'/#'+anchor]],limit:'Availability depends on the Live edition and installed Packs.',aliases:mechanism+' '+controls};
}
device('arpeggiator','Arpeggiator','MIDI effects','Note patterns','Style · Rate · Gate','Turns incoming notes into a patterned sequence.','Possible uses: repeated figures, changing note order, or patterned accompaniment.',[['gesture','receives notes'],['return','repetition']], 'arpeggiator');
device('scale','Scale','MIDI effects','Pitch mapping','Base · Transpose · Mapping','Remaps incoming MIDI pitches.','Possible uses: constrain a set of pitches or create a deliberate pitch transformation.',[['gesture','changes playing information'],['variation','a pitch-based variation']], 'scale');
device('simpler','Simpler','Instruments','Sample playback','Sample region · Filter · Envelope','Plays a recording as an instrument.','Possible uses: a playable recorded tone, a one-shot, or slices of recorded material.',[['memory','recorded material'],['arrival','sound response'],['operator','compare a synthesized source']], 'simpler');
device('operator','Operator','Instruments','FM & additive synthesis','Oscillators · Algorithms · Envelopes','Combines oscillators through additive and frequency-modulation arrangements.','Possible uses: pitched tones, evolving spectra, or synthetic percussion.',[['arrival','amplitude onset'],['simpler','compare a recorded source']], 'operator');
device('eq-eight','EQ Eight','Audio effects','Frequency shaping','Filter type · Frequency · Gain · Q','Changes frequency balance with selectable filters.','Possible uses: broad tonal change, focused attenuation, or a deliberately filtered texture.',[['voice','sound to process'],['utility','level is a different control']], 'eq-eight');
device('delay','Delay','Audio effects','Delayed sound','Time · Feedback · Dry/Wet','Produces delayed copies of incoming audio.','Possible uses: a responding figure, rhythmic repetition, or a short spatial offset.',[['return','repeating material'],['space','timing between events'],['reverb','compare a different tail']], 'delay');
device('reverb','Reverb','Audio effects','Reflections & decay','Pre-delay · Decay Time · Dry/Wet','Creates a reflected, decaying field around incoming audio.','Possible uses: a shared space, a longer tail, or a contrasting sense of distance.',[['after','a sound’s tail'],['delay','compare distinct echoes']], 'reverb');
device('utility','Utility','Audio effects','Gain & stereo control','Gain · Balance · Width','Adjusts level and stereo relationships.','Possible uses: an independent gain stage, narrowing stereo, or a mono check.',[['listen','output and listening'],['eq-eight','frequency balance is different']], 'utility');

entries.voice.links=[['gesture','responds to'],['simpler','recorded sound source'],['operator','synthesized sound source'],['search-live','find a sound']];
entries.memory.links=[['gesture','can retain'],['record','record in Arrangement'],['save-set','keep the Set'],['return','a span can repeat']];
entries.arrival.links=[['body','continues into'],['simpler','sample-instrument response'],['operator','synthesizer response']];
entries.after.links=[['body','follows'],['reverb','another source of a tail'],['space','can extend into']];
entries.return.links=[['variation','with a change'],['delay','repetition through processing'],['perform-clips','perform with clips']];
entries.memory.links.push(['headlock-layers','recorded and programmed parts']);
entries.simpler.links.push(['sample-study','a recording as material']);
entries['toggle-views'].links.push(['live-origin','Live’s origins']);

let state={view:'studio',entry:'voice',flags:false};
const remembered={};
const labelFor = entry => entry.study ? studies[entry.study].label : entry.category.includes('LESSON')?'Lesson':'Studio';
function makeButton(id,className){
 const b=document.createElement('button');b.type='button';b.className=className;b.dataset.id=id;return b;
}
function go(id,requestedView){
 if(!entries[id])return;
 trail.push({...state});remembered[state.view]=state.entry;
 const entry=entries[id];
 const view=requestedView&&studies[requestedView]?requestedView:entry.study||state.view;
 const changedView=view!==state.view;
 state={view,entry:id,flags:false};closeSearch();render();
 if(changedView)window.scrollTo({top:0,behavior:'instant'});
}
function openStudy(view){
 if(!studies[view])return;
 trail.push({...state});remembered[state.view]=state.entry;
 const entry=entries[state.entry];
 const keep=entry.study===view||entry.views?.includes(view);
 state={view,entry:keep?state.entry:remembered[view]||studies[view].first,flags:false};closeSearch();render();window.scrollTo({top:0,behavior:'instant'});
}
function renderCatalogs(){
 $('actions-study').replaceChildren();
 actionRows.forEach(row=>{
  const section=document.createElement('section');section.className='action-row';
  const label=document.createElement('h3');label.textContent=row.label;
  const chain=document.createElement('div');chain.className='action-chain';
  row.ids.forEach((id,i)=>{
   if(i&&row.sequence){const join=document.createElement('span');join.className='chain-join';join.textContent='→';join.setAttribute('aria-hidden','true');chain.append(join);}
   const e=entries[id],b=makeButton(id,'action-choice');
   const keys=document.createElement('kbd');keys.textContent=e.keys[$('key-platform').value];
   const title=document.createElement('strong');title.textContent=e.title;b.append(keys,title);chain.append(b);
  });section.append(label,chain);$('actions-study').append(section);
 });
 $('devices-study').replaceChildren();
 const strip=document.createElement('div');strip.className='signal-strip';
 const families=document.createElement('div');families.className='device-families';
 deviceGroups.forEach(group=>{
  const signal=document.createElement('span');signal.textContent=group.signal;strip.append(signal);
  const family=document.createElement('section');family.className='device-family';
  const h=document.createElement('h3');h.textContent=group.title;
  const role=document.createElement('p');role.textContent=group.role;family.append(h,role);
  group.branches.forEach(([label,ids])=>{
   const branch=document.createElement('div');branch.className='device-branch';
   const heading=document.createElement('span');heading.textContent=label;branch.append(heading);
   ids.forEach(id=>{const b=makeButton(id,'device-node');b.textContent=entries[id].title;branch.append(b);});family.append(branch);
  });families.append(family);
 });$('devices-study').append(strip,families);
}
function render(){
 const entry=entries[state.entry],study=studies[state.view],history=histories[entry.history];
 $('title').innerHTML=study.title;
 Object.keys(studies).forEach(id=>$(id+'-study').hidden=id!==state.view);
 $('scale-controls').hidden=!['sound','time'].includes(state.view);
 $('action-controls').hidden=state.view!=='actions';$('field-foot').hidden=state.view!=='studio';
 renderCatalogs();
 document.querySelectorAll('[data-view]').forEach(b=>{const active=b.dataset.view===state.view||(b.closest('nav')&&b.dataset.view==='sound'&&state.view==='time');b.setAttribute('aria-pressed',String(!!active));});
 document.querySelectorAll('[data-id]').forEach(b=>{b.setAttribute('aria-pressed',String(b.dataset.id===state.entry&&!state.flags));const flag=b.querySelector('.point-flag');if(flag)flag.hidden=!marks.has(b.dataset.id);});
 $('lineages-study').classList.toggle('selection-active',state.view==='lineages'&&!!history);
 document.querySelectorAll('.network-group').forEach(group=>{group.classList.toggle('related',[...group.querySelectorAll('[data-id]')].some(b=>entries[b.dataset.id].history===entry.history));});
 $('back').disabled=!trail.length;$('flag-count').textContent=String(marks.size);
 $('flag-list').hidden=!state.flags;$('entry-links').replaceChildren();$('flag-list').replaceChildren();
 $('about').open=false;$('depth').open=false;$('sources').open=false;
 const sources=entry.sources||history?.sources||[];
 $('sources').hidden=state.flags||!sources.length;
 $('about').hidden=state.flags;$('depth').hidden=state.flags||!entry.live;$('connections').hidden=state.flags;
 $('key-detail').hidden=state.flags||!entry.keys;$('device-detail').hidden=state.flags||!entry.signal;
 if(state.flags){
  $('entry-title').textContent='Bookmarks';$('save').hidden=true;
  marks.forEach(id=>{const b=makeButton(id,'flag-item');b.textContent=entries[id].title;$('flag-list').append(b);});
  const note=document.createElement('p');note.className='flag-note';note.textContent=marks.size?'Cleared on reload.':'No bookmarks.';$('flag-list').append(note);return;
 }
 $('entry-title').textContent=entry.title;
 $('entry-copy').textContent=entry.copy;$('about-label').textContent=entry.signal?'Mechanism':entry.category.includes('LESSON')?'Note':'Details';
 $('about').open=!entry.study;
 $('save').hidden=!entry.study;$('save').textContent=marks.has(state.entry)?'⚑ Marked':'⚑ Mark';$('save').setAttribute('aria-pressed',String(marks.has(state.entry)));
 $('depth-label').textContent=entry.signal?'Uses':'In Live';
 $('in-live').textContent=entry.live||'';
 if(entry.keys){$('entry-keys').textContent=entry.keys[$('key-platform').value];$('key-context').textContent=entry.context.replace(/^Live focused · /,'').replace(/^./,letter=>letter.toUpperCase());}
 if(entry.signal){$('device-signal').textContent=entry.signal+' · '+entry.mechanism;$('device-controls').textContent=entry.controls;}
 $('source-links').replaceChildren();
 sources.forEach(([label,url])=>{const a=document.createElement('a');a.textContent=label+' ↗';a.href=url;a.target='_blank';a.rel='noopener noreferrer';$('source-links').append(a);});
 $('source-limit').textContent=entry.limit||history?.limit||'';
 entry.links.forEach(([id,relation])=>{
  const destination=entries[id],b=makeButton(id,'route');
  const label=document.createElement('span');label.className='route-relation';label.textContent=relation;
  const place=document.createElement('span');place.className='route-place';place.textContent=destination.title;
  const area=document.createElement('span');area.className='route-area';area.textContent=labelFor(destination)+' ↗';b.append(label,place,area);$('entry-links').append(b);
 });
}
function normalise(value){return value.toLowerCase().replace(/⌘/g,'cmd ').replace(/⌥/g,'option ').replace(/⇧/g,'shift ').replace(/[^\p{L}\p{N}]+/gu,' ').trim();}
function closeSearch(){ $('atlas-search').value='';$('search-panel').hidden=true; }
function search(){
 const query=normalise($('atlas-search').value);$('search-panel').hidden=!query;$('search-results').replaceChildren();if(!query)return;
 const terms=query.split(/\s+/);const results=Object.entries(entries).filter(([,e])=>{
  if(!e.study)return false;
  const words=normalise([e.title,e.category,e.aliases||'',e.keys?.mac||'',e.keys?.win||'',labelFor(e)].join(' ')).split(/\s+/);return terms.every(term=>words.some(word=>word.startsWith(term)));
 });
 $('search-count').textContent=results.length?results.length+' '+(results.length===1?'result':'results'):'No results.';
 results.forEach(([id,e])=>{const b=makeButton(id,'search-result');const title=document.createElement('strong');title.textContent=e.title;const label=document.createElement('small');label.textContent=labelFor(e)+' ↗';b.append(title,label);$('search-results').append(b);});
}
document.addEventListener('click',event=>{
 const b=event.target.closest('button[data-id]');if(b){go(b.dataset.id,b.dataset.targetView);return;}
 const view=event.target.closest('button[data-view]');if(view)openStudy(view.dataset.view);
});
$('back').addEventListener('click',()=>{if(trail.length){state=trail.pop();closeSearch();render();}});
$('save').addEventListener('click',()=>{if(marks.has(state.entry))marks.delete(state.entry);else marks.add(state.entry);render();});
$('flags').addEventListener('click',()=>{trail.push({...state});state.flags=true;closeSearch();render();if(matchMedia('(max-width:1000px)').matches)$('inspector').scrollIntoView({block:'nearest'});});
$('sound-help').addEventListener('click',()=>go('help'));
$('lesson').addEventListener('click',()=>go('note'));
$('key-platform').addEventListener('change',render);
$('atlas-search').addEventListener('input',search);
$('atlas-search').addEventListener('keydown',event=>{if(event.key==='Escape'){closeSearch();}else if(event.key==='ArrowDown'){const first=$('search-results').querySelector('button');if(first){event.preventDefault();first.focus();}}});
$('search-close').addEventListener('click',()=>{closeSearch();$('atlas-search').focus();});
render();
