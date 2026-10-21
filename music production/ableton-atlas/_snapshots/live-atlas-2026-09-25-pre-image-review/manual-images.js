// Figure placements follow source sections through the atlas's editorial homes.
// No legacy screenshot is allowed to leak through a secondary renderer.
const manualImages=(()=>{
  const placements=[],unplaced=[];
  function install({captures,entryCaptures,entries,manual,workspace,clips,devices,shortcuts}){
    for(const key of Object.keys(captures))delete captures[key];
    for(const key of Object.keys(entryCaptures))entryCaptures[key]=[];
    for(const loc of new Set(workspace.locations.values())){
      loc.item.data.images=[];delete loc.item.data.variants;delete loc.item.data.mediaNote;
    }
    for(const area of clips.areas)for(const item of area.items){
      item.images=[];delete item.imageLabels;item.video=false;
      for(const part of item.parts){part.images=[];part.guide={...part.guide,images:[]};}
    }
    for(const area of devices.areas)for(const item of area.items){item.images=[];item.manualSections=[];delete item.leadImage;}
    for(const guide of Object.values(manualGuides.items))guide.images=[];
    // Assign every occurrence, including repeated figures and small inline icons.
    for(const figure of manualImagesData.figures){
      const node=manual.nodes.get(figure.key);
      if(!node){unplaced.push({...figure,reason:'No source section'});continue;}
      const capture={...figure,alt:figure.title,credit:'Ableton Live 12 Manual · © Ableton AG',previewHeight:figure.inline?100:360};
      if(figure.chapter==='credits'){
        captures[figure.id]=capture;node.guide.images.push(figure.id);
        placements.push({id:figure.id,key:figure.key,card:node.id,view:'history',available:!figure.error});continue;
      }
      if(figure.chapter==='live-keyboard-shortcuts'){
        captures[figure.id]=capture;shortcuts.locations.get('keys-typing').manualImage=figure.id;
        placements.push({id:figure.id,key:figure.key,card:'keys-typing',view:'workspace',available:!figure.error});continue;
      }
      const owner=workspace.owned(node.id)?workspace:clips.owned(node.id)?clips:devices.owned(node.id)?devices:null;
      if(!owner){unplaced.push({...figure,reason:'No atlas action'});continue;}
      const loc=owner.sourceHomes.get(figure.key)||owner.locations.get(node.id);
      captures[figure.id]=capture;
      if(owner===workspace){
        loc.item.data.images.push(figure.id);
      }else if(owner===clips){
        let part=loc.item.parts.find(p=>p.key===figure.key);
        if(!part){
          // Authored lead material may cover the heading without having a keyed part.
          const covered=(loc.item.covered||[]).includes(figure.key)||(loc.item.aliases||[]).includes(figure.key);
          if(covered)part=loc.item.parts[0];
          else {part={key:figure.key,label:node.title,guide:node.guide||{body:'',steps:[],terms:[],note:'',images:[]},url:node.url,images:[]};loc.item.parts.push(part);}
        }
        (part.images||=[]).push(figure.id);
      }else{
        if(!figure.inline&&!figure.error&&!loc.item.leadImage)loc.item.leadImage=figure.id;
        let section=loc.item.manualSections.find(s=>s.key===figure.key);
        if(!section){section={key:figure.key,label:node.title,url:node.url,images:[]};loc.item.manualSections.push(section);}
        section.images.push(figure.id);
      }
      placements.push({id:figure.id,key:figure.key,card:(loc.action||loc.item).id,view:entries.get((loc.action||loc.item).id).view,inline:figure.inline,available:!figure.error});
    }
    // Shortcut illustrations reuse the destination action's manual figure.
    // Missing illustrations stay absent, never fall back to custom screenshots.
    for(const node of shortcuts.locations.values())if(node.image){
      const loc=workspace.locations.get(node.entry)||clips.locations.get(node.entry)||devices.locations.get(node.entry);
      const image=loc?.item.data?.images?.[0]||loc?.item.parts?.flatMap(p=>p.images||[])[0]||loc?.item.manualSections?.flatMap(s=>s.images)[0];
      node.image=node.manualImage||image||null;
    }
    return {placements,unplaced};
  }
  return {install,placements,unplaced};
})();
