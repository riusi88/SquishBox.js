//SquishBox June. 26. 2014.
//By: Ryan Iusi
//Copyright: Ryan Iusi


$(document).ready(function(){
//Styling the boxes
        $(".box1").css({position: 'relative', float: 'left',height:'50%',width:'50%', clear: 'both'});
        $(".box2").css({position: 'relative', float: 'right',height:'50%',width:'50%'});
        $(".box3").css({position: 'relative', float: 'left',height:'50%',width:'50%', clear: 'both'});
        $(".box4").css({position: 'relative', float: 'right',height:'50%',width:'50%'});
		
//Hover Events.
$(".box1").hover(function() {
  $(this).stop().animate({marginTop: '0%', left:'0%', width: '75%', height: '75%',},'swing');
  $(".box2").stop().animate({marginTop: '50%', right: '0%', height:'25%',width:'25%'},'swing');
  $(".box3").stop().animate({left: '50%', height:'25%',width:'25%'},'swing');
  $(".box4").stop().animate({right: '0%', height:'25%',width:'25%'},'swing');
}, function() {
  $(this).stop().animate({height:'50%',width:'50%'});
  $(".box2").stop().animate({marginTop: '0%', right: '0%', height:'50%',width:'50%'},'swing');
  $(".box3").stop().animate({left: '0%', height:'50%',width:'50%'},'swing');
  $(".box4").stop().animate({right: '0%', height:'50%',width:'50%'},'swing');
});
$(".box2").hover(function() {
  $(this).stop().animate({marginTop: '0%',right: '0%', width: '75%', height: '75%'},'swing');
  $(".box1").stop().animate({marginTop: '50%',left:'0%', height:'25%',width:'25%'},'swing');
  $(".box3").stop().animate({left: '0%', height:'25%',width:'25%'},'swing');
  $(".box4").stop().animate({right: '50%',height:'25%',width:'25%'},'swing');
}, function() {
  $(this).stop().animate({right: '0%', height:'50%',width:'50%'});
  $(".box1").stop().animate({marginTop: '0%',left:'0%', height:'50%',width:'50%'},'swing');
  $(".box3").stop().animate({left: '0%', height:'50%',width:'50%'},'swing');
  $(".box4").stop().animate({right: '0%', height:'50%',width:'50%'},'swing');
});
$(".box3").hover(function() {
  $(this).stop().animate({left: '0%', bottom: '0%', width: '75%', height: '75%'},'swing');
  $(".box1").stop().animate({marginTop: '0%', left:'50%', height:'25%',width:'25%'},'swing');
  $(".box2").stop().animate({marginTop: '0%', right: '0%', height:'25%',width:'25%'},'swing');
  $(".box4").stop().animate({right: '0%', height:'25%',width:'25%'},'swing');
}, function() {
  $(this).stop().animate({left: '0%', height:'50%',width:'50%'});
  $(".box1").stop().animate({marginTop: '0%',left:'0%', height:'50%',width:'50%'},'swing');
  $(".box2").stop().animate({marginTop: '0%',right: '0%',  height:'50%',width:'50%'},'swing');
  $(".box4").stop().animate({right: '0%', height:'50%',width:'50%'},'swing');
});
$(".box4").hover(function() {
  $(this).stop().animate({right: '0%', width: '75%', height: '75%'},'swing');
  $(".box1").stop().animate({marginTop: '0%', left: '0%', height:'25%',width:'25%'},'swing');        
  $(".box3").stop().animate({left: '0%', top: '0%', height:'25%',width:'25%'},'swing');
  $(".box2").stop().animate({marginTop: '0%', right: '50%', height:'25%',width:'25%'},'swing');
}, function() {
  $(this).stop().animate({right: '0%', height:'50%',width:'50%'});
  $(".box1").stop().animate({marginTop: '0%', left:'0%', height:'50%',width:'50%'},'swing');
  $(".box3").stop().animate({left: '0%', top: '0%', height:'50%',width:'50%'},'swing');
  $(".box2").stop().animate({marginTop: '0%',right: '0%',height:'50%',width:'50%'},'swing');
  
});
});