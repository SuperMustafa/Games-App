export class Ui{


    constructor(){}

    display(arr){
        let box=``;
        for(let i=0;i<arr.length;i++){
            box+=`
             <div class="col-sm-5 col-md-4 col-lg-3  ">
        <div data-id="${arr[i].id}" class="card p-3 border border-black bg-transparent position-relative overflow-hidden">
          <div class="layer"></div>
          <img src="${arr[i].thumbnail}" class="w-100 rounded-2" alt="">
         <div class="game-Name d-flex justify-content-between my-2">
          <h6>${arr[i].title}</h6>
          <p class="badge bg-primary p-2">free</p>
         </div>
         <h6 class="text-center text-secondary fw-bold mb-2">${arr[i].short_description}</h6>
          <div class="line"></div>
        <div class="game-info d-flex justify-content-between mt-2 ">
          <p class="badge  p-2 badge-color">${arr[i].genre}</p>
          <p class="badge p-2 badge-color">${arr[i].platform}</p>
        </div>
        </div>
       
    </div>`
        }

        document.querySelector('#rowData').innerHTML=box;

    

    }


    displayDetails(data){
      let box=``;
      box+=`   <div class="col-md-4">
              <img src="${data.thumbnail}" class="w-100 my-4" alt="">
            </div>
            <div class="col-md-8">
              <h3 class="my-4">Title : <span>${data.title}</span> </h3>
              <h6 class="my-4">Category : <span class="badge bg-info">${data.genre}</span></h6>
              <h6 class="my-4">Platform : <span class="badge bg-info">${data.platform}</span></h6>
              <h6 class="my-4">Status : <span class="badge bg-info">${data.status}</span></h6>
              <div class="discription">
                <p>${data.description}</p>

              </div>
              <button class="btn border border-warning text-white my-3">Show Game</button>
            </div>`;

           document.querySelector('#row').innerHTML=box;
    }

    
}