
(function(){
document.querySelectorAll('.yt').forEach(function(b){b.addEventListener('click',function(){var id=b.dataset.id,s=b.dataset.start||0;b.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&start='+s+'" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="YouTube video"></iframe>';});});
document.querySelectorAll('ul.check').forEach(function(ul){var k='chk:'+location.pathname+':'+ul.id,st={};try{st=JSON.parse(localStorage.getItem(k)||'{}')}catch(e){}
 var p=document.getElementById(ul.id+'-p');function upd(){var b=ul.querySelectorAll('input'),n=0;b.forEach(function(x){if(x.checked)n++});if(p)p.textContent=n+' / '+b.length+' found';}
 ul.querySelectorAll('input').forEach(function(x){if(st[x.value]){x.checked=true;x.closest('li').classList.add('done')}x.addEventListener('change',function(){st[x.value]=x.checked;x.closest('li').classList.toggle('done',x.checked);try{localStorage.setItem(k,JSON.stringify(st))}catch(e){}upd();});});upd();});
var bb=document.querySelector('.bb');if(bb){var ss=bb.querySelectorAll('.s'),ds=bb.querySelectorAll('.dots button'),i=0,t;
 function go(n){ss[i].classList.remove('on');ds[i]&&ds[i].classList.remove('on');i=(n+ss.length)%ss.length;ss[i].classList.add('on');ds[i]&&ds[i].classList.add('on');}
 function auto(){clearInterval(t);if(!matchMedia('(prefers-reduced-motion: reduce)').matches)t=setInterval(function(){go(i+1)},6500);}
 ds.forEach(function(d,n){d.addEventListener('click',function(){go(n);auto();});});
 var l=bb.querySelector('.ar.l'),r=bb.querySelector('.ar.n');l&&l.addEventListener('click',function(){go(i-1);auto();});r&&r.addEventListener('click',function(){go(i+1);auto();});
 bb.addEventListener('mouseenter',function(){clearInterval(t)});bb.addEventListener('mouseleave',auto);auto();}
document.querySelectorAll('.rail').forEach(function(r){var tr=r.querySelector('.track');r.querySelectorAll('.nav').forEach(function(b){b.addEventListener('click',function(){tr.scrollBy({left:(b.classList.contains('n')?1:-1)*tr.clientWidth*.9,behavior:'smooth'});});});});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px'});document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});}else{document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});}
(function(){var rm=matchMedia('(prefers-reduced-motion: reduce)').matches,hov=matchMedia('(hover: hover)').matches;
 function on(v){if(!v.src)v.src=v.dataset.src;var pr=v.play();v.classList.add('on');v.parentNode.classList.add('playing');if(pr&&pr.catch)pr.catch(function(){});}
 function off(v){v.pause();v.classList.remove('on');v.parentNode.classList.remove('playing');}
 document.querySelectorAll('.card video.pv').forEach(function(v){var c=v.closest('.card');
  if(hov){c.addEventListener('mouseenter',function(){on(v)});c.addEventListener('mouseleave',function(){off(v)});c.addEventListener('focus',function(){on(v)});c.addEventListener('blur',function(){off(v)});}
  else if(!rm&&'IntersectionObserver' in window){new IntersectionObserver(function(es){es.forEach(function(e){e.intersectionRatio>.7?on(v):off(v)})},{threshold:[0,.7,1]}).observe(c);}});
 var hv=document.querySelector('.ahero video.pv');if(hv&&!rm){on(hv);}
})();
})();
