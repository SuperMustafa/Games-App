import { Ui } from "./ui-module.js";

export class Details{
    uiInstance = new Ui();

    constructor(id){
        $('#closeBtn').on('click',()=>{
            $('#details').addClass('d-none')
            $('#parent').removeClass('d-none')
        })
        this.loading= document.querySelector('.loading-layer')
        this.getDetails(id);
       
    };
     
   

    async getDetails(id){
    this.loading.classList.remove('d-none')
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '8a81feabdcmshb19801ce3375983p1a6032jsnbca4b0238e3e',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };


        let response=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)
        let data=await response.json();
        this.loading.classList.add('d-none')

        this.uiInstance.displayDetails(data)
      

       
    }

    
}
