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