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





/****** Banner carrosel ******/

const imgs = document.getElementById('imgs');
const banner = document.querySelectorAll('#imgs .wrapper-carrosel');

let largura = imgs.clientWidth;


class Carrosel{
    constructor(banner,position){
        this.banner = banner;
        this.position = position;
    };


    action(){
        if(this.position != 0){
            this.banner[this.position-1].classList.remove("before");
            this.banner[this.position].classList.remove("after");
        }else{
            this.banner[this.banner.length-1].classList.remove("before");
            this.banner[this.position].classList.remove("after");
        };

        if( this.position == banner.length - 1){
            this.banner[this.position].classList.add("before");
            setTimeout(()=>{
                this.banner[this.banner.length-1].style.left = `${largura}px`;
                this.banner[this.position].style.left = `${0}px`;
            },2000);
    
            this.banner[this.position -(this.banner.length-1)].classList.add("after");
            this.position = 0;
            
        }else{
            
            
            this.banner[this.position].classList.add( "before");
            
            setTimeout(()=>{
                this.banner[this.position-1].style.left = `-${largura}px`; 
                this.banner[this.position].style.left = `${0}px`;
                
            },2000);
            this.banner[this.position + 1].classList.add("after");
            


            this.position++;

        };
        
    };

    next(){
        
    };

}

let carrosel = new Carrosel(banner,0);

setInterval(()=> {carrosel.action()}, 4000);





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
    
                if(position < quant_show){
                    
                    
                    let MyCard = new Card(card.name,card.id,'',card.img,'');
    
                    section_card.innerHTML += `${MyCard.create_Card()}`;
                }
            })
        });
    });
}




/////verifica erro json

// var respostaClone;
// fetch('./ui/date-card.json').then( (resposta)=> {
//     respostaClone = resposta.clone();
//     return resposta.json();
// }).then((dados) =>{
//     console.log(dados);
// }, (rejectionReason) => {
//     console.log('Erro ao analisar JSON da resposta:', rejectionReason, respostaClone); // 4
//     respostaClone.text() // 5
//     .then((corpoTexto) =>{
//         console.log('Recebido o seguinte em vez do JSON válido:', corpoTexto); // 6
//     });
// });



