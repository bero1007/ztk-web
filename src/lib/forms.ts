export function formPayload(form:HTMLFormElement):Record<string,string>{
 const result:Record<string,string>={};
 for(const [key,value] of new FormData(form))result[key]=String(value).trim();
 return result;
}
export function mailtoFor(form:HTMLFormElement,data:Record<string,string>,subject:string){
 const lines=Object.entries(data).map(([key,value])=>{
 const field=form.elements.namedItem(key) as HTMLInputElement|HTMLSelectElement|null;
 const label=field?.closest('label')?.childNodes[0]?.textContent?.trim()||key;
 const display=field instanceof HTMLSelectElement?field.selectedOptions[0]?.textContent||value:value;
 return label+': '+display;
 });
 return 'mailto:'+form.dataset.email+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(lines.join('\n'));
}
export async function submitEnquiry(endpoint:string,data:Record<string,string>){
 const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(data),signal:AbortSignal.timeout(15000)});
 if(!response.ok)throw new Error('Submission failed');
}
