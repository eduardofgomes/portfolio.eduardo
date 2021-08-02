//leitura de todo o documento HTML
$(document).ready(function(){//executar a leitura do documento e preparou uma função

  //Monitorar todos os cliques no elemento link 'a' do HTML
  $('a').click(function(event){
    event.preventDefault()

    $('#janela').modal('show')
  })
})