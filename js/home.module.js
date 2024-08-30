import { Ui } from "./ui-module.js";
import { Details } from "./details.module.js";

export class Home {
    constructor() {


        document.querySelectorAll('.anchor-list .nav-link').forEach((link => {
            link.addEventListener('click', () => {
                this.activeLink(link);
                let currentCategory = link.getAttribute('data-category');
                this.getData(currentCategory);


            })
        }))

        this.loader=document.querySelector('.loading-layer')
        this.ui = new Ui();
        this.detailsPage = new Details();

        this.getData('mmorpg')
    }








    async activeLink(link) {
        document.querySelector('.active').classList.remove('active');
        link.classList.add('active')

       
    }

    async getData(category) {

        this.loader.classList.remove('d-none');

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '8a81feabdcmshb19801ce3375983p1a6032jsnbca4b0238e3e',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };



        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        const data = await response.json();
        console.log(data);
        this.ui.display(data);
        this.loader.classList.add('d-none');
        document.querySelectorAll('.card').forEach((card)=>{
            card.addEventListener('click',()=>{
                $('#details').removeClass('d-none')
                $('#parent').addClass('d-none')
                new Details(card.dataset.id);
            })
        })
      


    }
}