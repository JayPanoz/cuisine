document.addEventListener("DOMContentLoaded", () => {
  const handleTagEvent = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.target.tagName.toLowerCase() === "a") {
      let el = event.target;
      let parentEl = el.parentNode;
      if (parentEl.hasAttribute("data-tag-label")) {
        if (parentEl.classList.contains("bg-accent")) {
          parentEl.classList.add("bg-gray");
          parentEl.classList.remove("bg-accent");
          let taggedSelector = "[data-tagged='" + parentEl.dataset.tagLabel + "']";
          let sec = document.querySelector(taggedSelector);
          sec.classList.add("hide");
        } else {
          parentEl.classList.add("bg-accent");
          parentEl.classList.remove("bg-gray");
          let taggedSelector = "[data-tagged='" + parentEl.dataset.tagLabel + "']";
          let sec = document.querySelector(taggedSelector);
          sec.classList.remove("hide");
        }
      }
    }
  }

  const tagList = document.querySelector("#tag-list");
  tagList.addEventListener("click", (event) => {
    handleTagEvent(event);
  });
  tagList.addEventListener("touchend", (event) => {
    handleTagEvent(event);
  });

  if (window.location.hash.length > 1) {
    let decodedURL = decodeURI(window.location.hash.substring(1));
    let taggedSelector = "[data-tag-label='" + decodedURL + "'] a";
    let el = document.querySelector(taggedSelector);
    if (el) {
      el.click();
    };
  };
});