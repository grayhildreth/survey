
 $(document).ready(function() {
   $("form").submit(function(event) {
     var InputName = $("input#InputName").val();
     var InputFood = $("input#InputFood").val();
     var InputMusic = $("input#InputMusic").val();
     var InputMovie = $("input#InputMovie").val();
     var color = $( "input:radio[name=color]:checked" ).val();
     var dob = $("input#born").val();

     alert('Good job, you finished the first part!');


     $(".InputName").text(InputName);
     $(".InputFood").text(InputFood);
     $(".InputMusic").text(InputMusic);
     $(".InputMovie").text(InputMovie);
     $(".color").text(color);
     $(".dob").text(dob);

     $("#answers").show();
     event.preventDefault();

      alert('Nice! Look at all those answers!');
   });
 });
