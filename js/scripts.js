$("document").ready(function(){
  var learn = parseInt($("input:radio[name=learn]:checked").val());
  var size = parseInt($("input:radio[name=size]:checked").val());
  var frontBackEnd = parseInt($("input:radio[name=front-back]:checked").val());
  var app = parseInt($("input:radio[name=app]:checked").val());
  var location = parseInt($("input:radio[name=location]:checked").val());

  var quizScore = learn + size + frontBackEnd + app + location
});
