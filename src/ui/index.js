import App from "./events-Gobal.js";
import Card from "./create-Card.js";

document.addEventListener("DOMContentLoaded", App() , up_dates());





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


//mostrar mais cards
let mais = document.querySelector('#mostrar').addEventListener('click',(e)=>{
    e.preventDefault;
    quant_show += 2;
    let section_card = document.querySelector(".section-card");
    section_card.innerHTML = "";
    up_dates();
    
});

// Converter o arquivo date-card.json em objetos js

// quantidade de card a ser mostrada
var quant_show = 3;

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
            return(date);
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




/*****************barra de pesquisa *************************/


class Search{
    constructor(){

    };

    open_inp(barra_pesquisa){
        barra_pesquisa.classList.toggle('secund');
        barra_pesquisa.children[1].classList.toggle('hide');       
    }; 

};


let pesquisa = new Search;





