import Card from "./create-Card.js";
import App from "./events-Gobal.js";

let CreatePage = {
    init(){
        this.title();
        this.boddy();
        
    },
    title(){
        document.querySelector('title').innerHTML = localStorage.getItem('namePage');
    },
    boddy(){
        
        
        document.addEventListener("DOMContentLoaded", App);

        const titlePage = document.createElement('h2');
        titlePage.classList.add('title');
        titlePage.innerHTML = `${localStorage.getItem('namePage')}`;
        

        const divCards = document.createElement('section');
        divCards.classList.add('mostrar');
        divCards.innerHTML = `
            <section class="section-card">
            
            </section>
            <a id="mostrar">Mais+</a>
        `
        let main = document.querySelector('main');
        main.appendChild(titlePage);
        main.appendChild(divCards);
        up_dates();

        


        
 
        // Converter o arquivo date-card.json em objetos js
        var quant_show = 3;
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


        
    },
 

} 
export default CreatePage ;