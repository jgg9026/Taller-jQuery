$(document).ready(function(){
	var cont=0;
	var band1=true;
	var band2=true;
	/*$( "#button1" ).click(function() {
  		$( ".screen" ).slideUp();
	});*/

	$( "#button1" ).click(function() {
  		$( ".intro" ).slideUp();
	});
	$( "#button2" ).click(function() {
  		$("li:first-of-type").slideUp();
	});
	$("#button3").click(function(){
		$("a").hide();
	});
	 $('.window').click(function (event) {
                event.preventDefault();
 
                var $this = $(this);
 
                var url = $this.attr("href");
                var windowName = "popUp";
                var windowSize = $this.data("popup");
 
                window.open(url, windowName, windowSize);
                $("#button4").hide();
                
            });
	$("#button5").click(function() {
		event.preventDefault();
		var $this=$(this);
		var url =$this.attr("href");
  		 window.location = url;
  		 $(this).hide();
  		 
	});
	$("#button6").click(function(){
		$("table tr:even").addClass("fila_roja");
		$("table tr:odd").addClass("fila_verde");


	});

	$(".contenido5").click(function(){
		cont=cont+1;
		console.log(cont);
		if(cont>1 )
		{
			$(this).hide();
			
		}

	});

	$(".contenido6").mousedown(function(event) {
		var c=event.which;
		console.log(c);
		if(c==1)
		{
		alert("Boton Izq del mouse presionado");	
		}


    	/*switch (event.which) {
        case 1:
            alert("Boton Izq del mouse presionado");
            break;
        case 2:
            alert('Middle Mouse button pressed.');
            break;
        case 3:
            alert('Right Mouse button pressed.');
            break;
        default:
            alert('You have a strange Mouse!');
    }*/
	});
	

	$(".contenido7").mouseenter(function(event){
		if(band1==true)
		{
			alert("Ratón sobre");
				band1=false;
		}
	});	
	
	

	$(".contenido7").mouseleave(function(event){
		if(band2==true)
			{
				alert("Ratón fuera");
				band2=false;
			}

	});	


	$(".screen .contenido8 .input1").focus(function(){
		var colores ="nada";
		colores=$(this).css("background-color");
		console.log(colores);
		switch($(this).css("background-color")){
			case "rgb(0, 0, 255)":
				$(this).css("background-color","white");
				$( this ).next( "span" ).css( "display", "inline" ).fadeOut( 1000 );
				break;
			case "rgb(255, 255, 255)":
				$(this).css("background-color","blue");
				$( this ).next( "span" ).css( "display", "inline" ).fadeOut( 1000 );
				break;
		}//usando lo mismo del mause, bueno parecido


		
	});

	$(".screen .contenido8 .input2").blur(function(){
		var colores ="nada";
		colores=$(this).css("background-color");
		console.log(colores);
		switch($(this).css("background-color")){
			case "rgb(0, 0, 255)":
				$(this).css("background-color","white");
				$( this ).next( "span" ).css( "display", "inline" ).fadeOut( 1000 );
				break;
			case "rgb(255, 255, 255)":
				$(this).css("background-color","blue");
				$( this ).next( "span" ).css( "display", "inline" ).fadeOut( 1000 );
				break;
		}//usando lo mismo del mause, bueno parecido


		
	});

	$("#buttonh1").click(function(){
		$(".parte1").hide();
	});
	$("#buttonh2").click(function(){
		$(".parte2").hide();
	});
			
	

    
});
