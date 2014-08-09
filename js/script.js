$(document).ready(function(){
  playVid();
});


function playVid(){
  console.log("I'm inside playVid muhahahah")
  $('.intro-section').videoBG({
    // mp4:'assets/vid/sp2p2.mp4',
    webm:'assets/vid/sp2p2.webm',
    scale:true,
    zIndex:1
    // position:fixed
  });
  // this mutes vide
  $('video,audio').each(function(){this.muted=true})
};