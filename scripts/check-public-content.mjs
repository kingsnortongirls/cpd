// Public-content guardrail for the KNGS CPD website.
// This is a basic pattern check, not a guarantee that content is anonymous.
// Staff must still review all material before committing to a public repository.
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative, extname } from 'node:path';

const project = process.cwd();
const forbiddenExtensions = new Set(['.pdf','.ppt','.pptx','.doc','.docx','.xls','.xlsx','.zip','.7z','.rar','.csv']);
const inspectedExtensions = new Set(['.html','.js','.json','.css','.md','.txt']);
const patterns = [
  ['Email address',/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i],
  ['Potential credential',/\b(?:password|passcode|api[_ -]?key|client[_ -]?secret|access[_ -]?token)\s*[:=]\s*["']?[A-Za-z0-9!@$%_.-]{7,}/i],
  ['Potential bearer token',/\bBearer\s+[A-Za-z0-9._-]{14,}/i],
  ['Internal sharing link',/https?:\/\/[^\s"'<>]*(?:sharepoint\.com\/|teams\.microsoft\.com\/l\/|staffshare|intranet|\/_layouts\/)/i],
  ['Direct downloadable asset reference',/\b(?:href|src)\s*=\s*["'][^"']+\.(?:pptx?|pdf|docx?|xlsx?|zip)(?:[?#][^"']*)?["']/i],
  ['Download control',/<a\b[^>]*\bdownload(?:\s|=|>)/i]
];
const failures = [];
function walk(path){
  for(const d of readdirSync(path,{withFileTypes:true})){
    if(['.git','node_modules'].includes(d.name)) continue;
    const full=join(path,d.name);
    if(d.isDirectory()){walk(full);continue}
    const name=relative(project,full),ext=extname(d.name).toLowerCase();
    if(forbiddenExtensions.has(ext)){failures.push(name+': downloadable asset is not allowed');continue}
    if(!inspectedExtensions.has(ext))continue;
    const content=readFileSync(full,'utf8');
    for(const [label,pattern] of patterns)if(pattern.test(content)) failures.push(name+': '+label);
  }
}
walk(project);
if(failures.length){
  console.error('Public content review failed:\n'+failures.map(x=>'• '+x).join('\n'));
  process.exitCode=1;
}else{
  console.log('Public content basic safety checks passed. Manual review is still required.');
}
