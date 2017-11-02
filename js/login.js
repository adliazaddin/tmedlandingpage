 $("#login-button").click(function(event) {
     event.preventDefault();
     var destination = $(this).data("link");

     $('form').fadeOut(1000, function() {
         window.location.href = destination;
     });
     $('.wrapper').addClass('form-success');

 });