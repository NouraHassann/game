import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Home {

    constructor(){

        document.querySelectorAll("nav .nav-link").forEach((link)=>{
            link.addEventListener("click" , ()=>{
                this.changeActiveLink(link);
                const innerText = link.dataset.link;
                this.getGames(innerText);

            })
        });

        
        this.loading = document.querySelector(".loader-container");
        // this.cards = ;
        this.homeSection = document.getElementById("home");
        this.detailsSection = document.getElementById("details");
        this.ui = new Ui();
        this.getGames('mmorpg');
        
    }
 
    changeActiveLink(link){
        document.querySelector(".navbar-nav .active").classList.remove("active");
        link.classList.add("active")
    }

   async getGames(link){
    this.loading.classList.remove("d-none");
    const options ={
            method:"get",
            headers:{
                'x-rapidapi-key':'e3709cbaa8mshcd9af5b036b1acdp12a84ejsn2e3317026773',
		        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
    }

        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${link}` , options)
        const response = await api.json();
        this.loading.classList.add("d-none");
        this.ui.display(response)
        this.appendDetails()
        
    }


    appendDetails(){
        document.querySelectorAll(".card").forEach((card)=>{
            card.addEventListener("click",()=>{
                this.homeSection.classList.replace("d-block","d-none")
                this.detailsSection.classList.replace("d-none","d-block")
                new Details(card.dataset.id);
            })
        })
    }

}