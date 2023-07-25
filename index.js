function verificarDados() {
    var contas = ['email: joaofranciscopinhosoares@teste.com, nome: joão francisco pinho soa, senha: 12345678',
    'email: conta@teste.com, nome: conta teste, senha: 12345',
    'email: conta@teste2.com, nome: conta teste2, senha: 123456']
    var email = document.getElementById('inputemail').value
    var nome = document.querySelector('#inputnome').value
    var senha = document.querySelector('#inputsenha').value    
    var btn = document.querySelector('.btn')
    var dados = 'email: ' + email + ', nome: ' + nome + ', senha: ' + senha
    const emailvalidar = (emailverificação) => {
        let teste = /\S+@\S+\.\S+/;
        return teste.test(emailverificação);
    }


    if (emailvalidar(email) == true) {
        if (nome == '' || senha == '') {
            alert('[ERRO] Preencha todos os campos para prosseguir!')
        } else {
            contas.map((el, i) => {
                if (dados == el) {
                    btn.style.padding = '0px'
                    btn.innerHTML = '<img width="90px" src="carregamento.gif">'
                    const timelapse = setTimeout(function(){
                        alert('conta certa')
                        btn.style.padding = '13px'
                        btn.innerHTML = 'Logar'
                    }, 600)
                    timelapse
                }
            })
        }
    } else{
        alert('[ERRO] Preencha com um email real!')
    }
}
