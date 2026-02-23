// const allBtn= document.getElementById('all-btn');
// const interviewBtn= document.getElementById('interview-Btn');
// const rejectedBtn= document.getElementById('rejected-Btn');
// const deleteBtn =document.getElementById('.delete-btn');
let mainContainer= document.querySelector('main')
let cardSection= document.getElementById('card-parents')
let totalJob = document.getElementById('total-job');
let totalHeading = document.getElementById('total-heading');
let xtraDiv= document.getElementById('xtra-div');
let filterSection= document.getElementById('filter-section')
let currentStatus="all";

let interviewList=[];
let rejectedList=[];



// calculateCount()


function toggleStyle(id){

    let buttons=document.querySelectorAll('#buttons .btn');
    buttons.forEach(button=>{
        button.classList.remove('bg-blue-500','text-white')
        button.classList.add('bg-white','text-black');
    })
    const selected= document.getElementById(id);
    selected.classList.remove('bg-white','text-black')
    selected.classList.add('bg-blue-500','text-white');

    currentStatus=id;

     if (id == 'interview-filter-btn') {
        cardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        interviewedJob()
    }
    else if(id == 'rejected-filter-btn'){
      cardSection.classList.add('hidden');
      filterSection.classList.remove('hidden');
      rejectedJob();
    }
    else if(id=='all-filter-btn'){
       cardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    }
}



mainContainer.addEventListener('click' , function(event){
    
    //  if(event.target.classList.contains('delete-btn')){
    //     const card = event.target.parentNode;
    //     card.remove();
    // }
    // else if(event.target.classList.contains('fa-trash-can')){
    //     const card = event.target.parentNode.parentNode;
    //     card.remove();

    // }
   let deleteBtn = event.target.closest('.delete-btn');
       let interviewBtn=event.target.closest('.interview-Btn');
      let rejectedBtn=event.target.closest('.rejected-Btn')

    if(deleteBtn){
        const card = deleteBtn.closest('.card');
        card.remove();

        let newTotalJob = Number(totalJob.innerText);
        let newTotalHeading= Number(totalHeading.innerText);


        totalJob.innerText = newTotalJob - 1;
        totalHeading.innerText=newTotalHeading-1;

    }

    else if(interviewBtn){
        const card=interviewBtn.closest('.card');

        const statusBtn = card.querySelector('.status');

    statusBtn.innerText = "INTERVIEW";

    statusBtn.classList.remove('btn-primary');
    statusBtn.classList.remove('btn-error')
    statusBtn.classList.add('btn-success');
        

let jobs={
   companyName:card.querySelector('.companyName').innerText,
 position:card.querySelector('.position').innerText,
 typeAndSalary: card.querySelector('.type-and-salary').innerText,
 status:card.querySelector('.status').innerText,
 description: card.querySelector('.description').innerText,

}
let jobExist= interviewList.find(item=>item.companyName == jobs.companyName)

    
  if(!jobExist){
    interviewList.push(jobs);
  }


rejectedList = rejectedList.filter(item=>(item.companyName!=jobs.companyName));
if (currentStatus === 'interview-filter-btn') {
    interviewedJob();
} else if (currentStatus === 'rejected-filter-btn') {
    rejectedJob();
}


    }
    
    else if(rejectedBtn){
        const card=rejectedBtn.closest('.card');
        const statusBtn = card.querySelector('.status');

    statusBtn.innerText = "REJECTED";

    statusBtn.classList.add('btn-error');
    statusBtn.classList.remove('btn-primary');
        


let jobs={
   companyName:card.querySelector('.companyName').innerText,
 position:card.querySelector('.position').innerText,
 typeAndSalary: card.querySelector('.type-and-salary').innerText,
 description: card.querySelector('.description').innerText,

}
let jobExist= rejectedList.find(item=>item.companyName == jobs.companyName)

    
  if(!jobExist){
    rejectedList.push(jobs);
  }




// console.log(interviewList);

interviewList = interviewList.filter(item=>(item.companyName!=jobs.companyName));

if (currentStatus === 'interview-filter-btn') {
    interviewedJob();
} else if (currentStatus === 'rejected-filter-btn') {
    rejectedJob();
}


    }
})


function interviewedJob(){

  filterSection.innerHTML='';
    if(interviewList.length === 0){
      xtraDiv.classList.remove("hidden");
      filterSection.appendChild(xtraDiv);   
      return;
  }

  xtraDiv.classList.add("hidden");

  for(const interview of interviewList){
    let div=document.createElement('div');
    div.className='card py-10 px-10 bg-white md:flex-row md:justify-between space-y-6'
    div.innerHTML=`
      <div id="cart-part-1" class="space-y-4">
                <h1 class="companyName font-semibold text-3xl">${interview.companyName}</h1>
                <p class="position text-neutral/50">${interview.position}</p>
                <p class="type-and-salary my-6 text-neutral/50">
                 ${interview.typeAndSalary}
                </p>
                <button class="status btn btn-outline border-2 btn-success  w-[60%] md:w-[20%]  md:text-lg">
                    INTERVIEW
                  </button>
                <p class="description">
                 ${interview.description}
                </p>

                <div class="flex gap-4">
                  <button class="interview-Btn btn btn-outline border-2 btn-success">
                    INTERVIEW
                  </button>
                  <button class="rejected-Btn btn btn-outline border-2 btn-error">
                    REJECTED
                  </button>
                </div>
                 </div>

              <!-- id="card-part-2" -->
              <button
                class="delete-btn btn btn-soft btn-error rounded-full h-[50px] w-[50px] flex justify-center items-center"
              >
                <i class="fa-regular fa-trash-can"></i>
              </button>
    `
    filterSection.appendChild(div);
  }

}




function rejectedJob(){

  filterSection.innerHTML='';

    if(rejectedList.length === 0){
      xtraDiv.classList.remove("hidden");
      filterSection.appendChild(xtraDiv);  
      return;
  }

  xtraDiv.classList.add("hidden");


  for(const rejected of rejectedList){
    let div=document.createElement('div');
    div.className='card py-10 px-10 bg-white md:flex-row md:justify-between space-y-6'
    div.innerHTML=`
      <div id="cart-part-1" class="space-y-4">
                <h1 class="companyName font-semibold text-3xl">${rejected.companyName}</h1>
                <p class="position text-neutral/50">${rejected.position}</p>
                <p class="type-and-salary my-6 text-neutral/50">
                 ${rejected.typeAndSalary}
                </p>
                <button class="status btn btn-outline border-2 btn-error  w-[60%] md:w-[20%]  md:text-lg">
                    REJECTED
                  </button>
                <p class="description">
                 ${rejected.description}
                </p>

                <div class="flex gap-4">
                  <button class="interview-Btn btn btn-outline border-2 btn-success">
                    INTERVIEW
                  </button>
                  <button class="rejected-Btn btn btn-outline border-2 btn-error">
                    REJECTED
                  </button>
                </div>
                 </div>

              <!-- id="card-part-2" -->
              <button
                class="delete-btn btn btn-soft btn-error rounded-full h-[50px] w-[50px] flex justify-center items-center"
              >
                <i class="fa-regular fa-trash-can"></i>
              </button>
    `
    filterSection.appendChild(div);
  }

}