var messages = [
    "Lovely wannabes :/",
    "Yo i died dont take my stuff plz",
    "?kick universeoforanges He said my house sucks",
    "?ban universeoforanges major grief",
    "YO WHY DID YOU DESTROY THE BASE NOW WHERE WE GONNA LIVE",
    "this kid sucks",
    "BRO I DIED AGAIN THIS GAME SUCKS",
    "Guy: this build is trash, try harder <br> superduper990000: ?ban guy mean to owner",
    "XD LOL IM DUM",
    "Abstractverse abstractverse{}; <br>  abstractverse.getSteam(); <br> error: getSteam is undefined. did you mean `getALife()`?",
    "I farted",
    "always remember that caseoh's head is built like a circle",
    "Sniped from 500 yards",
    "Now minecraft PE edition!",
    "K,",
    "An error occured loading this message.",
    "whitematic",
    "Big Mac Trouble!",
    "Switch droid",
    "patch release 32432.69028.93920: added farting to the game",
    "THIS IS AN INCREDIBLY HARD WORD"
]

var randomText = document.getElementById("random");
let randomVal = Math.floor(Math.random() * messages.length);

randomText.innerHTML = messages[randomVal];