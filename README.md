🚀 Projecte Web: Montsià 30 - Eines per a la Digitalització

Projecte grupal desenvolupat per alumnes de 1r de DAW (Desenvolupament d'Aplicacions Web) per a les assignatures Llenguatges de Marques i Mòdul Professional Optatiu.


📖 Descripció del Projecte

Aquest projecte consisteix en el desenvolupament d'un lloc web complet per a la iniciativa Montsià 30, centrat en la promoció de la digitalització i la sostenibilitat empresarial.

L'aplicació web està dividida en dues grans àrees:

Part Pública (Carrusel Informatiu): Un recorregut interactiu sobre eines de digitalització (específicament missatgeria instantània i WhatsApp Business), dissenyat com un sistema de diapositives connectades.

Part Privada (Intranet): Un sistema de gestió simulat amb registre, inici de sessió i accés a formularis per a empreses.


🌟 Funcionalitats Destacades

El projecte integra diverses tècniques de desenvolupament web:

1. Carrusel de Digitalització (Frontend Interactiu)

Funcionament: Utilitza enllaços laterals fixos per navegar entre pàgines HTML estàtiques (digi1.html, digi2.html, digi3.html, digi4.html), creant una sensació de carrusel.

Disseny: Es basa en una plantilla comuna (plantilla.html) per assegurar que la capçalera i l'estructura es mantenen idèntiques mentre canvia el contingut central.

2. Intranet i Gestió d'Usuaris

Una àrea privada que simula un entorn real de gestió empresarial.

Validació Avançada: L'arxiu registre.js valida les dades del formulari en temps real, assegurant que el correu pertanyi al domini corporatiu @montsia30.net i que la contrasenya compleixi requisits de seguretat (majúscules, minúscules i símbols).

3. Arquitectura i Optimització

Inserció Dinàmica: Per evitar repetir codi, l'script nav_i_foot.js genera i insereix automàticament la barra de navegació i el peu de pàgina a les seccions secundàries com proximament.html.

Disseny Responsive: Tot el lloc s'adapta a dispositius mòbils i d'escriptori mitjançant l'úsde Flexbox.

📂 Estructura d'arxius

📁 /
├── 📄 index.html             # Pàgina principal de benvinguda
├── 📄 styles.css             # Estils base
├── 📄 styles_benvinguda.css  # Estils específics de la portada
│
├── 📂 Intranet
│   ├── 📄 login.html         # Accés d'usuaris
│   ├── 📄 registre.html      # Formulari d'alta
│   ├── 📄 registre.js        # Lògica de validació (JS)
│   ├── 📄 intranet.html      # Llistat d'empreses i gestió
│   ├── 📄 formulari.html     # Exemple de formulari de dades
│   ├── 📄 styles_login.css   # Estils dels formularis d'accés
│   ├── 📄 styles_intranet.css # Estils del panell de control
│   └── 📄 style_formulari.css # Estils específics dels formularis
│
├── 📂 Digitalització (Carrusel)
│   ├── 📄 digi1.html         # Slide 1: Introducció
│   ├── 📄 digi2.html         # Slide 2: Conceptes
│   ├── 📄 digi3.html         # Slide 3: WhatsApp Business
│   ├── 📄 digi4.html         # Slide 4: Cas pràctic
│   ├── 📄 plantilla.html # Estructura base per a noves pàgines
│   ├── 📄 styles_digi_1.css  # Estils Slide 1
│   ├── 📄 styles_digi2.css # Estils Slide 2
│   ├── 📄 styles_digi3.css   # Estils Slide 3
│   └── 📄 styles_digi_4.css  # Estils Slide 4
│
└── 📂 Recursos
    ├── 📄 nav_i_foot.js      # Navbar / Footer
    ├── 📄 proximament.html   # Pàgina "En construcció"
    └── 📄 proximament.css    # Estils pàgina construcció


🛠️ Tecnologies Utilitzades

HTML5 Semàntic: Ús correcte d'etiquetes d'estructura (header, main, section, article, aside,).

CSS3:

Flexbox: Per a la maquetació de columnes i alineació d'elements.

Variables CSS: Per mantenir una paleta de colors coherent.

Positioning: Ús de sticky per al menú i fixed per a la navegació del carrusel.

JavaScript (ES6): Manipulació del DOM i Expressions Regulars per a les validacions.


✒️ Autors

Projecte realitzat per al curs 2025-2026 a l'Institut Montsià.


Arnau - Slide 2, Sistema de Login, Registre i validacions JS.

Miguel - Disseny de l'estructura flexbox, Slides 1 i 4.

Gabriel - Creació de les plantilles per al carrusel, Slide 3.
