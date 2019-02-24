const commando = require("discord.js-commando");

class helpCommand extends commando.Command {
    constructor (client) {
        super(client, {
            name: "scramble",
            group: "simple",
            memberName: "scramble",
            description: "Scrambles a word given by a user."
        })
    }

    //To change code limit, you need at change to code.



    async run(message, args) { //Example: !scramble popcorn
        args = message.content.split(/ +/);
        letters = args[1].split(args[1].length) //This splits the word into an array for a set amount of times by the user.
        var maxLetterLength = 12;
        picks = [];

        function makeWord() {
            var randomPlacement = Math.floor((Math.random() * letters) + 1) //plus 1 to make sure it is never 0 and reachs the max
            var randomLetter = letters[randomPlacement]

        };


        if (args) {
            var p1, p2, p3, p4, p5, p6, p7, p9, p10, p11, p12;
           
            if (args[1].length < (maxLetterLength + 1)) {
                if (picks[1] == undefined) {
                   makeWord()
                } else {
                    message.channel.send('Something went wrong...Unknown Reason.')
                }
            } else {
                message.channel.send("Something went wrong...Make sure to keep arguments within range.")
            }
        } else {
            message.channel.send("You forgot the word argument. I cannot scramble nothing...oh wait...I can, otnhngi.")
        }
    }
}

module.exports = helpCommand;
