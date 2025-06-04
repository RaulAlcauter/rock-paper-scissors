let youText = document.querySelector("#you-text");
let cpuText = document.querySelector("#cpu-text");

let rockButton = document.querySelector("#human-rock");
let paperButton = document.querySelector("#human-paper");
let scButton = document.querySelector("#human-scissors");

let cpuRockButton = document.querySelector("#cpu-rock");
let cpuPaperButton = document.querySelector("#cpu-paper");
let cpuScButton = document.querySelector("#cpu-scissors");

let hScore = 0;
let cScore = 0;

function userWins(hB, cB){ //1 user wins, 0 draw, -1 cpu wins
    if(hB == "human-rock"){
        if(cB == "cpu-paper") return -1;
        if(cB == "cpu-scissors") return 1;
    }else if(hB == "human-paper"){
        if(cB == "cpu-scissors") return -1;
        if(cB == "cpu-rock") return 1;
    }else{
        if(cB == "cpu-rock") return -1;
        if(cB == "cpu-paper") return 1;
    }
    return 0;
}

function keyPressed(ev) {
    let humanButton = ev.target;
    let randomButton = () => {
        const i = Math.floor(Math.random() * 3);
        if(i == 0) return cpuRockButton;
        if(i == 1) return cpuPaperButton;
        return cpuScButton;
    }
    let cpuButton = randomButton();

    [humanButton, cpuButton].forEach((btn) => {
        btn.style.backgroundColor = "rgba(0, 0, 0, 0.08)";
        setTimeout(() => {
            btn.style.backgroundColor = "";
        }, 650);
    });

    const hB = ev.currentTarget.id;
    const cB = cpuButton.id;
    
    const winner = userWins(hB, cB);
    if(winner != 0){
        if(winner == 1){
            ++hScore;
            youText.textContent = "YOU: " + hScore;
        }else{
            ++cScore;
            cpuText.textContent = "CPU " + cScore;
        }
    }
}

rockButton.addEventListener("click", keyPressed);
paperButton.addEventListener("click", keyPressed);
scButton.addEventListener("click", keyPressed);
