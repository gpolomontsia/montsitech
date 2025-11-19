document.addEventListener("DOMContentLoaded", function () {
    const navHTML = `
    <nav style="
        position: sticky; 
        top: 0; 
        left: 0;
        width: 100%;
        background-color: #333; 
        color: white; 
        display: flex; 
        justify-content: space-between; 
        align-items: center; 
        box-sizing: border-box;
        z-index: 1000;
        font-family: sans-serif;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    ">
        <div style="font-size: 1.5rem; font-weight: bold;">
            <a href="index.html" style="color: white; text-decoration: none; margin-left: 20px;">Montsià 30</a>
        </div>
        
        <div class="nav-links">
            <a href="pag1_carrusel/digi1.html" style="color: white; text-decoration: none; margin-left: 20px;">Digitalització</a>
            <a href="proximament.html" style="color: white; text-decoration: none; margin-left: 20px;">Sostenibilitat</a>
            <a href="login.html" style="color: white; text-decoration: none; margin-left: 20px;">Intranet</a>
        </div>
    </nav>
    `;


    const footerHTML = `
    <footer style="
        background-color: #f4f4f4; 
        text-align: center; 
        padding: 20px; 
        margin-top: 50px; 
        border-top: 1px solid #ddd;
        font-family: sans-serif;
        font-size: 0.9rem;
        color: #555;
    ">
        <p>
            <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="CC" style="height:1em; vertical-align:middle;"> 
            <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="BY" style="height:1em; vertical-align:middle;"> 
            Montsià 30 - Aquesta obra està baix una llicència de creative commons.
        </p>
    </footer>
    `;
    document.body.insertAdjacentHTML("afterbegin", navHTML);
    document.body.insertAdjacentHTML("beforeend", footerHTML);
});