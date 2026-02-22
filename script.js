// const allBtn= document.getElementById('all-btn');
// const interviewBtn= document.getElementById('interview-btn');
// const rejectedBtn= document.getElementById('rejected-btn');
let totalJob = document.getElementById('total-job');
let totalHeading = document.getElementById('total-heading');

let interviewList=[];
let rejectedList=[];



function toggleStyle(id){

    let buttons=document.querySelectorAll('#buttons .btn');
    buttons.forEach(button=>{
        button.classList.remove('bg-blue-500','text-white')
        button.classList.add('bg-white','text-black');
    })
    const selected= document.getElementById(id);
    selected.classList.remove('bg-white','text-black')
    selected.classList.add('bg-blue-500','text-white');
}



 document.getElementById('card-parents').addEventListener('click' , function(event){
    
    //  if(event.target.classList.contains('delete-btn')){
    //     const card = event.target.parentNode;
    //     card.remove();
    // }
    // else if(event.target.classList.contains('fa-trash-can')){
    //     const card = event.target.parentNode.parentNode;
    //     card.remove();

    // }
      const deleteBtn = event.target.closest('.delete-btn');
      const interviewBtn=event.target.closest('.interview-btn');

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
        
 companyName=card.querySelector('.companyName').innerText;
 position=card.querySelector('.position').innerText;
 typeAndSalary= card.querySelector('.type-and-salary').innerText;
 status=card.querySelector('.status').innerText;
 description= card.querySelector('.description').innerText;

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

console.log(interviewList);

    }
})
