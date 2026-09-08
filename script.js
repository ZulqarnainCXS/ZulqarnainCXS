const nav=document.querySelector('.nav');const menu=document.querySelector('.menu');const glow=document.querySelector('.cursor-glow');
if(menu)menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
window.addEventListener('load',()=>setTimeout(()=>document.querySelector('.loader')?.classList.add('hide'),550));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
if(glow){window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'})}
document.querySelectorAll('.service,.work-card,.process-step').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();card.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');card.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%')})});
let last=0;window.addEventListener('scroll',()=>{const y=window.scrollY;if(nav)nav.style.borderColor=y>40?'rgba(199,255,56,.18)':'rgba(255,255,255,.10)';last=y},{passive:true});
