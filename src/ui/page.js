function app(){

    let close = document.getElementById('close').addEventListener('click', ()=>{   
        document.querySelector('.menu-bar').classList.remove('hide');
    });
    let menu = document.getElementById('menu').addEventListener('click',(e)=>{
        e.preventDefault;
        document.querySelector('.menu-bar').classList.add('hide');
    });
    
    up_dates();


}

document.addEventListener("DOMContentLoaded", app());




/****** Cards ******/




// quantidade de card a ser mostrada
var quant_show = 3;


let mais = document.querySelector('#mostrar').addEventListener('click',(e)=>{
    e.preventDefault;
    quant_show += 2;
    let section_card = document.querySelector(".section-card");
    section_card.innerHTML = "";
    up_dates();
    
});

//obejto construtor do elemento card

class Card{
    constructor(name,id,value,img,categories){
        this.name = name;
        this.id = id;
        this.value = value;
        this.img = img;
        this.categories = categories;
    }

    create_Card(){


        let structure_Card = `
        <section class="wrapper-cards" >
            <article class="cards" >
                <div class="container-cards">
                    <div class="image" style=" background-image: url('../public/image/${this.img}.jpg');"></div>
                    <h2>${this.name}</h2>
                    <a href="#" class="button-add buy" id="${this.id}">ADQUIRA JÁ</a>
                </div>
            </article>
        </section>
        `;

        return (structure_Card);
    }


    Buy_Card(nameClass){
        
        
        nameClass.classList.toggle('buy');
        nameClass.classList.toggle('whats');

        
        if(nameClass.classList.value == 'button-add buy'){
            nameClass.innerHTML = 'ADQUIRA JÁ';
        }
        if(nameClass.classList.value == 'button-add whats'){
            
            nameClass.innerHTML = 'IR PARA WHATS';
        }
        
    
    }

}

// Converter o arquivo date-card.json em objetos js

function up_dates(){
    fetch("./ui/date-card.json").then((response)=>{
        response.json().then((date)=>{
    
            date.cards.map((card,position)=>{
                let section_card = document.querySelector(".section-card");
    
                if(document.querySelectorAll(".wrapper-cards").length < quant_show){
                    
                    if(card.categories == "anel"){
                        
                    
                    let MyCard = new Card(card.name,card.id,'',card.img,'');
    
                    section_card.innerHTML += `${MyCard.create_Card()}`;
                    }
                }
            })
        });
    });
}