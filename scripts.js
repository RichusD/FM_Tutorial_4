const testClick = function (){
    console.log("working")
}

const onClick = (event) => {
    let elem = event.target;
    console.log(elem.className);
    console.log(elem.id);

    //If a number is clicked
    if (elem.classList.contains("numbers")){
        let allNums = Array.from(document.getElementsByClassName("numbers"))
        allNums.map(e => e.classList.remove("number-selected"))
        allNums.map(e => e.classList.add("numbers-hover"))
        elem.classList.add("number-selected");
        elem.classList.remove("numbers-hover");
        currentRating = Number(elem.innerHTML);
        console.log(`current rating is ${currentRating}`)
        console.log(elem.classList)
    }
    // if the submit button is clicked
    if (elem.id === "submit-button"){
        if (currentRating >0){
            let blur = document.querySelector("#blur-area")
            let thanks = document.querySelector(".thank-you-card")
            let rating = document.querySelector("#rating")
            blur.classList.add("blur-content")
            thanks.classList.add("thank-you-card-activated")
            console.log(rating)
            rating.innerText= `You rated ${currentRating} out of 5`

        } else{
            alert("You haven't selected a rating.")
        }
    }
    
    //restart rating
    if (elem.id === "rate-again-btn"){
        let blur = document.querySelector("#blur-area")
        let thanks = document.querySelector(".thank-you-card")
        blur.classList.remove("blur-content")
        thanks.classList.remove("thank-you-card-activated")
    }
  }

  window.addEventListener('click', onClick);

let currentRating = 0;
