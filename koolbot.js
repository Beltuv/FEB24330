const commando = require("discord.js-commando");
const bot = new commando.Client();
const TOKEN = process.env.token
const Token = "NTQ3ODA5MzczNzA4MzUzNTU3.D1Gpmw.CKmT7-uQG5RgAwia1VadOdkcieM";

bot.registry.registerGroup('simple')
bot.registry.registerGroup('random');
bot.registry.registerGroup('greetings');
bot.registry.registerGroup('imagecommands');
bot.registry.registerCommandsIn(__dirname + "/commands")

bot.on('ready', () => {
    bot.user.setActivity("Club Penguin");
  });

bot.on ('message', (message) => {
  var m = message;

  //Greetings(Updated[0.5])
    UserGreetings = ['hello', 'Hello', 'HELLO', '!hello','!Hello','!HELLO','hi','Hi','HI','!hi','!Hi','!HI',
    'hey','Hey','HEY','!hey','!Hey','!HEY','im back','Im back',"I'm back",'hello!','Hello!','HELLO!','Hey!',
    'hey!','HEY!','hi!','Hi!','HI!']
    User_Leaving_Messages = ['bye','Bye','BYE','!bye','!Bye','!BYE','See ya','see ya','see ya!','See ya!',
    'See you','see you','see you!','See you!','gtg','Gtg','GTG','bye!','Bye!','BYE!','gtg!','Gtg!','GTG!']

    for (var i = 0; i < UserGreetings.length; i++) {
      if (m.content.startsWith(UserGreetings[i])) {
        message.channel.send("Hello, " + message.author + "!")
      }
    }  

    for (var i = 0; i < User_Leaving_Messages.length; i++) {
      if (m.content.startsWith(User_Leaving_Messages[i])) {
        message.channel.send("Goodbye, " + message.author + "!")
      }
    }
  //Greetings(Updated[0.5])-END
  //misc
    //mute gang ---()
    mGANG = ['mute gang','Mute gang','Mute Gang','MUTE GANG','!mute gang',
    'mute gang!','Mute gang!','MUTE GANG!']
    for (var i = 0; i < mGANG.length; i++){
      if (m.content == mGANG[i]) {
        message.channel.send("mute gang"); //constant
      }
    }
    //mute gang-END
  //misc-END
  //0.4 Event commands
    if (message.content.startsWith ('kfc')) {
      message.channel.send('You better order some popcorn chicken!', {files: ["./images/commandimages/KFC_0.png"]});
    }
    if (message.content.startsWith ('astroneer')) {
      message.channel.send('This a just a beautiful game', {files: ["./images/commandimages/astro.png"]});
    }
    if (message.content.startsWith ('lemon')) {
      message.channel.send('Lemonade?...Anyone?', {files: ["./images/commandimages/lemon.png"]});
    }
    if (message.content.startsWith ('mcdonalds')) {
      message.channel.send('Healthiest place to eat. Ever.', {files: ["./images/commandimages/mcdonalds.png"]});
    }
    if (message.content.startsWith ('minecraft')) {
      message.channel.send('Hope you do not get blocked from this server...', {files: ["./images/commandimages/Minecraft-Wallpaper-minecraft-37763094-2560-1600.png"]});
    }
    if (message.content.startsWith ('pizza')) {
      message.channel.send('There is no comment. This is just good.', {files: ["./images/commandimages/pizza.png"]});
    }
    if (message.content.startsWith ('rss')) {
      message.channel.send('No comment.', {files: ["./images/commandimages/rainbow-six-siege-4k-artwork-dz.png"]});
    }
    if (message.content.startsWith ('roblox')) {
      message.channel.send({files: ["./images/commandimages/roblox.png"]});
    }
    if (message.content.startsWith ('eggs')) {
      message.channel.send('Anyone order eggs?', {files: ["./images/commandimages/sunny-side-up-eggs-hero.png"]});
    }
  //0.4 Event commands - END
    
  else {return};

});

bot.login(TOKEN); //Change DELETE Token and use TOKEN
