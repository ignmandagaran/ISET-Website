$(document).on('ready', function() {
    $('#link1').on('click', function(e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: $('#informatica').offset().top }, 1000);
    });
    $('#link2').on('click', function(e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: $('#alimentos').offset().top }, 1000);
    });
});

$(document).ready(function() {
	
    $("body").css("display", "none");
    $("body").fadeIn(350);
    
	$("a.transicion").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(50, redireccionarPag);		
	});
		
	function redireccionarPag() {
		window.location = linkLocation;
	}
	
});

function myFunction() {
    document.getElementById("myForm").reset();
}

