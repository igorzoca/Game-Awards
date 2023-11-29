function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

//validação do formulário do login

function login() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value; 

    if (nome == "admin" && senha == "admin" && email == "admin@gmail.com") {
        window.alert("sucesso")
        location.href = "tabela.html";
    } else {
        window.alert("sua senha está incorreta")
    }
}

//interação da tabela de voto

function cad_pessoa(nome, sobrenome, email,) {
    var tb = document.getElementById("tabela");
    var quant_linhas = tb.rows.length;
    var linha = tb.insertRow(quant_linhas);

    var cel_cod = linha.insertCell(0);
    var cel_nome = linha.insertCell(1);
    var cel_sobrenome = linha.insertCell(2);
    var cel_email = linha.insertCell(3);

    cel_cod.innerHTML = quant_linhas;
    cel_nome.innerHTML = nome;
    cel_sobrenome.innerHTML = sobrenome;
    cel_email.innerHTML = email;
}
