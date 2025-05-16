//Initialize popovers

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

popoverTriggerList.forEach(function (element){
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc + "'>";
    new bootstrap.Popover(element,{
        content: content,
        html: true,
        trigger: 'hover'
    });
})

//Initialize toast

const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl));

function displaySelectedMovieOptions(){
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text
    var quantity = document.getElementById('quantity').ariaValueMax;

    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;
    //DisplayToast

    var toastBody = document.getElementById('toastBody');
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show()
}

function buyTickets(){
    displaySelectedMovieOptions();
}



//event listeners for the 2 select options

document.getElementById('movieSelect').addEventListener("change", ProgressBar);

document.getElementById('timeSelect').addEventListener("change", ProgressBar);

document.getElementById('quantity').addEventListener("change", ProgressBar);

//checks if 1 or both select fields have a non-default anwser, updates the width of 
//the progress bar based on number of non-default anwsers

function ProgressBar(){

let progress = 0;

var SelectedMovie = document.getElementById('movieSelect').value;

var SelectedTime = document.getElementById('timeSelect').value;

var SelectedNum = document.getElementById('quantity').value;

if(SelectedMovie === "Select movie"){
    progress = 0;
}  else {
    progress = 33;
};
if(SelectedTime === "Select time"){
    progress = progress + 0;
}  else {
    progress = progress + 33;
};
if(SelectedNum === 0){
    progress = progress + 0;
}  else {
    progress = progress + 33;
};


const bar = document.getElementById('bar');

bar.style.width = `${progress}%`;
    
};