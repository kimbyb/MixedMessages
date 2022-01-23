console.log("Are you ready to get your daily phrase? Please pick one from the list: \n 1. Motivational phrase \n 2. Affirmation \n 3. Ask 8 ball")

/// in plan to use API for the quotes generator. In the meantime a few hardcoded quotes are being used 
const motivational = () => {
    const motivationalQuotes =  ["It always seems impossible until it's done.", 
    "Education is the most powerful weapon which you can use to change the world.", 
    "Success is not final, failure is not fatal: it is the courage to continue that counts.", 
    "If you fell down yesterday, stand up today.", 
    "Quality is not an act, it is a habit.",
    "You can't expect to hit the jackpot if you don't put a few nickels in the machine.",
    "Opportunity does not knock, it presents itself when you beat down the door.",
    "Step by step and the thing is done.",
    "Expect problems and eat them for breakfast.",
    "Don't think, just do.",
    "We may encounter many defeats but we must not be defeated.",
    "Arriving at one goal is the starting point to another.",
    "A goal is a dream with a deadline.",
    "Do something wonderful, people may imitate it.",
    "The more things you do, the more you can do."]
    let random = Math.floor(Math.random() * motivationalQuotes.length)
    alert("Here is a motivational quote of the day: " +  motivationalQuotes[random])
}

const affirmation = () => {
    const affirmationQuotes = [
        "I believe in my dreams. Believe in yourself and all that you are. ...",
        "I am doing my best every day. ...",
        "I love myself for who I am. ...",
        "I am in charge of my own happiness. ...",
        "I accept 100% responsibility for my own life. ...",
        "The best is yet to come. ...",
        "I am grateful for every day.",
    ]
    let random = Math.floor(Math.random() * affirmationQuotes.length)
    alert("Here is a affirmation for you today: " +  affirmationQuotes[random])
}


const predictBall = () => {
    const answers = [
         "It is certain.",
         "It is decidedly so.",
         "Without a doubt.",
         "Yes definitely.",
         "You may rely on it.",
        
         "As I see it, yes.",
         "Most likely.",
         "Outlook good.",
         "Yes.",
         "Signs point to yes.",
        
         "Reply hazy, try again.",
         "Ask again later.",
         "Better not tell you now.",
         "Cannot predict now.",
         "Concentrate and ask again.",
        
         "Don't count on it.",
         "My reply is no.",
         "My sources say no.",
         "Outlook not so good.",
         "Very doubtful."
    ]

    let random = Math.floor(Math.random() * answers.length)
    alert(answers[random])
}


// read input from the keyboard
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 49) {
        alert('You picked motivational!');
        motivational();
    }
    else if(event.keyCode == 50) {
        alert('You picked affirmation!');
        affirmation();
    } else if (event.keyCode === 51) {
        alert("You picked up 8Ball prediction! Think about the yes/no question and press OK. The ball will give you an answer right away")
        predictBall();
    } else {
        alert("Pick 1, 2 or 3")
    }
});

 