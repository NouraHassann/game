import { Ui } from "./ui.module.js";

export class Details{
    constructor(id){        
        
        document.querySelector(".cross").addEventListener("click", ()=>{
            document.getElementById("home").classList.replace("d-none","d-block")
            document.getElementById("details").classList.replace("d-block","d-none")
        })

        this.loading = document.querySelector(".loader-container");
        // this.getDetails(id);
        this.getDetails(id)


    }



    async getDetails(id){
        this.loading.classList.remove("d-none")
        const options={
            method:"get",
            headers:{
            'x-rapidapi-key':'e3709cbaa8mshcd9af5b036b1acdp12a84ejsn2e3317026773',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}` , options);
        const responseDetails = await api.json();
        this.loading.classList.add("d-none")
        new Ui().displayDetails(responseDetails);
        console.log(responseDetails);
    }

}

