// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html. Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto. Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.

// genero gli oggetti

// angela-caroll-chief-editor

const empl00= {
    "name" : "Alberta Angela",
    "role" : "Chief of Herself",
    "src" : "img/angela-caroll-chief-editor.jpg",
}

// angela-lopez-social-media-manager

const empl01= {
    "name" : "Angel Albertha",
    "role" : "Social Media Follower",
    "src" : "img/angela-lopez-social-media-manager.jpg",
}

// barbara-ramos-graphic-designer

const empl02= {
    "name" : "Huma Wollera",
    "role" : "Gratis Designer",
    "src" : "img/barbara-ramos-graphic-designer.jpg",
}

// scott-estrada-developer

const empl03= {
    "name" : "Joung Celentano",
    "role" : "Door Opener",
    "src" : "img/scott-estrada-developer.jpg",
}

// walter-gordon-office-manager

const empl04= {
    "name" : "Man Fisher",
    "role" : "Donuts Manager",
    "src" : "img/walter-gordon-office-manager.jpg",
}

// wayne-barnett-founder-ceo

const empl05= {
    "name" : "Elon Denoaltri",
    "role" : "Founder & God",
    "src" : "img/wayne-barnett-founder-ceo.jpg",
}

// li pusho in un array

let team = [];

team.push(empl00,empl01,empl02,empl03,empl04,empl05);
console.log(team);

let logSample = team.indexOf("empl04");

console.log(logSample);

// aggiungo il node dove appendere la mia array

const deploy = document.querySelector("div.team-container");

// Lancio una funzione per appendere i vari dati alla pagina

// addEmpl (team,deploy);

// inizio a fare la prima

function addEmpl (arrayEmp, node) {


        for (let i = 0; i < arrayEmp.length; i++) {
            const empl = arrayEmp[i];
            let card = document.createElement("div");
            card.className = "team-card";
            node.append(card);

            for (let chiave in empl) {
                console.log (chiave + ": " + empl [chiave])
                
            }

            // let pic = document.createElement("img");
            // pic.src = arrayEmp (i,3);
            // card.append(pic);

        }

}

{/* <div class="team-card">
<div class="card-image">
  <img
    src="img/wayne-barnett-founder-ceo.jpg"
    alt="Wayne Barnett"
  />
</div>
<div class="card-text">
  <h3>Wayne Barnett</h3>
  <p>Founder & CEO</p>
</div>
</div> */}

// genero un nuovo oggetto dell'invio dei dati del form 

// Modifico la funzione per generare l'inserimento di altre figure attraverso il form
