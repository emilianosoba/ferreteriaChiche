function mostrarToast() {

    var miToast = document.getElementById('myToast');
    var alert = new bootstrap.Toast(miToast);

    alert.show();

}


document.addEventListener('DOMContentLoaded', ()=> {

    mostrarToast();
});
