console.log('js');

$(document).ready(readyNow);

console.log('jQuery');

function readyNow() {
  $('.button-red').on('click', addRedBlock);
  $('.button-yellow').on('click', addYellowBlock);
  $('.button-green').on('click', addGreenBlock);
  $('.button-blue').on('click', addBlueBlock);
  $('.BodyStuff').on('click', '.box', removeBox);
}

function addRedBlock() {
  console.log("addRed");
  $('.BodyStuff').append('<div class="small-box-red"> <div id = "center">R</div></div>');
  var r = $('.small-box-red').length;
  $('.redCounter').html(r);
  console.log(r);
}
function addYellowBlock() {
  console.log("addYellow");
  $('.BodyStuff').append('<div class="small-box-yellow"><div id = "center">Y</div></div>');
  var y = $('.small-box-yellow').length;
  $('.yellowCounter').html(y);
  console.log(y);
}
function addGreenBlock(){
  $('.BodyStuff').append('<div class="small-box-green"><div id = "center">G</div></div>');
  var g = $('.small-box-green').length;
  $('.greenCounter').html(g);
}
function addBlueBlock(){
  $('.BodyStuff').append('<div class="small-box-blue"><div id = "center">B</div></div>');
  var b = $('.small-box-blue').length;
  $('.blueCounter').html(b);
}
function removeBox(){
  console.log('RemoveBox');
}
