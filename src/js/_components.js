$(function() {
//lang
$('.lang__title').click(function(){
    $(this).toggleClass('active');
    $($(this).data("target")).stop().slideToggle();
});

//nav
$('.nav__title_drop').hover(function(){
    $(this).toggleClass('active');
    $($(this).data("target")).toggleClass('active');
    // $($(this).data("target")).toggleClass('active');
});

$('.nav__drop').hover(function(){
    $(this).toggleClass('active');
});

$('.nav__drop-drop').hover(function(){
    $(this).toggleClass('active');
});

// slider-block

function clickSlider(obj, newIndex){
  obj.parents('.slider__slider-block').find('.slider__wrapper > img').removeClass('active');
  obj.parents('.slider__slider-block').find('.slider__wrapper > img').eq(newIndex).addClass('active');

  obj.parents('.slider__slider-block').find('.click-gray').removeClass('active');
  obj.parents('.slider__slider-block').find('.click-gray').eq(newIndex).addClass('active');

  clickSliderList();

}
function clickSliderList(){
  let widthImg = parseInt($('.slider__wrapper').css('width')) + 50;
  let countImg = $('.slider__wrapper').length;

  let left = (widthImg + 50) * $('.slider__wrapper.active').index();
  left = (widthImg * countImg) / 2 - left - 57;

  $('.slider__wrapper').css('left',left + 'px');
}

$(document).on('click', '.slider__slider-block .bi.bi-chevron-left', function(event){

  let activeIndex = $(this).parents('.slider__slider-block').find('.slider__wrapper > img.active').index();
  let countImg = $(this).parents('.slider__slider-block').find('.slider__wrapper > img').length;
  let newIndex = activeIndex - 1;

  if (newIndex < 0) {
      newIndex = countImg - 1;
  }
  clickSlider($(this), newIndex);

  event.preventDefault();
});

$(document).on('click', '.slider__slider-block .bi.bi-chevron-right', function(event){

  let activeIndex = $(this).parents('.slider__slider-block').find('.slider__wrapper > img.active').index();
  let countImg = $(this).parents('.slider__slider-block').find('.slider__wrapper > img').length;
  let newIndex = activeIndex + 1;

  if (newIndex > countImg -1) {
      newIndex = 0;
  }

  clickSlider($(this), newIndex);

  event.preventDefault();
});

$(document).on('click', '.slider__slider-block .click-gray', function(event){
  clickSlider($(this), $(this).index());
});
setInterval(function(){
  $('.slider__slider-block  .bi.bi-chevron-right').click()
},15000)

// slider-list//

function clickSliderHouse(obj, newIndex){
  obj.find('.slider-list-garden').removeClass('active');
  obj.find('.slider-list-garden').eq(newIndex).addClass('active');

}

$(document).on('mousemove', '.slider-list-item', function(event){
  let relX = event.pageX - $(this)[0].getBoundingClientRect().left;
  let width = parseInt($(this).css('width').replace('px',''));
  let countImg = $(this).find('.slider-list-garden').length;
  let percent = relX / width;
  let index = parseInt(percent * countImg);
  if (index >= countImg) {
    index = countImg-1;
  }
  clickSliderHouse($(this), index);
});

// slider-suggestions//

function clickSliderPopular(obj, newIndex){
  obj.parents('.slider-suggestions').find('.suggestions-list').removeClass('active');
  obj.parents('.slider-suggestions').find('.suggestions-list').eq(newIndex).addClass('active');

  obj.parents('.slider-suggestions').find('.click-gray').removeClass('active');
  obj.parents('.slider-suggestions').find('.click-gray').eq(parseInt(newIndex/4)).addClass('active');

  clickSliderPopularList();

}
function clickSliderPopularList(){
  let widthImg = parseInt($('.slider-suggestions__block-suggestions .suggestions-list').css('width')) + 25;
  let countImg = $('.slider-suggestions__block-suggestions').length;
  console.log('-------clickSliderPopularList------');
  console.log(widthImg);
  console.log(countImg);
  let index = $('.slider-suggestions__block-suggestions .suggestions-list.active').index();

  let left = (-1)*(widthImg) * index;

  if (index > 9) {
    left = (-1)*(widthImg) * 9;
  }
  console.log($('.slider-suggestions__block-suggestions .suggestions-list.active').index());
  console.log(left);
  console.log($('.slider-suggestions__block-suggestions.active').index());
  $('.slider-suggestions__block-suggestions').css('margin-left',left + 'px');
}

$(document).on('click', '.slider-suggestions .bi.bi-chevron-left', function(event){

  let activeIndex = $(this).parents('.slider-suggestions').find('.suggestions-list.active').index();
  let countImg = $(this).parents('.slider-suggestions').find('.suggestions-list').length;
  let newIndex = activeIndex - 1;

  if (newIndex < 0) {
      newIndex = countImg - 1;
  }
  clickSliderPopular($(this), newIndex);

  event.preventDefault();
});

$(document).on('click', '.slider-suggestions .bi.bi-chevron-right', function(event){

  let activeIndex = $(this).parents('.slider-suggestions').find('.suggestions-list.active').index();
  let countImg = $(this).parents('.slider-suggestions').find('.suggestions-list').length;
  let newIndex = activeIndex + 1;

  if (newIndex > countImg -1) {
      newIndex = 0;
  }

  clickSliderPopular($(this), newIndex);

  event.preventDefault();
});

$(document).on('click', '.slider-suggestions .click-gray', function(event){
  clickSliderPopular($(this), ($(this).index()-1)*4);
});
setInterval(function(){
  $('.slider-suggestions .fa-solid.fa-chevron-right').click()
},15000)

$('.burger').click(function(){
  $('.header__nav .nav').toggleClass('active');
});


// stock//

function getBodyScrollTop()
{
return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}
$(document).scroll(function(){

  if (getBodyScrollTop() > 134) $('.header-bottom').css('position', 'fixed');
  else $('.header-bottom').css('position', 'inherit');

  if (getBodyScrollTop() > 700) $('.popup-up').css('display' ,'block');
  else $('.popup-up').css('display', 'none');
});


// city//

$(document).on('click', '.city .fa.fa-chevron-down', function(event){
  $('.city__bg-block').show();

  event.preventDefault();
});

$(document).on('click', '.bi.bi-x', function(event){
  $('.city__bg-block').hide();

  event.preventDefault();
});

// popup-up//

$(document).on ('click', '.popup-up', function(event){
  document.documentElement.scrollTop = 0
  event.preventDefault();
});


// filter//

$(document).on ('click', '.catalog__filter_options', function(event){
  $('.catalog__filter_hide').css('display', 'block');

  $('.catalog__filter_options').hide();

  event.preventDefault();
});

// select//

$(document).on ('click', '.catalog__filter_select .option-top', function(event){
  if ($('.option-bottom').css('display') == 'none') {
    $('.option').css('display', 'block');
    $('.option-bottom').css('display', 'block');
  } else {
    $('.option').css('display', 'none');
    $('.option-bottom').css('display', 'none');
  }


  event.preventDefault();
});


$(document).on('click','.catalog__filter_selecе-descr .option-bottom, .catalog__filter_selecе-descr .option', function(event){
  $(this).parents('.catalog__filter_select').find('select option').eq($(this).index()-1).prop('selected', true);
  $(this).parents('.catalog__filter_select').find('.option-top span').text($(this).parents('.catalog__filter_select').find('select option').eq($(this).index()-1).text());

  $('.option').css('display', 'none');
  $('.option-bottom').css('display', 'none');

  event.preventDefault();
});

$.each($(".polzunok"),function(){
  console.log($(this).parents('.polzunok-container').find(".polzunok-input-right").attr('max'))
  $(this).slider({
    min: parseInt($(this).parents('.polzunok-container').find(".polzunok-input-left").attr('min')),
    max: parseInt($(this).parents('.polzunok-container').find(".polzunok-input-right").attr('max')),
    values: [
      $(this).parents('.polzunok-container').find(".polzunok-input-left").val(),
      $(this).parents('.polzunok-container').find(".polzunok-input-right").val()
    ],
    range: true,
    animate: "fast",
    slide : function(event, ui) {
        $(this).parents('.polzunok-container').find(".polzunok-input-left").val(ui.values[ 0 ]);
        $(this).parents('.polzunok-container').find(".polzunok-input-right").val(ui.values[ 1 ]);
    }
  });
  $(this).parents('.polzunok-container').find(".polzunok-input-left").val($(this).slider("values", 0));
  $(this).parents('.polzunok-container').find(".polzunok-input-right").val($(this).slider("values", 1));
});

$(".polzunok-container input").change(function() {
  var input_left = $(this).parents('.polzunok-container').find(".polzunok-input-left").val().replace(/[^0-9]/g, ''),
  opt_left = $(this).parents('.polzunok-container').find(".polzunok").slider("option", "min"),
  where_right = $(this).parents('.polzunok-container').find(".polzunok").slider("values", 1),
  input_right = $(this).parents('.polzunok-container').find(".polzunok-input-right").val().replace(/[^0-9]/g, ''),
  opt_right = $(this).parents('.polzunok-container').find(".polzunok").slider("option", "max"),
  where_left = $(this).parents('.polzunok-container').find(".polzunok").slider("values", 0);
  if (input_left > where_right) {
      input_left = where_right;
  }
  if (input_left < opt_left) {
      input_left = opt_left;
  }
  if (input_left == "") {
  input_left = 0;
  }
  if (input_right < where_left) {
      input_right = where_left;
  }
  if (input_right > opt_right) {
      input_right = opt_right;
  }
  if (input_right == "") {
  input_right = 0;
  }
  console.log(input_right);
  $(this).parents('.polzunok-container').find(".polzunok-input-left").val(input_left);
  $(this).parents('.polzunok-container').find(".polzunok-input-right").val(input_right);
  if (input_left != where_left) {
      $(this).parents('.polzunok-container').find(".polzunok").slider("values", 0, input_left);
  }
  if (input_right != where_right) {
      $(this).parents('.polzunok-container').find(".polzunok").slider("values", 1, input_right);
  }
});
// });

// geography//

$(document).on ('click', '.geography__right_link', function(event){
  $('.geography__list.house').addClass('active');

  $('.geography__list:not(.house)').removeClass('active');

  $(this).addClass('active');
  $('.geography__left_link').removeClass('active');

  event.preventDefault();
});

$(document).on ('click', '.geography__left_link', function(event){
  $('.geography__list:not(.house)').addClass('active');

  $('.geography__list.house').removeClass('active');

  $(this).addClass('active');
  $('.geography__right_link').removeClass('active');

  event.preventDefault();
});
$('.your-class2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.your-class'
});
$('.your-class').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.your-class2',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  vertical: true,
});

