$('.phone-button').click(function() {
	$('#zatmenie').addClass('active');
	$('#prise-item-head').addClass('active');
	$('.head--fixed').addClass('gray');
 });

$('.intro-button').click(function() {
	$('#zatmenie').addClass('active');
	$('#prise-item-intro').addClass('active');
	$('.head--fixed').addClass('gray');
 });

$('.item-button').click(function() {
	$('#zatmenie').addClass('active');
	$('#prise-item-servise').addClass('active');
	$('.prise-item-before').addClass('servise');
	$('.head--fixed').addClass('gray');
 });

$('.prise-button').click(function() {
	$('#zatmenie').addClass('active');
	$('#prise-item').addClass('active');
	$('.prise-item-before').addClass('servise');
	$('.head--fixed').addClass('gray');
 });

$('.form-title-close').click(function() {
	$('#zatmenie').removeClass('active');
	$('.prise-item-before').removeClass('active');
	$('.head--fixed').removeClass('gray');
 });

$('#flet').click(function() {
	$('#flets').addClass('active');
	$('#flet').addClass('active');
 });

$('#office').click(function() {
	$('#offices').addClass('active');
	$('#office').addClass('active');

 });

$('#comersian').click(function() {
	$('#comersians').addClass('active');
	$('#comersian').addClass('active');

 });

$('#destroy').click(function() {
	$('#destroys').addClass('active');
	$('#destroy').addClass('active');

 });

$('#get-in').click(function() {
	$('#get-ins').addClass('active');
	$('#get-in').addClass('active');

 });

$('#other').click(function() {
	$('#others').addClass('active');
	$('#other').addClass('active');
 });

$('.info-close').click(function() {
	$('.item-info').removeClass('active');
	$('.info-button').removeClass('active');
	$('.menu-item').removeClass('active');
 });

$('.nav-border').click(function() {
	$('.menu-content').toggleClass('mobile');
	$('.menu-phones').toggleClass('menu');
	$('.nav-border').toggleClass('active');
	$('.nav-togle-item-top').toggleClass('active');
	$('.nav-togle-item-center').toggleClass('active');
	$('.nav-togle-item-bottom').toggleClass('active');
	$('.menu-item').addClass('active');
 });

$('.menu-item, .phone-button').click(function() {
	$('.menu-content').removeClass('mobile');
	$('.menu-phones').removeClass('menu');
	$('.nav-border').removeClass('active');
	$('.nav-togle-item-top').removeClass('active');
	$('.nav-togle-item-center').removeClass('active');
	$('.nav-togle-item-bottom').removeClass('active');
 });


$(function(){
 var header=$("#head"),
 introH = $("#head").innerHeight(),
 scrollOffset =$(window).scrollTop();

 /* Fixed Head */	
 checkScroll(scrollOffset);
	
	
 $(window).on("scroll", function(){
   scrollOffset = $(this).scrollTop();
   checkScroll(scrollOffset);
 });

 function checkScroll(scrollOffset){
   if(scrollOffset>=introH){ 
   header.addClass("head--fixed");
   } 
   else{
     header.removeClass("head--fixed");
   }
  }
	
 /* Smooth scroll */
 $("[data-scroll]").on("click", function(event) {
   event.preventDefault();
   var blockid = $(this).data("scroll"),
   blockOffset = $(blockid).offset().top-115;

 $("html, body").animate({
   scrollTop: blockOffset},500);
 });
	
 /* menu nav togle */
 $("#nav-togle ").on("click", function(event){
   event.preventDefault();
   $("#nav").toggleClass("active");
   $("#head").toggleClass("active");	
 });	
});
	

	













