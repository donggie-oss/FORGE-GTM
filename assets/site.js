(()=>{const page=document.body.dataset.page||'';const links=[['Home','index.html','home'],['Consulting','consulting.html','consulting'],['Selected Work','selected-work.html','work'],['SignalGate','signalgate.html','signalgate'],['About Don','about.html','about']];const nav=links.map(([label,href,key])=>`<a href="${href}"${page===key?' aria-current="page"':''}>${label}</a>`).join('');const h=document.getElementById('site-header');if(h)h.innerHTML=`<a class="skip" href="#main">Skip to content</a><header class="site-header"><div class="wrap header-inner"><a class="brandmark" href="index.html" aria-label="Forge GTM home"><img src="assets/forge-mark-transparent.png" alt="" aria-hidden="true" width="512" height="512"><span class="brand-copy"><strong>FORGE GTM</strong><small>Precision under pressure</small></span></a><nav class="nav" aria-label="Primary">${nav}</nav><button class="menu-btn" type="button" aria-expanded="false" aria-controls="mobile-nav">Menu</button></div><nav id="mobile-nav" class="mobile-nav wrap" aria-label="Mobile">${nav}<a href="work-with-us.html">Work With Don</a></nav></header>`;const b=h?.querySelector('.menu-btn');const m=h?.querySelector('#mobile-nav');if(b&&m)b.addEventListener('click',()=>{m.classList.toggle('open');b.setAttribute('aria-expanded',m.classList.contains('open')?'true':'false')});const f=document.getElementById('site-footer');if(f)f.innerHTML=`<footer class="site-footer"><div class="wrap footer-grid"><div><a class="brandmark brandmark-footer" href="index.html" aria-label="Forge GTM home"><img src="assets/forge-mark-transparent.png" alt="" aria-hidden="true" width="512" height="512"><span class="brand-copy"><strong>FORGE GTM</strong><small>Precision under pressure</small></span></a><p class="footer-note">Principal-led Sales, Marketing and Go-to-Market work by Don Florencio.</p></div><div class="footer-links"><a href="systems.html">GTM Systems</a><a href="method.html">How Forge Works</a><a href="pricing.html">Engagements</a><a href="rso.html">Solution Overview</a></div><div class="footer-links"><a href="mailto:donggie@gmail.com">donggie@gmail.com</a><a href="https://www.linkedin.com/in/don-florencio/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div></div><div class="wrap footer-bottom">© ${new Date().getFullYear()} FORGE GTM. All rights reserved.</div></footer>`;})();
(()=>{
  const triggers=[...document.querySelectorAll('[data-calendly-open]')];
  if(!triggers.length)return;
  let dialog=document.getElementById('calendar-dialog');
  if(!dialog){
    dialog=document.createElement('dialog');
    dialog.id='calendar-dialog';
    dialog.className='calendar-dialog';
    dialog.setAttribute('aria-labelledby','calendar-title');
    dialog.setAttribute('data-calendly-dialog-installed','');
    dialog.innerHTML=`<div class="calendar-dialog-head"><div><div class="section-kicker">Book a working session</div><h2 id="calendar-title">Choose a time with Don.</h2></div><button class="calendar-close" type="button" data-calendly-close aria-label="Close booking calendar">Close</button></div><iframe class="calendar-frame" src="https://calendly.com/donggie/30min?hide_gdpr_banner=1" title="Book a working session with Don Florencio" loading="lazy"></iframe>`;
    document.body.appendChild(dialog);
  }
  if(typeof dialog.showModal!=='function')return;
  triggers.forEach(trigger=>trigger.addEventListener('click',e=>{e.preventDefault();dialog.showModal();}));
  dialog.querySelector('[data-calendly-close]')?.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
})();