// product//

$(document).on ('click', '.product__general_link.description-list', function(event){
  $('.product__general_description').addClass('active');

  $('.product__general_link').removeClass('active');
  $('.product__general_layout').removeClass('active');
  $('.product__general_equipment').removeClass('active');
  $('.product__general_options').removeClass('active');

  $(this).addClass('active');

  event.preventDefault();
});

$(document).on ('click', '.product__general_link.layout-list', function(event){
  $('.product__general_layout').addClass('active');

  $('.product__general_link').removeClass('active');
  $('.product__general_description').removeClass('active');
  $('.product__general_equipment').removeClass('active');
  $('.product__general_options').removeClass('active');

  $(this).addClass('active');

  event.preventDefault();
});

$(document).on ('click', '.product__general_link.equipment-list', function(event){
  $('.product__general_equipment').addClass('active');

  $('.product__general_link').removeClass('active');
  $('.product__general_description').removeClass('active');
  $('.product__general_layout').removeClass('active');
  $('.product__general_options').removeClass('active');

  $(this).addClass('active');

  event.preventDefault();
});

$(document).on ('click', '.product__general_link.optilon-list', function(event){
  $('.product__general_options').addClass('active');

  $('.product__general_link').removeClass('active');
  $('.product__general_description').removeClass('active');
  $('.product__general_layout').removeClass('active');
  $('.product__general_equipment').removeClass('active');

  $(this).addClass('active');

  event.preventDefault();
});

$(document).on ('click', '.product__general_options_foundation_choice', function(event){

  $(this).parent('.product__general_options_foundation').toggleClass('invisible');

  event.preventDefault();
});

// label//

$(document).on ('click', '.product label', function(event){

  $ ('.product input[type=checkbox]#' +  $(this).attr ('for')) .attr('checked', ! $ ('.product input[type=checkbox]#' +  $(this).attr ('for')) .attr('checked'));
  calcPrise();
  event.preventDefault();
});

function calcPrise (){
  $('.product__description_right .product__general_options_foundation').hide();
  $.each($('.product__description_right input[type=checkbox]:checked'),function(i,e){

    $(e).parents('.product__general_options_foundation').show();

  });
}

});

