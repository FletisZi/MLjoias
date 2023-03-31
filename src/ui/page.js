function app(){

    let close = document.getElementById('close').addEventListener('click', ()=>{   
        document.querySelector('.menu-bar').classList.remove('hide');
    });
    let menu = document.getElementById('menu').addEventListener('click',(e)=>{
        e.preventDefault;
        document.querySelector('.menu-bar').classList.add('hide');
    });
    let categories = document.querySelector('.categories').addEventListener('click', (e)=>{
        e.preventDefault;
        document.querySelector('.menu-bar').classList.add('hide');
    });
    
    up_dates();


}

document.addEventListener("DOMContentLoaded", app());

class Card{
    constructor(name,id,value,img){
        this.name = name;
        this.id = id;
        this.value = value;
        this.img = img;
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
    
                if(position < quant_show){
                    
                    
                    let MyCard = new Card(card.name,card.id,'',card.img);
    
                    section_card.innerHTML += `${MyCard.create_Card()}`;
                }
            })
        });
    });
}