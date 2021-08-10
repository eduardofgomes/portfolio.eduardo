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
        $('.modal-body').append(`
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-4 col-md-4">
                <img src="img/gestao.webp" alt="projetos" class="img-fluid">
              </div>
              <div class="col-12 col-sm-8 col-md-8">
                <h4 class="text-center text-danger">Meus Projetos</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.   Nisi      fugiat quos excepturi error laborum optio deserunt  soluta officiis at     quidem, cumque harum quasi ducimus, quod  culpa aut, repudiandae     asperiores similique!</p>
              </div>
            </div>
          </div>
        `)
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