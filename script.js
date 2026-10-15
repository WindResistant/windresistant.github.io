const dialog=document.getElementById('image-dialog');
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{dialog.querySelector('img').src=button.dataset.image;dialog.querySelector('img').alt=button.dataset.caption;dialog.querySelector('p').textContent=button.dataset.caption;dialog.showModal();}));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
document.getElementById('copy-phone').addEventListener('click',async()=>{const toast=document.getElementById('toast');try{await navigator.clipboard.writeText('13768884533');toast.textContent='手机号已复制';}catch{toast.textContent='手机号：13768884533，请长按或选中复制';}toast.classList.add('visible');setTimeout(()=>toast.classList.remove('visible'),3500);});
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
const cards=[...document.querySelectorAll('.motion-card')];
function playCard(card,play){const img=card.querySelector('[data-gif]');const button=card.querySelector('.motion-toggle');img.src=play?img.dataset.gif:img.dataset.poster;button.setAttribute('aria-pressed',String(play));button.textContent=play?'停止动画':'播放动画';}
cards.forEach(card=>card.querySelector('.motion-toggle').addEventListener('click',()=>playCard(card,card.querySelector('.motion-toggle').getAttribute('aria-pressed')!=='true')));
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){if(!reducedMotion.matches)playCard(entry.target,true);observer.unobserve(entry.target);}}),{threshold:0.35});cards.forEach(card=>observer.observe(card));}
reducedMotion.addEventListener('change',event=>{if(event.matches)cards.forEach(card=>playCard(card,false));});
dialog.addEventListener('close',()=>{dialog.querySelector('img').removeAttribute('src');});
