window.NexT||(window.NexT={}),function(){const e={};let n={};const t=t=>{const o=document.querySelector(`.next-config[data-name="${t}"]`);if(!o)return;const c=(i=o.text,JSON.parse(i||"{}"));var i;"main"===t?Object.assign(e,c):n[t]=c};t("main"),window.CONFIG=new Proxy({},{get(o,c){let i;if(c in e?i=e[c]:(c in n||t(c),i=n[c]),
// For unset override and mixable existing
c in o||"object"!=typeof i||(
// Get ready to mix.
o[c]={}),c in o){const e=o[c];
// When mixable
return"object"==typeof e&&"object"==typeof i?new Proxy({...i,...e},{set:(n,t,o)=>(n[t]=o,e[t]=o,!0)}):e}
// Only when not mixable and override hasn't been set.
return i}}),document.addEventListener("pjax:success",(()=>{n={}}))}();