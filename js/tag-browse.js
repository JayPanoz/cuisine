document.addEventListener("DOMContentLoaded", () => {
  const tagList = document.querySelector("#tag-list");
  tagList.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(event.target);
    if (event.target.tagName.toLowerCase() === "a") {
      console.log("ok check tag");
      let el = event.target;
      let parentEl = el.parentNode;
      console.log(parentEl);
      if (parentEl.hasAttribute("data-tag-label")) {
        console.log("ok dataset");
        if (parentEl.classList.contains("bg-accent")) {
          console.log("accent");
          parentEl.classList.add("bg-gray");
          parentEl.classList.remove("bg-accent");
          let taggedSelector = "[data-tagged='" + parentEl.dataset.tagLabel + "']";
          let sec = document.querySelector(taggedSelector);
          sec.classList.add("hide");
        } else {
          console.log("not accent")
          parentEl.classList.add("bg-accent");
          parentEl.classList.remove("bg-gray");
          let taggedSelector = "[data-tagged='" + parentEl.dataset.tagLabel + "']";
          let sec = document.querySelector(taggedSelector);
          sec.classList.remove("hide");
        }
      }
    }
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