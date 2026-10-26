var je=Object.defineProperty;var Le=(t,e,o)=>e in t?je(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var _=(t,e,o)=>Le(t,typeof e!="symbol"?e+"":e,o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();const ue={character:{label:"Person",plural:"People"},place:{label:"Place",plural:"Places"},feeling:{label:"Feeling",plural:"Feelings"},object:{label:"Object",plural:"Objects"},scene:{label:"Scene",plural:"Scenes"}},Ee=["scene","character","place","object","feeling"];function ee(){return typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function Z(t=new Date){const e=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${t.getFullYear()}-${e}-${o}`}function G(t){const[e,o,n]=t.split("-").map(Number);return new Date(e,o-1,n)}function ge(t,e){const o=G(t);return o.setDate(o.getDate()+e),Z(o)}const me=t=>/^\d{4}-\d{2}-\d{2}$/.test(t)&&!Number.isNaN(G(t).getTime()),Me=""+new URL("airport-CY9dwME3.jpg",import.meta.url).href,Se=""+new URL("apple-BSlypcbR.jpg",import.meta.url).href,Be=""+new URL("bakery-Bqj9EVGq.jpg",import.meta.url).href,Re=""+new URL("balloon-B05iYw4W.jpg",import.meta.url).href,Ie=""+new URL("beach-C4Ffmy7f.jpg",import.meta.url).href,Ue=""+new URL("bedroom-CI_hiDm3.jpg",import.meta.url).href,Ne=""+new URL("bike-B-Vhnvfm.jpg",import.meta.url).href,Te=""+new URL("boat-Dq7YtBUQ.jpg",import.meta.url).href,Pe=""+new URL("book-VX1uGaOT.jpg",import.meta.url).href,De=""+new URL("bread-COmRlzGA.jpg",import.meta.url).href,ze=""+new URL("bridge-Dz5FkaNR.jpg",import.meta.url).href,Oe=""+new URL("cabin-BbbNQ2G9.jpg",import.meta.url).href,Fe=""+new URL("cafe-BKqB_Tav.jpg",import.meta.url).href,Qe=""+new URL("cake-EwHATwP8.jpg",import.meta.url).href,He=""+new URL("camera-BZvAI096.jpg",import.meta.url).href,Ke=""+new URL("candle-nUus80Hm.jpg",import.meta.url).href,Ye=""+new URL("car-DgLpRrnq.jpg",import.meta.url).href,Ve=""+new URL("castle-fw4nGgsr.jpg",import.meta.url).href,We=""+new URL("cat-vJRqoAc6.jpg",import.meta.url).href,qe=""+new URL("city-BKMTJvfR.jpg",import.meta.url).href,Je=""+new URL("clock-DR0aaVjf.jpg",import.meta.url).href,Ze=""+new URL("coffee-DQ9_CGOQ.jpg",import.meta.url).href,Ge=""+new URL("concert-D4Xi12a2.jpg",import.meta.url).href,Xe=""+new URL("desert-D35eVXf2.jpg",import.meta.url).href,$e=""+new URL("farm-DWTeOtxZ.jpg",import.meta.url).href,et=""+new URL("flowers-JFDeB98q.jpg",import.meta.url).href,tt=""+new URL("forest-B12LSBXM.jpg",import.meta.url).href,nt=""+new URL("garden-D2RZ5nvJ.jpg",import.meta.url).href,ot=""+new URL("gift--Jez3Gku.jpg",import.meta.url).href,st=""+new URL("guitar-hGCvzEKn.jpg",import.meta.url).href,it=""+new URL("gym-9x8UHZpO.jpg",import.meta.url).href,rt=""+new URL("harbor-De9JDdL9.jpg",import.meta.url).href,at=""+new URL("hat-DOs46k_j.jpg",import.meta.url).href,lt=""+new URL("home-DOJALL-5.jpg",import.meta.url).href,ct=""+new URL("hospital-CBgq8a_I.jpg",import.meta.url).href,dt=""+new URL("island-tTiLI2Fm.jpg",import.meta.url).href,ht=""+new URL("kitchen-BwbkWnYU.jpg",import.meta.url).href,pt=""+new URL("lake-Br5uL3bQ.jpg",import.meta.url).href,ut=""+new URL("lantern-BiItcQ2g.jpg",import.meta.url).href,gt=""+new URL("laptop-MFoLKTC9.jpg",import.meta.url).href,mt=""+new URL("letter-Crcei5eA.jpg",import.meta.url).href,wt=""+new URL("library-C09Yr_hC.jpg",import.meta.url).href,_t=""+new URL("lighthouse-CDTHXVy6.jpg",import.meta.url).href,vt=""+new URL("map-C3NkXuBf.jpg",import.meta.url).href,At=""+new URL("market-9aZIsGxG.jpg",import.meta.url).href,ft=""+new URL("mountain-DQ9eBnR5.jpg",import.meta.url).href,bt=""+new URL("museum-C5khMePC.jpg",import.meta.url).href,yt=""+new URL("night-BPzlDAwC.jpg",import.meta.url).href,kt=""+new URL("notebook-vc9sFt2Y.jpg",import.meta.url).href,Ct=""+new URL("ocean-BRkYSLGJ.jpg",import.meta.url).href,xt="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wgARCAEOAWgDASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAECAwQFBv/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAf2QIAAAQLAAABKAAAAAFlAAFgoAAAAEsAABAAAAlAAAAAAAKAACpQAAABLAABKIAACUAAAAAAAFlAAFgqUAAAEAAEogAAAAAAAAAAFgoAAAKgoAAIAACAAAAAAAAAAAWCgAAAAqCgASwAASwAAAAAAAAAWUhQAAAAACgAEAAEsAAAAAAAALFABCpQAAAACgASiAASiLAAAAAABcjTI0yNTOhZQlAAAAKAAQAAASiLAYN3MNs6AJLktlBzOiUlgoKgqUAAAoBCwAAABCyZM45eiLtaoAJnWDVlHLqJQksNJQABYKlALAAAAiwAEHDXGL6WgqhSAmN4LrOhzc470pnWSpSpQAACgAAIAACUS5j53v8H0s7treCiPkfMzf1U/Ko/U8/wA97q+rZdTj5/Xz59PRTpzmd8y2CgWCgAqCgASwAAlgvNxjrfDk+g+bD6XPwcJfO1ees22memj6vT4/o6Z+g8NT3Ty9juxqtAWUAqUAA1LAABKIBLkmOmDz478o5zpDl5Pd87N1NXN53ZXTOjHs8fv3mTc1L35dTWpSgWUAWUAA1KIAABLBnWS43g5Y6ZjDQ8/y/sePN894MX0ONrtrz7NfR4ejc0rUduPU6LCgAUFgoANASiLACLCFJmw5S2MNSs53D4Pj6fpI+W+oPyn0/pfHPvValUmmD1SwWUAWUAqUA0sAEsBAAUzz3gxaJNQzNeA+N+k+T9eEqp+c/SfLj6WvnfRq2UvPrg7uXUJSoKCoKCoP/8QAKRAAAQMCBgIBBAMAAAAAAAAAAQACEQMgBBASITFAEzAjBSIyQSRgkP/aAAgBAQABBQL/AC+3W63W63W/9LBlSpQtKHGRchv33FTuBeUOMiEM/wB9omBKaIF5Q4u/faqcs3PoKHGYzPPYJADajHKJfHpKHCnYPsPPYIkYOnpA59JQ4T1TH3ZnsvnRh21QRxZia7g6XHMFwVCs4uExunzDZW63W/YlSvI1amrW1eQLyBeQJ1YBvNrtk2qCPIF5GrW1awvICp7JUIjeypxaRtR/HONwh2inW1PytCp7VMwh3DbMvtCO1Sxva/WRzqHSxuUqc5VX8WmW5DlvaNzmhwfRRkLUpUqUJKbTTRAzHaPo+p1dAp4fFaW4Y6X4d2mvSxTKeDJbVtHZHpxXyYvOs3XSpu+S0Idozfhfkr2PEYVp1Cwgocdk3Y5/jwmDZprWaf5n092rCWOTCj7P/8QAHREAAgEEAwAAAAAAAAAAAAAAAREAAxBAUCAxcP/aAAgBAwEBPwH21Y9Tu6iisAFqRwOOdx//xAAeEQABAwUBAQAAAAAAAAAAAAABAAJAEBESIDFQcP/aAAgBAgEBPwH7peAzlclksqHsInQQ3aNhuGgESysPD//EAC0QAAECAwYFAgcAAAAAAAAAAAEAAhExUAMSICEyQSJAUVKRMGEEEyNicZDR/9oACAEBAAY/Av2dQUBS4lbBxzpkFepUTJcLgUfW9+dIO6dHYwUfWjtzpuzRvZDFcYYdSs3HypqZWTj5Vx+fQqSkpLSpc5qCmFqC1BagtQRN7FEbIG8tS1Kamp0iHSjQxkUYnG00Un0QaJAyXB4WeWHJcSgKMxo9yUNB/JQvOz9l9N3F9yL3FsB2q0siY5BzaQ4dLrPOB7eoXwlr3t+WaQx3c51p/MNsBOxtLwQI3o1q4Tup47GNbhtmbWjEyO3D45P/xAAoEAACAQMEAgICAgMAAAAAAAAAAREQITFAQVFxIGEwkYGxUKGQ4fD/2gAIAQEAAT8h/wAXjJcKDsdjsdjsbL/wzFheTN9bfDRHohm8qPJgrA7DQmjN3rJLcvfgth339H2EebBVs2FhUY8tWp2BChHJpTwJR8LFWVVj1RjJy8S7iyScNyr/ANC+Fiq1e5hR41Q5NSTLYxhh6Y3bxMCh8THScpV1sbLWURV6oXjSQxjuf9ESXl6gXwOjHTNYvZzwXnNirMlqIYt+iNmZzie8yxGkRBBBA82TBkeQfyIfL7If+wwDCw+TBeR+T/mRLmz2Kz2dnR9nRfY/RfY+o1DsSWkFt+NCNykI2lguzbyyCCBIRwzNKICFKmD0z0D1aVMQrzuTOpWSRP7IGiCCyHIlYiqRILvYgggSLkQl9WQW08DViBogvXgQQQQKjsykSIpyMBahiHRFo4IGiPBEeB+7h1YsRwYUWo3DHky7r63Q9iakkiDTPi57pU03qXqcEOjxRkAZ4FubAzYVt7IeBmwrYmN/oSqwliu5kPU5DHSNqsZvmy4SJZaambjMQ9+wWeB7MEKcVy5XGekv3DV/78IGhzbUZDHgdHnwt26RPbSyIssEU9qKIeSduVVVeHqWxBNiyIdItV2u8CTO89Y/Txb+peTn9CMKSVRKxDIJVkycJyPOniyQ79DwJslkjVGYYZL82EIcKfrxSNnBb/Q7dpy5lHizWGb3Pyv/2gAMAwEAAgADAAAAEAPPABNOAAEAAPPPKANLAEPPAFPABPKACAAAAPPPAFPCAMPAFPAEPKAIAAAADPPKANLCAAABPCEPAAAAAABHPPLAEPPDAKAPKAPCAAAAAHKPPLAAEPPDKAFLAFKAAAAANPPKOAAEFPMKABPCFPCAHACHPGABCAAAIAKAEPAENPPPPPOKAMPKCAAAAIABPOAENNIAALICAKNDCAADABHPMABCGPFKLFKHOCNPriAHOIANPKLfkOKEOBHAHiktPAAADPMOLyZAHB1FJJJJtrgtDLCFPAKGqQxnqHLA0xlqvilPFPCEPBDM73+fFsVdTnqlqlPEPLAFFDOu9t0a3txNlvsrkPKENKNLDOrHEIVAvvHKtqtmPNKFJKFDMKINmKtLFNGhsjsjP//EAB0RAAICAwADAAAAAAAAAAAAAAERAEAQIDEhUHD/2gAIAQMBAT8Q+2kh4NYdhN28hsTga57QUUA0Ishog6FUcZj9F//EAB8RAQACAgICAwAAAAAAAAAAAAEAETFAECAhMGFwcf/aAAgBAgEBPxD7XzrXZ4gV2Se9xBVKrlBPzALwWuhcuUHRWaeHTCtNHEvljzqIZ8UANU4fX//EACsQAQACAQIEBQMFAQAAAAAAAAEAESEQMUFRYXEwQIGRoSCx0VBgwfDx4f/aAAgBAQABPxDxXzR+0jU+o8qeWPFdXwD9If2afsY8lcv96H6aftynlKZTylPKUypTE8F84sRWwZOJL5XtO17Tte0/rUr/ABmDwbziXn9F2z42lvKZ5TPKZnB3nF384tTIcLxNwQmZaM4Yu/07GZdvVUAUc4NCOh+aHmlqXMgF4WDrArePFtA2rlbsAQK+hmxnx9b1FjMO77sZsigeEeMxY5ABxmyAFNY2PaEgA1zv5gVofQzbPu9UN0INlkZsm/DwOPkGCqrjBG1YsLIpTYTeitxBCV9DFxNs+7jpmsGodpuT7BDx78E3q2jAQVT11diXkbaCYQ3953nczKgfRUYzbPvYsrUD3hEUqLIRp04TYzY7EPMFxbA6JUARsHHq/iOs0roDxgxDfSpUp5Onoy3KOfMdDVKKuZWEOqgKWyN1Ve0NNjPiQfLFu0E4RQhd6TAeqZK2OMpQtG679ZaoKWlpXO47g8h4BHre6/mi2/u4FsHrjVp8x/mEz3PhXk/mAIYFzhO17YoA3sOLpBI02NIy+kP7P4n9f/MwfEQ1S8HCG0PBNHwVqW5vtGpapTpY4XcEtB2cw2jF1n+9P9gj/wBIiJZIEy8CWl2lrzYaBoNoBE5JMfJZNrn+xFN0hwpJls2SvJTBuzi9yveH1X5BmQkC6FbSjGx+SGOi4RUdPM1yoGkLkVq3T+UNOthyFuzddYIQ+g8kxzMiy+gzkTAraOlYXQH3myMMHRDmbIbnap6aBFUz7lEFt6wwIQ8E8Ubc8JnbzYdph1FfjUuceQlalwlEmIJKCQuGNjowJUGLIA6CZGV4Q8VjDCQYhuRv5K9oESA1xffhBzveBhq6yhJeHfF6Qjtj9xKgYdMzmcZhjkwZh9Nw+k8NjMC0O6wWq3MkrjBH5WRVsyrBRxP2nT/AgnGHXDrgDjM+3obR+IuZ4IHdOhyJUOLzxNgx+4mQOh5VgWhM+0mxmFwMwoPJjRII0jecUn56TN5EoLMmxhp43EJgcTYei5i3hdRbzuswR779ZdIWdd7jExbNjg9kCoTgsKAcpilwdIZ7fANDwnVg9kVq84ws7TfCDB5lSokSWxQn/R0EDwAwdtCSoy07vWPmWI0JezJ6jAlQZOmdNyoKjtNlcy9TyphsLdoxAtubMpFG6faAxSvcnU2YxAUoZe0YNb6kfa+UqVKlVmoduzeX8gYtVnbolmiKTnCF5nUDyI0hQYeswXi76VHR1dCyO7FfGBsRNjFmWdSW5yiw4absZBwdz5lOHomBX1YGrCzsv60uBLs26hb2DRsaHaFsPWCNhEQTspmKdZcuXLl3Lly9Llz/2Q==",jt=""+new URL("painting-DBGwu1by.jpg",import.meta.url).href,Lt=""+new URL("park-BwYoUT-L.jpg",import.meta.url).href,Et=""+new URL("phone-B4ABjUP4.jpg",import.meta.url).href,Mt=""+new URL("piano-BT6u-qAF.jpg",import.meta.url).href,St=""+new URL("pizza-DW7ryvc4.jpg",import.meta.url).href,Bt=""+new URL("plant-HpMZYDZ-.jpg",import.meta.url).href,Rt=""+new URL("rain-Bd9CA57L.jpg",import.meta.url).href,It=""+new URL("restaurant-Dlo44Ezz.jpg",import.meta.url).href,Ut=""+new URL("ring-iscvcyXq.jpg",import.meta.url).href,Nt=""+new URL("river-Dwwm4IYc.jpg",import.meta.url).href,Tt=""+new URL("rooftop-7VJkSuhT.jpg",import.meta.url).href,Pt=""+new URL("school-K7fskixI.jpg",import.meta.url).href,Dt=""+new URL("shell-Cc2cxnOg.jpg",import.meta.url).href,zt=""+new URL("snow-Bqb839a5.jpg",import.meta.url).href,Ot=""+new URL("street-9eaqwXFp.jpg",import.meta.url).href,Ft=""+new URL("subway-DExevrO-.jpg",import.meta.url).href,Qt=""+new URL("sunset-ChF4LeRN.jpg",import.meta.url).href,Ht=""+new URL("ticket-Dz6L-63D.jpg",import.meta.url).href,Kt=""+new URL("train-DP9H-Ig-.jpg",import.meta.url).href,Yt=""+new URL("umbrella-DQ0h0VWp.jpg",import.meta.url).href,Vt=""+new URL("village-C1JriYzh.jpg",import.meta.url).href,Wt=""+new URL("wine-Cu0G5yWB.jpg",import.meta.url).href,qt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Jt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Zt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Gt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Xt=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,$t=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,en=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,tn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,nn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,on=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,sn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,rn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,an=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,ln=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,cn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,dn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,hn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,pn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,un=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,gn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,mn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,wn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,_n=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,vn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,An=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,fn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,bn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,yn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,kn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Cn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,xn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,jn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Ln=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,En=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Mn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Sn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Bn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Rn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,In=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Un=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Nn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Tn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Pn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Dn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,zn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,On=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Fn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Qn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Hn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Kn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Yn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Vn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,Wn=`<!-- @license lucide-static v1.61.0 - ISC -->
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
`,qn=Object.assign({"../assets/photos/airport.jpg":Me,"../assets/photos/apple.jpg":Se,"../assets/photos/bakery.jpg":Be,"../assets/photos/balloon.jpg":Re,"../assets/photos/beach.jpg":Ie,"../assets/photos/bedroom.jpg":Ue,"../assets/photos/bike.jpg":Ne,"../assets/photos/boat.jpg":Te,"../assets/photos/book.jpg":Pe,"../assets/photos/bread.jpg":De,"../assets/photos/bridge.jpg":ze,"../assets/photos/cabin.jpg":Oe,"../assets/photos/cafe.jpg":Fe,"../assets/photos/cake.jpg":Qe,"../assets/photos/camera.jpg":He,"../assets/photos/candle.jpg":Ke,"../assets/photos/car.jpg":Ye,"../assets/photos/castle.jpg":Ve,"../assets/photos/cat.jpg":We,"../assets/photos/city.jpg":qe,"../assets/photos/clock.jpg":Je,"../assets/photos/coffee.jpg":Ze,"../assets/photos/concert.jpg":Ge,"../assets/photos/desert.jpg":Xe,"../assets/photos/farm.jpg":$e,"../assets/photos/flowers.jpg":et,"../assets/photos/forest.jpg":tt,"../assets/photos/garden.jpg":nt,"../assets/photos/gift.jpg":ot,"../assets/photos/guitar.jpg":st,"../assets/photos/gym.jpg":it,"../assets/photos/harbor.jpg":rt,"../assets/photos/hat.jpg":at,"../assets/photos/home.jpg":lt,"../assets/photos/hospital.jpg":ct,"../assets/photos/island.jpg":dt,"../assets/photos/kitchen.jpg":ht,"../assets/photos/lake.jpg":pt,"../assets/photos/lantern.jpg":ut,"../assets/photos/laptop.jpg":gt,"../assets/photos/letter.jpg":mt,"../assets/photos/library.jpg":wt,"../assets/photos/lighthouse.jpg":_t,"../assets/photos/map.jpg":vt,"../assets/photos/market.jpg":At,"../assets/photos/mountain.jpg":ft,"../assets/photos/museum.jpg":bt,"../assets/photos/night.jpg":yt,"../assets/photos/notebook.jpg":kt,"../assets/photos/ocean.jpg":Ct,"../assets/photos/office.jpg":xt,"../assets/photos/painting.jpg":jt,"../assets/photos/park.jpg":Lt,"../assets/photos/phone.jpg":Et,"../assets/photos/piano.jpg":Mt,"../assets/photos/pizza.jpg":St,"../assets/photos/plant.jpg":Bt,"../assets/photos/rain.jpg":Rt,"../assets/photos/restaurant.jpg":It,"../assets/photos/ring.jpg":Ut,"../assets/photos/river.jpg":Nt,"../assets/photos/rooftop.jpg":Tt,"../assets/photos/school.jpg":Pt,"../assets/photos/shell.jpg":Dt,"../assets/photos/snow.jpg":zt,"../assets/photos/street.jpg":Ot,"../assets/photos/subway.jpg":Ft,"../assets/photos/sunset.jpg":Qt,"../assets/photos/ticket.jpg":Ht,"../assets/photos/train.jpg":Kt,"../assets/photos/umbrella.jpg":Yt,"../assets/photos/village.jpg":Vt,"../assets/photos/wine.jpg":Wt}),X={};for(const[t,e]of Object.entries(qn))X[t.split("/").pop().replace(/\.jpg$/,"")]=e;const Jn=Object.assign({"/node_modules/lucide-static/icons/angry.svg":qt,"/node_modules/lucide-static/icons/annoyed.svg":Jt,"/node_modules/lucide-static/icons/battery-full.svg":Zt,"/node_modules/lucide-static/icons/battery-low.svg":Gt,"/node_modules/lucide-static/icons/bike.svg":Xt,"/node_modules/lucide-static/icons/book-open.svg":$t,"/node_modules/lucide-static/icons/box.svg":en,"/node_modules/lucide-static/icons/camera.svg":tn,"/node_modules/lucide-static/icons/car.svg":nn,"/node_modules/lucide-static/icons/cat.svg":on,"/node_modules/lucide-static/icons/chevron-left.svg":sn,"/node_modules/lucide-static/icons/chevron-right.svg":rn,"/node_modules/lucide-static/icons/clapperboard.svg":an,"/node_modules/lucide-static/icons/clock.svg":ln,"/node_modules/lucide-static/icons/cloud-rain.svg":cn,"/node_modules/lucide-static/icons/coffee.svg":dn,"/node_modules/lucide-static/icons/dog.svg":hn,"/node_modules/lucide-static/icons/eye.svg":pn,"/node_modules/lucide-static/icons/feather.svg":un,"/node_modules/lucide-static/icons/flame.svg":gn,"/node_modules/lucide-static/icons/flower-2.svg":mn,"/node_modules/lucide-static/icons/frown.svg":wn,"/node_modules/lucide-static/icons/gift.svg":_n,"/node_modules/lucide-static/icons/hand-heart.svg":vn,"/node_modules/lucide-static/icons/heart.svg":An,"/node_modules/lucide-static/icons/image.svg":fn,"/node_modules/lucide-static/icons/key.svg":bn,"/node_modules/lucide-static/icons/laptop.svg":yn,"/node_modules/lucide-static/icons/laugh.svg":kn,"/node_modules/lucide-static/icons/leaf.svg":Cn,"/node_modules/lucide-static/icons/mail.svg":xn,"/node_modules/lucide-static/icons/map-pin.svg":jn,"/node_modules/lucide-static/icons/map.svg":Ln,"/node_modules/lucide-static/icons/meh.svg":En,"/node_modules/lucide-static/icons/moon.svg":Mn,"/node_modules/lucide-static/icons/music.svg":Sn,"/node_modules/lucide-static/icons/party-popper.svg":Bn,"/node_modules/lucide-static/icons/phone.svg":Rn,"/node_modules/lucide-static/icons/plane.svg":In,"/node_modules/lucide-static/icons/shield.svg":Un,"/node_modules/lucide-static/icons/shopping-bag.svg":Nn,"/node_modules/lucide-static/icons/smile.svg":Tn,"/node_modules/lucide-static/icons/sparkles.svg":Pn,"/node_modules/lucide-static/icons/star.svg":Dn,"/node_modules/lucide-static/icons/sun.svg":zn,"/node_modules/lucide-static/icons/sunrise.svg":On,"/node_modules/lucide-static/icons/sunset.svg":Fn,"/node_modules/lucide-static/icons/target.svg":Qn,"/node_modules/lucide-static/icons/ticket.svg":Hn,"/node_modules/lucide-static/icons/umbrella.svg":Kn,"/node_modules/lucide-static/icons/user.svg":Yn,"/node_modules/lucide-static/icons/users.svg":Vn,"/node_modules/lucide-static/icons/zap.svg":Wn}),q={};for(const[t,e]of Object.entries(Jn))q[t.split("/").pop().replace(/\.svg$/,"")]=e.replace(/<!--.*?-->/s,"").trim();const Zn={key:"key",keys:"key",book:"book-open",notebook:"book-open",letter:"mail",card:"mail",camera:"camera",coffee:"coffee",tea:"coffee",song:"music",guitar:"music",piano:"music",gift:"gift",bike:"bike",music:"music",car:"car",ticket:"ticket",phone:"phone",map:"map",umbrella:"umbrella",clock:"clock",candle:"flame",bag:"shopping-bag",painting:"image",flowers:"flower-2",laptop:"laptop",plant:"leaf",dog:"dog",cat:"cat"},Gn={happy:["smile","positive"],joyful:["laugh","positive"],joy:["laugh","positive"],excited:["party-popper","positive"],delighted:["laugh","positive"],fun:["party-popper","positive"],hopeful:["sunrise","positive"],optimistic:["sunrise","positive"],grateful:["hand-heart","positive"],thankful:["hand-heart","positive"],blessed:["hand-heart","positive"],love:["heart","positive"],loved:["heart","positive"],proud:["star","positive"],brave:["shield","positive"],inspired:["sparkles","positive"],amazed:["sparkles","positive"],surprised:["sparkles","positive"],motivated:["target","positive"],focused:["target","calm"],energized:["battery-full","positive"],curious:["eye","calm"],calm:["leaf","calm"],peaceful:["leaf","calm"],content:["leaf","calm"],relieved:["feather","calm"],safe:["shield","calm"],cozy:["coffee","calm"],free:["feather","calm"],nostalgic:["image","calm"],sad:["frown","negative"],lonely:["cloud-rain","negative"],heartbroken:["cloud-rain","negative"],homesick:["cloud-rain","negative"],nervous:["zap","negative"],anxious:["zap","negative"],worried:["zap","negative"],stressed:["zap","negative"],overwhelmed:["zap","negative"],restless:["zap","negative"],scared:["frown","negative"],afraid:["frown","negative"],angry:["angry","negative"],frustrated:["annoyed","negative"],upset:["frown","negative"],jealous:["annoyed","negative"],embarrassed:["meh","negative"],confused:["meh","neutral"],bored:["meh","neutral"],tired:["battery-low","neutral"],exhausted:["battery-low","negative"]},Xn={character:"user",place:"map-pin",feeling:"heart",object:"box",scene:"clapperboard"};function $n(t){const e=t.toLowerCase();return/(night|tonight|evening|dark)/.test(e)?"moon":/(sunset|dusk)/.test(e)?"sunset":/(morning|dawn|sunrise)/.test(e)?"sunrise":"sun"}function S(t){return q[t]??q.box??""}function we(t){return t?X[t]:void 0}function eo(t){const e=we(t.asset);switch(t.kind){case"place":case"object":return e?{type:"photo",src:e}:{type:"icon",svg:S(t.asset&&Zn[t.asset]||Xn[t.kind])};case"scene":return e?{type:"photo",src:e}:{type:"icon",svg:S($n(t.text))};case"feeling":{const[o,n]=Gn[t.asset??t.text.toLowerCase()]??["heart","neutral"];return{type:"icon",svg:S(o),tone:n}}case"character":return e?{type:"photo",src:e}:{type:"monogram",initials:t.text.replace(/^my\s+/i,"").split(/\s+/).filter(Boolean).slice(0,2).map(s=>s[0].toUpperCase()).join("")||"?"}}}function to(){const t=()=>Object.values(X).forEach(e=>{const o=new Image;o.decoding="async",o.src=e});"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,500)}const b=176,Y=196,N=12,A=16,M=t=>t==="scene"?2:1;class no{constructor(e,o,n){_(this,"cards",new Map);this.root=e,this.emptyEl=o,this.cb=n}get columns(){return Math.max(2,Math.floor((Math.max(this.root.clientWidth,2*b+A)-A*2+N)/b))}reset(){for(const e of this.cards.values())e.remove();this.cards.clear()}render(e){const o=new Set(e.map(l=>l.id));for(const[l,a]of this.cards)o.has(l)||(a.remove(),this.cards.delete(l));const s=e.every(l=>l.x+M(l.kind)*b-N<=this.root.clientWidth+4)?e:this.tidy(e);let i=0;s.forEach((l,a)=>{let d=this.cards.get(l.id);if(!d){d=this.createCard(l),this.cards.set(l.id,d),this.root.appendChild(d),d.style.setProperty("--delay",`${Math.min(a,8)*25}ms`);const p=d;requestAnimationFrame(()=>p.classList.add("is-in"))}const c=M(l.kind)*b-N,r=Math.max(4,this.root.clientWidth-c-4);d.style.transform=`translate(${te(l.x,4,r)}px, ${Math.max(4,l.y)}px)`,i=Math.max(i,l.y+Y)}),this.root.style.minHeight=`${Math.max(i+A,0)}px`,this.emptyEl.hidden=e.length>0}placeFor(e,o){const n=this.columns,s=Math.min(M(e),n),i=new Set;for(const l of o){const a=Math.round((l.x-A)/b),d=Math.round((l.y-A)/Y);for(let c=0;c<M(l.kind);c++)i.add(`${d}:${a+c}`)}for(let l=0;l<500;l++)for(let a=0;a+s<=n;a++){let d=!0;for(let c=0;c<s;c++)i.has(`${l}:${a+c}`)&&(d=!1);if(d)return{x:A+a*b,y:A+l*Y}}return{x:A,y:A}}tidy(e){const o=[];for(const n of e)o.push({...n,...this.placeFor(n.kind,o)});return o}createCard(e){const o=ue[e.kind],n=document.createElement("article");n.className=`card card--${e.kind}`,n.style.width=`${M(e.kind)*b-N}px`,n.dataset.id=e.id,n.tabIndex=0,n.setAttribute("aria-label",`${o.label}: ${e.text}. Drag to move, Delete to remove.`);const s=document.createElement("div");s.className="card__media";const i=eo(e);if(i.type==="photo"){const r=document.createElement("img");r.src=i.src,r.alt="",r.draggable=!1,r.decoding="async",s.appendChild(r)}else if(i.type==="icon")s.classList.add("card__media--icon"),i.tone&&(s.dataset.tone=i.tone),s.innerHTML=i.svg;else{s.classList.add("card__media--monogram");const r=document.createElement("span");r.className="monogram",r.textContent=i.initials,s.appendChild(r)}const l=document.createElement("div");l.className="card__body";const a=document.createElement("span");a.className="card__kind",a.textContent=o.label;const d=document.createElement("span");if(d.className="card__text",d.textContent=e.text,l.append(a,d),e.note){const r=document.createElement("span");r.className="card__note",r.textContent=e.note,l.appendChild(r)}const c=document.createElement("button");return c.className="card__delete",c.type="button",c.title="Remove",c.setAttribute("aria-label",`Remove ${e.text}`),c.textContent="×",c.addEventListener("pointerdown",r=>r.stopPropagation()),c.addEventListener("click",()=>this.remove(n,e.id)),n.addEventListener("keydown",r=>{(r.key==="Delete"||r.key==="Backspace")&&(r.preventDefault(),this.remove(n,e.id))}),n.append(s,l,c),this.enableDrag(n,e.id),n}remove(e,o){e.classList.add("is-out"),setTimeout(()=>this.cb.onDelete(o),140)}enableDrag(e,o){let n=0,s=0,i=0,l=0,a=!1;const d=()=>{const r=e.style.transform.match(/translate\((-?[\d.]+)px,\s*(-?[\d.]+)px\)/);return r?{x:parseFloat(r[1]),y:parseFloat(r[2])}:{x:0,y:0}};e.addEventListener("pointerdown",r=>{if(r.button!==0)return;a=!0,e.setPointerCapture(r.pointerId);const p=d();i=p.x,l=p.y,n=r.clientX,s=r.clientY,e.classList.add("is-dragging"),this.root.appendChild(e)}),e.addEventListener("pointermove",r=>{if(!a)return;const p=this.root.clientWidth-e.offsetWidth-4,h=te(i+r.clientX-n,4,Math.max(4,p)),g=Math.max(4,l+r.clientY-s);e.style.transform=`translate(${h}px, ${g}px)`});const c=r=>{if(!a)return;a=!1,e.classList.remove("is-dragging"),e.hasPointerCapture(r.pointerId)&&e.releasePointerCapture(r.pointerId);const{x:p,y:h}=d();this.cb.onMove(o,Math.round(p),Math.round(h))};e.addEventListener("pointerup",c),e.addEventListener("pointercancel",c)}}function te(t,e,o){return Math.min(o,Math.max(e,t))}const _e=["mom","mum","mother","dad","father","sister","brother","grandma","grandmother","grandpa","grandfather","friend","best friend","partner","husband","wife","boyfriend","girlfriend","boss","teacher","neighbour","neighbor","aunt","uncle","cousin","son","daughter","baby","dog","cat","puppy","kitten","coworker","roommate","kid","kids"],oo=["dragon","princess","prince","king","queen","wizard","witch","knight","stranger","girl","boy","man","woman","old man","old woman","fox","bear","owl","robot","ghost"],ve=["park","beach","home","house","school","kitchen","forest","woods","city","cafe","café","coffee shop","office","library","garden","mountain","mountains","lake","river","ocean","sea","village","castle","street","market","restaurant","airport","train","station","bedroom","backyard","museum","hospital","church","island","desert","cabin","gym","studio","lighthouse","harbor","harbour","attic","meadow","bakery","bridge","rooftop","subway","farm","shore","cave","downtown","neighbourhood","neighborhood","trail","pool","concert","bar","pub","supermarket","mall","campus","waterfront","living room"],Ae=["Toronto","Montreal","Vancouver","Ottawa","Calgary","New York","Boston","Chicago","San Francisco","Los Angeles","Seattle","London","Paris","Berlin","Rome","Madrid","Lisbon","Amsterdam","Tokyo","Kyoto","Seoul","Beijing","Shanghai","Hong Kong","Singapore","Sydney","Melbourne","Mexico City"],so={house:"home","living room":"home",attic:"home",woods:"forest",café:"cafe","coffee shop":"cafe",mountains:"mountain",sea:"ocean",harbour:"harbor",station:"train",shore:"beach",waterfront:"harbor",backyard:"garden",meadow:"park",trail:"forest",downtown:"city",neighbourhood:"street",neighborhood:"street",campus:"school",bar:"restaurant",pub:"restaurant",supermarket:"market",mall:"market",bicycle:"bike",photo:"camera",photograph:"camera",present:"gift",flower:"flowers",journal:"notebook",puppy:"dog",kitten:"cat",books:"book",photos:"camera",backpack:"bag",computer:"laptop","ice cream":"ice-cream",plants:"plant"},y=t=>{const e=t.toLowerCase();return so[e]??e},io=["happy","sad","excited","nervous","anxious","calm","angry","scared","afraid","proud","lonely","grateful","tired","hopeful","curious","joyful","joy","love","loved","overwhelmed","peaceful","frustrated","relieved","nostalgic","confused","brave","bored","surprised","content","jealous","embarrassed","thankful","cozy","free","heartbroken","inspired","safe","worried","delighted","homesick","stressed","focused","motivated","energized","exhausted","restless","optimistic","amazed","blessed","upset","fun"],fe=["key","letter","book","map","phone","camera","umbrella","coffee","tea","cake","guitar","piano","ring","necklace","photo","photograph","gift","present","box","bike","bicycle","car","ticket","lamp","candle","flower","flowers","notebook","journal","sword","shell","stone","kite","balloon","hat","scarf","bag","backpack","blanket","mirror","clock","painting","song","pie","bread","apple","boat","lantern","laptop","computer","wine","pizza","ice cream","plant","plants","keys","card","dress","shoes"],ro=["once upon a time","this morning","the day","all day","after work","after school","for lunch","for dinner","on the weekend","weekend","this afternoon","this evening","tonight","last night","yesterday","today","tomorrow","at night","at dawn","at sunset","in the morning","later","suddenly","then","one day","that night","in the end","finally","meanwhile"],ao=new Set(["I","The","A","An","And","But","So","Then","We","He","She","They","It","My","Our","This","That","Today","Yesterday","Tomorrow","Once","When","After","Before","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Suddenly","Finally","Later","Meanwhile","One","There","Here","In","At","On","To","Oh","OK","Okay","Yes","No","Hi","Hello","Me","You","Your","His","Her","Their","Its","January","February","March","April","May","June","July","August","September","October","November","December","Also","Just","Maybe","Some","With","For","From","Of","Is","Was"]),ne={character:"character",who:"character",person:"character",place:"place",where:"place",location:"place",feeling:"feeling",mood:"feeling",emotion:"feeling",object:"object",thing:"object",item:"object",scene:"scene",moment:"scene",chapter:"scene"},L=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),H=t=>new RegExp(`\\b(${[...t].sort((e,o)=>o.length-e.length).map(L).join("|")})\\b`,"gi"),lo=new RegExp(`\\b(?:[Mm]y|[Oo]ur)\\s+(${[..._e].sort((t,e)=>e.length-t.length).map(L).join("|")})\\b`,"gi"),co=new RegExp(`\\b(?:a|an|the)\\s+((?:\\w+\\s)?(?:${oo.map(L).join("|")}))\\b`,"gi"),ho=/\b(?:named|called)\s+([A-Z][a-z]+)/g,po=new RegExp(`\\b(?:[Mm]y|[Oo]ur)\\s+(${[..._e].sort((t,e)=>e.length-t.length).map(L).join("|")})\\s+([A-Z][a-z]+)\\b`,"g"),P=new RegExp(`\\b(${Ae.map(L).join("|")})\\b`,"g"),uo=new Set(Ae.flatMap(t=>t.split(" "))),D=H(ve),go=H(io),mo=new RegExp(`\\b(?:a|an|the|my|our|his|her|their|some)\\s+((?:\\w+\\s)?(?:${fe.map(L).join("|")}))\\b`,"gi"),V=H(ro),wo=H(["coffee","tea","pizza","wine","cake","bread","flowers","ice cream","music","books","photos"]),_o=new Set(["a","an","the","my","and","of","to","very","was","is"]);function oe(t){const e=t.trim().split(/\s+/);return e.length>1&&_o.has(e[0].toLowerCase())&&e.shift(),e.join(" ")}function C(t){return t.replace(/\b\w/g,e=>e.toUpperCase())}function W(t){const e=t.trim();return e.charAt(0).toUpperCase()+e.slice(1)}function se(t,e){return t.length<=e?t:`${t.slice(0,e-1).trimEnd()}…`}function vo(t){return t.split(new RegExp("(?<=[.!?])\\s+|\\n+")).map(e=>e.trim()).filter(Boolean)}function T(t){D.lastIndex=0;const e=D.exec(t);if(D.lastIndex=0,e)return y(e[1]);P.lastIndex=0;const o=P.test(t);return P.lastIndex=0,o?"city":void 0}function Ao(t){const e=[],o=new Set,n=(a,d,c={})=>{const r=d.trim();if(!r)return;const p=`${a}:${r.toLowerCase()}`;o.has(p)||(o.add(p),e.push({kind:a,text:r,...c}))},s=vo(t);let i=!1;const l=T(t);for(const a of s){const d=a.match(/^\s*(\w+)\s*[:\-–]\s*(.+)$/);if(d&&ne[d[1].toLowerCase()]){const h=ne[d[1].toLowerCase()],g=W(d[2].replace(/[.!?]+$/,""));n(h,g,{asset:h==="scene"?T(g):y(g)}),h==="scene"&&(i=!0);continue}V.test(a)&&(V.lastIndex=0,n("scene",se(W(a.replace(/[.!?]+$/,"")),90),{asset:T(a)??l}),i=!0),V.lastIndex=0;const c=new Set,r=new Set;for(const h of a.matchAll(po))n("character",h[2],{note:`my ${h[1].toLowerCase()}`}),c.add(h[2]),r.add(h[1].toLowerCase());for(const h of a.matchAll(lo)){const g=h[1].toLowerCase();r.has(g)||n("character",C(`my ${g}`),{asset:y(g)})}for(const h of a.matchAll(ho))n("character",h[1]);for(const h of a.matchAll(co))n("character",C(oe(h[1])));for(const h of a.matchAll(P))n("place",h[1],{asset:"city"});a.split(/\s+/).forEach((h,g)=>{const w=h.replace(/[^A-Za-z'’-]/g,"");g===0||!/^[A-Z][a-z]+$/.test(w)||ao.has(w)||c.has(w)||uo.has(w)||ve.includes(w.toLowerCase())||n("character",w)});for(const h of a.matchAll(D))n("place",C(h[1].toLowerCase()),{asset:y(h[1])});for(const h of a.matchAll(go))n("feeling",C(h[1].toLowerCase()),{asset:h[1].toLowerCase()});for(const h of a.matchAll(mo)){const g=oe(h[1].toLowerCase()),w=g.split(" ").pop();n("object",C(g),{asset:y(fe.includes(g)?g:w)})}for(const h of a.matchAll(wo)){const g=h[1].toLowerCase();e.some(w=>w.kind==="object"&&w.asset===y(g))||n("object",C(g),{asset:y(g)})}}if(!i&&s.length){const a=s[0].replace(/[.!?]+$/,"");e.unshift({kind:"scene",text:se(W(a),90),asset:T(s[0])??l})}else e.sort((a,d)=>+(d.kind==="scene")-+(a.kind==="scene"));return e}const be="visual-diary:v2",ie="storyboard:v1";function ye(t){return{date:t,title:"",elements:[],entries:[],updatedAt:Date.now()}}function z(t){return!!t&&(t.elements.length>0||t.entries.length>0||!!t.title.trim())}function re(t,e){return{date:t,title:typeof e.title=="string"?e.title:"",elements:Array.isArray(e.elements)?e.elements:[],entries:Array.isArray(e.entries)?e.entries:[],updatedAt:typeof e.updatedAt=="number"?e.updatedAt:Date.now()}}function fo(){var e,o,n,s,i,l;const t={version:2,diaries:{}};try{const a=localStorage.getItem(be);if(a){const c=JSON.parse(a);for(const[r,p]of Object.entries(c.diaries??{}))t.diaries[r]=re(r,p??{})}const d=localStorage.getItem(ie);if(d){const c=JSON.parse(d),r=((o=(e=c.entries)==null?void 0:e[0])==null?void 0:o.createdAt)??((s=(n=c.elements)==null?void 0:n[0])==null?void 0:s.createdAt)??Date.now(),p=Z(new Date(r));!t.diaries[p]&&((i=c.elements)!=null&&i.length||(l=c.entries)!=null&&l.length)&&(t.diaries[p]=re(p,{title:c.title&&c.title!=="Untitled story"?c.title:"",elements:c.elements,entries:c.entries})),localStorage.removeItem(ie),ke(t)}}catch(a){console.warn("Could not read diaries from localStorage",a)}return t}function ke(t){try{const e={};for(const[o,n]of Object.entries(t.diaries))z(n)&&(e[o]=n);localStorage.setItem(be,JSON.stringify({version:2,diaries:e}))}catch(e){console.warn("Could not save diaries to localStorage",e)}}const bo={"not-allowed":"Microphone access is blocked. Click the 🔒/camera icon in the address bar, allow the microphone, then tap the mic to retry — or type below.","service-not-allowed":"Speech recognition is not allowed here. Try Chrome or Edge, or type below.","audio-capture":"No microphone was found. Plug one in and tap the mic to retry, or type your story below.",network:"Speech recognition lost its network connection. Tap the mic to retry, or type below.","insecure-context":"Voice needs a secure page (https:// or localhost). Type your story below instead.","start-failed":"Couldn’t start listening. Tap the mic to try again."},yo=new Set(["not-allowed","service-not-allowed","audio-capture","insecure-context"]),ko=5,Co=250;function xo(){return typeof window<"u"&&!!(window.SpeechRecognition||window.webkitSpeechRecognition)}class jo{constructor(e,o=navigator.language||"en-US"){_(this,"recognition",null);_(this,"listening",!1);_(this,"wantListening",!1);_(this,"active",!1);_(this,"starting",!1);_(this,"finalText","");_(this,"silentRestarts",0);_(this,"restartTimer");this.cb=e;const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n)return;const s=new n;s.lang=o,s.continuous=!0,s.interimResults=!0,s.maxAlternatives=1,s.onstart=()=>this.setListening(!0),s.onend=()=>this.handleEnd(),s.onerror=i=>this.handleError(i.error),s.onresult=i=>{this.silentRestarts=0;let l="";for(let d=i.resultIndex;d<i.results.length;d++){const c=i.results[d],r=c[0].transcript;if(c.isFinal){const p=r.trim();p&&(this.finalText=`${this.finalText} ${p}`.trim(),this.cb.onFinalPhrase(p))}else l+=r}const a=`${this.finalText} ${l}`.trim();this.cb.onTranscript(a,l.length===0)},this.recognition=s}get supported(){return this.recognition!==null}get isListening(){return this.listening}get isActive(){return this.wantListening}async start(){if(!(!this.recognition||this.wantListening||this.starting)){this.starting=!0;try{if(!await this.primeMicrophone())return;this.wantListening=!0,this.silentRestarts=0,this.finalText="",this.cb.onTranscript("",!1),this.startRecognition()}finally{this.starting=!1}}}stop(){var e;this.wantListening=!1,window.clearTimeout(this.restartTimer),this.active?(e=this.recognition)==null||e.stop():this.setListening(!1)}toggle(){this.wantListening?this.stop():this.start()}async primeMicrophone(){var o,n;if(!window.isSecureContext)return this.fail("insecure-context"),!1;const e=navigator.mediaDevices;if(!(e!=null&&e.getUserMedia))return!0;(n=(o=this.cb).onStatus)==null||n.call(o,"Asking for microphone access…");try{return(await e.getUserMedia({audio:!0})).getTracks().forEach(i=>i.stop()),!0}catch(s){const i=s==null?void 0:s.name;return i==="NotAllowedError"||i==="SecurityError"?this.fail("not-allowed"):i==="NotFoundError"||i==="OverconstrainedError"?this.fail("audio-capture"):i==="NotReadableError"||i==="AbortError"?this.cb.onError("Your microphone is busy in another app or tab. Close it and tap the mic to retry.","retryable"):this.fail("start-failed"),!1}}startRecognition(){if(!(!this.recognition||this.active||!this.wantListening))try{this.active=!0,this.recognition.start()}catch(e){(e==null?void 0:e.name)!=="InvalidStateError"&&(this.active=!1,console.warn(e),this.fail("start-failed"))}}handleError(e){if(e!=="aborted"){if(e==="no-speech"){this.silentRestarts++;return}this.fail(e)}}handleEnd(){if(this.active=!1,!this.wantListening){this.setListening(!1);return}if(this.silentRestarts>=ko){this.wantListening=!1,this.setListening(!1),this.cb.onError("I haven't heard anything for a while — tap the mic when you're ready.","retryable");return}window.clearTimeout(this.restartTimer),this.restartTimer=window.setTimeout(()=>this.startRecognition(),Co)}fail(e){var n;const o=yo.has(e)?"fatal":"retryable";this.wantListening=!1,window.clearTimeout(this.restartTimer),this.active&&((n=this.recognition)==null||n.abort()),this.setListening(!1),this.cb.onError(bo[e]??`Speech error: ${e}. Tap the mic to retry.`,o)}setListening(e){this.listening!==e&&(this.listening=e,this.cb.onStateChange(e))}}const Lo=document.querySelector("#app");Lo.innerHTML=`
  <header class="topbar">
    <div class="brand">
      <span class="brand__mark" aria-hidden="true"></span>
      <span class="brand__name">Visual Diary</span>
    </div>
    <nav class="datebar" aria-label="Choose a day">
      <button class="icon-btn" id="prev-day" type="button" aria-label="Previous day">${S("chevron-left")}</button>
      <label class="datebar__picker">
        <span class="sr-only">Diary date</span>
        <input type="date" id="date-input" />
      </label>
      <button class="icon-btn" id="next-day" type="button" aria-label="Next day">${S("chevron-right")}</button>
      <button class="btn btn--ghost" id="today" type="button">Today</button>
    </nav>
    <div class="topbar__actions">
      <button class="btn btn--ghost" id="tidy" type="button">Re-layout</button>
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
          <button class="btn btn--primary" type="submit">Add to board</button>
        </div>
      </form>

      <section class="entries" aria-labelledby="entries-title">
        <h2 id="entries-title" class="eyebrow">Entries <span id="entry-count" class="count">0</span></h2>
        <ol id="entry-list"></ol>
      </section>
    </section>

    <section class="board-panel" aria-labelledby="board-title">
      <div class="board-head">
        <h2 id="board-title" class="eyebrow">Board</h2>
        <ul id="legend" class="legend"></ul>
      </div>
      <div id="board" class="board">
        <div id="board-empty" class="board__empty">
          <p class="board__empty-title">Nothing on this day yet.</p>
          <p class="muted">Speak or write a few sentences. People, places, feelings, objects and scenes are plotted here as image cards.</p>
        </div>
      </div>
    </section>
  </div>
`;const u=t=>document.querySelector(t),O=u("#mic"),Eo=u("#mic-label"),ae=u("#mic-status"),Mo=u("#mic-status-text"),I=u("#transcript"),J=u("#fallback"),Ce=u("#type-form"),B=u("#type-input"),F=u("#day-title"),Q=u("#date-input"),le=u("#legend"),ce=u("#entry-list"),So=u("#entry-count"),de=u("#history"),Bo=u("#history-empty"),k=fo(),v=Z();let m=me(location.hash.slice(1))?location.hash.slice(1):v;const $=()=>{var t;return(t=k.diaries)[m]??(t[m]=ye(m))},U=new no(u("#board"),u("#board-empty"),{onMove(t,e,o){j(n=>({...n,elements:n.elements.map(s=>s.id===t?{...s,x:e,y:o}:s)}))},onDelete(t){j(e=>({...e,elements:e.elements.filter(o=>o.id!==t)}))}});function j(t){k.diaries[m]={...t($()),updatedAt:Date.now()},ke(k),K()}function E(t){!me(t)||t===m||(m=t,history.replaceState(null,"",`#${t}`),U.reset(),I.textContent="Live transcript appears here.",I.dataset.empty="true",K())}const x=(t,e)=>G(t).toLocaleDateString(void 0,e);function Ro(){const t=new Set(Object.keys(k.diaries).filter(o=>z(k.diaries[o])));t.add(v);const e=[...t].sort().reverse();de.innerHTML="";for(const o of e){const n=k.diaries[o],s=document.createElement("li"),i=document.createElement("button");i.type="button",i.className="history__item",o===m&&i.setAttribute("aria-current","date"),i.addEventListener("click",()=>E(o));const l=document.createElement("span");l.className="history__date",l.textContent=o===v?`Today · ${x(o,{month:"short",day:"numeric"})}`:x(o,{weekday:"short",month:"short",day:"numeric",year:o.slice(0,4)===v.slice(0,4)?void 0:"numeric"});const a=document.createElement("span");a.className="history__title";const d=(n==null?void 0:n.elements.length)??0;a.textContent=(n==null?void 0:n.title.trim())||(d?`${d} element${d===1?"":"s"}`:"Empty");const c=document.createElement("span");c.className="history__thumbs";for(const r of[...new Set(((n==null?void 0:n.elements)??[]).map(p=>we(p.asset)).filter(Boolean))].slice(0,4)){const p=document.createElement("img");p.src=r,p.alt="",c.appendChild(p)}i.append(l,a),c.childElementCount&&i.appendChild(c),s.appendChild(i),de.appendChild(s)}Bo.hidden=e.length>1||z(k.diaries[v])}function K(){const t=$();Q.value=m,Q.max=v,u("#next-day").disabled=m>=v,u("#today").disabled=m===v,u("#day-weekday").textContent=m===v?`Today · ${x(m,{weekday:"long"})}`:x(m,{weekday:"long"}),u("#day-heading").textContent=x(m,{month:"long",day:"numeric",year:"numeric"}),document.activeElement!==F&&(F.value=t.title),U.render(t.elements),le.innerHTML="";for(const e of Ee){const o=t.elements.filter(i=>i.kind===e).length,n=document.createElement("li");n.className=`legend__item legend__item--${e}`,n.textContent=ue[e].plural;const s=document.createElement("span");s.className="count",s.textContent=String(o),n.appendChild(s),le.appendChild(n)}So.textContent=String(t.entries.length),ce.innerHTML="";for(const e of[...t.entries].reverse()){const o=document.createElement("li"),n=document.createElement("time");n.dateTime=new Date(e.createdAt).toISOString(),n.textContent=new Date(e.createdAt).toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});const s=document.createElement("p");s.textContent=e.text,o.append(n,s),ce.appendChild(o)}Ro()}function xe(t){const e=t.trim();if(!e)return;const o=Ao(e);j(n=>{const s=[...n.elements];for(const i of o){if(s.some(r=>r.kind===i.kind&&r.text.toLowerCase()===i.text.toLowerCase()))continue;const{x:a,y:d}=U.placeFor(i.kind,s),c={id:ee(),kind:i.kind,text:i.text,note:i.note,asset:i.asset,x:a,y:d,createdAt:Date.now()};s.push(c)}return{...n,elements:s,entries:[...n.entries,{id:ee(),text:e,createdAt:Date.now()}]}})}function f(t,e){Mo.textContent=t,e?ae.dataset.tone=e:delete ae.dataset.tone}const R=new jo({onTranscript(t){I.dataset.empty=String(!t),I.textContent=t||"Listening…"},onFinalPhrase(t){xe(t)},onStateChange(t){O.classList.toggle("is-listening",t),O.setAttribute("aria-pressed",String(t)),Eo.textContent=t?"Stop":"Start speaking",f(t?"Mic on — listening. Each sentence is plotted as you finish it.":"Mic off",t?"live":void 0),t&&(J.hidden=!0)},onError(t,e){f(t,"error"),e==="fatal"&&Io("Voice isn’t available right now — write below and the board builds the same way. Tap the mic again after fixing access.")},onStatus(t){f(t,"busy")}});function Io(t){J.hidden=!1,J.textContent=t,B.focus()}var pe;!xo()||!R.supported?(O.disabled=!0,f("Voice input isn’t supported in this browser — use Chrome or Edge, or write below.","error"),I.hidden=!0):(O.addEventListener("click",()=>R.toggle()),(pe=navigator.permissions)==null||pe.query({name:"microphone"}).then(t=>{const e=()=>{R.isActive||(t.state==="granted"?f("Mic allowed — tap Start speaking"):t.state==="denied"?f("Mic blocked — allow it in the address bar’s site settings, or write below.","error"):f("Tap Start speaking — your browser will ask for the microphone"))};e(),t.onchange=e}).catch(()=>f("Tap Start speaking — your browser will ask for the microphone")));Ce.addEventListener("submit",t=>{t.preventDefault(),xe(B.value),B.value="",B.focus()});B.addEventListener("keydown",t=>{t.key==="Enter"&&(t.metaKey||t.ctrlKey)&&Ce.requestSubmit()});Q.addEventListener("change",()=>E(Q.value));u("#prev-day").addEventListener("click",()=>E(ge(m,-1)));u("#next-day").addEventListener("click",()=>E(ge(m,1)));u("#today").addEventListener("click",()=>E(v));window.addEventListener("hashchange",()=>E(location.hash.slice(1)));F.addEventListener("change",()=>j(t=>({...t,title:F.value.trim()})));u("#tidy").addEventListener("click",()=>j(t=>({...t,elements:U.tidy(t.elements)})));u("#clear-day").addEventListener("click",()=>{z($())&&confirm(`Clear everything on ${x(m,{month:"long",day:"numeric"})}?`)&&(R.isActive&&R.stop(),U.reset(),j(()=>ye(m)))});history.replaceState(null,"",`#${m}`);K();to();let he;window.addEventListener("resize",()=>{window.clearTimeout(he),he=window.setTimeout(K,120)});
