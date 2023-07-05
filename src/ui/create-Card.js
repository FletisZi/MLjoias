
class Card{
    constructor(name,id,value,img,categories){
        this.name = name;
        this.id = id;
        this.value = value;
        this.img = img;
        this.categories = categories;
    }

    create_Card(name){


        let structure_Card = `
        <section class="wrapper-cards" >
            <article class="cards" >
                <div class="container-cards">
                    <div class="image" style=" background-image: url('../public/image/${this.img}.jpg');"></div>
                    <h2>${this.name}</h2>
                    <a href="#!" class="button-add buy" id="${this.id}">ADQUIRA JÁ</a>
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

    open_card(img,description,link){
        let Structure_Card_Open = `
        <div class="opacity"></div>
        <section class="card_select_main ">
            <div class="card_select_box">
                <div id="close_card"> <img src="../public/image/icon-close.svg" alt=""></div>
                <article class="card_select_container">
                    <div class="img" alt="Imagem MLjoias" style="background-image: url('../public/image/${img}_1.jpg');"></div>
                    <div class="imgs_nexts"><img id="1" src="../public/image/${img}_1.jpg"></img><img id="2" src="../public/image/${img}_2.jpg"></img><img id="3" src="../public/image/${img}_3.jpg"></img></div>
                    <p>${description}</p>
                    <a href="https://api.whatsapp.com/send?phone=5517997269081&text=Ol%C3%A1!%20Fiquei%20interessado%20em%20${description}%20${img}"  target="_blank">ADIQUIRA JÁ <img src="../public/image/icon-whatsapp.svg" alt="img whatsapp" style="margin-left: 5px;" ></a>
                </article>
            </div>
        </section>
        
        `;

        let cardNew = document.createElement('div');
        cardNew.innerHTML = (Structure_Card_Open);
        document.querySelector('main').insertBefore(cardNew,document.querySelector('main').firstChild);
        let buttom_close = document.querySelector('#close_card').addEventListener('click',(e)=>{this.close_card()});
        
        
        
    }

    close_card(){
        document.querySelector('main').firstChild.parentNode.removeChild(document.querySelector('main').firstChild)
    }

    next_card(urlimg,element,ids){
        //irá trocar a foto principal url
        element.style.backgroundImage = `${urlimg}${ids}.jpg")`;
        
    }
    
    

}


export default Card;