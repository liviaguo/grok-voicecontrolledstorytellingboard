var Fn=Object.defineProperty;var Un=(e,n,t)=>n in e?Fn(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var k=(e,n,t)=>Un(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Cn={character:{label:"Person",plural:"People"},place:{label:"Place",plural:"Places"},feeling:{label:"Feeling",plural:"Feelings"},object:{label:"Object",plural:"Objects"},scene:{label:"Scene",plural:"Scenes"}},Kn=["scene","character","place","object","feeling"];function dn(){return typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function tn(e=new Date){const n=String(e.getMonth()+1).padStart(2,"0"),t=String(e.getDate()).padStart(2,"0");return`${e.getFullYear()}-${n}-${t}`}function sn(e){const[n,t,o]=e.split("-").map(Number);return new Date(n,t-1,o)}function Mn(e,n){const t=sn(e);return t.setDate(t.getDate()+n),tn(t)}const Sn=e=>/^\d{4}-\d{2}-\d{2}$/.test(e)&&!Number.isNaN(sn(e).getTime()),Jn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Yn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,qn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Wn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Gn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Xn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Qn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,ne=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,ee=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,te=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,ie=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,se=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,oe=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,ae=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,re=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,le=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,ce=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,de=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,he=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,ue=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,pe=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,ge=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,ve=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,we=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,me=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,_e=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,ke=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,fe=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,be=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,ye=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,xe=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Ce=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Me=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Se=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Ie=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Le=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,je=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Ae=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Ee=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Be=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Te=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,$e=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,He=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Ve=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,ze=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Ne=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Re=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Oe=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,De=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Pe=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Ze=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Fe=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Ue=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Ke=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Je=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Ye=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,qe=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,We=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Ge=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Xe=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Qe=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,nt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,et=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,tt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,it=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,st=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,ot=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,at=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,rt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,lt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,ct=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,dt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,ht=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,ut=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,pt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,gt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,vt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,wt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,mt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,_t=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,kt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,ft=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,bt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,yt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,xt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Ct=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Mt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,St=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,It=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Lt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,jt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,At=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Et=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Bt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Tt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,$t=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Ht=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Vt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,zt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Nt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Rt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Ot=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Dt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Pt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Zt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Ft=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Ut=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Kt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Jt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Yt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,qt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Wt=Object.assign({"/node_modules/lucide-static/icons/anchor.svg":Jn,"/node_modules/lucide-static/icons/angry.svg":Yn,"/node_modules/lucide-static/icons/annoyed.svg":qn,"/node_modules/lucide-static/icons/apple.svg":Wn,"/node_modules/lucide-static/icons/baby.svg":Gn,"/node_modules/lucide-static/icons/battery-full.svg":Xn,"/node_modules/lucide-static/icons/battery-low.svg":Qn,"/node_modules/lucide-static/icons/bed.svg":ne,"/node_modules/lucide-static/icons/beer.svg":ee,"/node_modules/lucide-static/icons/bike.svg":te,"/node_modules/lucide-static/icons/book-open.svg":ie,"/node_modules/lucide-static/icons/box.svg":se,"/node_modules/lucide-static/icons/briefcase.svg":oe,"/node_modules/lucide-static/icons/building-2.svg":ae,"/node_modules/lucide-static/icons/cake.svg":re,"/node_modules/lucide-static/icons/camera.svg":le,"/node_modules/lucide-static/icons/car.svg":ce,"/node_modules/lucide-static/icons/castle.svg":de,"/node_modules/lucide-static/icons/cat.svg":he,"/node_modules/lucide-static/icons/chevron-left.svg":ue,"/node_modules/lucide-static/icons/chevron-right.svg":pe,"/node_modules/lucide-static/icons/church.svg":ge,"/node_modules/lucide-static/icons/clapperboard.svg":ve,"/node_modules/lucide-static/icons/clock.svg":we,"/node_modules/lucide-static/icons/cloud-rain.svg":me,"/node_modules/lucide-static/icons/coffee.svg":_e,"/node_modules/lucide-static/icons/compass.svg":ke,"/node_modules/lucide-static/icons/croissant.svg":fe,"/node_modules/lucide-static/icons/dog.svg":be,"/node_modules/lucide-static/icons/dumbbell.svg":ye,"/node_modules/lucide-static/icons/eye.svg":xe,"/node_modules/lucide-static/icons/feather.svg":Ce,"/node_modules/lucide-static/icons/ferris-wheel.svg":Me,"/node_modules/lucide-static/icons/flame.svg":Se,"/node_modules/lucide-static/icons/flower-2.svg":Ie,"/node_modules/lucide-static/icons/flower.svg":Le,"/node_modules/lucide-static/icons/footprints.svg":je,"/node_modules/lucide-static/icons/frown.svg":Ae,"/node_modules/lucide-static/icons/gem.svg":Ee,"/node_modules/lucide-static/icons/gift.svg":Be,"/node_modules/lucide-static/icons/graduation-cap.svg":Te,"/node_modules/lucide-static/icons/guitar.svg":$e,"/node_modules/lucide-static/icons/hand-heart.svg":He,"/node_modules/lucide-static/icons/heart-handshake.svg":Ve,"/node_modules/lucide-static/icons/heart.svg":ze,"/node_modules/lucide-static/icons/hospital.svg":Ne,"/node_modules/lucide-static/icons/house.svg":Re,"/node_modules/lucide-static/icons/ice-cream-cone.svg":Oe,"/node_modules/lucide-static/icons/image.svg":De,"/node_modules/lucide-static/icons/key-round.svg":Pe,"/node_modules/lucide-static/icons/key.svg":Ze,"/node_modules/lucide-static/icons/lamp.svg":Fe,"/node_modules/lucide-static/icons/landmark.svg":Ue,"/node_modules/lucide-static/icons/laptop.svg":Ke,"/node_modules/lucide-static/icons/laugh.svg":Je,"/node_modules/lucide-static/icons/leaf.svg":Ye,"/node_modules/lucide-static/icons/library.svg":qe,"/node_modules/lucide-static/icons/mail.svg":We,"/node_modules/lucide-static/icons/map-pin.svg":Ge,"/node_modules/lucide-static/icons/map.svg":Xe,"/node_modules/lucide-static/icons/meh.svg":Qe,"/node_modules/lucide-static/icons/mic.svg":nt,"/node_modules/lucide-static/icons/moon.svg":et,"/node_modules/lucide-static/icons/mountain-snow.svg":tt,"/node_modules/lucide-static/icons/mountain.svg":it,"/node_modules/lucide-static/icons/music.svg":st,"/node_modules/lucide-static/icons/palette.svg":ot,"/node_modules/lucide-static/icons/party-popper.svg":at,"/node_modules/lucide-static/icons/pen-line.svg":rt,"/node_modules/lucide-static/icons/phone.svg":lt,"/node_modules/lucide-static/icons/piano.svg":ct,"/node_modules/lucide-static/icons/pizza.svg":dt,"/node_modules/lucide-static/icons/plane.svg":ht,"/node_modules/lucide-static/icons/route.svg":ut,"/node_modules/lucide-static/icons/sailboat.svg":pt,"/node_modules/lucide-static/icons/school.svg":gt,"/node_modules/lucide-static/icons/scroll.svg":vt,"/node_modules/lucide-static/icons/shield.svg":wt,"/node_modules/lucide-static/icons/ship.svg":mt,"/node_modules/lucide-static/icons/shirt.svg":_t,"/node_modules/lucide-static/icons/shopping-bag.svg":kt,"/node_modules/lucide-static/icons/shopping-cart.svg":ft,"/node_modules/lucide-static/icons/smile.svg":bt,"/node_modules/lucide-static/icons/snowflake.svg":yt,"/node_modules/lucide-static/icons/sofa.svg":xt,"/node_modules/lucide-static/icons/sparkle.svg":Ct,"/node_modules/lucide-static/icons/sparkles.svg":Mt,"/node_modules/lucide-static/icons/sprout.svg":St,"/node_modules/lucide-static/icons/star.svg":It,"/node_modules/lucide-static/icons/store.svg":Lt,"/node_modules/lucide-static/icons/sun.svg":jt,"/node_modules/lucide-static/icons/sunrise.svg":At,"/node_modules/lucide-static/icons/sunset.svg":Et,"/node_modules/lucide-static/icons/target.svg":Bt,"/node_modules/lucide-static/icons/tent.svg":Tt,"/node_modules/lucide-static/icons/ticket.svg":$t,"/node_modules/lucide-static/icons/train-front.svg":Ht,"/node_modules/lucide-static/icons/tram-front.svg":Vt,"/node_modules/lucide-static/icons/tree-palm.svg":zt,"/node_modules/lucide-static/icons/tree-pine.svg":Nt,"/node_modules/lucide-static/icons/trees.svg":Rt,"/node_modules/lucide-static/icons/umbrella.svg":Ot,"/node_modules/lucide-static/icons/user-round.svg":Dt,"/node_modules/lucide-static/icons/user.svg":Pt,"/node_modules/lucide-static/icons/users.svg":Zt,"/node_modules/lucide-static/icons/utensils.svg":Ft,"/node_modules/lucide-static/icons/waves.svg":Ut,"/node_modules/lucide-static/icons/wheat.svg":Kt,"/node_modules/lucide-static/icons/wine.svg":Jt,"/node_modules/lucide-static/icons/x.svg":Yt,"/node_modules/lucide-static/icons/zap.svg":qt}),G={};for(const[e,n]of Object.entries(Wt))G[e.split("/").pop().replace(/\.svg$/,"")]=n.replace(/<!--.*?-->/s,"").trim();const Gt={city:"building-2",downtown:"building-2",street:"route",park:"trees",beach:"tree-palm",home:"house",school:"school",kitchen:"utensils",forest:"tree-pine",cafe:"coffee",office:"briefcase",library:"library",garden:"flower",mountain:"mountain",lake:"waves",river:"waves",ocean:"waves",village:"house",castle:"castle",market:"store",restaurant:"utensils",airport:"plane",train:"train-front",bedroom:"bed",museum:"landmark",hospital:"hospital",church:"church",island:"tree-palm",desert:"sun",cabin:"tent",gym:"dumbbell",studio:"palette",lighthouse:"anchor",harbor:"anchor",bakery:"croissant",bridge:"route",rooftop:"building-2",subway:"tram-front",farm:"wheat",cave:"mountain-snow",pool:"waves",concert:"music",campus:"graduation-cap",attic:"house",pub:"beer",bar:"wine"},In={family:"users",parents:"users",friends:"users",grandparents:"users",children:"users",kids:"users",team:"users",baby:"baby",dog:"dog",puppy:"dog",cat:"cat",kitten:"cat"},Xt={key:"key",keys:"key",book:"book-open",notebook:"book-open",letter:"mail",card:"mail",camera:"camera",coffee:"coffee",tea:"coffee",song:"music",guitar:"music",piano:"music",gift:"gift",bike:"bike",music:"music",car:"car",ticket:"ticket",phone:"phone",map:"map",umbrella:"umbrella",clock:"clock",candle:"flame",bag:"shopping-bag",painting:"image",flowers:"flower-2",laptop:"laptop",plant:"leaf",dog:"dog",cat:"cat",pizza:"pizza",wine:"wine",apple:"apple",cake:"cake",bread:"croissant","ice-cream":"ice-cream-cone",ring:"gem",necklace:"gem",dress:"shirt",shoes:"footprints",boat:"sailboat",lantern:"lamp",lamp:"lamp",balloon:"party-popper",kite:"sparkle",hat:"shirt",scarf:"shirt",blanket:"sofa",shell:"sparkle"},Ln={happy:["smile","positive"],joyful:["laugh","positive"],joy:["laugh","positive"],excited:["party-popper","positive"],delighted:["laugh","positive"],fun:["party-popper","positive"],hopeful:["sunrise","positive"],optimistic:["sunrise","positive"],grateful:["hand-heart","positive"],thankful:["hand-heart","positive"],blessed:["hand-heart","positive"],love:["heart","positive"],loved:["heart","positive"],proud:["star","positive"],brave:["shield","positive"],inspired:["sparkles","positive"],amazed:["sparkles","positive"],surprised:["sparkles","positive"],motivated:["target","positive"],focused:["target","calm"],energized:["battery-full","positive"],curious:["eye","calm"],calm:["leaf","calm"],peaceful:["leaf","calm"],content:["leaf","calm"],relieved:["feather","calm"],safe:["shield","calm"],cozy:["coffee","calm"],free:["feather","calm"],nostalgic:["image","calm"],sad:["frown","negative"],lonely:["cloud-rain","negative"],heartbroken:["cloud-rain","negative"],homesick:["cloud-rain","negative"],nervous:["zap","negative"],anxious:["zap","negative"],worried:["zap","negative"],stressed:["zap","negative"],overwhelmed:["zap","negative"],restless:["zap","negative"],scared:["frown","negative"],afraid:["frown","negative"],angry:["angry","negative"],frustrated:["annoyed","negative"],upset:["frown","negative"],jealous:["annoyed","negative"],embarrassed:["meh","negative"],confused:["meh","neutral"],bored:["meh","neutral"],tired:["battery-low","neutral"],exhausted:["battery-low","negative"]},q={character:"user",place:"map-pin",object:"box"};function Qt(e){const n=e.toLowerCase();return/(night|tonight|evening|dark)/.test(n)?"moon":/(sunset|dusk)/.test(n)?"sunset":/(morning|dawn|sunrise)/.test(n)?"sunrise":"sun"}function j(e){return G[e]??G.box??""}function hn(e){const n=e.asset??"";switch(e.kind){case"place":return Gt[n]??q.place;case"object":return Xt[n]??q.object;case"scene":return Qt(e.text);case"feeling":return(Ln[n||e.text.toLowerCase()]??["heart"])[0];case"character":return In[n]??q.character}}function jn(e){if(e.kind==="feeling"){const[n,t]=Ln[e.asset??e.text.toLowerCase()]??["heart","neutral"];return{type:"icon",svg:j(n),tone:t}}return e.kind==="character"?/^my\s/i.test(e.text)||e.asset&&In[e.asset]?{type:"icon",svg:j(hn(e))}:{type:"monogram",initials:e.text.split(/\s+/).filter(Boolean).slice(0,2).map(o=>o[0].toUpperCase()).join("")||"?"}:{type:"icon",svg:j(hn(e))}}const ni=[{kind:"character",title:"People",hint:"Who was there"},{kind:"place",title:"Places",hint:"Where it happened"},{kind:"object",title:"Objects",hint:"Things worth keeping"},{kind:"feeling",title:"Feelings",hint:"How it felt"}];class ei{constructor(n,t){k(this,"seen",new Set);k(this,"date","");this.root=n,this.cb=t}render(n,t,o){var d,a,h;n!==this.date&&(this.date=n,this.seen=new Set(t.map(r=>r.id)));const i=(a=(d=document.activeElement)==null?void 0:d.closest("[data-id]"))==null?void 0:a.dataset.id;if(this.root.innerHTML="",!t.length){this.root.appendChild(this.empty());return}const s=w("header","review__head");s.append(w("p","eyebrow","The day in one page")),o&&s.append(w("p","review__summary",o)),this.root.appendChild(s);const l=t.filter(r=>r.kind==="scene");if(l.length){const r=this.section("Moments","In the order you told it",l.length),v=w("ol","moments");l.forEach((x,c)=>{const p=this.item(x,"moment"),_=w("span","moment__n",String(c+1).padStart(2,"0"));p.prepend(_),v.appendChild(p)}),r.appendChild(v),this.root.appendChild(r)}const u=w("div","review__grid");for(const{kind:r,title:v,hint:x}of ni){const c=t.filter(_=>_.kind===r),p=this.section(v,x,c.length);if(p.classList.add(`review__section--${r}`),c.length){const _=w("ul","tiles");for(const H of c)_.appendChild(this.item(H,"tile"));p.appendChild(_)}else p.appendChild(w("p","review__none",`No ${v.toLowerCase()} yet`));u.appendChild(p)}this.root.appendChild(u);for(const r of t)this.seen.add(r.id);i&&((h=this.root.querySelector(`[data-id="${CSS.escape(i)}"]`))==null||h.focus())}empty(){const n=w("div","review__empty");return n.append(w("p","review__empty-title","Nothing on this day yet."),w("p","muted","Speak or write a few sentences. When each sentence ends, its people, places, feelings, objects and moments are added to this page.")),n}section(n,t,o){const i=w("section","review__section"),s=w("h3","review__title",n);return s.append(w("span","count",String(o))),i.append(s,w("p","review__hint",t)),i}item(n,t){const o=w("li",t);o.dataset.id=n.id,o.dataset.kind=n.kind,o.tabIndex=0,this.seen.has(n.id)||o.classList.add("is-new");const i=Cn[n.kind].label;o.setAttribute("aria-label",`${i}: ${n.text}${n.note?` (${n.note})`:""}`);const s=jn(n),l=w("span",`${t}__icon`);l.setAttribute("aria-hidden","true"),s.type==="icon"?(l.innerHTML=s.svg,s.tone&&(l.dataset.tone=s.tone)):(l.classList.add("is-monogram"),l.textContent=s.initials);const u=w("span",`${t}__text`);u.append(w("span",`${t}__label`,n.text)),n.note&&u.append(w("span",`${t}__note`,n.note));const d=w("button",`${t}__delete`);return d.type="button",d.title="Remove",d.setAttribute("aria-label",`Remove ${i.toLowerCase()} “${n.text}”`),d.innerHTML=j("x"),d.addEventListener("click",()=>this.cb.onDelete(n.id)),o.addEventListener("keydown",a=>{var h;if((a.key==="Delete"||a.key==="Backspace")&&a.target===o){a.preventDefault();const r=o.nextElementSibling??o.previousElementSibling;this.cb.onDelete(n.id),r!=null&&r.dataset.id&&((h=this.root.querySelector(`[data-id="${CSS.escape(r.dataset.id)}"]`))==null||h.focus())}}),o.append(l,u,d),o}}function w(e,n,t){const o=document.createElement(e);return o.className=n,t!==void 0&&(o.textContent=t),o}const on=["mom","mum","mother","dad","father","sister","brother","grandma","grandmother","grandpa","grandfather","friend","best friend","partner","husband","wife","boyfriend","girlfriend","boss","teacher","neighbour","neighbor","aunt","uncle","cousin","son","daughter","baby","dog","cat","puppy","kitten","coworker","roommate","kid","kids","family","parents","friends","grandparents","children","team","classmate","colleague"],An=["dragon","princess","prince","king","queen","wizard","witch","knight","stranger","girl","boy","man","woman","old man","old woman","fox","bear","owl","robot","ghost"],O=["park","beach","home","house","school","kitchen","forest","woods","city","cafe","café","coffee shop","office","library","garden","mountain","mountains","lake","river","ocean","sea","village","castle","street","market","restaurant","airport","train","station","bedroom","backyard","museum","hospital","church","island","desert","cabin","gym","studio","lighthouse","harbor","harbour","attic","meadow","bakery","bridge","rooftop","subway","farm","shore","cave","downtown","neighbourhood","neighborhood","trail","pool","concert","bar","pub","supermarket","mall","campus","waterfront","living room"],En=["Toronto","Montreal","Vancouver","Ottawa","Calgary","New York","Boston","Chicago","San Francisco","Los Angeles","Seattle","London","Paris","Berlin","Rome","Madrid","Lisbon","Amsterdam","Tokyo","Kyoto","Seoul","Beijing","Shanghai","Hong Kong","Singapore","Sydney","Melbourne","Mexico City"],ti={house:"home","living room":"home",attic:"home",woods:"forest",café:"cafe","coffee shop":"cafe",mountains:"mountain",sea:"ocean",harbour:"harbor",station:"train",shore:"beach",waterfront:"harbor",backyard:"garden",meadow:"park",trail:"forest",neighbourhood:"street",neighborhood:"street",campus:"school",bar:"restaurant",pub:"restaurant",supermarket:"market",mall:"market",bicycle:"bike",photo:"camera",photograph:"camera",present:"gift",flower:"flowers",journal:"notebook",puppy:"dog",kitten:"cat",books:"book",photos:"camera",backpack:"bag",computer:"laptop","ice cream":"ice-cream",plants:"plant"},M=e=>{const n=e.toLowerCase();return ti[n]??n},Bn=["happy","sad","excited","nervous","anxious","calm","angry","scared","afraid","proud","lonely","grateful","tired","hopeful","curious","joyful","joy","love","loved","overwhelmed","peaceful","frustrated","relieved","nostalgic","confused","brave","bored","surprised","content","jealous","embarrassed","thankful","cozy","free","heartbroken","inspired","safe","worried","delighted","homesick","stressed","focused","motivated","energized","exhausted","restless","optimistic","amazed","blessed","upset","fun"],an=["key","letter","book","map","phone","camera","umbrella","coffee","tea","cake","guitar","piano","ring","necklace","photo","photograph","gift","present","box","bike","bicycle","car","ticket","lamp","candle","flower","flowers","notebook","journal","sword","shell","stone","kite","balloon","hat","scarf","bag","backpack","blanket","mirror","clock","painting","song","pie","bread","apple","boat","lantern","laptop","computer","wine","pizza","ice cream","plant","plants","keys","card","dress","shoes"],ii=["once upon a time","this morning","the day","all day","after work","after school","for lunch","for dinner","on the weekend","weekend","this afternoon","this evening","tonight","last night","yesterday","today","tomorrow","at night","at dawn","at sunset","in the morning","later","suddenly","then","one day","that night","in the end","finally","meanwhile"],un=new Set(["I","The","A","An","And","But","So","Then","We","He","She","They","It","My","Our","This","That","Today","Yesterday","Tomorrow","Once","When","After","Before","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Suddenly","Finally","Later","Meanwhile","One","There","Here","In","At","On","To","Oh","OK","Okay","Yes","No","Hi","Hello","Me","You","Your","His","Her","Their","Its","January","February","March","April","May","June","July","August","September","October","November","December","Also","Just","Maybe","Some","With","For","From","Of","Is","Was"]),Tn=new Set(["went","walked","had","got","spent","felt","feeling","woke","saw","met","found","made","took","came","left","ate","drank","bought","tried","started","finished","played","watched","visited","called","talked","lots","lot","everyone","everything","nothing","someone","somehow","what","why","how","who","where","if","because","since","while","until","though","although","as","by","not","all","most","many","few","every","each","both","such","these","those","us","him","them","let","lets","let’s","let's","thanks","thank","good","great","nice","really","very","still","even","now","back","up","down","out","over","walking","drinking","eating","sitting","reading","writing","working","having","going","getting","looking"]),pn={character:"character",who:"character",person:"character",place:"place",where:"place",location:"place",feeling:"feeling",mood:"feeling",emotion:"feeling",object:"object",thing:"object",item:"object",scene:"scene",moment:"scene",chapter:"scene"},B=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),K=e=>new RegExp(`(?<![\\p{L}\\p{N}])(${[...e].sort((n,t)=>t.length-n.length).map(B).join("|")})(?![\\p{L}\\p{N}])`,"giu"),si=new RegExp(`\\b(?:[Mm]y|[Oo]ur)\\s+(${[...on].sort((e,n)=>n.length-e.length).map(B).join("|")})\\b`,"gi"),oi=new RegExp(`\\b(?:a|an|the)\\s+((?:\\w+\\s)?(?:${An.map(B).join("|")}))\\b`,"gi"),ai=/\b(?:named|called)\s+([A-Z][a-z]+)/g,ri=new RegExp(`\\b(?:[Mm]y|[Oo]ur)\\s+(${[...on].sort((e,n)=>n.length-e.length).map(B).join("|")})\\s+([A-Z][a-z]+)\\b`,"g"),z=new RegExp(`\\b(${En.map(B).join("|")})\\b`,"g"),gn=new Set(En.flatMap(e=>e.split(" "))),N=K(O),li=K(Bn),ci=new RegExp(`\\b(?:a|an|the|my|our|his|her|their|some)\\s+((?:\\w+\\s)?(?:${an.map(B).join("|")}))\\b`,"gi"),W=K(ii),di=K(["coffee","tea","pizza","wine","cake","bread","flowers","ice cream","music","books","photos"]),hi=new Set(["a","an","the","my","and","of","to","very","was","is"]);function vn(e){const n=e.trim().split(/\s+/);return n.length>1&&hi.has(n[0].toLowerCase())&&n.shift(),n.join(" ")}function L(e){return e.replace(/\b\w/g,n=>n.toUpperCase())}function R(e){const n=e.trim();return n.charAt(0).toUpperCase()+n.slice(1)}function wn(e,n){return e.length<=n?e:`${e.slice(0,n-1).trimEnd()}…`}function ui(e){return e.split(new RegExp("(?<=[.!?])\\s+|\\n+")).map(n=>n.trim()).filter(Boolean)}function V(e){N.lastIndex=0;const n=N.exec(e);if(N.lastIndex=0,n)return M(n[1]);z.lastIndex=0;const t=z.test(e);return z.lastIndex=0,t?"city":void 0}function pi(e,n=[]){const t=[],o=new Set,i=(a,h,r={})=>{const v=h.trim();if(!v)return;const x=`${a}:${v.toLowerCase()}`;o.has(x)||(o.add(x),t.push({kind:a,text:v,...r}))},s=ui(e);let l=!1;const u=new Set(n);for(const a of s)a.split(/\s+/).slice(1).forEach(h=>{const r=h.replace(/[^A-Za-z]/g,"");/^[A-Z][a-z]+$/.test(r)&&!un.has(r)&&!gn.has(r)&&!X(r)&&u.add(r)});const d=V(e);for(const a of s){const h=a.match(/^\s*(\w+)\s*[:\-–]\s*(.+)$/);if(h&&pn[h[1].toLowerCase()]){const c=pn[h[1].toLowerCase()],p=R(h[2].replace(/[.!?]+$/,""));i(c,p,{asset:c==="scene"?V(p):M(p)}),c==="scene"&&(l=!0);continue}W.test(a)&&(W.lastIndex=0,i("scene",wn(R(a.replace(/[.!?]+$/,"")),90),{asset:V(a)??d}),l=!0),W.lastIndex=0;const r=new Set,v=new Set;for(const c of a.matchAll(ri))u.add(c[2]),i("character",c[2],{note:`my ${c[1].toLowerCase()}`}),r.add(c[2]),v.add(c[1].toLowerCase());for(const c of a.matchAll(si)){const p=c[1].toLowerCase();v.has(p)||i("character",L(`my ${p}`),{asset:M(p)})}for(const c of a.matchAll(ai))u.add(c[1]),r.add(c[1]),i("character",c[1]);for(const c of a.matchAll(oi))i("character",L(vn(c[1])));for(const c of a.matchAll(z))i("place",c[1],{asset:"city",note:"city"});const x=a.split(/\s+/);x.forEach((c,p)=>{const _=c.replace(/[^A-Za-z'’-]/g,"").replace(/['’]s$/,"");if(!(!/^[A-Z][a-z]+$/.test(_)||un.has(_))&&!(r.has(_)||gn.has(_))&&!X(_)){if(p===0&&!u.has(_)){const H=(x[1]??"").toLowerCase().replace(/[^a-z'’]/g,"");if(!(/['’]s$/.test(c.replace(/[^A-Za-z'’]/g,""))||/^(and|&|was|is|were|said|says|told|asked|smiled|laughed|cried|came|went|walked|ran|left|met|took|gave|showed|found|made|loved|likes|liked|wanted|had|has)$/.test(H)||/(ing|ed)$/.test(H)))return}u.add(_),i("character",_)}});for(const c of a.matchAll(N))i("place",L(c[1].toLowerCase()),{asset:M(c[1])});for(const c of a.matchAll(li))i("feeling",L(c[1].toLowerCase()),{asset:c[1].toLowerCase()});for(const c of a.matchAll(ci)){const p=vn(c[1].toLowerCase()),_=p.split(" ").pop();i("object",L(p),{asset:M(an.includes(p)?p:_)})}for(const c of a.matchAll(di)){const p=c[1].toLowerCase();t.some(_=>_.kind==="object"&&_.asset===M(p))||i("object",L(p),{asset:M(p)})}}if(!l&&s.length){const a=s[0].replace(/[.!?]+$/,"");t.unshift({kind:"scene",text:wn(R(a),90),asset:V(s[0])??d})}else t.sort((a,h)=>+(h.kind==="scene")-+(a.kind==="scene"));return t}const gi=new Set([...on,...An,...O,...Bn,...an,...Tn].filter(e=>!e.includes(" ")).map(e=>e.toLowerCase()));function X(e){return gi.has(e.toLowerCase())}function $n(e){const n=[],t=/[^.!?…]*[.!?…]+["'”’)]*(?=\s|$)/g;let o=0,i;for(;i=t.exec(e);){const s=i[0].trim();s&&n.push(s),o=t.lastIndex,i[0].length===0&&t.lastIndex++}return{complete:n,rest:e.slice(o).trim()}}function Hn(e){const n=R(e.replace(/\s+/g," ").trim());return!n||/[.!?…]["'”’)]*$/.test(n)?n:`${n}.`}function vi(e){var h;const n=r=>e.filter(v=>v.kind===r).map(v=>v.text),t=r=>r.length<=1?r.join(""):`${r.slice(0,-1).join(", ")} and ${r[r.length-1]}`,o=n("character").slice(0,3).map(r=>r.replace(/^My\s/,"my ").replace(/^(my \w+)$/i,v=>v.toLowerCase())),i=n("place"),s=i.filter(r=>!O.includes(r.toLowerCase())).slice(0,2),l=i.filter(r=>O.includes(r.toLowerCase())).slice(0,s.length?0:2).map(r=>`the ${r.toLowerCase()}`),u=n("feeling").slice(0,2).map(r=>r.toLowerCase()),d=(h=n("object")[0])==null?void 0:h.toLowerCase();if(!o.length&&!i.length&&!u.length&&!d)return"";let a="A day";return l.length&&(a+=` at ${t(l)}`),s.length&&(a+=` in ${t(s)}`),o.length&&(a+=` with ${t(o)}`),u.length&&(a+=`, feeling ${t(u)}`),d&&(a+=` — and ${/^[aeiou]/.test(d)?"an":"a"} ${d} to remember`),`${a}.`}const wi=new Set(["i","we","he","she","they","you","it","someone","everyone","everybody","somebody","nobody","people","there","this","that"]),Vn=new Set(["my","our","his","her","their","your","the","a","an","this","that","these","those","its"]),mi=new Set(["am","is","are","was","were","be","been","have","has","had","do","does","did","will","would","can","could","shall","should","may","might","must","i'm","we're","they're","it's","she's","he's","i've","we've","i'd","we'd","went","go","goes","saw","see","sees","met","meet","found","find","finds","felt","feel","feels","spent","spend","got","get","gets","took","take","takes","made","make","makes","came","come","comes","ate","eat","eats","drank","drink","bought","buy","left","leave","ran","run","sat","sit","stood","thought","think","knew","know","told","said","say","says","gave","give","wrote","write","read","heard","hear","brought","kept","began","woke","slept","love","loves","like","likes","want","wants","need","needs","walk","walks","swam","flew","drove","rode","sang","became","held","lost","won","paid","sent","built","caught","taught","fell","grew","hope","hoped","wish"]),_i=new Set(["tired","excited","scared","bored","worried","surprised","interested","relaxed","crowded","old-fashioned","red","bed"]),ki=e=>e.toLowerCase().replace(/[“”"()]/g,"").split(/[\s,;:]+/).map(n=>n.replace(/[.!?…]+$/,"").replace(/’/g,"'")).filter(Boolean);function fi(e,n){return!!(mi.has(e)||/^[a-z]{3,}ed$/.test(e)&&!_i.has(e)&&!(n&&Vn.has(n)))}function bi(e){const n=e.trim().split(/\s+/).map(i=>i.replace(/[^\p{L}'’-]/gu,"")),t=ki(e);let o=!1;for(let i=0;i<t.length;i++){const s=t[i];if(o&&fi(s,t[i-1]))return!0;const l=new RegExp("^\\p{Lu}","u").test(n[i]??"")&&(i>0||!Tn.has(s));(wi.has(s)||Vn.has(s)||l&&!X(s)||s==="family"||s==="friends")&&(o=!0)}return!1}const yi=/[.!?…]["'”’)]*$/;function zn(e){const n=e.trim();return!n||!new RegExp("\\p{L}","u").test(n)?!1:yi.test(n)?!0:bi(n)}function Nn(e){const n=[],t=[];for(const o of e.split(/\n+/)){const{complete:i,rest:s}=$n(o.trim());n.push(...i),s&&(zn(s)?n.push(Hn(s)):t.push(s))}return{complete:n,rest:t.join(" ").trim()}}const Rn="visual-diary:v2",mn="storyboard:v1";function On(e){return{date:e,title:"",elements:[],entries:[],updatedAt:Date.now()}}function D(e){return!!e&&(e.elements.length>0||e.entries.length>0||!!e.title.trim())}function _n(e,n){return{date:e,title:typeof n.title=="string"?n.title:"",elements:Array.isArray(n.elements)?n.elements:[],entries:Array.isArray(n.entries)?n.entries:[],updatedAt:typeof n.updatedAt=="number"?n.updatedAt:Date.now()}}function xi(){var n,t,o,i,s,l;const e={version:2,diaries:{}};try{const u=localStorage.getItem(Rn);if(u){const a=JSON.parse(u);for(const[h,r]of Object.entries(a.diaries??{}))e.diaries[h]=_n(h,r??{})}const d=localStorage.getItem(mn);if(d){const a=JSON.parse(d),h=((t=(n=a.entries)==null?void 0:n[0])==null?void 0:t.createdAt)??((i=(o=a.elements)==null?void 0:o[0])==null?void 0:i.createdAt)??Date.now(),r=tn(new Date(h));!e.diaries[r]&&((s=a.elements)!=null&&s.length||(l=a.entries)!=null&&l.length)&&(e.diaries[r]=_n(r,{title:a.title&&a.title!=="Untitled story"?a.title:"",elements:a.elements,entries:a.entries})),localStorage.removeItem(mn),Dn(e)}}catch(u){console.warn("Could not read diaries from localStorage",u)}return e}function Dn(e){try{const n={};for(const[t,o]of Object.entries(e.diaries))D(o)&&(n[t]=o);localStorage.setItem(Rn,JSON.stringify({version:2,diaries:n}))}catch(n){console.warn("Could not save diaries to localStorage",n)}}const Ci={"not-allowed":"Microphone access is blocked. Click the 🔒/camera icon in the address bar, allow the microphone, then tap the mic to retry — or type below.","service-not-allowed":"Speech recognition is not allowed here. Try Chrome or Edge, or type below.","audio-capture":"No microphone was found. Plug one in and tap the mic to retry, or type your story below.",network:"Speech recognition lost its network connection. Tap the mic to retry, or type below.","insecure-context":"Voice needs a secure page (https:// or localhost). Type your story below instead.","start-failed":"Couldn’t start listening. Tap the mic to try again."},Mi=new Set(["not-allowed","service-not-allowed","audio-capture","insecure-context"]),Si=5,Ii=250;function Li(){return typeof window<"u"&&!!(window.SpeechRecognition||window.webkitSpeechRecognition)}class ji{constructor(n,t=navigator.language||"en-US"){k(this,"recognition",null);k(this,"listening",!1);k(this,"wantListening",!1);k(this,"active",!1);k(this,"starting",!1);k(this,"finalText","");k(this,"silentRestarts",0);k(this,"restartTimer");this.cb=n;const o=window.SpeechRecognition||window.webkitSpeechRecognition;if(!o)return;const i=new o;i.lang=t,i.continuous=!0,i.interimResults=!0,i.maxAlternatives=1,i.onstart=()=>this.setListening(!0),i.onend=()=>this.handleEnd(),i.onerror=s=>this.handleError(s.error),i.onresult=s=>{this.silentRestarts=0;let l="";for(let d=s.resultIndex;d<s.results.length;d++){const a=s.results[d],h=a[0].transcript;if(a.isFinal){const r=h.trim();r&&(this.finalText=`${this.finalText} ${r}`.trim(),this.cb.onFinalPhrase(r))}else l+=h}const u=`${this.finalText} ${l}`.trim();this.cb.onTranscript(u,l.length===0)},this.recognition=i}get supported(){return this.recognition!==null}get isListening(){return this.listening}get isActive(){return this.wantListening}async start(){if(!(!this.recognition||this.wantListening||this.starting)){this.starting=!0;try{if(!await this.primeMicrophone())return;this.wantListening=!0,this.silentRestarts=0,this.finalText="",this.cb.onTranscript("",!1),this.startRecognition()}finally{this.starting=!1}}}stop(){var n;this.wantListening=!1,window.clearTimeout(this.restartTimer),this.active?(n=this.recognition)==null||n.stop():this.setListening(!1)}toggle(){this.wantListening?this.stop():this.start()}async primeMicrophone(){var t,o;if(!window.isSecureContext)return this.fail("insecure-context"),!1;const n=navigator.mediaDevices;if(!(n!=null&&n.getUserMedia))return!0;(o=(t=this.cb).onStatus)==null||o.call(t,"Asking for microphone access…");try{return(await n.getUserMedia({audio:!0})).getTracks().forEach(s=>s.stop()),!0}catch(i){const s=i==null?void 0:i.name;return s==="NotAllowedError"||s==="SecurityError"?this.fail("not-allowed"):s==="NotFoundError"||s==="OverconstrainedError"?this.fail("audio-capture"):s==="NotReadableError"||s==="AbortError"?this.cb.onError("Your microphone is busy in another app or tab. Close it and tap the mic to retry.","retryable"):this.fail("start-failed"),!1}}startRecognition(){if(!(!this.recognition||this.active||!this.wantListening))try{this.active=!0,this.recognition.start()}catch(n){(n==null?void 0:n.name)!=="InvalidStateError"&&(this.active=!1,console.warn(n),this.fail("start-failed"))}}handleError(n){if(n!=="aborted"){if(n==="no-speech"){this.silentRestarts++;return}this.fail(n)}}handleEnd(){if(this.active=!1,!this.wantListening){this.setListening(!1);return}if(this.silentRestarts>=Si){this.wantListening=!1,this.setListening(!1),this.cb.onError("I haven't heard anything for a while — tap the mic when you're ready.","retryable");return}window.clearTimeout(this.restartTimer),this.restartTimer=window.setTimeout(()=>this.startRecognition(),Ii)}fail(n){var o;const t=Mi.has(n)?"fatal":"retryable";this.wantListening=!1,window.clearTimeout(this.restartTimer),this.active&&((o=this.recognition)==null||o.abort()),this.setListening(!1),this.cb.onError(Ci[n]??`Speech error: ${n}. Tap the mic to retry.`,t)}setListening(n){this.listening!==n&&(this.listening=n,this.cb.onStateChange(n))}}const Ai=document.querySelector("#app");Ai.innerHTML=`
  <header class="topbar">
    <div class="brand">
      <span class="brand__mark" aria-hidden="true"></span>
      <span class="brand__name">Visual Diary</span>
    </div>
    <nav class="datebar" aria-label="Choose a day">
      <button class="icon-btn" id="prev-day" type="button" aria-label="Previous day">${j("chevron-left")}</button>
      <label class="datebar__picker">
        <span class="sr-only">Diary date</span>
        <input type="date" id="date-input" />
      </label>
      <button class="icon-btn" id="next-day" type="button" aria-label="Next day">${j("chevron-right")}</button>
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
        <p id="type-hint" class="type-hint" role="status" aria-live="polite" hidden></p>
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
`;const g=e=>document.querySelector(e),P=g("#mic"),Ei=g("#mic-label"),kn=g("#mic-status"),Bi=g("#mic-status-text"),$=g("#transcript"),Q=g("#fallback"),Pn=g("#type-form"),y=g("#type-input"),nn=g("#type-hint"),Z=g("#day-title"),F=g("#date-input"),fn=g("#legend"),bn=g("#entry-list"),Ti=g("#entry-count"),yn=g("#history"),$i=g("#history-empty"),S=xi(),b=tn();let m=Sn(location.hash.slice(1))?location.hash.slice(1):b;const J=()=>{var e;return(e=S.diaries)[m]??(e[m]=On(m))},Hi=new ei(g("#review"),{onDelete(e){Y(n=>({...n,elements:n.elements.filter(t=>t.id!==e)}))}});function Y(e){S.diaries[m]={...e(J()),updatedAt:Date.now()},Dn(S),rn()}function T(e){!Sn(e)||e===m||(U(!0),m=e,history.replaceState(null,"",`#${e}`),$.textContent="Live transcript appears here.",$.dataset.empty="true",rn())}const A=(e,n)=>sn(e).toLocaleDateString(void 0,n);function Vi(){const e=new Set(Object.keys(S.diaries).filter(t=>D(S.diaries[t])));e.add(b);const n=[...e].sort().reverse();yn.innerHTML="";for(const t of n){const o=S.diaries[t],i=document.createElement("li"),s=document.createElement("button");s.type="button",s.className="history__item",t===m&&s.setAttribute("aria-current","date"),s.addEventListener("click",()=>T(t));const l=document.createElement("span");l.className="history__date",l.textContent=t===b?`Today · ${A(t,{month:"short",day:"numeric"})}`:A(t,{weekday:"short",month:"short",day:"numeric",year:t.slice(0,4)===b.slice(0,4)?void 0:"numeric"});const u=document.createElement("span");u.className="history__title";const d=(o==null?void 0:o.elements.length)??0;u.textContent=(o==null?void 0:o.title.trim())||(d?`${d} element${d===1?"":"s"}`:"Empty");const a=document.createElement("span");a.className="history__thumbs";for(const h of((o==null?void 0:o.elements)??[]).filter(r=>r.kind!=="scene").slice(0,5)){const r=jn(h),v=document.createElement("span");v.className="history__thumb",r.type==="icon"?v.innerHTML=r.svg:v.textContent=r.initials,a.appendChild(v)}a.setAttribute("aria-hidden","true"),s.append(l,u),a.childElementCount&&s.appendChild(a),i.appendChild(s),yn.appendChild(i)}$i.hidden=n.length>1||D(S.diaries[b])}function rn(){const e=J();F.value=m,F.max=b,g("#next-day").disabled=m>=b,g("#today").disabled=m===b,g("#day-weekday").textContent=m===b?`Today · ${A(m,{weekday:"long"})}`:A(m,{weekday:"long"}),g("#day-heading").textContent=A(m,{month:"long",day:"numeric",year:"numeric"}),document.activeElement!==Z&&(Z.value=e.title),Hi.render(m,e.elements,vi(e.elements)),fn.innerHTML="";for(const n of Kn){const t=e.elements.filter(s=>s.kind===n).length,o=document.createElement("li");o.className=`legend__item legend__item--${n}`,o.textContent=Cn[n].plural;const i=document.createElement("span");i.className="count",i.textContent=String(t),o.appendChild(i),fn.appendChild(o)}Ti.textContent=String(e.entries.length),bn.innerHTML="";for(const n of[...e.entries].reverse()){const t=document.createElement("li"),o=document.createElement("time");o.dateTime=new Date(n.createdAt).toISOString(),o.textContent=new Date(n.createdAt).toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});const i=document.createElement("p");i.textContent=n.text,t.append(o,i),bn.appendChild(t)}Vi()}function ln(e){const n=e.trim();if(!n)return;const t=J().elements.filter(i=>i.kind==="character").map(i=>i.text),o=pi(n,t);Y(i=>{const s=[...i.elements];for(const l of o){if(s.some(a=>a.kind===l.kind&&a.text.toLowerCase()===l.text.toLowerCase()))continue;const d={id:dn(),kind:l.kind,text:l.text,note:l.note,asset:l.asset,x:0,y:0,createdAt:Date.now()};s.push(d)}return{...i,elements:s,entries:[...i.entries,{id:dn(),text:n,createdAt:Date.now()}]}})}const en="Finish the sentence with a period, or write a full sentence",Zn=1600;let f="",E;function cn(e){nn.hidden=!e,nn.textContent=e??""}function U(e=!1){window.clearTimeout(E);const n=f.trim();if(n){if(zn(n)){f="",ln(Hn(n));return}e?(f="",y.value=[y.value.trim(),n].filter(Boolean).join(" "),cn(`“${n}” wasn’t added — ${en.charAt(0).toLowerCase()}${en.slice(1)}.`)):I.isActive&&C(`Holding “${n}” — keep going and finish the sentence.`,"busy")}}function zi(e){f=`${f} ${e}`.trim();const{complete:n,rest:t}=$n(f);f=t,n.length&&ln(n.join(" ")),window.clearTimeout(E),f&&(E=window.setTimeout(()=>U(),Zn))}function C(e,n){Bi.textContent=e,n?kn.dataset.tone=n:delete kn.dataset.tone}const I=new ji({onTranscript(e,n){$.dataset.empty=String(!e),$.textContent=e||"Listening…",!n&&f&&(window.clearTimeout(E),E=window.setTimeout(()=>U(),Zn))},onFinalPhrase(e){zi(e)},onStateChange(e){P.classList.toggle("is-listening",e),P.setAttribute("aria-pressed",String(e)),Ei.textContent=e?"Stop":"Start speaking",C(e?"Mic on — listening. Each sentence is added when you finish it.":"Mic off",e?"live":void 0),!e&&!I.isActive&&U(!0),e&&(Q.hidden=!0)},onError(e,n){C(e,"error"),n==="fatal"&&Ni("Voice isn’t available right now — write below and the page builds the same way. Tap the mic again after fixing access.")},onStatus(e){C(e,"busy")}});function Ni(e){Q.hidden=!1,Q.textContent=e,y.focus()}var xn;!Li()||!I.supported?(P.disabled=!0,C("Voice input isn’t supported in this browser — use Chrome or Edge, or write below.","error"),$.hidden=!0):(P.addEventListener("click",()=>I.toggle()),(xn=navigator.permissions)==null||xn.query({name:"microphone"}).then(e=>{const n=()=>{I.isActive||(e.state==="granted"?C("Mic allowed — tap Start speaking"):e.state==="denied"?C("Mic blocked — allow it in the address bar’s site settings, or write below.","error"):C("Tap Start speaking — your browser will ask for the microphone"))};n(),e.onchange=n}).catch(()=>C("Tap Start speaking — your browser will ask for the microphone")));Pn.addEventListener("submit",e=>{e.preventDefault();const{complete:n,rest:t}=Nn(y.value);n.length&&ln(n.join(" ")),y.value=t,cn(t?en:null),y.focus()});y.addEventListener("input",()=>{!nn.hidden&&(!y.value.trim()||Nn(y.value).rest==="")&&cn(null)});y.addEventListener("keydown",e=>{e.key==="Enter"&&(e.metaKey||e.ctrlKey)&&Pn.requestSubmit()});F.addEventListener("change",()=>T(F.value));g("#prev-day").addEventListener("click",()=>T(Mn(m,-1)));g("#next-day").addEventListener("click",()=>T(Mn(m,1)));g("#today").addEventListener("click",()=>T(b));window.addEventListener("hashchange",()=>T(location.hash.slice(1)));Z.addEventListener("change",()=>Y(e=>({...e,title:Z.value.trim()})));g("#clear-day").addEventListener("click",()=>{D(J())&&confirm(`Clear everything on ${A(m,{month:"long",day:"numeric"})}?`)&&(I.isActive&&I.stop(),f="",window.clearTimeout(E),Y(()=>On(m)))});history.replaceState(null,"",`#${m}`);rn();
