
 $(document).ready(function() {
   $("form").submit(function(event) {
     var InputName = $("input#InputName").val();
     var InputFood = $("input#InputFood").val();
     var InputMusic = $("input#InputMusic").val();
     var InputMovie = $("input#InputMovie").val();
     var color = $( "input:radio[name=color]:checked" ).val();


     $(".InputName").text(InputName);
     $(".InputFood").text(InputFood);
     $(".InputMusic").text(InputMusic);
     $(".InputMovie").text(InputMovie);
     $(".color").text(color);

     $("#answers").show();
    event.preventDefault();
   });
 });
