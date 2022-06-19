
var display = $("#display");
var buttons = $(".button").toArray();

buttons.map($(".button").on("click",function (){

   console.log($(this).attr("class"));

switch($(this).text()){

case 'C': $("#display").text(" ");
break;

case "Del": $("#display").text($("#display").text().slice(0,-1));
break;

case '=':

  try{

    $("#display").text(eval($("#display").text()));
  }
  catch{

    $("#display").text("Error!");
  }
  break;

default: $("#display").append($(this).text());
}

}))
