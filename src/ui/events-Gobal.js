import Card from "./create-Card.js";

const App = function app(){


    document.addEventListener('click',(e)=>{

        const targetEl = e.target;
        
        //click open menu;
        if(targetEl.parentNode.id == 'menu'){
            document.querySelector('.menu-bar').classList.add('hide');
        }
        //click close menu;
       
        if(targetEl.id == 'close'){
            document.querySelector('.menu-bar').classList.remove('hide');
        }
        //click open menu;
        if(targetEl.classList.contains('categories')){
            document.querySelector('.menu-bar').classList.add('hide');
        }

        
        //click - abrir o card
        if(targetEl.classList.contains('button-add')){
    
    
            fetch("./ui/date-card.json").then((response)=>{
                response.json().then((date)=>{
            
                    date.cards.map((card,position)=>{
                        if(card.id == targetEl.id){
                            let MyCard = new Card('','','','','');
                            MyCard.open_card(card.img,card.name,);
                            
                        };
    
                    });
                });
            });
    
        
        };

        // click muda a imagem do card
        if( targetEl.tagName == 'IMG'){
    
            
    
            
    
            function urls(){
                let element_image = document.querySelector('.card_select_container').children[0];
               //pegar a url da img principal edita o final da url
                let MyCard = new Card('','','','','');
                let urlIMG = element_image.style.backgroundImage.replace(`_${element_image.style.backgroundImage[26]}.jpg")`,`_`);
                MyCard.next_card(urlIMG,element_image,targetEl.id);
                
            
            }
    
            switch(targetEl.id){
                case '1':
                    urls();
                    break;  
                case '2':
                    urls();
                    break;
                case '3':
                    urls()
                    break;
                default:
            }
            
            //MyCard.next_card(targetEl,targetEl.id);
           
           
        };    

        //click muda page 

        
            if(targetEl.classList == 'pgAneis' ){
                console.log('click');
                localStorage.setItem("namePage", "Anéis / Alianças");
                window.location.href = "./page.html";
                
            }
            if(targetEl.classList == 'pgColares' ){
                localStorage.setItem("namePage", "Colares");
                window.location.href = "./page.html";
                
            }
            if(targetEl.classList == 'pgCorrentes' ){
                localStorage.setItem("namePage", "Correntes");
                window.location.href = "./page.html";
                
            }
            if(targetEl.classList == 'pgBrincos' ){
                localStorage.setItem("namePage", "Brincos");
                window.location.href = "./page.html";
                
            }
            if(targetEl.classList == 'pgPinjentes' ){
                localStorage.setItem("namePage", "Pinjentes");
                window.location.href = "./page.html";
                
            }
            if(targetEl.classList == 'pgNewColletion' ){
                localStorage.setItem("namePage", "New Colletion");
                window.location.href = "./page.html";
                
            }
    
    
        
        
    });

    document.querySelector('#search img').addEventListener('click',(e)=>{
        
        pesquisa.open_inp(document.querySelector('.bar-search'));
        console.log(document.querySelector('#search img'))
        return(console.log(document.querySelector('#search img')));
    });

    
    
    
}

export default App;