//$(document).ready(function(){
//
//init();
//
//});

$(function () {

    $("#kezd").click(init);
});

function init() {
    $("#játéktér").empty();
    // $("div").eq(0).append("ide <b>ird</b>");


    for (var i = 0; i < 5; i++) {
//        $("#játéktér").append("<img src='test.jpg' alt='Kártyalap'>");
        $("#játéktér").append("<div>");

        $("#játéktér div").eq(i).append("<img>");
//    $("#játéktér img").eq(i).attr("src","test.jpg");
//    $("#játéktér img").eq(i).attr("alt","Kártyalap");
        $("#játéktér img").eq(i).attr({"src": "test.jpg", "alt": "Kártyalap"});
    }
    //   $("#játéktér img").attr("src","test.jpg");
    $("#játéktér div").css("background-color", "blue");


    $("#játéktér div").mouseenter(
            function () {
                $(this).css("background-color", "red");
               
            }


    );
    $("#játéktér div").mouseleave(
            function () {
                $(this).css("background-color", "cyan");
            }


    );
    
     $("#játéktér div").click(
            function (){
                
                $(this).hide(1000);
                $(this).show(1000);
                
            }
            
            );
}