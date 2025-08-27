const lifeQuotes = [
    {quote: "We don't see things as they are, we see them as we are.", author: "Anais Nin",},
    {quote: "Do not dwell in past, do not dream of the future, concentrate the mind on the present moment.", author:"Buddha",},
    {quote: "The wound is the place where the LIght enters you.", author: "Rumi",},
    {quote: "It's not the man who has too little, but the man who craves more, that is poor.", author: "Seneca",},
    {quote: "When we are no longer able to change a situation, we are challenged to change ourselves.", author: "Viktor E. Frankl",},
    {quote: "Do the thing you fear, and the death of fear is certain.", author: "Raalph Waldo Emerson",},
    {quote: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche",},
    {quote: "Acknowledging the good that you already have in your life is the foundation for all abundance.", author: "Eckhart Tolle",},
    {quote: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle"},
    {quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein",}
];

const financeQuotes = [
    {quote: "Wealth consists not in having great possessions, but in having few wants.", author: "Epictetus",},
    {quote: "Money is a terrible master but an excellent servant.", author: "P.T. Barnum",},
    {quote: "Price is what you pay. Value is what you get.", author: "Warren Buffet",},
    {quote: "The biggest risk of all is not taking one.", author: "Mellody Hobson",},
    {quote: "A budget is telling your money where to go instead of wondering where it went.", author: "John C. Maxwell",},
    {quote: "Too many people spend money they haven’t earned, to buy things they don’t want, to impress people they don’t like.", author: "Will Rogers",},
    {quote: "The stock market is a device for transferring money from the impatient to the patient.", author: "Warren Buffett",},
    {quote: "Financial freedom is freedom from fear.", author: "Robert Kiyosaki",},
    {quote: "Do not save what is left after spending, but spend what is left after saving.", author: "Warren Buffett",},
    {quote: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin",}
];

const chessQuotes = [
    {quote: "In life, as in chess, foresight wins.", author: "Charles Buxton",},
    {quote: "The winner of the game is the player who makes the next-to-last mistake.", author: "Savielly Tartakower",},
    {quote: "Chess teaches you to think before you move.", author: "Anonymous",},
    {quote: "In chess, as in life, a man is his own most dangerous opponent.", author: "Vasily Smyslov",},
    {quote: "Sometimes you have to lose a piece to win the game.", author: "Anonymous",},
    {quote: "Strategy requires thought, tactics require observation.", author: "Max Euwe",},
    {quote: "Every chess master was once a beginner.", author: "Irving Chernev",},
    {quote: "The hardest game to win is a won game.", author: "Emanuel Lasker",},
    {quote: "Chess is the struggle against the error.", author: "Johannes Zukertort",},
    {quote: "Chess is a sea in which a gnat may drink and an elephant may bathe.", author: "Indian proverb",},
];

const footballQuotes = [
    {quote: "The beauty of the game is that you can always start again, every week, every season.", author: "Arsène Wenger",},
    {quote: "Football is like life—it requires perseverance, self-denial, hard work, sacrifice, dedication, and respect for authority.", author: "Vince Lombardi",},
    {quote: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do.", author: "Pelé",},
    {quote: "You have to fight to reach your dream. You have to sacrifice and work hard for it.", author: "Lionel Messi",},
    {quote: "Please don’t call me arrogant, but I’m European champion and I think I’m a special one.", author: "José Mourinho",},
    {quote: "I always want to play, I don’t accept sitting on the bench if I’m fit. My mentality is to be on the pitch, contributing to the team.", author: "Cristiano Ronaldo",},
    {quote: "If you’re not in love with the picture of the team you’re coaching, change the picture. Don’t change your principles.", author: "José Mourinho",},
    {quote: "The pressure? I love it. I need it. I wouldn’t know how to live without it. I put my teams where they have to be, in the fire.", author: "José Mourinho",},
    {quote: "I don’t want to win one game 6-0. I prefer to win six games 1-0. That’s my philosophy.", author: "Pep Guardiola",},
    {quote: "Sometimes in football, you have to hold your hand up and say, 'Yeah, they’re better than us'.", author: "Sir Alex Ferguson",},
    {quote: "I always felt that our triumphs were an expression of the consistent application of discipline. We never lost our discipline in terms of how we played.", author: "Sir Alex Ferguson",},
    {quote: "We were always flexible in our approach. If we had to change our style to win a particular game, we would do it. You have to be adaptable.", author: "Sir Alex Ferguson",},
    {quote: "My job was to make everyone understand that the impossible was possible. That’s the difference between leadership and management.", author: "Sir Alex Ferguson",},
    {quote: "Manchester United is not just a club, it’s an emotion, it’s a way of life.", author: "Eric Cantona",},
    {quote: "Old Trafford is called the Theatre of Dreams for a reason. It’s where you feel the weight of the past and the hope of the future.", author: "Wayne Rooney",},
];

const bookQuotes = [
    {quote: "It is not the strength of the body that counts, but the strength of the spirit.", author: "J.R.R. Tolkien, The Lord of the Rings",},
    {quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.", author: "J.K. Rowling, Harry Potter and the Chamber of Secrets",},
    {quote: "Time is the longest distance between two places.", author: "Tennessee Williams, The Glass Menagerie",},
    {quote: "Man is the only creature who refuses to be what he is.", author: "Albert Camus, The Rebel",},
    {quote: "The world breaks everyone, and afterward, many are strong at the broken places.", author: "Ernest Hemingway, A Farewell to Arms",},
    {quote: "The things you own end up owning you.", author: "Chuck Palahniuk, Fight Club",},
    {quote: "I must not fear. Fear is the mind-killer.", author: "Frank Herbert, Dune",},
    {quote: "None are more hopelessly enslaved than those who falsely believe they are free.", author: "Johann Wolfgang von Goethe, Elective Affinities",},
    {quote: "Hell is other people.", author: "Jean-Paul Sartre, No Exit",},
    {quote: "The only true wisdom is in knowing you know nothing.", author: "Attributed to Socrates (Plato’s Apology)",},
    {quote: "Every word you speak is a boomerang. Your words return to you with amazing accuracy.", author: "Florence Scovel Shinn",},
    {quote: "Faith knows it has already received and acts accordingly.", author: "Florence Scovel Shinn",},
    {quote: "Whatever man feels deeply or imagines clearly, is impressed upon the subconscious mind, and carried out in minutest detail.", author: "Florence Scovel Shinn",},
    {quote: "Man can only receive what he sees himself receiving.", author: "Florence Scovel Shinn",},
    {quote: "The game of life is a game of boomerangs. Our thoughts, deeds and words return to us sooner or later, with astounding accuracy.", author: "Florence Scovel Shinn",},
];

const funnyQuotes = [
    {quote: "Too much praise makes the cat think it is a lion.", author: "Anonymous",},
    {quote: "Even the shadow of a palm tree believes it is a tree.", author: "Anonymous",},
    {quote: "When the monkey tries to imitate man, it forgets it has a tail.", author: "Anonymous",},
    {quote: "He who eats alone, dies alone… especially if he overeats.", author: "Anonymous",},
    {quote: "The fly that does not heed advice follows the corpse into the grave.", author: "Anonymous",},
    {quote: "Even if the lizard nods its head, it doesn’t mean it understands the speech.", author: "Anonymous",},
    {quote: "He who runs after luck may end up overtaking it.", author: "Anonymous",},
    {quote: "The mosquito that thinks it’s an eagle ends up smashed on the wall.", author: "Anonymous",},
    {quote: "Even the rooster needs the night before it can crow in the morning.", author: "Anonymous",},
    {quote: "If you see a goat on top of a tree, someone helped it climb.", author: "Anonymous",},
    {quote: "Life is not a porno… you don’t always get what you expect.", author: "Anonymous",},
    {quote: "Life is like a Wi-Fi signal — just when you need it most, it drops.", author: "Anonymous",},
    {quote: "Even a clock that doesn’t work is right twice a day.", author: "Anonymous",},
    {quote: "Rumors are carried by haters, spread by fools, and accepted by idiots.", author: "Anonymous",},
    {quote: "Marriage is like a workshop — the husband works and the wife shops.", author: "Anonymous",},
]

const allQuotes = [lifeQuotes, financeQuotes, chessQuotes, footballQuotes, bookQuotes, funnyQuotes];
const quoteDisplay = document.querySelector("#quote");
const author = document.querySelector("#author");
const randomQuote = document.querySelector("#new");
const categoryChoiceButton = document.querySelector("select");

function generateRandomQuote(choice) {
    switch (choice) {
        case "all":
            const categoryChoice = Math.floor(Math.random() * allQuotes.length)
            const category = allQuotes[categoryChoice];
            const quoteIndex = Math.floor(Math.random() * category.length);
            const quote = category[quoteIndex];
            quoteDisplay.textContent = `${quote["quote"]}`;
            author.textContent = `${quote["author"]}`;
            break;
        case "life":
            const lifeChoice = Math.floor(Math.random() * lifeQuotes.length);
            quoteDisplay.textContent = lifeQuotes[lifeChoice]["quote"];
            author.textContent = lifeQuotes[lifeChoice]["author"];
            break;
        case "finance":
            const financeChoice = Math.floor(Math.random() * financeQuotes.length);
            quoteDisplay.textContent = financeQuotes[financeChoice]["quote"];
            author.textContent = financeQuotes[financeChoice]["author"];
            break;
        case "chess":
            const chessChoice = Math.floor(Math.random() * chessQuotes.length);
            quoteDisplay.textContent = chessQuotes[chessChoice]["quote"];
            author.textContent = chessQuotes[chessChoice]["author"];
            break;
        case "football":
            const footballChoice = Math.floor(Math.random() * footballQuotes.length);
            quoteDisplay.textContent = footballQuotes[footballChoice]["quote"];
            author.textContent = footballQuotes[footballChoice]["author"];
            break;
        case "book":
            const bookChoice = Math.floor(Math.random() * bookQuotes.length);
            quoteDisplay.textContent = bookQuotes[bookChoice]["quote"];
            author.textContent = bookQuotes[bookChoice]["author"];
            break;
        case "funny":
            const funnyChoice = Math.floor(Math.random() * funnyQuotes.length);
            quoteDisplay.textContent = funnyQuotes[funnyChoice]["quote"];
            author.textContent = funnyQuotes[funnyChoice]["author"];
            break;
    };
};

randomQuote.addEventListener("click", () => {
    quoteDisplay.textContent = "";
    author.textContent = "";
    const userChoice = categoryChoiceButton.value;
    generateRandomQuote(userChoice);
});

const greeting = document.querySelector(".greeting");
function greetUser() {
    const userName = prompt("Enter your name: ");
    greeting.textContent = `Hello ${userName}, take some foods for thought here.`
};
greetUser();

const body = document.querySelector("body");
const buttons = document.querySelectorAll("button");
const mode = document.querySelector("#mode");
const main = document.querySelector(".main");
function changeMode() {
    if (mode.textContent === "Dark") {
        body.style.cssText = "background-color: #212529; color: white;";
        buttons.forEach((button) => {
            button.style.cssText = "background-color: #212529; color: white; border: 1px solid white;"
        });
        mode.textContent = "Default";
        categoryChoiceButton.style.cssText = "background-color: #212529; border: 1px solid white; color: white;";
        main.style.cssText = "border: 1px solid white;";
    } else if (mode.textContent === "Default") {
        body.style.cssText = "background-color: revert; color: revert;";
        buttons.forEach((button) => {
            button.style.cssText = "color: revert; border: revert; background-color: revert";
        });
        mode.textContent = "Dark";
        categoryChoiceButton.style.cssText = "background-color: revert; border: revert; color: revert;";
        main.style.cssText = "border: 1px solid black;";
    }
};
mode.addEventListener("click", changeMode);

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}

function changeColor() {
    const signature = document.querySelector(".signature");
    setInterval(() => {
        signature.style.color = generateRandomColor();
    }, 500);
}

changeColor();