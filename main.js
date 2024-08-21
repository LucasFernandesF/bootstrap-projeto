$(document).ready(function () {
    $('#telefone').mask('(99)99999-9999');

    $('#form-contato').validate({
        errorClass: 'error-message', // Classe CSS personalizada
        errorElement: 'div', // Envolve as mensagens de erro em <div>, sendo o padrão label 
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                minlength: 14
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: "Por favor, insira seu nome",
            email: "Por favor, insira um e-mail válido",
            telefone: "O telefone deve ter pelo menos 14 caracteres",
            mensagem: "Por favor, insira sua mensagem"
        },
        submitHandler: function (form) {
            $('.success-message').show();

            form.reset();

            return false;
        }
    });
});
