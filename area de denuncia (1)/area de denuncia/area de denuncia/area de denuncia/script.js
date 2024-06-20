document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('salvarDenuncia').addEventListener('click', function() {
        salvarDenuncia();
    });
});

function salvarDenuncia() {
    alert("denuncia enviada")
    var email = document.getElementById('email').value;
    var motivo = document.getElementById('motivo').value;
    var descricao = document.getElementById('descricao').value;

    if (email && motivo && descricao) {
        var denuncia = {
            email: email,
            motivo: motivo,
            descricao: descricao
        };

        if (localStorage.getItem('denuncias')) {
            var denuncias = JSON.parse(localStorage.getItem('denuncias'));
            denuncias.push(denuncia);
            localStorage.setItem('denuncias', JSON.stringify(denuncias));
        } else {
            var denuncias = [denuncia];
            localStorage.setItem('denuncias', JSON.stringify(denuncias));
        }

      
        document.getElementById('email').value = '';
        document.getElementById('motivo').value = '';
        document.getElementById('descricao').value = '';

        alert('Denúncia enviada com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

localStorage.setItem('denuncias', JSON.stringify([
    {
        "email": "exemplo@gmail.com",
        "motivo": "Minha Página",
        "descricao": "Esta é uma página de exemplo."
    }
]));