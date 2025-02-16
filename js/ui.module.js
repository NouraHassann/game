export class Ui{
    constructor(){

    }

    display(data){

        let cartoon ='';

        for (let i = 0; i < data.length; i++) {            
        
       
        cartoon+=`
        <div class="col-xl-3 col-lg-4 col-md-6">
             <div data-id="${data[i].id}" class="card rounded-2 p-0 h-100 d-flex justify-content-between">
               <div class="p-3">
                 <img src=${data[i].thumbnail} class="image w-100 rounded-top-2 mb-2"/>
                 
                 <div class="d-flex justify-content-between align-items-center">
                   <h5 class="small">${data[i].title}</h5>
                   <button class="btn btn-primary px-2 py-1">free</button>
                 </div>
                 <p class="description px-3 text-center small opacity-50">
                   ${data[i].short_description}</p>
               </div>

                <div class="foot-card px-3 d-flex justify-content-between align-items-center">
                 
                 <span class="my-2 rounded-3 fw-bolder">${data[i].genre}</span>
                 <span class="my-2 rounded-3 fw-bolder">${data[i].platform}</span>
               </div>
               
             </div>
           </div>
         
        `;
        
    }
    
    document.querySelector('#home .row').innerHTML = cartoon;
}


  displayDetails(detailsData){
    let cartoon='';

      cartoon+=`
      <div class="col-md-4 mb-4">
            <img src=${detailsData.thumbnail} class="w-100 " alt=""/>
          </div>

          <div class="col-md-8">
            <h2>Title:${detailsData.title}</h2>
            <div class="d-flex flex-column gap-3">
              <p>Category: <span class="rounded-2 fw-bold">${detailsData.genre}</span></p>
              <p>Platform: <span class="rounded-2 fw-bold">${detailsData.platform}</span></p>
              <p>Status: <span class="rounded-2 fw-bold">${detailsData.status}</span></p>
            </div>
            <p class="small"> ${detailsData.description}</p>
            <button class="rounded-2 px-2 py-1 text-white fw-bold">
              <a href="${detailsData.game_url}" target="_blank" class="text-white text-decoration-none"> Show Game</a>
            </button>
          </div>
      `;
      
    

    document.getElementById('detailsContent').innerHTML = cartoon;
  } 

}