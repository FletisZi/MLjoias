let CreatePage = {
    init(){
        this.title();
        this.boddy();
        
    },
    title(){
        document.querySelector('title').innerHTML = localStorage.getItem('namePage');
    },
    boddy(){
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
            
            
           
        
            document.querySelector('#search img').addEventListener('click',(e)=>{
                
                pesquisa.open_inp(document.querySelector('.bar-search'));
                console.log(document.querySelector('#search img'))
                return(console.log(document.querySelector('#search img')));
            });
        
            
            
            
        }
        
        document.addEventListener("DOMContentLoaded", app());
        // let card = new Card(this.convert[0].name,'','','','');
        // document.body.appendChild(card.create_Card());
    },
 

} 
export default CreatePage ;