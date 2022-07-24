
function results(computer, player){
   const result = document.querySelector("#res");
  
    if (computer == player){
        result.textContent = "Tie";
    }
    
    else if (computer == 1 && player == 2){
        result.textContent = "Try again";
        result.getElementsByClassName.color ="red";
    }
    else if (computer == 1 && player ==3){
        result.textContent = "You Won";
        result.getElementsByClassName.color ="green";
    }
    else if (computer == 2 && player == 1){
        result.textContent = "You Won";
        result.getElementsByClassName.color ="green";
    }
    else if (computer == 2 && player == 3){
        result.textContent = "Try again";
        result.getElementsByClassName.color ="red";
    }
    else if (computer == 2 && player == 1){
        result.textContent = "You Won";
        result.getElementsByClassName.color ="green";
    }
    else if (computer == 3 && player == 1){
        result.textContent = "Try again";
        result.getElementsByClassName.color ="green";
    }
    else if (computer == 3 && player == 2){
        result.textContent = "You Won";
        result.getElementsByClassName.color ="green";
    }
    return [
        // console.log("Hey i am there");
       $("#mymodal").modal('show'), true];
}

function computers(){
    let computers = Math.floor(Math.random()*3) +1;
    // console.log(computers);

    const pic = document.getElementById("computerChoice");
    const image = document.createElement("img");
    if (computers == 1){
        image.src ="paper.png";
        image.id = "dynamic";
        pic.append(image);
    }
    if (computers == 2){
        image.src ="rock.png";
        image.id = "dynamic";
        pic.append(image);
        // pic.src = "rock.png";
    }
    if (computers == 3){
        image.src ="scissor.jpg";
        image.id = "dynamic";
        pic.append(image);
    }
    return computers;
}

const papers = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissor = document.getElementById("scissor");

papers.addEventListener("click", ()=> {
    const cChoice = computers();
    const pic = document.getElementById("playerChoice");
    const image = document.createElement("img");
    image.src ="paper.png";
    image.href ="#";
    image.id = "dynamic";
    pic.append(image);
    let one, two = results(cChoice, 1);
    if(two){
        setTimeout( () => {
            location.reload();    
        }, 4000);    
    }
});


rock.addEventListener("click", ()=> {
    const cChoice = computers();
    const pic = document.getElementById("playerChoice");
    const image = document.createElement("img");
    image.src ="rock.png";
    image.href ="#";
    image.id = "dynamic";
    pic.append(image);
    let one, two =results(cChoice, 2);
    if(two){
        setTimeout( () => {
            location.reload();    
        }, 3000); 
    }
});


scissor.addEventListener("click", ()=> {
    const cChoice = computers();
    const pic = document.getElementById("playerChoice");
    const image = document.createElement("img");
    image.src ="scissor.jpg";
    image.href ="#";
    image.id = "dynamic";
    pic.append(image);
    let one, two =results(cChoice, 3);
    if(two){
        setTimeout( () => {
            location.reload();    
        }, 3000); 
    }
});

