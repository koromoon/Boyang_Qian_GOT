(() => {
  console.log('video stuff fired!');
  //add to rh string prototyoe to cap the first letter
  String.prototype.capIt = function() {return this.replace(this.charAt(), this.charAt().toUpperCase());};


  const sigils = document.querySelectorAll('.sigilContainer'),
        lightbox = document.querySelector('.lightbox'),
        closeLightbox = document.querySelector('.close-lightbox'),
        vidPlayer = document.querySelector('video'),
        playPause = document.querySelector('.play-pause'),
        ffWd = document.querySelector('.forward'),
        rWnd = document.querySelector('.rewind'),
        imageBanner = document.querySelector('#houseImages'),
        volumeOnOff = document.querySelector('.volumeOn-Off');
  const Info = document.querySelectorAll('.houseInfo')

  function loadMovie() {
    // turn on the lightbox
    lightbox.classList.add('show-lightbox');
    //grab the right video base on the class name
    var house = this.className.split(' ')[1].capIt();
    //out the path together and make the video load and play
    vidPlayer.src = `video/House-${house}.${vidPlayer.currentSrc.split('.')[1]}`;
    vidPlayer.load();
    vidPlayer.play();

    animateBanners(this.dataset.offset);
  }

  function animateBanners(offset) {
    console.log(600 * offset);
    imageBanner.style.right = (offset * 600) + "px";
  }

  //HouseNames and HouseInfo
    var houseName = ['Stark','Baratheon','Lannister','Tully','Greyjoy','Arryn','Targaryen','Frey'];
    var houseInfo =
    ['House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen\'s invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.',

    "House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End.",

    "House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway.",

    "House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are \"Family, Duty, Honor.\"",

    "House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke.House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are \"We Do Not Sow,\" although the phrase \"What Is Dead May Never Die\" is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God. ",

    "House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority. ",

    "House Frey of the Twins was the Great House of the Riverlands, having gained their position for their treachery against their former liege lords, House Tully, who were stripped of all their lands and titles for their rebellion against the Iron Throne; House Tully had supported the independence movement for the Kingdom of the North. The current head of the house is unknown following the assassinations of Lord Walder Frey and two of his sons, Lothar Frey and Walder Rivers, by the vengeful Arya Stark. This is made more complex by the subsequent assassination of all the male Freys soon after.",

    "House Targaryen of Dragonstone is a Great House of Westeros and was the ruling royal House of the Seven Kingdoms for three centuries since it conquered and unified the realm, before it was deposed during Robert's Rebellion and House Baratheon replaced it as the new royal House. The few surviving Targaryens fled into exile to the Free Cities of Essos across the Narrow Sea. Currently based on Dragonstone off of the eastern coast of Westeros, House Targaryen seeks to retake the Seven Kingdoms from House Lannister, who formally replaced House Baratheon as the royal House following the destruction of the Great Sept of Baelor."];



  function closeLBox() {
    lightbox.classList.remove('show-lightbox');
    vidPlayer.pause();
    vidPlayer.currentTime = 0;
  }

  function togglePlay() {
    var theSVG = this.firstElementChild;
    if(vidPlayer.paused){
      vidPlayer.play();
      theSVG.dataset.icon = "pause-circle";
    }else {
      vidPlayer.pause();
      theSVG.dataset.icon = "play-circle";
    }
  }

  function ffWdVid() {
    vidPlayer.currentTime +=3;
  }
  function rWindVid() {
    vidPlayer.currentTime -=3;
  }

  function volumeControl() {
    var theIcon = this.firstElementChild;
    if(vidPlayer.muted){
      vidPlayer.muted = false;
      theIcon.dataset.icon = "volume-up";
    }else {
      vidPlayer.muted = true;
      theIcon.dataset.icon = "volume-off";
    }
  }

  sigils.forEach(sigil => sigil.addEventListener('click',loadMovie));
  closeLightbox.addEventListener('click', closeLBox);
  vidPlayer.addEventListener('ended', closeLBox);
  playPause.addEventListener('click', togglePlay);
  ffWd.addEventListener('click', ffWdVid);
  rWnd.addEventListener('click', rWindVid);
  volumeOnOff.addEventListener('click', volumeControl);
})();
