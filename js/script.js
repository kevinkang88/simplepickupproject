$(document).ready(function(){
  playVid();
  openSideBar();
  sideBar();
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

// function sideBar(){
//   $("#menu-close").click(function(e) {
//     e.preventDefault();
//     $("#sidebar-wrapper").toggleClass("active");
//   });
//   $("#menu-toggle").click(function(e) {
//       e.preventDefault();
//       $("#sidebar-wrapper").toggleClass("active");
//   });
// };

function openSideBar(){
  $('#more-menu').on('click',function(evt){
    evt.preventDefault();
    var slideoutMenu = $('#slideout-menu');
    var slideoutMenuWidth = $('#slideout-menu').width();
    slideoutMenu.toggleClass("open");
    if(slideoutMenu.hasClass("open")){
      slideoutMenu.animate({
        left:"0px"
      });
    }else {
      slideoutMenu.animate({
        left: -slideoutMenu
      },250);
    }
  });
}