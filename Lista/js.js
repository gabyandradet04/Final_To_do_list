$(document).ready(function(){
	var items = [];
	$('#agregar').on('click', function(){
		
		if ($('input#urgente').is(':checked')) {
			var texto = $('#texto').val();
			var li = '<li id="'+ items.length+'" class="urgente">'+texto+'<button class="borrar" data-id="'+items.length+'">Eliminar</button></li>';
			$('#todo').append(li);
			items.push(li);	
		}else{
			var texto = $('#texto').val();
			var li = '<li id="'+items.length+'">'+texto+'<button class="borrar">Eliminar</button></li>';
			$('#todo').append(li);
			items.push(li);
		}
		$('#texto').val("");
		
		$('.borrar').on('click', function(){
		$(this).parent().remove();	});


		$('li').on('click', function(){
			$(this).toggleClass('tacha');
		})

	});

	
});