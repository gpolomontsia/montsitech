function comprovarRegistre(){
    const email = document.getElementById('email').value.trim();
    const pass   = document.getElementById('pass').value;

    if (email == "" || pass == ""){
        alert("Introdueix dades per poder registrar-te.")
    }
    else if (!email.endsWith("@montsia30.net")) {
        alert("Error: L'email ha de pertànyer al domini @montsia30.net");
    }
    else if (pass.length < 8) {
        alert("Error: La contrasenya ha de tenir almenys 8 caràcters.");
    }
    else if (!/[a-z]/.test(pass)) {
        alert("Error: La contrasenya ha de contenir almenys una lletra minúscula.");
    }
    else if (!/[A-Z]/.test(pass)) {
        alert("Error: La contrasenya ha de contenir almenys una lletra mayuscula.");
    }
    else if (!/[^A-Za-z0-9]/.test(pass)) {
        alert("Error: La contrasenya ha de contenir almenys un caracter especial.");
    }
    else{
        window.location.href = "login.html"
        alert("T'has registrat correctament!!, ara inicia sessió per poder entrar a la Intranet.");
    }
}