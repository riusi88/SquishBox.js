//SquishBox June. 23. 2014.
//By: Ryan Iusi
//Copyright: Ryan Iusi


$(document).ready(function(){
	
//Styling the boxes
        $(".box1").css({position: 'relative', float: 'left',height:'50%',width:'50%'});
        $(".box2").css({position: 'relative', float: 'right',height:'50%',width:'50%'});
        $(".box3").css({position: 'relative', float: 'left',height:'50%',width:'50%'});
        $(".box4").css({position: 'relative', float: 'right',height:'50%',width:'50%'});
		
//Hover Events.
$(".box1").hover(function() {
  $(this).stop().animate({left:'0%', width: '75%', height: '75%',},'swing');
  $(".box2").stop().animate({height:'25%',width:'25%'},'swing');
  $(".box3").stop().animate({height:'25%',width:'25%'},'swing');
  $(".box4").stop().animate({height:'25%',width:'25%'},'swing');
}, function() {
  $(this).stop().animate({height:'50%',width:'50%'});
  $(".box2").stop().animate({height:'50%',width:'50%'},'swing');
  $(".box3").stop().animate({height:'50%',width:'50%'},'swing');
  $(".box4").stop().animate({height:'50%',width:'50%'},'swing');
});
$(".box2").hover(function() {
  $(this).stop().animate({width: '75%', height: '75%'},'swing');
  $(".box1").stop().animate({left:'0%', height:'25%',width:'25%'},'swing');
  $(".box3").stop().animate({height:'25%',width:'25%'},'swing');
  $(".box4").stop().animate({height:'25%',width:'25%'},'swing');
}, function() {
  $(this).stop().animate({height:'50%',width:'50%'});
  $(".box1").stop().animate({height:'50%',width:'50%'},'swing');
  $(".box3").stop().animate({height:'50%',width:'50%'},'swing');
  $(".box4").stop().animate({height:'50%',width:'50%'},'swing');
});
$(".box3").hover(function() {
  $(this).stop().animate({width: '75%', height: '75%'},'swing');
  $(".box1").stop().animate({left:'50%', height:'25%',width:'25%'},'swing');
  $(".box2").stop().animate({height:'25%',width:'25%'},'swing');
  $(".box4").stop().animate({height:'25%',width:'25%'},'swing');
}, function() {
  $(this).stop().animate({height:'50%',width:'50%'});
  $(".box1").stop().animate({left:'0%', height:'50%',width:'50%'},'swing');
  $(".box2").stop().animate({height:'50%',width:'50%'},'swing');
  $(".box4").stop().animate({height:'50%',width:'50%'},'swing');
});
$(".box4").hover(function() {
  $(this).stop().animate({width: '75%', height: '75%'},'swing');
  $(".box1").stop().animate({left:'50%', height:'25%',width:'25%'},'swing');
  $(".box3").stop().animate({height:'25%',width:'25%'},'swing');
  $(".box2").stop().animate({height:'25%',width:'25%'},'swing');
}, function() {
  $(this).stop().animate({height:'50%',width:'50%'});
  $(".box1").stop().animate({left:'0%', height:'50%',width:'50%'},'swing');
  $(".box3").stop().animate({height:'50%',width:'50%'},'swing');
  $(".box2").stop().animate({height:'50%',width:'50%'},'swing');
});
});