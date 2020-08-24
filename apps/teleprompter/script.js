var speed = 20;
var slide = 1;
var slow = false;
var speed_def = 20;
var slide_def = 1;
var rev = false;
var stop = true;
var top_def = "300px";
var dark = false;
var hide = false;
var range = false;
var font = false;
var def_font = "70px"
var editing = false;
var content = "";
var was_dark = false;
setInterval(function start(){
  if(stop){
    return;
  }
  var tp = $("#teleprompter");
  var top = parseInt(tp.css("top"));
  if (!rev){
   top -= slide;   
  }else{
    top += 1;
  }
  var res = top.toString() + "px";
  tp.css("top", res);
}, speed);
function switch_rev(){
  if(editing === true){
     return;
  }
  rev = !rev;
  if(rev){
     $("#rev").text("fast_forward");
  }else{
    $("#rev").text("fast_rewind");
  }
}
function switch_stop(){
  if(editing === true){
     return;
  }
  stop = !stop;
  if(stop){
     $("#stop").text("play_arrow");
  }else{
    $("#stop").text("pause");
  }
}
function restart(){
  if(editing === true){
     return;
  }
  var tp = $("#teleprompter");
  tp.css("top", top_def);
  $("#ran").hide();
  $("#ran").val(1)
  $("#font").hide();
  $("#font").val(7)
  speed = speed_def;
  slide = slide_def;
  $(teleprompter).css("font-size", def_font);
  if(slow === true){
    switch_slow();
  }
  if(!stop){
   switch_stop();  
  }
  if(rev){
     switch_rev();
  }
}
function color(){
  if(editing === true){
     return;
  }
  dark = !dark;
  if(dark){
    $(document.body).addClass("dark");
  }else{
    $(document.body).removeClass("dark");
  }
}
function switch_hide(){
  var btn = $("footer button");
  hide = !hide;
  if(hide){
    $("#hide").text("visibility");
    if(range){
      switch_range();
    }
    if(font){
      switch_font();
    }
  }else{
    $("#hide").text("visibility_off");
  }
  btn.each(function(i, v){
    if(hide && !$(v).hasClass("nohide")){
      $(v).hide();
    }else{
      $(v).show();
    }
  })
  if(editing === true){
    $("#rev").parent().hide();
    $("#stop").parent().hide();
    $("#rest").parent().hide();
    $("#shut").parent().hide();
    $("#form").parent().hide();
    $("#colo").parent().hide();
    $("#slow_m").parent().hide();
  }
}
function switch_range(){
  if(editing === true){
     return;
  }
  range = !range;
  var ran = $("#ran");
  if(range){
    ran.show();
  }else{
    ran.hide();
  }
}
function switch_font(){
  if(editing === true){
     return;
  }
  font = !font;
  var fon = $("#font");
  if(font){
    fon.show();
  }else{
    fon.hide();
  }
}
function set_speed(){
  if(editing === true){
     return;
  }
  var val = $("#ran").val();
  slide = val;
}
$("#ran").hide();
$("#font").hide();
function set_font(){
  var val = $("#font").val() * 10;
  val = val.toString() + "px";
  $(teleprompter).css("font-size", val);
}
function edit_text(){
  restart();
  var tp = $("#teleprompter")
  if(!editing){
    content = $(tp).text();
    tp.empty();
    $(tp).append("<textarea id='edit_t'></textarea>");
    var area = $("#edit_t")
    $(area).val(content);
    tp.css("top", "100px");
    tp.css("width", "100%");
    tp.css("height", "90vh");
    $("#edit_i").text("check");
    $("#rev").parent().hide();
    $("#stop").parent().hide();
    $("#rest").parent().hide();
    $("#shut").parent().hide();
    $("#form").parent().hide();
    $("#colo").parent().hide();
    $("#slow_m").parent().hide();
    $(area).autosize();
    $(tp).css("overflow", "auto");
    if(dark === true){
      color();
      was_dark = true;
    }
    editing = true;
  }else{
    editing = false;
    content = $("#edit_t").val();
    tp.empty();
    tp.text(content);
    $("#edit_i").text("edit");
    $("#rev").parent().show();
    $("#stop").parent().show();
    $("#rest").parent().show();
    $("#shut").parent().show();
    $("#form").parent().show();
    $("#colo").parent().show();
    $("#slow_m").parent().show();
    $(tp).css("overflow", "visible");
    if(was_dark === true){
      color();
      was_dark = false;
    }
    restart();
  }
}
$(document).keydown(function(e){
  if(e.which === 32 && editing === false){
    switch_stop();
  }else if(e.which === 82 && editing === false){
    switch_rev();
  }else if(e.which === 83 && editing === false){
    restart();
  }else if(e.which === 65 && editing === false){
    color();
  }else if(e.which === 72 && editing === false){
    switch_hide();
  }
});

function switch_slow(){
  if(editing === true){
     return;
  }
  var tep = $("#teleprompter");
  slow = !slow;
  if(slow === true){
    $("#slow_m").text("timer_off");
    $(tep).css("transition", "all .1s ease-in-out");
  }else{
    $("#slow_m").text("timer");
    $(tep).css({'transition' : ''});
  }
}