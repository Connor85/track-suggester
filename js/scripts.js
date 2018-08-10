$("document").ready(function(){
  $("form#questions").submit(function(event){
    var learn = parseInt($("input:radio[name=learn]:checked").val());
    var size = parseInt($("input:radio[name=size]:checked").val());
    var frontBackEnd = parseInt($("input:radio[name=front-back]:checked").val());
    var app = parseInt($("input:radio[name=app]:checked").val());
    var location = parseInt($("input:radio[name=location]:checked").val());

    var quizScore = learn + size + frontBackEnd + app + location

    if (quizScore < 7)  {
      $("#ruby-rails").slideDown();
      $("#css-react").hide();
      $("#cSharpNet").hide();
      $("form#questions").hide();
    } else if (quizScore < 9) {
      $("#css-react").slideDown();
      $("#ruby-rails").hide();
      $("#cSharpNet").hide();
      $("form#questions").hide();
    } else {
      $("#cSharpNet").slideDown();
      $("#ruby-rails").hide();
      $("css-react").hide();
      $("form#questions").hide();
    }

    event.preventDefault();
  });
});
