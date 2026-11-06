/* Additive scroll motion: uses existing GSAP/ScrollTrigger when available.
   Falls back to IntersectionObserver. Does not alter existing animations. */
(function () {
  "use strict";
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  var sectionCards = Array.prototype.slice.call(
    document.querySelectorAll("#professional-network .network-hub-card, .hero-tech-panel .tech-tile")
  );

  if (sectionCards.length) {
    document.body.classList.add("additive-scroll-motion");
    sectionCards.forEach(function (el) { el.classList.add("motion-pending"); });
  }

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    sectionCards.forEach(function (el, index) {
      gsap.fromTo(el,
        { autoAlpha: 0.15, y: 26, scale: 0.985, rotateX: -2 },
        {
          autoAlpha: 1, y: 0, scale: 1, rotateX: 0,
          duration: 0.75, delay: (index % 4) * 0.07,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          onStart: function () { el.classList.remove("motion-pending"); el.classList.add("motion-in"); }
        }
      );
    });

    document.querySelectorAll(
      "#portfolio .section-intro, #case-studies .section-intro, #insights .section-intro, #certifications .section-intro, #stats .section-intro, #contact .section-intro"
    ).forEach(function (el) {
      gsap.fromTo(el, { autoAlpha: 0, y: 22 }, {
        autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true }
      });
    });
    window.addEventListener("load", function () { ScrollTrigger.refresh(); }, { once: true });
  } else if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.remove("motion-pending");
          entry.target.classList.add("motion-in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    sectionCards.forEach(function (el) { observer.observe(el); });
  } else {
    sectionCards.forEach(function (el) {
      el.classList.remove("motion-pending");
      el.classList.add("motion-in");
    });
  }
})();