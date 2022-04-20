//lang
$('.lang__title').click(function(){
    $(this).toggleClass('active');
    $($(this).data("target")).stop().slideToggle();
});

//nav
$('.nav__title_drop').hover(function(){
    $(this).toggleClass('active');
    $($(this).data("target")).toggleClass('active');
});

$('.nav__drop').hover(function(){
    $(this).toggleClass('active');
});

$('.nav__drop-drop').hover(function(){
    $(this).toggleClass('active');
    $(this).parents('.nav__drop').toggleClass('active');
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

$(document).on('click', '.slider__slider-block .fa-solid.fa-chevron-left', function(event){

  let activeIndex = $(this).parents('.slider__slider-block').find('.slider__wrapper > img.active').index();
  let countImg = $(this).parents('.slider__slider-block').find('.slider__wrapper > img').length;
  let newIndex = activeIndex - 1;

  if (newIndex < 0) {
      newIndex = countImg - 1;
  }
  clickSlider($(this), newIndex);

  event.preventDefault();
});

$(document).on('click', '.slider__slider-block .fa-solid.fa-chevron-right', function(event){

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
  $('.slider__slider-block  .fa-solid.fa-chevron-right').click()
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

$(document).on('click', '.slider-suggestions .fa-solid.fa-chevron-left', function(event){

  let activeIndex = $(this).parents('.slider-suggestions').find('.suggestions-list.active').index();
  let countImg = $(this).parents('.slider-suggestions').find('.suggestions-list').length;
  let newIndex = activeIndex - 1;

  if (newIndex < 0) {
      newIndex = countImg - 1;
  }
  clickSliderPopular($(this), newIndex);

  event.preventDefault();
});

$(document).on('click', '.slider-suggestions .fa-solid.fa-chevron-right', function(event){

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
  clickSliderPopular($(this), $(this).index()*4);
});
// setInterval(function(){
//   $('.fa-solid.fa-chevron-right').click()
// },15000)

$('.burger').click(function(){
  $('.header__nav .nav').toggleClass('active');
});
