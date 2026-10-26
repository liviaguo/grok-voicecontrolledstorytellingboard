var zn=Object.defineProperty;var Hn=(e,n,t)=>n in e?zn(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var k=(e,n,t)=>Hn(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const bn={character:{label:"Person",plural:"People"},place:{label:"Place",plural:"Places"},feeling:{label:"Feeling",plural:"Feelings"},object:{label:"Object",plural:"Objects"},scene:{label:"Scene",plural:"Scenes"}},Vn=["scene","character","place","object","feeling"];function an(){return typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function Q(e=new Date){const n=String(e.getMonth()+1).padStart(2,"0"),t=String(e.getDate()).padStart(2,"0");return`${e.getFullYear()}-${n}-${t}`}function nn(e){const[n,t,s]=e.split("-").map(Number);return new Date(n,t-1,s)}function yn(e,n){const t=nn(e);return t.setDate(t.getDate()+n),Q(t)}const xn=e=>/^\d{4}-\d{2}-\d{2}$/.test(e)&&!Number.isNaN(nn(e).getTime()),Nn=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-anchor"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 6v16" />
  <path d="m19 13 2-1a9 9 0 0 1-18 0l2 1" />
  <path d="M9 11h6" />
  <circle cx="12" cy="4" r="2" />
</svg>
`,Rn=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-angry"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 12v-1.584" />
  <path d="M17 10a5 5 0 00-3 1" />
  <path d="M7 10a5 5 0 013 1" />
  <path d="M9 12v-1.584" />
  <path d="M9 17a5 5 0 016.001 0" />
  <circle cx="12" cy="12" r="10" />
</svg>
`,On=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-annoyed"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M14 10h2" />
  <path d="M8 10h2" />
  <path d="M8 16h8" />
  <circle cx="12" cy="12" r="10" />
</svg>
`,Dn=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-apple"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 6.528V3a1 1 0 0 1 1-1h0" />
  <path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21" />
</svg>
`,Zn=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-baby"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
  <path d="M15 12h.01" />
  <path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
  <path d="M9 12h.01" />
</svg>
`,Pn=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-battery-full"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 10v4" />
  <path d="M14 10v4" />
  <path d="M22 14v-4" />
  <path d="M6 10v4" />
  <rect x="2" y="6" width="16" height="12" rx="2" />
</svg>
`,Fn=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-battery-low"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M22 14v-4" />
  <path d="M6 14v-4" />
  <rect x="2" y="6" width="16" height="12" rx="2" />
</svg>
`,Kn=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-bed"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2 4v16" />
  <path d="M2 8h18a2 2 0 0 1 2 2v10" />
  <path d="M2 17h20" />
  <path d="M6 8v9" />
</svg>
`,Un=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-beer"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
  <path d="M9 12v6" />
  <path d="M13 12v6" />
  <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" />
  <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
</svg>
`,Yn=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-bike"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="18.5" cy="17.5" r="3.5" />
  <circle cx="5.5" cy="17.5" r="3.5" />
  <circle cx="15" cy="5" r="1" />
  <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
</svg>
`,qn=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-book-open"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 5v16" />
  <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />
</svg>
`,Wn=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-box"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
  <path d="m3.3 7 8.7 5 8.7-5" />
  <path d="M12 22V12" />
</svg>
`,Jn=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-briefcase"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  <rect width="20" height="14" x="2" y="6" rx="2" />
</svg>
`,Gn=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-building-2"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 12h4" />
  <path d="M10 8h4" />
  <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
  <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
  <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
</svg>
`,Xn=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-cake"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
  <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
  <path d="M2 21h20" />
  <path d="M7 8v3" />
  <path d="M12 8v3" />
  <path d="M17 8v3" />
  <path d="M7 4h.01" />
  <path d="M12 4h.01" />
  <path d="M17 4h.01" />
</svg>
`,Qn=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-camera"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" />
  <circle cx="12" cy="13" r="3" />
</svg>
`,ne=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-car"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
  <circle cx="7" cy="17" r="2" />
  <path d="M9 17h6" />
  <circle cx="17" cy="17" r="2" />
</svg>
`,ee=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-castle"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 5V3" />
  <path d="M14 5V3" />
  <path d="M15 21v-3a3 3 0 0 0-6 0v3" />
  <path d="M18 3v8" />
  <path d="M18 5H6" />
  <path d="M22 11H2" />
  <path d="M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9" />
  <path d="M6 3v8" />
</svg>
`,te=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-cat"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
  <path d="M8 14v.5" />
  <path d="M16 14v.5" />
  <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
</svg>
`,ie=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-chevron-left"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m15 18-6-6 6-6" />
</svg>
`,se=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-chevron-right"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m9 18 6-6-6-6" />
</svg>
`,oe=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-church"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 9h4" />
  <path d="M12 7v5" />
  <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
  <path d="m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9" />
  <path d="M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14" />
</svg>
`,ae=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-clapperboard"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m12.296 3.464 3.02 3.956" />
  <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z" />
  <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  <path d="m6.18 5.276 3.1 3.899" />
</svg>
`,le=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-clock"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="M12 6v6l4 2" />
</svg>
`,re=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-cloud-rain"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
  <path d="M16 14v6" />
  <path d="M8 14v6" />
  <path d="M12 16v6" />
</svg>
`,ce=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-coffee"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 2v2" />
  <path d="M14 2v2" />
  <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
  <path d="M6 2v2" />
</svg>
`,de=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-compass"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
</svg>
`,he=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-croissant"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487" />
  <path d="M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132" />
  <path d="M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42" />
  <path d="M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14" />
  <path d="M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676" />
</svg>
`,ue=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-dog"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M11.25 16.25h1.5L12 17z" />
  <path d="M16 14v.5" />
  <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309" />
  <path d="M8 14v.5" />
  <path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
</svg>
`,pe=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-dumbbell"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z" />
  <path d="m2.5 21.5 1.4-1.4" />
  <path d="m20.1 3.9 1.4-1.4" />
  <path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z" />
  <path d="m9.6 14.4 4.8-4.8" />
</svg>
`,ge=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-eye"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
  <circle cx="12" cy="12" r="3" />
</svg>
`,ve=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-feather"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M14.086 18.412A2 2 0 0112.67 19H5v-7.672a2 2 0 01.586-1.414L11.75 3.75a6 6 0 118.49 8.49z" />
  <path d="M16 8 2 22" />
  <path d="M17.488 15H9" />
</svg>
`,we=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-ferris-wheel"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="2" />
  <path d="M12 2v4" />
  <path d="m6.8 15-3.5 2" />
  <path d="m20.7 7-3.5 2" />
  <path d="M6.8 9 3.3 7" />
  <path d="m20.7 17-3.5-2" />
  <path d="m9 22 3-8 3 8" />
  <path d="M8 22h8" />
  <path d="M18 18.7a9 9 0 1 0-12 0" />
</svg>
`,me=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-flame"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
</svg>
`,_e=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-flower-2"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" />
  <circle cx="12" cy="8" r="2" />
  <path d="M12 10v12" />
  <path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" />
  <path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" />
</svg>
`,ke=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-flower"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="3" />
  <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
  <path d="M12 7.5V9" />
  <path d="M7.5 12H9" />
  <path d="M16.5 12H15" />
  <path d="M12 16.5V15" />
  <path d="m8 8 1.88 1.88" />
  <path d="M14.12 9.88 16 8" />
  <path d="m8 16 1.88-1.88" />
  <path d="M14.12 14.12 16 16" />
</svg>
`,fe=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-footprints"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
  <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
  <path d="M16 17h4" />
  <path d="M4 13h4" />
</svg>
`,be=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-frown"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 10V9" />
  <path d="M9 10V9" />
  <path d="M9 16a5 5 0 016 0" />
  <circle cx="12" cy="12" r="10" />
</svg>
`,ye=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-gem"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10.5 3 8 9l4 13 4-13-2.5-6" />
  <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z" />
  <path d="M2 9h20" />
</svg>
`,xe=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-gift"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 7v14" />
  <path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
  <path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5" />
  <rect x="3" y="7" width="18" height="4" rx="1" />
</svg>
`,Ce=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-graduation-cap"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
  <path d="M22 10v6" />
  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
</svg>
`,Me=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-guitar"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m11.9 12.1 4.514-4.514" />
  <path d="M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z" />
  <path d="m6 16 2 2" />
  <path d="M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z" />
</svg>
`,Se=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-hand-heart"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
  <path d="m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95" />
  <path d="m2 15 6 6" />
  <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91" />
</svg>
`,Ie=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-heart-handshake"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" />
</svg>
`,Le=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-heart"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
</svg>
`,je=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-hospital"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 7v4" />
  <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
  <path d="M14 9h-4" />
  <path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
  <path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" />
</svg>
`,Ae=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-house"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
</svg>
`,Ee=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-ice-cream-cone"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" />
  <path d="M17 7A5 5 0 0 0 7 7" />
  <path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" />
</svg>
`,Be=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-image"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
  <circle cx="9" cy="9" r="2" />
  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
</svg>
`,Te=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-key-round"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
  <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
</svg>
`,$e=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-key"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m2 21 9.6-9.6" />
  <path d="m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19" />
  <circle cx="15.5" cy="7.5" r="5.5" />
</svg>
`,ze=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-lamp"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 12v6" />
  <path d="M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z" />
  <path d="M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" />
</svg>
`,He=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-landmark"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 18v-7" />
  <path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z" />
  <path d="M14 18v-7" />
  <path d="M18 18v-7" />
  <path d="M3 22h18" />
  <path d="M6 18v-7" />
</svg>
`,Ve=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-laptop"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" />
  <path d="M20.054 15.987H3.946" />
</svg>
`,Ne=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-laugh"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 10V9" />
  <path d="M7.084 14.302a5.12 5.12 0 009.833 0 .24.24 0 00-.235-.302H7.32a.24.24 0 00-.235.302" />
  <path d="M9 10V9" />
  <circle cx="12" cy="12" r="10" />
</svg>
`,Re=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-leaf"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M11 20a10 10 0 0010-10 25.9 25.9 0 00-1.04-7.281 1 1 0 00-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0011 20" />
  <path d="M2 21a5 5 0 012.911-4.544C7.613 15.212 8.351 15.24 11 13" />
</svg>
`,Oe=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-library"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m16 6 4 14" />
  <path d="M12 6v14" />
  <path d="M8 8v12" />
  <path d="M4 4v16" />
</svg>
`,De=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-mail"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
  <rect x="2" y="4" width="20" height="16" rx="2" />
</svg>
`,Ze=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-map-pin"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
  <circle cx="12" cy="10" r="3" />
</svg>
`,Pe=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-map"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
  <path d="M15 5.764v15" />
  <path d="M9 3.236v15" />
</svg>
`,Fe=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-meh"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 10V9" />
  <path d="M8 16h8" />
  <path d="M9 10V9" />
  <circle cx="12" cy="12" r="10" />
</svg>
`,Ke=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-mic"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 19v3" />
  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
  <rect x="9" y="2" width="6" height="13" rx="3" />
</svg>
`,Ue=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-moon"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
</svg>
`,Ye=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-mountain-snow"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
  <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />
</svg>
`,qe=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-mountain"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
</svg>
`,We=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-music"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 16V3a1 1 0 0 0-1.28-.96l-10 2.917a1 1 0 0 0-.72.96V19" />
  <circle cx="18" cy="16" r="3" />
  <circle cx="6" cy="19" r="3" />
</svg>
`,Je=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-palette"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
</svg>
`,Ge=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-party-popper"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5.8 11.3 2 22l10.7-3.79" />
  <path d="M4 3h.01" />
  <path d="M22 8h.01" />
  <path d="M15 2h.01" />
  <path d="M22 20h.01" />
  <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
  <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" />
  <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" />
  <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
</svg>
`,Xe=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-pen-line"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M13 21h8" />
  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
</svg>
`,Qe=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-phone"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
</svg>
`,nt=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-piano"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 13v4" />
  <path d="M14 13v4" />
  <path d="M18 13v4" />
  <path d="M2 13h20" />
  <path d="M22 11.5A3.5 3.5 0 0018.5 8a3.52 3.52 0 01-3.173-2A7 7 0 002 9v10a2 2 0 002 2h16a2 2 0 002-2z" />
  <path d="M6 13v4" />
</svg>
`,et=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-pizza"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m12 14-1 1" />
  <path d="m13.75 18.25-1.25 1.42" />
  <path d="M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" />
  <path d="M18.8 9.3a1 1 0 0 0 2.1 7.7" />
  <path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z" />
</svg>
`,tt=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-plane"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
</svg>
`,it=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-route"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="6" cy="19" r="3" />
  <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
  <circle cx="18" cy="5" r="3" />
</svg>
`,st=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-sailboat"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 2v15" />
  <path d="M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z" />
  <path d="M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z" />
</svg>
`,ot=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-school"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
  <path d="M18 4.933V21" />
  <path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" />
  <path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" />
  <path d="M6 4.933V21" />
  <circle cx="12" cy="9" r="2" />
</svg>
`,at=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-scroll"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M19 17V5a2 2 0 0 0-2-2H4" />
  <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
</svg>
`,lt=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-shield"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
</svg>
`,rt=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-ship"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 2v2" />
  <path d="M12 9.189V13" />
  <path d="M19 12V6a2 2 0 00-2-2H7a2 2 0 00-2 2v6" />
  <path d="M19.38 19A11.6 11.6 0 0021 13l-8.188-3.639a2 2 0 00-1.624 0L3 13.001a11.6 11.6 0 002.81 7.76" />
  <path d="M2 20c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
</svg>
`,ct=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-shirt"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
</svg>
`,dt=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-shopping-bag"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 10a4 4 0 0 1-8 0" />
  <path d="M3.103 6.034h17.794" />
  <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
</svg>
`,ht=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-shopping-cart"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18" />
  <path d="M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25" />
  <circle cx="18" cy="20" r="2" />
  <circle cx="8" cy="20" r="2" />
</svg>
`,ut=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-smile"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 10V9" />
  <path d="M16.472 15a6 6 0 01-8.943 0" />
  <path d="M9 10V9" />
  <circle cx="12" cy="12" r="10" />
</svg>
`,pt=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-snowflake"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m10 20-1.25-2.5L6 18" />
  <path d="M10 4 8.75 6.5 6 6" />
  <path d="m14 20 1.25-2.5L18 18" />
  <path d="m14 4 1.25 2.5L18 6" />
  <path d="m17 21-3-6h-4" />
  <path d="m17 3-3 6 1.5 3" />
  <path d="M2 12h6.5L10 9" />
  <path d="m20 10-1.5 2 1.5 2" />
  <path d="M22 12h-6.5L14 15" />
  <path d="m4 10 1.5 2L4 14" />
  <path d="m7 21 3-6-1.5-3" />
  <path d="m7 3 3 6h4" />
</svg>
`,gt=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-sofa"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
  <path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" />
  <path d="M4 18v2" />
  <path d="M20 18v2" />
  <path d="M12 4v9" />
</svg>
`,vt=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-sparkle"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
</svg>
`,wt=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-sparkles"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
  <path d="M20 2v4" />
  <path d="M22 4h-4" />
  <circle cx="4" cy="20" r="2" />
</svg>
`,mt=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-sprout"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3" />
  <path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4" />
  <path d="M5 21h14" />
</svg>
`,_t=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
</svg>
`,kt=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-store"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5" />
  <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244" />
  <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" />
</svg>
`,ft=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-sun"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="4" />
  <path d="M12 2v2" />
  <path d="M12 20v2" />
  <path d="m4.93 4.93 1.41 1.41" />
  <path d="m17.66 17.66 1.41 1.41" />
  <path d="M2 12h2" />
  <path d="M20 12h2" />
  <path d="m6.34 17.66-1.41 1.41" />
  <path d="m19.07 4.93-1.41 1.41" />
</svg>
`,bt=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-sunrise"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 2v8" />
  <path d="m4.93 10.93 1.41 1.41" />
  <path d="M2 18h2" />
  <path d="M20 18h2" />
  <path d="m19.07 10.93-1.41 1.41" />
  <path d="M22 22H2" />
  <path d="m8 6 4-4 4 4" />
  <path d="M16 18a4 4 0 0 0-8 0" />
</svg>
`,yt=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-sunset"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 10V2" />
  <path d="m4.93 10.93 1.41 1.41" />
  <path d="M2 18h2" />
  <path d="M20 18h2" />
  <path d="m19.07 10.93-1.41 1.41" />
  <path d="M22 22H2" />
  <path d="m16 6-4 4-4-4" />
  <path d="M16 18a4 4 0 0 0-8 0" />
</svg>
`,xt=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-target"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <circle cx="12" cy="12" r="6" />
  <circle cx="12" cy="12" r="2" />
</svg>
`,Ct=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-tent"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3.5 21 14 3" />
  <path d="M20.5 21 10 3" />
  <path d="M15.5 21 12 15l-3.5 6" />
  <path d="M2 21h20" />
</svg>
`,Mt=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-ticket"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
  <path d="M13 5v2" />
  <path d="M13 17v2" />
  <path d="M13 11v2" />
</svg>
`,St=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-train-front"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M8 3.1V7a4 4 0 0 0 8 0V3.1" />
  <path d="m9 15-1-1" />
  <path d="m15 15 1-1" />
  <path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" />
  <path d="m8 19-2 3" />
  <path d="m16 19 2 3" />
</svg>
`,It=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-tram-front"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="16" height="16" x="4" y="3" rx="2" />
  <path d="M4 11h16" />
  <path d="M12 3v8" />
  <path d="m8 19-2 3" />
  <path d="m18 22-2-3" />
  <path d="M8 15h.01" />
  <path d="M16 15h.01" />
</svg>
`,Lt=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-tree-palm"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" />
  <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" />
  <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35" />
  <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" />
</svg>
`,jt=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-tree-pine"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z" />
  <path d="M12 22v-3" />
</svg>
`,At=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-trees"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
  <path d="M7 16v6" />
  <path d="M13 19v3" />
  <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
</svg>
`,Et=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-umbrella"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 13v7a2 2 0 0 0 4 0" />
  <path d="M12 2v2" />
  <path d="M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z" />
</svg>
`,Bt=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-user-round"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="8" r="5" />
  <path d="M20 21a8 8 0 0 0-16 0" />
</svg>
`,Tt=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-user"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
  <circle cx="12" cy="7" r="4" />
</svg>
`,$t=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-users"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <path d="M16 3.128a4 4 0 0 1 0 7.744" />
  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
  <circle cx="9" cy="7" r="4" />
</svg>
`,zt=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-utensils"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
  <path d="M7 2v20" />
  <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
</svg>
`,Ht=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-waves"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2 12q2.5 2 5 0t5 0 5 0 5 0" />
  <path d="M2 19q2.5 2 5 0t5 0 5 0 5 0" />
  <path d="M2 5q2.5 2 5 0t5 0 5 0 5 0" />
</svg>
`,Vt=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-wheat"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2 22 16 8" />
  <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
  <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
  <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
  <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" />
  <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
  <path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
  <path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
</svg>
`,Nt=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-wine"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M8 22h8" />
  <path d="M7 10h10" />
  <path d="M12 15v7" />
  <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
</svg>
`,Rt=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-x"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M18 6 6 18" />
  <path d="m6 6 12 12" />
</svg>
`,Ot=`<!-- @license lucide-static v1.61.0 - ISC -->
<svg
  class="lucide lucide-zap"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z" />
</svg>
`,Dt=Object.assign({"/node_modules/lucide-static/icons/anchor.svg":Nn,"/node_modules/lucide-static/icons/angry.svg":Rn,"/node_modules/lucide-static/icons/annoyed.svg":On,"/node_modules/lucide-static/icons/apple.svg":Dn,"/node_modules/lucide-static/icons/baby.svg":Zn,"/node_modules/lucide-static/icons/battery-full.svg":Pn,"/node_modules/lucide-static/icons/battery-low.svg":Fn,"/node_modules/lucide-static/icons/bed.svg":Kn,"/node_modules/lucide-static/icons/beer.svg":Un,"/node_modules/lucide-static/icons/bike.svg":Yn,"/node_modules/lucide-static/icons/book-open.svg":qn,"/node_modules/lucide-static/icons/box.svg":Wn,"/node_modules/lucide-static/icons/briefcase.svg":Jn,"/node_modules/lucide-static/icons/building-2.svg":Gn,"/node_modules/lucide-static/icons/cake.svg":Xn,"/node_modules/lucide-static/icons/camera.svg":Qn,"/node_modules/lucide-static/icons/car.svg":ne,"/node_modules/lucide-static/icons/castle.svg":ee,"/node_modules/lucide-static/icons/cat.svg":te,"/node_modules/lucide-static/icons/chevron-left.svg":ie,"/node_modules/lucide-static/icons/chevron-right.svg":se,"/node_modules/lucide-static/icons/church.svg":oe,"/node_modules/lucide-static/icons/clapperboard.svg":ae,"/node_modules/lucide-static/icons/clock.svg":le,"/node_modules/lucide-static/icons/cloud-rain.svg":re,"/node_modules/lucide-static/icons/coffee.svg":ce,"/node_modules/lucide-static/icons/compass.svg":de,"/node_modules/lucide-static/icons/croissant.svg":he,"/node_modules/lucide-static/icons/dog.svg":ue,"/node_modules/lucide-static/icons/dumbbell.svg":pe,"/node_modules/lucide-static/icons/eye.svg":ge,"/node_modules/lucide-static/icons/feather.svg":ve,"/node_modules/lucide-static/icons/ferris-wheel.svg":we,"/node_modules/lucide-static/icons/flame.svg":me,"/node_modules/lucide-static/icons/flower-2.svg":_e,"/node_modules/lucide-static/icons/flower.svg":ke,"/node_modules/lucide-static/icons/footprints.svg":fe,"/node_modules/lucide-static/icons/frown.svg":be,"/node_modules/lucide-static/icons/gem.svg":ye,"/node_modules/lucide-static/icons/gift.svg":xe,"/node_modules/lucide-static/icons/graduation-cap.svg":Ce,"/node_modules/lucide-static/icons/guitar.svg":Me,"/node_modules/lucide-static/icons/hand-heart.svg":Se,"/node_modules/lucide-static/icons/heart-handshake.svg":Ie,"/node_modules/lucide-static/icons/heart.svg":Le,"/node_modules/lucide-static/icons/hospital.svg":je,"/node_modules/lucide-static/icons/house.svg":Ae,"/node_modules/lucide-static/icons/ice-cream-cone.svg":Ee,"/node_modules/lucide-static/icons/image.svg":Be,"/node_modules/lucide-static/icons/key-round.svg":Te,"/node_modules/lucide-static/icons/key.svg":$e,"/node_modules/lucide-static/icons/lamp.svg":ze,"/node_modules/lucide-static/icons/landmark.svg":He,"/node_modules/lucide-static/icons/laptop.svg":Ve,"/node_modules/lucide-static/icons/laugh.svg":Ne,"/node_modules/lucide-static/icons/leaf.svg":Re,"/node_modules/lucide-static/icons/library.svg":Oe,"/node_modules/lucide-static/icons/mail.svg":De,"/node_modules/lucide-static/icons/map-pin.svg":Ze,"/node_modules/lucide-static/icons/map.svg":Pe,"/node_modules/lucide-static/icons/meh.svg":Fe,"/node_modules/lucide-static/icons/mic.svg":Ke,"/node_modules/lucide-static/icons/moon.svg":Ue,"/node_modules/lucide-static/icons/mountain-snow.svg":Ye,"/node_modules/lucide-static/icons/mountain.svg":qe,"/node_modules/lucide-static/icons/music.svg":We,"/node_modules/lucide-static/icons/palette.svg":Je,"/node_modules/lucide-static/icons/party-popper.svg":Ge,"/node_modules/lucide-static/icons/pen-line.svg":Xe,"/node_modules/lucide-static/icons/phone.svg":Qe,"/node_modules/lucide-static/icons/piano.svg":nt,"/node_modules/lucide-static/icons/pizza.svg":et,"/node_modules/lucide-static/icons/plane.svg":tt,"/node_modules/lucide-static/icons/route.svg":it,"/node_modules/lucide-static/icons/sailboat.svg":st,"/node_modules/lucide-static/icons/school.svg":ot,"/node_modules/lucide-static/icons/scroll.svg":at,"/node_modules/lucide-static/icons/shield.svg":lt,"/node_modules/lucide-static/icons/ship.svg":rt,"/node_modules/lucide-static/icons/shirt.svg":ct,"/node_modules/lucide-static/icons/shopping-bag.svg":dt,"/node_modules/lucide-static/icons/shopping-cart.svg":ht,"/node_modules/lucide-static/icons/smile.svg":ut,"/node_modules/lucide-static/icons/snowflake.svg":pt,"/node_modules/lucide-static/icons/sofa.svg":gt,"/node_modules/lucide-static/icons/sparkle.svg":vt,"/node_modules/lucide-static/icons/sparkles.svg":wt,"/node_modules/lucide-static/icons/sprout.svg":mt,"/node_modules/lucide-static/icons/star.svg":_t,"/node_modules/lucide-static/icons/store.svg":kt,"/node_modules/lucide-static/icons/sun.svg":ft,"/node_modules/lucide-static/icons/sunrise.svg":bt,"/node_modules/lucide-static/icons/sunset.svg":yt,"/node_modules/lucide-static/icons/target.svg":xt,"/node_modules/lucide-static/icons/tent.svg":Ct,"/node_modules/lucide-static/icons/ticket.svg":Mt,"/node_modules/lucide-static/icons/train-front.svg":St,"/node_modules/lucide-static/icons/tram-front.svg":It,"/node_modules/lucide-static/icons/tree-palm.svg":Lt,"/node_modules/lucide-static/icons/tree-pine.svg":jt,"/node_modules/lucide-static/icons/trees.svg":At,"/node_modules/lucide-static/icons/umbrella.svg":Et,"/node_modules/lucide-static/icons/user-round.svg":Bt,"/node_modules/lucide-static/icons/user.svg":Tt,"/node_modules/lucide-static/icons/users.svg":$t,"/node_modules/lucide-static/icons/utensils.svg":zt,"/node_modules/lucide-static/icons/waves.svg":Ht,"/node_modules/lucide-static/icons/wheat.svg":Vt,"/node_modules/lucide-static/icons/wine.svg":Nt,"/node_modules/lucide-static/icons/x.svg":Rt,"/node_modules/lucide-static/icons/zap.svg":Ot}),G={};for(const[e,n]of Object.entries(Dt))G[e.split("/").pop().replace(/\.svg$/,"")]=n.replace(/<!--.*?-->/s,"").trim();const Zt={city:"building-2",downtown:"building-2",street:"route",park:"trees",beach:"tree-palm",home:"house",school:"school",kitchen:"utensils",forest:"tree-pine",cafe:"coffee",office:"briefcase",library:"library",garden:"flower",mountain:"mountain",lake:"waves",river:"waves",ocean:"waves",village:"house",castle:"castle",market:"store",restaurant:"utensils",airport:"plane",train:"train-front",bedroom:"bed",museum:"landmark",hospital:"hospital",church:"church",island:"tree-palm",desert:"sun",cabin:"tent",gym:"dumbbell",studio:"palette",lighthouse:"anchor",harbor:"anchor",bakery:"croissant",bridge:"route",rooftop:"building-2",subway:"tram-front",farm:"wheat",cave:"mountain-snow",pool:"waves",concert:"music",campus:"graduation-cap",attic:"house",pub:"beer",bar:"wine"},Cn={family:"users",parents:"users",friends:"users",grandparents:"users",children:"users",kids:"users",team:"users",baby:"baby",dog:"dog",puppy:"dog",cat:"cat",kitten:"cat"},Pt={key:"key",keys:"key",book:"book-open",notebook:"book-open",letter:"mail",card:"mail",camera:"camera",coffee:"coffee",tea:"coffee",song:"music",guitar:"music",piano:"music",gift:"gift",bike:"bike",music:"music",car:"car",ticket:"ticket",phone:"phone",map:"map",umbrella:"umbrella",clock:"clock",candle:"flame",bag:"shopping-bag",painting:"image",flowers:"flower-2",laptop:"laptop",plant:"leaf",dog:"dog",cat:"cat",pizza:"pizza",wine:"wine",apple:"apple",cake:"cake",bread:"croissant","ice-cream":"ice-cream-cone",ring:"gem",necklace:"gem",dress:"shirt",shoes:"footprints",boat:"sailboat",lantern:"lamp",lamp:"lamp",balloon:"party-popper",kite:"sparkle",hat:"shirt",scarf:"shirt",blanket:"sofa",shell:"sparkle"},Mn={happy:["smile","positive"],joyful:["laugh","positive"],joy:["laugh","positive"],excited:["party-popper","positive"],delighted:["laugh","positive"],fun:["party-popper","positive"],hopeful:["sunrise","positive"],optimistic:["sunrise","positive"],grateful:["hand-heart","positive"],thankful:["hand-heart","positive"],blessed:["hand-heart","positive"],love:["heart","positive"],loved:["heart","positive"],proud:["star","positive"],brave:["shield","positive"],inspired:["sparkles","positive"],amazed:["sparkles","positive"],surprised:["sparkles","positive"],motivated:["target","positive"],focused:["target","calm"],energized:["battery-full","positive"],curious:["eye","calm"],calm:["leaf","calm"],peaceful:["leaf","calm"],content:["leaf","calm"],relieved:["feather","calm"],safe:["shield","calm"],cozy:["coffee","calm"],free:["feather","calm"],nostalgic:["image","calm"],sad:["frown","negative"],lonely:["cloud-rain","negative"],heartbroken:["cloud-rain","negative"],homesick:["cloud-rain","negative"],nervous:["zap","negative"],anxious:["zap","negative"],worried:["zap","negative"],stressed:["zap","negative"],overwhelmed:["zap","negative"],restless:["zap","negative"],scared:["frown","negative"],afraid:["frown","negative"],angry:["angry","negative"],frustrated:["annoyed","negative"],upset:["frown","negative"],jealous:["annoyed","negative"],embarrassed:["meh","negative"],confused:["meh","neutral"],bored:["meh","neutral"],tired:["battery-low","neutral"],exhausted:["battery-low","negative"]},W={character:"user",place:"map-pin",object:"box"};function Ft(e){const n=e.toLowerCase();return/(night|tonight|evening|dark)/.test(n)?"moon":/(sunset|dusk)/.test(n)?"sunset":/(morning|dawn|sunrise)/.test(n)?"sunrise":"sun"}function I(e){return G[e]??G.box??""}function ln(e){const n=e.asset??"";switch(e.kind){case"place":return Zt[n]??W.place;case"object":return Pt[n]??W.object;case"scene":return Ft(e.text);case"feeling":return(Mn[n||e.text.toLowerCase()]??["heart"])[0];case"character":return Cn[n]??W.character}}function Sn(e){if(e.kind==="feeling"){const[n,t]=Mn[e.asset??e.text.toLowerCase()]??["heart","neutral"];return{type:"icon",svg:I(n),tone:t}}return e.kind==="character"?/^my\s/i.test(e.text)||e.asset&&Cn[e.asset]?{type:"icon",svg:I(ln(e))}:{type:"monogram",initials:e.text.split(/\s+/).filter(Boolean).slice(0,2).map(s=>s[0].toUpperCase()).join("")||"?"}:{type:"icon",svg:I(ln(e))}}const Kt=[{kind:"character",title:"People",hint:"Who was there"},{kind:"place",title:"Places",hint:"Where it happened"},{kind:"object",title:"Objects",hint:"Things worth keeping"},{kind:"feeling",title:"Feelings",hint:"How it felt"}];class Ut{constructor(n,t){k(this,"seen",new Set);k(this,"date","");this.root=n,this.cb=t}render(n,t,s){var d,a,h;n!==this.date&&(this.date=n,this.seen=new Set(t.map(l=>l.id)));const i=(a=(d=document.activeElement)==null?void 0:d.closest("[data-id]"))==null?void 0:a.dataset.id;if(this.root.innerHTML="",!t.length){this.root.appendChild(this.empty());return}const o=w("header","review__head");o.append(w("p","eyebrow","The day in one page")),s&&o.append(w("p","review__summary",s)),this.root.appendChild(o);const r=t.filter(l=>l.kind==="scene");if(r.length){const l=this.section("Moments","In the order you told it",r.length),v=w("ol","moments");r.forEach((b,c)=>{const p=this.item(b,"moment"),_=w("span","moment__n",String(c+1).padStart(2,"0"));p.prepend(_),v.appendChild(p)}),l.appendChild(v),this.root.appendChild(l)}const u=w("div","review__grid");for(const{kind:l,title:v,hint:b}of Kt){const c=t.filter(_=>_.kind===l),p=this.section(v,b,c.length);if(p.classList.add(`review__section--${l}`),c.length){const _=w("ul","tiles");for(const z of c)_.appendChild(this.item(z,"tile"));p.appendChild(_)}else p.appendChild(w("p","review__none",`No ${v.toLowerCase()} yet`));u.appendChild(p)}this.root.appendChild(u);for(const l of t)this.seen.add(l.id);i&&((h=this.root.querySelector(`[data-id="${CSS.escape(i)}"]`))==null||h.focus())}empty(){const n=w("div","review__empty");return n.append(w("p","review__empty-title","Nothing on this day yet."),w("p","muted","Speak or write a few sentences. When each sentence ends, its people, places, feelings, objects and moments are added to this page.")),n}section(n,t,s){const i=w("section","review__section"),o=w("h3","review__title",n);return o.append(w("span","count",String(s))),i.append(o,w("p","review__hint",t)),i}item(n,t){const s=w("li",t);s.dataset.id=n.id,s.dataset.kind=n.kind,s.tabIndex=0,this.seen.has(n.id)||s.classList.add("is-new");const i=bn[n.kind].label;s.setAttribute("aria-label",`${i}: ${n.text}${n.note?` (${n.note})`:""}`);const o=Sn(n),r=w("span",`${t}__icon`);r.setAttribute("aria-hidden","true"),o.type==="icon"?(r.innerHTML=o.svg,o.tone&&(r.dataset.tone=o.tone)):(r.classList.add("is-monogram"),r.textContent=o.initials);const u=w("span",`${t}__text`);u.append(w("span",`${t}__label`,n.text)),n.note&&u.append(w("span",`${t}__note`,n.note));const d=w("button",`${t}__delete`);return d.type="button",d.title="Remove",d.setAttribute("aria-label",`Remove ${i.toLowerCase()} “${n.text}”`),d.innerHTML=I("x"),d.addEventListener("click",()=>this.cb.onDelete(n.id)),s.addEventListener("keydown",a=>{var h;if((a.key==="Delete"||a.key==="Backspace")&&a.target===s){a.preventDefault();const l=s.nextElementSibling??s.previousElementSibling;this.cb.onDelete(n.id),l!=null&&l.dataset.id&&((h=this.root.querySelector(`[data-id="${CSS.escape(l.dataset.id)}"]`))==null||h.focus())}}),s.append(r,u,d),s}}function w(e,n,t){const s=document.createElement(e);return s.className=n,t!==void 0&&(s.textContent=t),s}const en=["mom","mum","mother","dad","father","sister","brother","grandma","grandmother","grandpa","grandfather","friend","best friend","partner","husband","wife","boyfriend","girlfriend","boss","teacher","neighbour","neighbor","aunt","uncle","cousin","son","daughter","baby","dog","cat","puppy","kitten","coworker","roommate","kid","kids","family","parents","friends","grandparents","children","team","classmate","colleague"],In=["dragon","princess","prince","king","queen","wizard","witch","knight","stranger","girl","boy","man","woman","old man","old woman","fox","bear","owl","robot","ghost"],O=["park","beach","home","house","school","kitchen","forest","woods","city","cafe","café","coffee shop","office","library","garden","mountain","mountains","lake","river","ocean","sea","village","castle","street","market","restaurant","airport","train","station","bedroom","backyard","museum","hospital","church","island","desert","cabin","gym","studio","lighthouse","harbor","harbour","attic","meadow","bakery","bridge","rooftop","subway","farm","shore","cave","downtown","neighbourhood","neighborhood","trail","pool","concert","bar","pub","supermarket","mall","campus","waterfront","living room"],Ln=["Toronto","Montreal","Vancouver","Ottawa","Calgary","New York","Boston","Chicago","San Francisco","Los Angeles","Seattle","London","Paris","Berlin","Rome","Madrid","Lisbon","Amsterdam","Tokyo","Kyoto","Seoul","Beijing","Shanghai","Hong Kong","Singapore","Sydney","Melbourne","Mexico City"],Yt={house:"home","living room":"home",attic:"home",woods:"forest",café:"cafe","coffee shop":"cafe",mountains:"mountain",sea:"ocean",harbour:"harbor",station:"train",shore:"beach",waterfront:"harbor",backyard:"garden",meadow:"park",trail:"forest",neighbourhood:"street",neighborhood:"street",campus:"school",bar:"restaurant",pub:"restaurant",supermarket:"market",mall:"market",bicycle:"bike",photo:"camera",photograph:"camera",present:"gift",flower:"flowers",journal:"notebook",puppy:"dog",kitten:"cat",books:"book",photos:"camera",backpack:"bag",computer:"laptop","ice cream":"ice-cream",plants:"plant"},C=e=>{const n=e.toLowerCase();return Yt[n]??n},jn=["happy","sad","excited","nervous","anxious","calm","angry","scared","afraid","proud","lonely","grateful","tired","hopeful","curious","joyful","joy","love","loved","overwhelmed","peaceful","frustrated","relieved","nostalgic","confused","brave","bored","surprised","content","jealous","embarrassed","thankful","cozy","free","heartbroken","inspired","safe","worried","delighted","homesick","stressed","focused","motivated","energized","exhausted","restless","optimistic","amazed","blessed","upset","fun"],tn=["key","letter","book","map","phone","camera","umbrella","coffee","tea","cake","guitar","piano","ring","necklace","photo","photograph","gift","present","box","bike","bicycle","car","ticket","lamp","candle","flower","flowers","notebook","journal","sword","shell","stone","kite","balloon","hat","scarf","bag","backpack","blanket","mirror","clock","painting","song","pie","bread","apple","boat","lantern","laptop","computer","wine","pizza","ice cream","plant","plants","keys","card","dress","shoes"],qt=["once upon a time","this morning","the day","all day","after work","after school","for lunch","for dinner","on the weekend","weekend","this afternoon","this evening","tonight","last night","yesterday","today","tomorrow","at night","at dawn","at sunset","in the morning","later","suddenly","then","one day","that night","in the end","finally","meanwhile"],rn=new Set(["I","The","A","An","And","But","So","Then","We","He","She","They","It","My","Our","This","That","Today","Yesterday","Tomorrow","Once","When","After","Before","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Suddenly","Finally","Later","Meanwhile","One","There","Here","In","At","On","To","Oh","OK","Okay","Yes","No","Hi","Hello","Me","You","Your","His","Her","Their","Its","January","February","March","April","May","June","July","August","September","October","November","December","Also","Just","Maybe","Some","With","For","From","Of","Is","Was"]),Wt=new Set(["went","walked","had","got","spent","felt","feeling","woke","saw","met","found","made","took","came","left","ate","drank","bought","tried","started","finished","played","watched","visited","called","talked","lots","lot","everyone","everything","nothing","someone","somehow","what","why","how","who","where","if","because","since","while","until","though","although","as","by","not","all","most","many","few","every","each","both","such","these","those","us","him","them","let","lets","let’s","let's","thanks","thank","good","great","nice","really","very","still","even","now","back","up","down","out","over","walking","drinking","eating","sitting","reading","writing","working","having","going","getting","looking"]),cn={character:"character",who:"character",person:"character",place:"place",where:"place",location:"place",feeling:"feeling",mood:"feeling",emotion:"feeling",object:"object",thing:"object",item:"object",scene:"scene",moment:"scene",chapter:"scene"},E=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),U=e=>new RegExp(`(?<![\\p{L}\\p{N}])(${[...e].sort((n,t)=>t.length-n.length).map(E).join("|")})(?![\\p{L}\\p{N}])`,"giu"),Jt=new RegExp(`\\b(?:[Mm]y|[Oo]ur)\\s+(${[...en].sort((e,n)=>n.length-e.length).map(E).join("|")})\\b`,"gi"),Gt=new RegExp(`\\b(?:a|an|the)\\s+((?:\\w+\\s)?(?:${In.map(E).join("|")}))\\b`,"gi"),Xt=/\b(?:named|called)\s+([A-Z][a-z]+)/g,Qt=new RegExp(`\\b(?:[Mm]y|[Oo]ur)\\s+(${[...en].sort((e,n)=>n.length-e.length).map(E).join("|")})\\s+([A-Z][a-z]+)\\b`,"g"),V=new RegExp(`\\b(${Ln.map(E).join("|")})\\b`,"g"),dn=new Set(Ln.flatMap(e=>e.split(" "))),N=U(O),ni=U(jn),ei=new RegExp(`\\b(?:a|an|the|my|our|his|her|their|some)\\s+((?:\\w+\\s)?(?:${tn.map(E).join("|")}))\\b`,"gi"),J=U(qt),ti=U(["coffee","tea","pizza","wine","cake","bread","flowers","ice cream","music","books","photos"]),ii=new Set(["a","an","the","my","and","of","to","very","was","is"]);function hn(e){const n=e.trim().split(/\s+/);return n.length>1&&ii.has(n[0].toLowerCase())&&n.shift(),n.join(" ")}function S(e){return e.replace(/\b\w/g,n=>n.toUpperCase())}function R(e){const n=e.trim();return n.charAt(0).toUpperCase()+n.slice(1)}function un(e,n){return e.length<=n?e:`${e.slice(0,n-1).trimEnd()}…`}function si(e){return e.split(new RegExp("(?<=[.!?])\\s+|\\n+")).map(n=>n.trim()).filter(Boolean)}function H(e){N.lastIndex=0;const n=N.exec(e);if(N.lastIndex=0,n)return C(n[1]);V.lastIndex=0;const t=V.test(e);return V.lastIndex=0,t?"city":void 0}function oi(e,n=[]){const t=[],s=new Set,i=(a,h,l={})=>{const v=h.trim();if(!v)return;const b=`${a}:${v.toLowerCase()}`;s.has(b)||(s.add(b),t.push({kind:a,text:v,...l}))},o=si(e);let r=!1;const u=new Set(n);for(const a of o)a.split(/\s+/).slice(1).forEach(h=>{const l=h.replace(/[^A-Za-z]/g,"");/^[A-Z][a-z]+$/.test(l)&&!rn.has(l)&&!dn.has(l)&&!pn(l)&&u.add(l)});const d=H(e);for(const a of o){const h=a.match(/^\s*(\w+)\s*[:\-–]\s*(.+)$/);if(h&&cn[h[1].toLowerCase()]){const c=cn[h[1].toLowerCase()],p=R(h[2].replace(/[.!?]+$/,""));i(c,p,{asset:c==="scene"?H(p):C(p)}),c==="scene"&&(r=!0);continue}J.test(a)&&(J.lastIndex=0,i("scene",un(R(a.replace(/[.!?]+$/,"")),90),{asset:H(a)??d}),r=!0),J.lastIndex=0;const l=new Set,v=new Set;for(const c of a.matchAll(Qt))u.add(c[2]),i("character",c[2],{note:`my ${c[1].toLowerCase()}`}),l.add(c[2]),v.add(c[1].toLowerCase());for(const c of a.matchAll(Jt)){const p=c[1].toLowerCase();v.has(p)||i("character",S(`my ${p}`),{asset:C(p)})}for(const c of a.matchAll(Xt))u.add(c[1]),l.add(c[1]),i("character",c[1]);for(const c of a.matchAll(Gt))i("character",S(hn(c[1])));for(const c of a.matchAll(V))i("place",c[1],{asset:"city",note:"city"});const b=a.split(/\s+/);b.forEach((c,p)=>{const _=c.replace(/[^A-Za-z'’-]/g,"").replace(/['’]s$/,"");if(!(!/^[A-Z][a-z]+$/.test(_)||rn.has(_))&&!(l.has(_)||dn.has(_))&&!pn(_)){if(p===0&&!u.has(_)){const z=(b[1]??"").toLowerCase().replace(/[^a-z'’]/g,"");if(!(/['’]s$/.test(c.replace(/[^A-Za-z'’]/g,""))||/^(and|&|was|is|were|said|says|told|asked|smiled|laughed|cried|came|went|walked|ran|left|met|took|gave|showed|found|made|loved|likes|liked|wanted|had|has)$/.test(z)||/(ing|ed)$/.test(z)))return}u.add(_),i("character",_)}});for(const c of a.matchAll(N))i("place",S(c[1].toLowerCase()),{asset:C(c[1])});for(const c of a.matchAll(ni))i("feeling",S(c[1].toLowerCase()),{asset:c[1].toLowerCase()});for(const c of a.matchAll(ei)){const p=hn(c[1].toLowerCase()),_=p.split(" ").pop();i("object",S(p),{asset:C(tn.includes(p)?p:_)})}for(const c of a.matchAll(ti)){const p=c[1].toLowerCase();t.some(_=>_.kind==="object"&&_.asset===C(p))||i("object",S(p),{asset:C(p)})}}if(!r&&o.length){const a=o[0].replace(/[.!?]+$/,"");t.unshift({kind:"scene",text:un(R(a),90),asset:H(o[0])??d})}else t.sort((a,h)=>+(h.kind==="scene")-+(a.kind==="scene"));return t}const ai=new Set([...en,...In,...O,...jn,...tn,...Wt].filter(e=>!e.includes(" ")).map(e=>e.toLowerCase()));function pn(e){return ai.has(e.toLowerCase())}function li(e){const n=[],t=/[^.!?…]*[.!?…]+["'”’)]*(?=\s|$)/g;let s=0,i;for(;i=t.exec(e);){const o=i[0].trim();o&&n.push(o),s=t.lastIndex,i[0].length===0&&t.lastIndex++}return{complete:n,rest:e.slice(s).trim()}}function ri(e){const n=R(e.replace(/\s+/g," ").trim());return!n||/[.!?…]["'”’)]*$/.test(n)?n:`${n}.`}function ci(e){var h;const n=l=>e.filter(v=>v.kind===l).map(v=>v.text),t=l=>l.length<=1?l.join(""):`${l.slice(0,-1).join(", ")} and ${l[l.length-1]}`,s=n("character").slice(0,3).map(l=>l.replace(/^My\s/,"my ").replace(/^(my \w+)$/i,v=>v.toLowerCase())),i=n("place"),o=i.filter(l=>!O.includes(l.toLowerCase())).slice(0,2),r=i.filter(l=>O.includes(l.toLowerCase())).slice(0,o.length?0:2).map(l=>`the ${l.toLowerCase()}`),u=n("feeling").slice(0,2).map(l=>l.toLowerCase()),d=(h=n("object")[0])==null?void 0:h.toLowerCase();if(!s.length&&!i.length&&!u.length&&!d)return"";let a="A day";return r.length&&(a+=` at ${t(r)}`),o.length&&(a+=` in ${t(o)}`),s.length&&(a+=` with ${t(s)}`),u.length&&(a+=`, feeling ${t(u)}`),d&&(a+=` — and ${/^[aeiou]/.test(d)?"an":"a"} ${d} to remember`),`${a}.`}const An="visual-diary:v2",gn="storyboard:v1";function En(e){return{date:e,title:"",elements:[],entries:[],updatedAt:Date.now()}}function D(e){return!!e&&(e.elements.length>0||e.entries.length>0||!!e.title.trim())}function vn(e,n){return{date:e,title:typeof n.title=="string"?n.title:"",elements:Array.isArray(n.elements)?n.elements:[],entries:Array.isArray(n.entries)?n.entries:[],updatedAt:typeof n.updatedAt=="number"?n.updatedAt:Date.now()}}function di(){var n,t,s,i,o,r;const e={version:2,diaries:{}};try{const u=localStorage.getItem(An);if(u){const a=JSON.parse(u);for(const[h,l]of Object.entries(a.diaries??{}))e.diaries[h]=vn(h,l??{})}const d=localStorage.getItem(gn);if(d){const a=JSON.parse(d),h=((t=(n=a.entries)==null?void 0:n[0])==null?void 0:t.createdAt)??((i=(s=a.elements)==null?void 0:s[0])==null?void 0:i.createdAt)??Date.now(),l=Q(new Date(h));!e.diaries[l]&&((o=a.elements)!=null&&o.length||(r=a.entries)!=null&&r.length)&&(e.diaries[l]=vn(l,{title:a.title&&a.title!=="Untitled story"?a.title:"",elements:a.elements,entries:a.entries})),localStorage.removeItem(gn),Bn(e)}}catch(u){console.warn("Could not read diaries from localStorage",u)}return e}function Bn(e){try{const n={};for(const[t,s]of Object.entries(e.diaries))D(s)&&(n[t]=s);localStorage.setItem(An,JSON.stringify({version:2,diaries:n}))}catch(n){console.warn("Could not save diaries to localStorage",n)}}const hi={"not-allowed":"Microphone access is blocked. Click the 🔒/camera icon in the address bar, allow the microphone, then tap the mic to retry — or type below.","service-not-allowed":"Speech recognition is not allowed here. Try Chrome or Edge, or type below.","audio-capture":"No microphone was found. Plug one in and tap the mic to retry, or type your story below.",network:"Speech recognition lost its network connection. Tap the mic to retry, or type below.","insecure-context":"Voice needs a secure page (https:// or localhost). Type your story below instead.","start-failed":"Couldn’t start listening. Tap the mic to try again."},ui=new Set(["not-allowed","service-not-allowed","audio-capture","insecure-context"]),pi=5,gi=250;function vi(){return typeof window<"u"&&!!(window.SpeechRecognition||window.webkitSpeechRecognition)}class wi{constructor(n,t=navigator.language||"en-US"){k(this,"recognition",null);k(this,"listening",!1);k(this,"wantListening",!1);k(this,"active",!1);k(this,"starting",!1);k(this,"finalText","");k(this,"silentRestarts",0);k(this,"restartTimer");this.cb=n;const s=window.SpeechRecognition||window.webkitSpeechRecognition;if(!s)return;const i=new s;i.lang=t,i.continuous=!0,i.interimResults=!0,i.maxAlternatives=1,i.onstart=()=>this.setListening(!0),i.onend=()=>this.handleEnd(),i.onerror=o=>this.handleError(o.error),i.onresult=o=>{this.silentRestarts=0;let r="";for(let d=o.resultIndex;d<o.results.length;d++){const a=o.results[d],h=a[0].transcript;if(a.isFinal){const l=h.trim();l&&(this.finalText=`${this.finalText} ${l}`.trim(),this.cb.onFinalPhrase(l))}else r+=h}const u=`${this.finalText} ${r}`.trim();this.cb.onTranscript(u,r.length===0)},this.recognition=i}get supported(){return this.recognition!==null}get isListening(){return this.listening}get isActive(){return this.wantListening}async start(){if(!(!this.recognition||this.wantListening||this.starting)){this.starting=!0;try{if(!await this.primeMicrophone())return;this.wantListening=!0,this.silentRestarts=0,this.finalText="",this.cb.onTranscript("",!1),this.startRecognition()}finally{this.starting=!1}}}stop(){var n;this.wantListening=!1,window.clearTimeout(this.restartTimer),this.active?(n=this.recognition)==null||n.stop():this.setListening(!1)}toggle(){this.wantListening?this.stop():this.start()}async primeMicrophone(){var t,s;if(!window.isSecureContext)return this.fail("insecure-context"),!1;const n=navigator.mediaDevices;if(!(n!=null&&n.getUserMedia))return!0;(s=(t=this.cb).onStatus)==null||s.call(t,"Asking for microphone access…");try{return(await n.getUserMedia({audio:!0})).getTracks().forEach(o=>o.stop()),!0}catch(i){const o=i==null?void 0:i.name;return o==="NotAllowedError"||o==="SecurityError"?this.fail("not-allowed"):o==="NotFoundError"||o==="OverconstrainedError"?this.fail("audio-capture"):o==="NotReadableError"||o==="AbortError"?this.cb.onError("Your microphone is busy in another app or tab. Close it and tap the mic to retry.","retryable"):this.fail("start-failed"),!1}}startRecognition(){if(!(!this.recognition||this.active||!this.wantListening))try{this.active=!0,this.recognition.start()}catch(n){(n==null?void 0:n.name)!=="InvalidStateError"&&(this.active=!1,console.warn(n),this.fail("start-failed"))}}handleError(n){if(n!=="aborted"){if(n==="no-speech"){this.silentRestarts++;return}this.fail(n)}}handleEnd(){if(this.active=!1,!this.wantListening){this.setListening(!1);return}if(this.silentRestarts>=pi){this.wantListening=!1,this.setListening(!1),this.cb.onError("I haven't heard anything for a while — tap the mic when you're ready.","retryable");return}window.clearTimeout(this.restartTimer),this.restartTimer=window.setTimeout(()=>this.startRecognition(),gi)}fail(n){var s;const t=ui.has(n)?"fatal":"retryable";this.wantListening=!1,window.clearTimeout(this.restartTimer),this.active&&((s=this.recognition)==null||s.abort()),this.setListening(!1),this.cb.onError(hi[n]??`Speech error: ${n}. Tap the mic to retry.`,t)}setListening(n){this.listening!==n&&(this.listening=n,this.cb.onStateChange(n))}}const mi=document.querySelector("#app");mi.innerHTML=`
  <header class="topbar">
    <div class="brand">
      <span class="brand__mark" aria-hidden="true"></span>
      <span class="brand__name">Visual Diary</span>
    </div>
    <nav class="datebar" aria-label="Choose a day">
      <button class="icon-btn" id="prev-day" type="button" aria-label="Previous day">${I("chevron-left")}</button>
      <label class="datebar__picker">
        <span class="sr-only">Diary date</span>
        <input type="date" id="date-input" />
      </label>
      <button class="icon-btn" id="next-day" type="button" aria-label="Next day">${I("chevron-right")}</button>
      <button class="btn btn--ghost" id="today" type="button">Today</button>
    </nav>
    <div class="topbar__actions">
      <button class="btn btn--ghost btn--danger" id="clear-day" type="button">Clear day</button>
    </div>
  </header>

  <div class="layout">
    <aside class="sidebar" aria-labelledby="history-title">
      <h2 id="history-title" class="eyebrow">Past diaries</h2>
      <ol id="history" class="history"></ol>
      <p id="history-empty" class="muted small">Your diaries will be listed here by date.</p>
    </aside>

    <section class="compose" aria-labelledby="day-heading">
      <p id="day-weekday" class="eyebrow"></p>
      <h1 id="day-heading" class="day-heading"></h1>
      <label class="title-field">
        <span class="sr-only">Title for this day</span>
        <input id="day-title" maxlength="80" placeholder="Give this day a title" />
      </label>

      <div class="voice">
        <button id="mic" class="mic" type="button" aria-pressed="false">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11h-2Z"/></svg>
          <span id="mic-label">Start speaking</span>
        </button>
        <p id="mic-status" class="mic-status" role="status"><span class="dot"></span><span id="mic-status-text">Mic: not started</span></p>
      </div>

      <div id="transcript" class="transcript" aria-live="polite" data-empty="true">Live transcript appears here.</div>
      <p id="fallback" class="fallback" hidden></p>

      <form id="type-form" class="type-form">
        <label for="type-input" class="eyebrow">Write</label>
        <textarea id="type-input" rows="4" placeholder="This morning my sister Maya and I walked to the beach. I felt nervous but hopeful, and we found an old key."></textarea>
        <div class="type-form__row">
          <span class="muted small">⌘/Ctrl + Enter</span>
          <button class="btn btn--primary" type="submit">Add to diary</button>
        </div>
      </form>

      <section class="entries" aria-labelledby="entries-title">
        <h2 id="entries-title" class="eyebrow">Entries <span id="entry-count" class="count">0</span></h2>
        <ol id="entry-list"></ol>
      </section>
    </section>

    <section class="board-panel" aria-labelledby="board-title">
      <div class="board-head">
        <h2 id="board-title" class="eyebrow">Review</h2>
        <ul id="legend" class="legend"></ul>
      </div>
      <div id="review" class="review" aria-live="polite"></div>
    </section>
  </div>
`;const g=e=>document.querySelector(e),Z=g("#mic"),_i=g("#mic-label"),wn=g("#mic-status"),ki=g("#mic-status-text"),$=g("#transcript"),X=g("#fallback"),Tn=g("#type-form"),T=g("#type-input"),P=g("#day-title"),F=g("#date-input"),mn=g("#legend"),_n=g("#entry-list"),fi=g("#entry-count"),kn=g("#history"),bi=g("#history-empty"),M=di(),f=Q();let m=xn(location.hash.slice(1))?location.hash.slice(1):f;const Y=()=>{var e;return(e=M.diaries)[m]??(e[m]=En(m))},yi=new Ut(g("#review"),{onDelete(e){q(n=>({...n,elements:n.elements.filter(t=>t.id!==e)}))}});function q(e){M.diaries[m]={...e(Y()),updatedAt:Date.now()},Bn(M),sn()}function B(e){!xn(e)||e===m||(K(),m=e,history.replaceState(null,"",`#${e}`),$.textContent="Live transcript appears here.",$.dataset.empty="true",sn())}const L=(e,n)=>nn(e).toLocaleDateString(void 0,n);function xi(){const e=new Set(Object.keys(M.diaries).filter(t=>D(M.diaries[t])));e.add(f);const n=[...e].sort().reverse();kn.innerHTML="";for(const t of n){const s=M.diaries[t],i=document.createElement("li"),o=document.createElement("button");o.type="button",o.className="history__item",t===m&&o.setAttribute("aria-current","date"),o.addEventListener("click",()=>B(t));const r=document.createElement("span");r.className="history__date",r.textContent=t===f?`Today · ${L(t,{month:"short",day:"numeric"})}`:L(t,{weekday:"short",month:"short",day:"numeric",year:t.slice(0,4)===f.slice(0,4)?void 0:"numeric"});const u=document.createElement("span");u.className="history__title";const d=(s==null?void 0:s.elements.length)??0;u.textContent=(s==null?void 0:s.title.trim())||(d?`${d} element${d===1?"":"s"}`:"Empty");const a=document.createElement("span");a.className="history__thumbs";for(const h of((s==null?void 0:s.elements)??[]).filter(l=>l.kind!=="scene").slice(0,5)){const l=Sn(h),v=document.createElement("span");v.className="history__thumb",l.type==="icon"?v.innerHTML=l.svg:v.textContent=l.initials,a.appendChild(v)}a.setAttribute("aria-hidden","true"),o.append(r,u),a.childElementCount&&o.appendChild(a),i.appendChild(o),kn.appendChild(i)}bi.hidden=n.length>1||D(M.diaries[f])}function sn(){const e=Y();F.value=m,F.max=f,g("#next-day").disabled=m>=f,g("#today").disabled=m===f,g("#day-weekday").textContent=m===f?`Today · ${L(m,{weekday:"long"})}`:L(m,{weekday:"long"}),g("#day-heading").textContent=L(m,{month:"long",day:"numeric",year:"numeric"}),document.activeElement!==P&&(P.value=e.title),yi.render(m,e.elements,ci(e.elements)),mn.innerHTML="";for(const n of Vn){const t=e.elements.filter(o=>o.kind===n).length,s=document.createElement("li");s.className=`legend__item legend__item--${n}`,s.textContent=bn[n].plural;const i=document.createElement("span");i.className="count",i.textContent=String(t),s.appendChild(i),mn.appendChild(s)}fi.textContent=String(e.entries.length),_n.innerHTML="";for(const n of[...e.entries].reverse()){const t=document.createElement("li"),s=document.createElement("time");s.dateTime=new Date(n.createdAt).toISOString(),s.textContent=new Date(n.createdAt).toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});const i=document.createElement("p");i.textContent=n.text,t.append(s,i),_n.appendChild(t)}xi()}function on(e){const n=e.trim();if(!n)return;const t=Y().elements.filter(i=>i.kind==="character").map(i=>i.text),s=oi(n,t);q(i=>{const o=[...i.elements];for(const r of s){if(o.some(a=>a.kind===r.kind&&a.text.toLowerCase()===r.text.toLowerCase()))continue;const d={id:an(),kind:r.kind,text:r.text,note:r.note,asset:r.asset,x:0,y:0,createdAt:Date.now()};o.push(d)}return{...i,elements:o,entries:[...i.entries,{id:an(),text:n,createdAt:Date.now()}]}})}const $n=1600;let y="",A;function K(){window.clearTimeout(A);const e=y.trim();y="",e&&on(ri(e))}function Ci(e){y=`${y} ${e}`.trim();const{complete:n,rest:t}=li(y);y=t,n.length&&on(n.join(" ")),window.clearTimeout(A),y&&(A=window.setTimeout(K,$n))}function x(e,n){ki.textContent=e,n?wn.dataset.tone=n:delete wn.dataset.tone}const j=new wi({onTranscript(e,n){$.dataset.empty=String(!e),$.textContent=e||"Listening…",!n&&y&&(window.clearTimeout(A),A=window.setTimeout(K,$n))},onFinalPhrase(e){Ci(e)},onStateChange(e){Z.classList.toggle("is-listening",e),Z.setAttribute("aria-pressed",String(e)),_i.textContent=e?"Stop":"Start speaking",x(e?"Mic on — listening. Each sentence is added when you finish it.":"Mic off",e?"live":void 0),!e&&!j.isActive&&K(),e&&(X.hidden=!0)},onError(e,n){x(e,"error"),n==="fatal"&&Mi("Voice isn’t available right now — write below and the page builds the same way. Tap the mic again after fixing access.")},onStatus(e){x(e,"busy")}});function Mi(e){X.hidden=!1,X.textContent=e,T.focus()}var fn;!vi()||!j.supported?(Z.disabled=!0,x("Voice input isn’t supported in this browser — use Chrome or Edge, or write below.","error"),$.hidden=!0):(Z.addEventListener("click",()=>j.toggle()),(fn=navigator.permissions)==null||fn.query({name:"microphone"}).then(e=>{const n=()=>{j.isActive||(e.state==="granted"?x("Mic allowed — tap Start speaking"):e.state==="denied"?x("Mic blocked — allow it in the address bar’s site settings, or write below.","error"):x("Tap Start speaking — your browser will ask for the microphone"))};n(),e.onchange=n}).catch(()=>x("Tap Start speaking — your browser will ask for the microphone")));Tn.addEventListener("submit",e=>{e.preventDefault(),on(T.value),T.value="",T.focus()});T.addEventListener("keydown",e=>{e.key==="Enter"&&(e.metaKey||e.ctrlKey)&&Tn.requestSubmit()});F.addEventListener("change",()=>B(F.value));g("#prev-day").addEventListener("click",()=>B(yn(m,-1)));g("#next-day").addEventListener("click",()=>B(yn(m,1)));g("#today").addEventListener("click",()=>B(f));window.addEventListener("hashchange",()=>B(location.hash.slice(1)));P.addEventListener("change",()=>q(e=>({...e,title:P.value.trim()})));g("#clear-day").addEventListener("click",()=>{D(Y())&&confirm(`Clear everything on ${L(m,{month:"long",day:"numeric"})}?`)&&(j.isActive&&j.stop(),y="",window.clearTimeout(A),q(()=>En(m)))});history.replaceState(null,"",`#${m}`);sn();
