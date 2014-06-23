$(document).ready(function(){
        $(".box1").css({position: 'relative', float: 'left'});
        $(".box2").css({position: 'relative', float: 'right'});
        $(".box3").css({position: 'relative', float: 'left'});
        $(".box4").css({position: 'relative', float: 'right'});
	$(".box1").animate({height:'50%',width:'50%'},0, 'swing');
	$(".box2").animate({height:'50%',width:'50%'},0, 'swing');
	$(".box3").animate({height:'50%',width:'50%'},0, 'swing');
	$(".box4").animate({height:'50%',width:'50%'},0, 'swing');

	
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
