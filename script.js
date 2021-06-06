
window.addEventListener("load", function(){
    let startBtn = document.getElementById("startBtn");
    startBtn.addEventListener("click", runGenerator);

    let numbers = [];
    let winProbNumbers = [];
    let rowCounter, counter;
    let probabilityRuns = 1000000;

    let animationInterval;

    let winProbabilityText = document.getElementById("winProbabilityText");

    function runGenerator(){
        generateNumbers();
        animateNumber();
    }
    
    function generateNumbers(){
        numbers = [];
        for(let i = 0 ; i < 7 ; i++){
            let rand = Math.floor(Math.random() * 35) + 1;
    
            while(numbers.includes(rand)){
                rand = Math.floor(Math.random() * 35) + 1;
            }
            numbers.push(rand);
        }

        console.log(numbers);
    }

    function updateNumbers(){
        let documentNumbers = document.querySelectorAll(".number");

        documentNumbers.forEach((number, i) =>{
            number.innerText = numbers[i];
        });
    }

    function animateNumber(){
        let documentNumbers = document.querySelectorAll(".number");

        animationInterval = setInterval(function(){
            documentNumbers.forEach(number =>{
                number.innerText = Math.floor(Math.random() * 35) + 1;
            });
        }, 50);

        setTimeout(function(){
            stopAnimation();
            updateNumbers();
            getWinProbability();
        }, 2000);
    }

    function stopAnimation(){
        clearInterval(animationInterval);
    }

    function getWinProbability(){
        winProbabilityText.innerText = "Calculating probability...";

        setTimeout(function(){

            counter = 0;
            for(let i = 0 ; i<probabilityRuns ; i++){

                rowCounter = 0;
                winProbNumbers = [];

                //Make new numbers
                for(let j = 0 ; j < 7 ; j++){
                    let rand = Math.floor(Math.random() * 35) + 1;
            
                    while(winProbNumbers.includes(rand)){
                        rand = Math.floor(Math.random() * 35) + 1;
                    }
                    winProbNumbers.push(rand);
                }
        
                //Check if numbers includes
                for(let j = 0 ; j < 7 ; j++){
                    if(numbers.includes(winProbNumbers[j])){
                        rowCounter ++;
                    }
                }

                if(rowCounter > 6){
                    counter++;
                }

            }

            showWinProbability();
        }, 500);
        
    }

    function showWinProbability(){
        winProbabilityText.innerText = "Probability: " + counter + " / " + probabilityRuns;
    }

});
