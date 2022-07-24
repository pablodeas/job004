

function cadastroContato(){

    var form_titulo = document.getElementById("form_titulo");
    var form_email = document.getElementById("form_email");
    var form_endereco = document.getElementById("form_endereco");
    var form_telefone = document.getElementById("form_telefone");

    var dados = JSON.parse(localStorage.getItem("dadosContato"));

    if(dados == null){
        localStorage.setItem("dadosContato", "[]");
        dados = [];
    }

    var auxRegistro = {
        nome: form_titulo.value,
        email: form_email.value,
        endereço: form_endereco.value,
        telefone: form_telefone.value
    }

    dados.push(auxRegistro);

    localStorage.setItem("dadosContato", JSON.stringify(dados));

    alert("Contato salvo com sucesso!")

    form_titulo.value = "";
    form_email.value = "";
    form_endereco.value = "";
    form_telefone.value = "";
}