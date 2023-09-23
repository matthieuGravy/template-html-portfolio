const ratio = 0.1;
let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
};

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    } else {
      console.log("invisible");
    }

    console.log(entry.intersectionRatio);
  });
  console.log("handleIntersect");
};

window.addEventListener("DOMContentLoaded", function () {
  let observer = new IntersectionObserver(handleIntersect, options);
  document.querySelectorAll(".reveal").forEach(function (r) {
    observer.observe(r);
  });
});
