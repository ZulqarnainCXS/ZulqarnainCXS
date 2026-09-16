const header=document.querySelector('.header'),menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>{const open=header.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close':'Menu'});
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>{header.classList.remove('open');menu?.setAttribute('aria-expanded','false');if(menu)menu.textContent='Menu'}));
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',scrollY>28),{passive:true});
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduced){
 const stage=document.querySelector('.hero-stage');
 stage?.addEventListener('pointermove',e=>{const r=stage.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;document.querySelectorAll('.project-float').forEach((el,i)=>{const d=(i+1)*9;el.style.translate=`${x*d}px ${y*d}px`});document.querySelectorAll('.metric-float').forEach((el,i)=>{const d=(i+1)*-10;el.style.translate=`${x*d}px ${y*d}px`})});
 document.querySelectorAll('.magnetic').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.09}px,${(e.clientY-r.top-r.height/2)*.12}px)`});el.addEventListener('pointerleave',()=>el.style.transform='')});
 const init=()=>{if(!window.gsap||!window.ScrollTrigger)return false;gsap.registerPlugin(ScrollTrigger);
  gsap.from('.hero-copy > *',{y:45,opacity:0,duration:1,stagger:.08,ease:'power3.out'});
  gsap.from('.project-float',{y:90,opacity:0,scale:.88,rotation:4,duration:1.25,stagger:.12,ease:'power4.out'});
  gsap.from('.metric-float',{scale:.6,opacity:0,duration:.8,stagger:.12,delay:.6,ease:'back.out(1.5)'});
  gsap.to('.ring-one',{rotation:120,scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1.2}});gsap.to('.ring-two',{rotation:-150,scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1.2}});
  gsap.to('.pf-one',{y:-120,x:40,rotation:0,scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});gsap.to('.pf-two',{y:90,x:-60,rotation:-8,scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1.1}});gsap.to('.pf-three',{y:-40,x:-30,rotation:8,scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1.15}});
  gsap.utils.toArray('.service-row article').forEach((el,i)=>gsap.fromTo(el,{y:75,opacity:.3,rotation:i%2?1.5:-1.5},{y:0,opacity:1,rotation:0,scrollTrigger:{trigger:el,start:'top 92%',end:'top 60%',scrub:.7}}));
  gsap.fromTo('.video-shell',{scale:.9,y:90,rotation:2},{scale:1,y:0,rotation:0,scrollTrigger:{trigger:'.video-story',start:'top 90%',end:'center 55%',scrub:1}});
  gsap.utils.toArray('.case-panel').forEach((el,i)=>{gsap.fromTo(el,{y:120,scale:.94,opacity:.4},{y:0,scale:1,opacity:1,scrollTrigger:{trigger:el,start:'top 94%',end:'top 55%',scrub:1}});const visual=el.querySelector('.case-visual');const img=el.querySelector('.case-visual img');if(visual)gsap.fromTo(visual,{x:i%2?90:-90,rotationY:i%2?-10:10},{x:0,rotationY:i%2?4:-4,scrollTrigger:{trigger:el,start:'top 90%',end:'center 55%',scrub:1}});if(img)gsap.fromTo(img,{yPercent:-4,scale:1.04},{yPercent:6,scale:1,scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:1.2}})});
  gsap.utils.toArray('.section-title h2,.statement h2,.work-head h2,.insight-band h2,.about h2,.contact h2').forEach(el=>gsap.fromTo(el,{y:55,opacity:.35},{y:0,opacity:1,scrollTrigger:{trigger:el,start:'top 90%',end:'top 62%',scrub:.65}}));
  gsap.utils.toArray('.steps article').forEach((el,i)=>gsap.from(el,{y:55,opacity:0,duration:.75,delay:i*.06,scrollTrigger:{trigger:el,start:'top 88%'}}));
  gsap.fromTo('.about-mark',{rotation:-8,scale:.88},{rotation:0,scale:1,scrollTrigger:{trigger:'.about',start:'top 88%',end:'center 55%',scrub:1}});ScrollTrigger.refresh();return true};
 if(!init()){const s=document.createElement('script');s.src='https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js';s.onload=()=>{const t=document.createElement('script');t.src='https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js';t.onload=init;document.head.appendChild(t)};document.head.appendChild(s)}
}
