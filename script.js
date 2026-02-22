// const allBtn= document.getElementById('all-btn');
// const interviewBtn= document.getElementById('interview-btn');
// const rejectedBtn= document.getElementById('rejected-btn');
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

let totalJob = document.getElementById('total-job');
let totalHeading = document.getElementById('total-heading');

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

    if(deleteBtn){
        const card = deleteBtn.closest('.card');
        card.remove();

        let newTotalJob = Number(totalJob.innerText);
        let newTotalHeading= Number(totalHeading.innerText);


        totalJob.innerText = newTotalJob - 1;
        totalHeading.innerText=newTotalHeading-1;

    }
})
