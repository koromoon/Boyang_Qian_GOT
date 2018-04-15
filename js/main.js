// JavaScript Document
(() => {
console.log("linked up");

String.prototype.capIt = function() { return this.replace(this.charAt(), this.charAt().toUpperCase()); }

//variable stack goes here
let sigils = document.querySelectorAll('.sigilContainer'),
lightbox = document.querySelector('.lightbox'),
closeLightBoxButton = document.querySelector('.close-lightbox'),
vidPlayer = document.querySelector('video'),
vidControls = document.querySelector('.controls'),
imageBanner = document.querySelector('#houseImages'),
pBut = document.querySelector('#pausePlay'),
play = document.querySelector('#play'),
pause = document.querySelector('#pause');

//functions in the middle
function showHouseVideo(){
  let houseName = this.className.split(' ')[1].capIt();
  // split apart the class name on the element, grab the house from the result
  document.querySelector('h1').textContent = `House ${houseName}`;
  //debugger;
  lightbox.classList.add('show-lightbox');
  //make the video play
  vidPlayer.src = `video/House-${houseName}.${vidPlayer.currentSrc.split('.')[1]}`;
  vidPlayer.load();
  vidPlayer.play();

  scrollBanners(this.dataset.offset);
}

function scrollBanners(offset){
  // move the banner images to the left
  let moveIt = offset * 600 + "px";

  imageBanner.style.right = moveIt;
}

function closeLightBox(){
  lightbox.classList.remove('show-lightbox')
  //stop video and rewind it to 0
  vidPlayer.pause();
  vidPlayer.currentTime = 0;

}

function pausePlay(){

  if (vidPlayer.paused == true)
  {
  vidPlayer.play();
  theButton.dataset.icon = "pause-circle";
  play.classList.add('hidden');
  pause.classList.remove('hidden');
  }
  else
  {
  vidPlayer.pause();
  theButton.dataset.icon = "play-circle";
  pause.classList.add('hidden');
  play.classList.remove('hidden');
  }
}

// event handelling at the bottomNav
  sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo));
  closeLightBoxButton.addEventListener('click', closeLightBox);
  vidPlayer.addEventListener('ended', closeLightBox);
  pBut.addEventListener('click', pausePlay);

})();
