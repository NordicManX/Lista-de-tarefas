$(function() {
	function adicionarTarefa() {
		var tarefa = $('#tarefa').val();
		$('#lista-tarefas').append('<li>' + tarefa + '</li>');
		$('#tarefa').val('');
	}

	$('#form-tarefa').submit(function(event) {
		event.preventDefault();
		adicionarTarefa();
	});

	$('#lista-tarefas').on('click', 'li', function() {
		$(this).toggleClass('checked');
	});
});