$(document).ready(function(){
  alert("page is ready to go");
  playVid();
});


function playVid(){
  console.log("I'm inside playVid muhahahah")
  $('#intro').videoBG({
    // mp4:'assets/vid/sp2p2.mp4',
    webm:'assets/vid/sp2p2.webm',
    scale:true,
    zIndex:-10
  });
  // this mutes vide
  $('video,audio').each(function(){this.muted=true})
};