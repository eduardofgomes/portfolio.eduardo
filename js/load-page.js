//leitura de todo o documento HTML
$(document).ready(function(){//executar a leitura do documento e preparou uma função

  //Monitorar todos os cliques no elemento link 'a' do HTML
  $('a').click(function(event){
    event.preventDefault()

    let pagina = $(this).attr('href')

    $('.modal-title').empty()
    $('.modal-body').empty()

    switch(pagina){
      case 'instagram':
        $('.modal-title').append('Meu Instagram')
        $('.modal-body').append('<p>Instagram.......</p>')
        break
      case 'facebook':
        $('.modal-title').append('Meu Facebook')
        $('.modal-body').append('<p>Facebook.......</p>')
        break
      case 'github':
        $('.modal-title').append('Meu Github')
        $('.modal-body').append('<p>GitHub.......</p>')
        break
      case 'linkedin':
        $('.modal-title').append('Linkedin')
        $('.modal-body').append('<p>Linkedin.......</p>')
        break
      case 'twitter':
        $('.modal-title').append('Meu Twitter')
        $('.modal-body').append('<p>Twitter.......</p>')
        break
      default: alert('Página não encontrada')
    }

    $('#janela').modal('show')

    //$('#janela').modal('show')
  })
})