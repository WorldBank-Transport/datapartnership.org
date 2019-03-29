document.getElementById("play-decdg-dataday").addEventListener("click", function(e){
  e.preventDefault();
  el = document.getElementById("play-decdg-dataday-container")
  el.classList.add("d-none");

  el = document.getElementById("play-decdg-dataday-video-container");
  el.classList.remove("d-none");

  el = document.getElementById("play-decdg-dataday-video");
  el.play();

});
