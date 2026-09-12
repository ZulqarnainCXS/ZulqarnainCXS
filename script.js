const nav=document.querySelector('.nav');const menu=document.querySelector('.menu');const glow=document.querySelector('.cursor-glow');
if(menu)menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
window.addEventListener('load',()=>setTimeout(()=>document.querySelector('.loader')?.classList.add('hide'),550));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
if(glow){window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'})}
document.querySelectorAll('.service,.work-card,.process-step').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();card.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');card.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%')})});
const cityScene=document.querySelector('.city-scene');const cityWorld=document.querySelector('.city-world');const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(menu){menu.setAttribute('aria-expanded','false');menu.addEventListener('click',()=>menu.setAttribute('aria-expanded',String(nav.classList.contains('open'))))}
if(cityScene&&cityWorld&&!reduceMotion){cityScene.addEventListener('pointermove',e=>{const r=cityScene.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;cityWorld.style.transform=`rotateX(${62-y*5}deg) rotateZ(${-42+x*5}deg) translateZ(4px)`});cityScene.addEventListener('pointerleave',()=>cityWorld.style.transform='rotateX(62deg) rotateZ(-42deg)')}
let last=0;window.addEventListener('scroll',()=>{const y=window.scrollY;if(nav){nav.style.borderColor=y>40?'rgba(117,240,178,.20)':'rgba(255,255,255,.10)';nav.classList.toggle('scrolled',y>40)}last=y},{passive:true});
