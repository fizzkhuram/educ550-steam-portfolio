const menuButton=document.querySelector('.menu-toggle');
const mainNav=document.querySelector('.main-nav');
menuButton?.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰';});
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>{mainNav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');if(menuButton)menuButton.textContent='☰';}));
const lightbox=document.querySelector('.lightbox'),lightboxImg=lightbox?.querySelector('img');
function showImage(src,alt='Expanded portfolio visual'){if(!lightbox||!lightboxImg)return;lightboxImg.src=src;lightboxImg.alt=alt;lightbox.classList.add('open');document.body.style.overflow='hidden';}
function hideImage(){lightbox?.classList.remove('open');document.body.style.overflow='';}
document.querySelectorAll('[data-lightbox]').forEach(el=>el.addEventListener('click',()=>showImage(el.dataset.lightbox,el.getAttribute('aria-label')||'Portfolio image')));
document.querySelectorAll('.doc-figure img,.quick-image img').forEach(img=>{img.addEventListener('click',()=>showImage(img.src,img.alt));img.setAttribute('tabindex','0');img.setAttribute('role','button');img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();showImage(img.src,img.alt);}})});
document.querySelector('.lightbox-close')?.addEventListener('click',hideImage);lightbox?.addEventListener('click',e=>{if(e.target===lightbox)hideImage()});document.addEventListener('keydown',e=>{if(e.key==='Escape')hideImage()});
const sections=[...document.querySelectorAll('.content-section[id]')];const navLinks=[...document.querySelectorAll('.main-nav a,.side-index a')];
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));}})},{rootMargin:'-22% 0px -68% 0px'});sections.forEach(s=>observer.observe(s));
