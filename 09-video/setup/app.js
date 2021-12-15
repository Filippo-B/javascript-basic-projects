// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const preLoader = document.querySelector(".preloader");
const videoContainer = document.querySelector(".video-container");
const video = videoContainer.querySelector("source");
const switchBtn = document.querySelector(".switch-btn");

videoContainer.addEventListener("canplay", function () {
  preLoader.classList.add("hide-preloader");
});

videoContainer.controls = false;

switchBtn.addEventListener("click", function () {
  consolxxxxe.log("click");
  switchBtn.classList.toggle("slide");

  if (videoContainer.paused) {
    videoContainer.play();
  } else {
    videoContainer.pause();
  }
});
