$('.phone-button, .intro-button, .item-button, .prise-button').click(function(){
	$('#zatmenie').addClass('active');
	$('.head--fixed').addClass('gray');
});

$('.item-button, .prise-button').click(function(){
	$('.prise-item-before').addClass('servise');
});

$('.phone-button').click(function() {
	$('#prise-item-head').addClass('active');
	if ( $(".head").hasClass("head--fixed") ) {
		$('#prise-item-head').addClass('top');
	}
	else{
		$('#prise-item-head').removeClass('top');
	}
	$('.menu-item').removeClass('active');
 });

$('.intro-button').click(function() {
	$('#prise-item-intro').addClass('active');
 });

$('.item-button').click(function() {
	$('#prise-item-servise').addClass('active');
 });

$('.prise-button').click(function() {
	$('#prise-item').addClass('active');
 });

$('.form-title-close, .succesful-button').click(function() {
	$('#zatmenie').removeClass('active');
	$('.head--fixed').removeClass('gray');
 });


$('.form-title-close').click(function() {
	$('.prise-item-before').removeClass('active');
	$('.menu-item').removeClass('active');
 });

$('.input-submit-form').click(function() {
	$('.prise-form-succesful').addClass('active');
	$('#prise-item-head').removeClass('top');
	$('.prise-item-before').removeClass('active');
	if ( $(".head").hasClass("head--fixed") ) {
		$('.prise-form-succesful').addClass('fixed');
	}
	else{
		$('.prise-form-succesful').removeClass('fixed');
		
	}
 });

$('.succesful-button').click(function() {
	$('.prise-form-succesful').removeClass('active');
});


$('.service-buttons .info-button').click(function(){
	$(this).parent().parent().find('.item-info').addClass('active');
});

$('.info-close').click(function() {
	$('.item-info').removeClass('active');
 });

$('.nav-border').click(function() {
	$('.menu-content').toggleClass('mobile');
	$('.menu-phones').toggleClass('menu');
	$('.nav-border').toggleClass('active');
	$('.nav-togle-item-top').toggleClass('active');
	$('.nav-togle-item-center').toggleClass('active');
	$('.nav-togle-item-bottom').toggleClass('active');
	$('.menu-item').toggleClass('active');
 });

$('.menu-item, .phone-button').click(function() {
	$('.menu-content').removeClass('mobile');
	$('.menu-item').removeClass('active');
	$('.menu-phones').removeClass('menu');
	$('.nav-border').removeClass('active');
	$('.nav-togle-item-top').removeClass('active');
	$('.nav-togle-item-center').removeClass('active');
	$('.nav-togle-item-bottom').removeClass('active');
 });


$(document).ready(function(){  
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
	
});
	
	

	













