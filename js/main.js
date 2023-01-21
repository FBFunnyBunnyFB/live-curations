function $(selector) {
  const result = document.querySelectorAll(selector);
  return result.length > 1 ? result : result[0];
}
function getChildIndex(elem) {
  return Array.prototype.indexOf.call(elem.parentNode.children, elem);
}
function setListeners() {
  const $hamburger = $("#burger-wrapper");
  const $close_nav = $("#close-nav");
  const $nav = $("nav");

  $hamburger.addEventListener("click", () => $nav.classList.add("active"));
  $close_nav.addEventListener("click", () => $nav.classList.remove("active"));

  $("footer div").forEach($elem => {
    $elem.addEventListener("click", () => $elem.classList.toggle("active"));
  });

  $("#slider-index li").forEach($elem => {
    $elem.addEventListener("click", () => {
      const index = getChildIndex($elem);
      updateSlider(index);
    });
  });
}
function updateSlider(index) {
  function updateIndexes() {
    for (var i = 0; i < $indexes.children.length; i++) {
      if(i === index) {
        $indexes.children[i].classList.add("active");
      } else {
        $indexes.children[i].classList.remove("active");
      }
    }
  }
  function translateSlider() {
    $slider.style.transform = `translateX(${index*100*(-1)}%)`;
  }
  const $slider = $("#curation-slider");
  const $indexes = $("#slider-index");

  translateSlider();
  updateIndexes();
}

window.onload = setListeners;
