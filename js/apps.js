
$('.phone-button').click(function() {
	$('#zatmenie').addClass('active');
	$('#prise-item-form').addClass('active');
	
 });

$('#intro-btn').click(function() {
	$('#zatmenie').addClass('active');
	$('#prise-item-form').addClass('active');
	
 });

$('.form-title-close').click(function() {
	$('#zatmenie').removeClass('active');
	$('#prise-item-form').removeClass('active');
 });


$('.servise').click(function() {
	$('#zatmenie').addClass('active');
	$('#prise-item-servise').addClass('active');
 });

$('.form-title-close').click(function() {
	$('#zatmenie').removeClass('active');
	$('#prise-item-servise').removeClass('active');

 });


$('.prise-button').click(function() {
	$('#zatmenie').addClass('active');
	$('#priseid').addClass('active');
 });

$('.form-title-close').click(function() {
	$('#zatmenie').removeClass('active');
	$('#priseid').removeClass('active');

 });



$('#flet').click(function() {
	$('#flets').addClass('active');
	$('#flet').addClass('active');

 });

$('.info-close').click(function() {
	$('#flets').removeClass('active');
	$('#flet').removeClass('active');

 });

$('#office').click(function() {
	$('#offices').addClass('active');
	$('#office').addClass('active');

 });

$('.info-close').click(function() {
	$('#offices').removeClass('active');
	$('#office').removeClass('active');

 });

$('#comersian').click(function() {
	$('#comersians').addClass('active');
	$('#comersian').addClass('active');

 });

$('.info-close').click(function() {
	$('#comersians').removeClass('active');
	$('#comersian').removeClass('active');

 });

$('#destroy').click(function() {
	$('#destroys').addClass('active');
	$('#destroy').addClass('active');

 });

$('.info-close').click(function() {
	$('#destroys').removeClass('active');
	$('#destroy').removeClass('active');

 });

$('#get-in').click(function() {
	$('#get-ins').addClass('active');
	$('#get-in').addClass('active');

 });

$('.info-close').click(function() {
	$('#get-ins').removeClass('active');
	$('#get-in').removeClass('active');

 });

$('#other').click(function() {
	$('#others').addClass('active');
	$('#other').addClass('active');

 });

$('.info-close').click(function() {
	$('#others').removeClass('active');
	$('#other').removeClass('active');

 });


$('.nav-border').click(function() {
	$('.menu-content').addClass('size1024px');

 });

$('.intro, .Services, .advantages, .how-we-work, .achievements, .prise, .calculator-info, .easy-footer').click(function() {
    $('.menu-content').removeClass('size1024px');
 });


$(function(){
 var header=$("#head"),
 introH = $("#intro").innerHeight(),
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
   blockOffset = $(blockid).offset().top;

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
	













