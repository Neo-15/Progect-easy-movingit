$(function() {
	$("#phone").mask("+38 (099) 999 99 99");

});

$('.example-car').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots:true,
});

$('#hidden-max').click(function() {
    $('.item-package').toggleClass('active');
	$('#max').toggleClass('active');
	
 });

$('#hidden-dual').click(function() {
	$('.package-text-dual').toggleClass('active');
	$('#duals').toggleClass('active');
 });

$('#individual').click(function() {
	$('.package-content').toggleClass('active');
	$('#individualy').toggleClass('active');
 });

$('#moto').click(function() {
	$('#moto').toggleClass('active');
	$('#motos').toggleClass('active');
 });

$('#sedan').click(function() {
	$('#sedan').toggleClass('active');
	$('#sed').toggleClass('active');
 });

$('#cupe').click(function() {
	$('#cupe').toggleClass('active');
	$('#cup').toggleClass('active');
 });

$('#tesla').click(function() {
	$('#tesla').toggleClass('active');
	$('#tes').toggleClass('active');
 });

$('#underground').click(function() {
	$('#underground').toggleClass('active');
	$('#under').toggleClass('active');
 });

$('#pikap').click(function() {
	$('#pikap').toggleClass('active');
	$('#pik').toggleClass('active');
 });

$('#miniven').click(function() {
	$('#miniven').toggleClass('active');
	$('#min').toggleClass('active');
 });

$('#bus').click(function() {
	$('#bus').toggleClass('active');
	$('#buss').toggleClass('active');
 });

$('.reviev-content').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots:true,
  arrows:true,
});

$('#prises').on('keyup', function() {
	var value = $("#prises").val();
	$("#prises").attr('value', value);
})

$( function(){
var prise=$("#prises").val();
let prisecof= 0;
let internetbitfee = 0;
let priseaksys= 10 + 59 + 30 + prise;
	if(prise<100){
	  prisecof=50;
	  internetbitfee=100;
	   }
$("#aucsion").val(priseaksys); 
console.log(prise);
console.log(priseaksys);
});	







