// made an array of "tweets", some of them I made, most of them I stole, all of them are terrible
var tweets = [
    "The Earth is Flat",
    "News 101: Karens start taking over Edmonton",
    "Florida Man arrested for fighting Aligator again!",
    "I have no Idea what I'm doing",
    "This is a Tweet",
    "'Instagram is better', teen says",
    "Life leads unto death, and death unto new life. Why, then, should death be taboo?",
    "'THE NEW GENSHIN 1.4 UPDATE SUCKS', idiot player says",
    "whoever made this tweet is probably an idiot",
    "Never gonna give you up, never gonna let you down",
];
// made a poor attempt to Rick-Roll again

// this loop just iterates the tweets to the console
for(var i = 0; i < 10; i ++) {
    console.log(tweets[i]);
}

console.log("filler space, don't mind me")

// Create an array of JS Objects instead of an Array of strings

// Here is an exteremly long list of JS Objects in the form of Tweets
var twitterUsers = [
    {
        username:"firstUser",
        tweet: "I am the first user to come up",
        created_at: "03-21-2006",
        age: 18,
    },
    {
        username: "toxicUser",
        tweet: "CANCEL CULTURE!",
        created_at: "03-20-2021",
        age: 9,
    },
    {
        username:"MalBan",
        tweet: "I have no idea what I'm doing",
        created_at: "03-22-2021",
        age: 18,
    },
    {
        username: "toxicUser2",
        tweet: "Insert something about flat Earth Here",
        created_at: "03-20-2021",
        age: 8,
    },
    {
        username: "genshinImpact",
        tweet: "Enjoy the new WindBlume Festival Event!",
        created_at: "03-16-2021",
        age: 18,
    },
    {
        username: "user69",
        tweet: "Never Gonna Give You Up! Never Gonna Let You Down!",
        created_at: "02-27-2017",
        age: 20,
    },
    {
        username: "xVx_K1r1t0_xVx_KillMe",
        tweet: "I really need to get a new username",
        created_at: "10-05-2018",
        age: 16,
    },
    {
        username: "Klein",
        tweet: "I literally just wanted to have a normal conversation on Social Media",
        created_at: "03-20-2021",
        age: 27,
    },
    {
        username: "user9",
        tweet: "I don't have a creative username",
        created_at: "03-19-2017",
        age: 27,
    },
    {
        username: "lastUser",
        tweet: "New user here! I hope today will be great!",
        created_at: "03-28-2021",
        age: 16,
    },
];
// Note: OH MY GOD THAT TOOK FOREVER

// This function checks the age wheither a user is 18, above 18, or below 18 years old
// If the user the 18, it will show up on a console log that is below the function
// If the user is Under 18, their tweet won't be shown on the console log
function checkAge(user) {
    if(user.age >= 18) {
        return true;
    } else if (user.age < 18) {
        return false
    } else {
        console.log("oh no")
        return undefined
    }
}

// this is the code to show all the users who are 18+ of age
var over18 = twitterUsers.filter(checkAge);
console.log(over18)
// Note: TOOK WAY TOO LONG