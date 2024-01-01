function login() {
    const button = document.querySelector('#btn');

    function validation() {
        const email = document.querySelector('#email').value;
        const senha = document.querySelector('#password').value;

        if (email.trim() === "" && senha.trim() === "") {
            alert('Preencha todos os campos corretamento.');
            return false;
        }

        if (!email.includes('@gmail.com')) {
            alert('O email deve conter o "@gmail.com"');
            return false;
        }
        return true;
    } 

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('#email').value = '';
        document.querySelector('#password').value = '';
    })
    validation();
} login();