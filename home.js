var messages = [
    "Lovely wannabes :/",
    "Yo i died dont take my stuff plz",
    "?kick universeoforanges He said my house sucks",
    "?ban universeoforanges major grief",
    "YO WHY DID YOU DESTROY THE BASE NOW WHERE WE GONNA LIVE",
    "this kid sucks",
    "BRO I DIED AGAIN THIS GAME SUCKS",
    "(Guy): this build is trash, try harder <br> (superduper990000): ?ban guy mean to owner",
    "XD LOL IM DUM",
    "Abstractverse abstractverse{}; <br>  abstractverse.getSteam() <br> error: getSteam is undefined. did you mean `getALife()?`"
]

var randomText = document.getElementById("random");
let randomVal = Math.floor(Math.random() * messages.length);

randomText.innerHTML = messages[randomVal];