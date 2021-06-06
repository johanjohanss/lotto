
window.addEventListener("load", function(){
    let startBtn = document.getElementById("startBtn");
    startBtn.addEventListener("click", runGenerator);

    let numbers = [];

    let animationInterval;

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
        }, 2000);
    }

    function stopAnimation(){
        clearInterval(animationInterval);
    }

});
