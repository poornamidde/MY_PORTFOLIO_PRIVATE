/* Lightweight scroll reveal; avoids requiring a framework build pipeline. */
(function(){
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;
  var targets = document.querySelectorAll('.about-content > .col-six, #resume .resume-header, #resume .section-intro');
  targets.forEach(function(el){ el.classList.add('pe-reveal'); });
  var observer = new IntersectionObserver(function(entries){ entries.forEach(function(entry){ if(entry.isIntersecting){ entry.target.classList.add('pe-visible'); observer.unobserve(entry.target); } }); }, {threshold:0.12, rootMargin:'0px 0px -35px 0px'});
  targets.forEach(function(el){ observer.observe(el); });
})();
