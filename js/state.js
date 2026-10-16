export const KEY='graficlab-study-v1';
export let state={version:1,app:'graficlab',notes:{},read:{},cards:{},errors:{}};
try{const data=JSON.parse(localStorage.getItem(KEY));if(data?.app==='graficlab'&&data.version===1)state={...state,...data};}catch{}
export function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch{document.getElementById('global-status').textContent='No se pudo guardar. Exporta un respaldo.';}}
export function download(name,blob){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
