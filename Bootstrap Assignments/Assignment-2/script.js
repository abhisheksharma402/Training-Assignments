let playBtn = document.querySelector('.play-btn');
let pauseBtn = document.querySelector('.pause-btn');
let videoPlayer = document.querySelector('video');
let banner = document.querySelector('.banner');
let isPaused = true;

const play = (event)=>{
  videoPlayer.play();
  playBtn.hidden = true;
  banner.hidden = true;
  pauseBtn.hidden = false;
  isPaused = false;
}

const pause = (event) =>{
  videoPlayer.pause();
  pauseBtn.hidden = true;
  playBtn.hidden = false;
  banner.hidden = false;
  isPaused = true;
}


playBtn.addEventListener('click',play);
pauseBtn.addEventListener('click', pause);


const hidePause = () => {
  setTimeout(()=>{
    pauseBtn.hidden = true;
  }, 2000);
}

videoPlayer.addEventListener('mouseover', ()=>{
  if(!isPaused){
    pauseBtn.hidden = false;
  }
});


videoPlayer.addEventListener('mouseout', ()=>{
  hidePause();
});
