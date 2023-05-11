const quotes = [ 
    {
        quote : "I can't go back to yesterday, because I was a different person then.",
        movie : "Cinderella",
    },
    {
        quote : "You mean more to me than anything in this world.",
        movie : "Peter Pan",
    },
    {
        quote : "Always let your conscience be your guide.",
        movie : "Pinocchio",
    },
    {
        quote : "Today's special moments are tomorrow's memories.",
        movie : "Aladdin",
    },
    {
        quote : "How do you spell love? You don't spell love, You feel it.",
        movie : "Winnie the Pooh",
    },
    {
        quote : "The best moment suddenly comes.",
        movie : "Finding Nemo",
    },
    {
        quote : "Remember you're the one who can fill the world with sunshine.",
        movie : "Snow White",
    },
    {
        quote : "I fell for a while now, but I'm going to get up.",
        movie : "Bambi",
    },
    {
        quote : "I decide my own feelings, It's going to be happiness today.",
        movie : "Alice in Wonderland",
    },
    {
        quote : "All one can do is the next right thing.",
        movie : "Frozen",
    },
    {
        quote : "No, I won't stop for every minute of the rest of my life, I'll fight.",
        movie : "Rapunzel",
    },
    {
        quote : "There comes a day when you are gonna look around and realize happiness is where you are.",
        movie : "Moana",
    },
    {
        quote : "The past can hurt, but the way I see it, you can either run from it or learn from it.",
        movie : "The Lion King",
    },
    {
        quote : "Anyone can be anything.",
        movie : "Zootopia",
    },
    {
        quote : "Don't forget how much your family loves you.",
        movie : "Coco",
    },
    {
        quote : "Life is full of possibilities.",
        movie : "Soul",
    },
    {
        quote : "You must not let anyone define your limits because of where you come from. Your only limit is you soul.",
        movie : "Ratatouille",
    },
    {
        quote : "It's not until you lose everything that you can truly appreciate everything.",
        movie : "Beauty and the beast",
    },
    {
        quote : "You control your destiny. You don't need magic to do it.",
        movie : "Brave",
    },
    {
        quote : "The very things that hold you down are going to lift you up.",
        movie : "Dumbo",
    },
    {
        quote : "Sometimes the right path is not the easiest one.",
        movie : "Pocahontas",
    },
    {
        quote : "The flower that blooms in adversity is the most rare and beautiful of all.",
        movie : "Mulan",
    },
    {
        quote : "A woman doesn't know how powerful her voice is until she has been silenced.",
        movie : "The little mermaid",
    },
    {
        quote : "I never look back, darling. It distracts from the now.",
        movie : "The incredibles",
    },
    {
        quote : "Adventure is out there.",
        movie : "Up",
    }
]

const quote = document.querySelector("#quote div:first-child");
const movie = document.querySelector("#quote div:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todayQuote.quote}"`;
movie.innerText = ` - ${todayQuote.movie}`;
