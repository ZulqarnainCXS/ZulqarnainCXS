const header=document.querySelector('.header'),menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>{const open=header.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close':'Menu'});
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>{header.classList.remove('open');menu?.setAttribute('aria-expanded','false');if(menu)menu.textContent='Menu'}));
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',scrollY>30),{passive:true});
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.reveal').forEach(x=>x.classList.add('visible'));
if(!reduced){
 const hero=document.querySelector('.hero'),orbit=document.querySelector('.orbit-system'),cloud=document.querySelector('.data-cloud');
 hero?.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;if(orbit)orbit.style.margin=`${y*8}px ${x*10}px`;if(cloud)cloud.style.margin=`${y*-5}px ${x*-8}px`});
 document.querySelectorAll('.magnetic').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.1}px,${(e.clientY-r.top-r.height/2)*.12}px)`});el.addEventListener('pointerleave',()=>el.style.transform='')});
 const loadGSAP=()=>{
  if(!window.gsap||!window.ScrollTrigger)return false;
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.hero-copy > *',{y:55,opacity:0,duration:1.1,stagger:.09,ease:'power4.out'});
  gsap.fromTo('.hero-video-wrap',{y:45,rotate:4,scale:.94},{y:0,rotate:1.5,scale:1,duration:1.35,ease:'power4.out'});
  gsap.to('.hero-video-wrap',{y:-90,rotate:-1.5,scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1.1}});
  gsap.to('.orbit-system',{rotation:95,y:-130,scale:.82,scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1.2}});
  gsap.to('.data-cloud',{y:-170,scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
  gsap.utils.toArray('.service').forEach((el,i)=>gsap.fromTo(el,{y:90,rotation:i%2?2:-2,opacity:.25},{y:0,rotation:0,opacity:1,ease:'none',scrollTrigger:{trigger:el,start:'top 92%',end:'top 55%',scrub:.8}}));
  gsap.utils.toArray('.case').forEach((el,i)=>{gsap.fromTo(el,{x:i%2?110:-110,y:70,rotation:i%2?2.5:-2.5,scale:.94,opacity:.25},{x:0,y:0,rotation:0,scale:1,opacity:1,ease:'none',scrollTrigger:{trigger:el,start:'top 95%',end:'top 52%',scrub:1}});const img=el.querySelector('.browser img');if(img)gsap.fromTo(img,{yPercent:-2},{yPercent:8,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:1.2}})});
  gsap.utils.toArray('.heading h2').forEach(el=>gsap.fromTo(el,{x:-70,opacity:.3},{x:0,opacity:1,scrollTrigger:{trigger:el,start:'top 88%',end:'top 58%',scrub:.7}}));
  gsap.utils.toArray('.process li').forEach((el,i)=>gsap.from(el,{y:60,opacity:0,duration:.8,delay:i*.06,scrollTrigger:{trigger:el,start:'top 86%'}}));
  gsap.fromTo('.about',{rotation:-2,scale:.94},{rotation:0,scale:1,scrollTrigger:{trigger:'.about',start:'top 90%',end:'top 55%',scrub:1}});
  ScrollTrigger.refresh();return true;
 };
 if(!loadGSAP()){const s=document.createElement('script');s.src='https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js';s.onload=()=>{const t=document.createElement('script');t.src='https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js';t.onload=loadGSAP;document.head.appendChild(t)};document.head.appendChild(s)}
}
