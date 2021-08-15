var words = []
var colors = []
var wordbase = []
var schemeShowed = false
var imagesShowed = false
var firstToGo = ""
var cssColors = {yellow: "yellow", green: "green", assassin: "#424242"}
var cssURLs = {yellow: "images\bystander.png", green: "images\green-agent-m.png", assassin: "images\assassin2x.png"}
var originwordbase = ["AFRICA", "AGENT", "AIR", "ALIEN", "ALPS", "AMAZON", "AMBULANCE", "AMERICA", "ANGEL", "ANTARCTICA", "APPLE", "ARM", "ATLANTIS", "AUSTRALIA", "AZTEC", "BACK", "BALL", "BAND", "BANK", "BAR", "BARK", "BAT", "BATTERY", "BEACH", "BEAR", "BEAT", "BED", "BEIJING", "BELL", "BELT", "BERLIN", "BERMUDA", "BERRY", "BILL", "BLOCK", "BOARD", "BOLT", "BOMB", "BOND", "BOOM", "BOOT", "BOTTLE", "BOW", "BOX", "BRIDGE", "BRUSH", "BUCK", "BUFFALO", "BUG", "BUGLE", "BUTTON", "CALF", "CANADA", "CAP", "CAPITAL", "CAR", "CARD", "CARROT", "CASINO", "CAST", "CAT", "CELL", "CENTAUR", "CENTER", "CHAIR", "CHANGE", "CHARGE", "CHECK", "CHEST", "CHICK", "CHINA", "CHOCOLATE", "CHURCH", "CIRCLE", "CLIFF", "CLOAK", "CLUB", "CODE", "COLD", "COMIC", "COMPOUND", "CONCERT", "CONDUCTOR", "CONTRACT", "COOK", "COPPER", "COTTON", "COURT", "COVER", "CRANE", "CRASH", "CRICKET", "CROSS", "CROWN", "CYCLE", "CZECH", "DANCE", "DATE", "DAY", "DEATH", "DECK", "DEGREE", "DIAMOND", "DICE", "DINOSAUR", "DISEASE", "DOCTOR", "DOG", "DRAFT", "DRAGON", "DRESS", "DRILL", "DROP", "DUCK", "DWARF", "EAGLE", "EGYPT", "EMBASSY", "ENGINE", "ENGLAND", "EUROPE", "EYE", "FACE", "FAIR", "FALL", "FAN", "FENCE", "FIELD", "FIGHTER", "FIGURE", "FILE", "FILM", "FIRE", "FISH", "FLUTE", "FLY", "FOOT", "FORCE", "FOREST", "FORK", "FRANCE", "GAME", "GAS", "GENIUS", "GERMANY", "GHOST", "GIANT", "GLASS", "GLOVE", "GOLD", "GRACE", "GRASS", "GREECE", "GREEN", "GROUND", "HAM", "HAND", "HAWK", "HEAD", "HEART", "HELICOPTER", "HIMALAYAS", "HOLE", "HOLLYWOOD", "HONEY", "HOOD", "HOOK", "HORN", "HORSE", "HORSESHOE", "HOSPITAL", "HOTEL", "ICE", "ICE CREAM", "INDIA", "IRON", "IVORY", "JACK", "JAM", "JET", "JUPITER", "KANGAROO", "KETCHUP", "KEY", "KID", "KING", "KIWI", "KNIFE", "KNIGHT", "LAB", "LAP", "LASER", "LAWYER", "LEAD", "LEMON", "LEPRECHAUN", "LIFE", "LIGHT", "LIMOUSINE", "LINE", "LINK", "LION", "LITTER", "LOCH NESS", "LOCK", "LOG", "LONDON", "LUCK", "MAIL", "MAMMOTH", "MAPLE", "MARBLE", "MARCH", "MASS", "MATCH", "MERCURY", "MEXICO", "MICROSCOPE", "MILLIONAIRE", "MINE", "MINT", "MISSILE", "MODEL", "MOLE", "MOON", "MOSCOW", "MOUNT", "MOUSE", "MOUTH", "MUG", "NAIL", "NEEDLE", "NET", "NEW YORK", "NIGHT", "NINJA", "NOTE", "NOVEL", "NURSE", "NUT", "OCTOPUS", "OIL", "OLIVE", "OLYMPUS", "OPERA", "ORANGE", "ORGAN", "PALM", "PAN", "PANTS", "PAPER", "PARACHUTE", "PARK", "PART", "PASS", "PASTE", "PENGUIN", "PHOENIX", "PIANO", "PIE", "PILOT", "PIN", "PIPE", "PIRATE", "PISTOL", "PIT", "PITCH", "PLANE", "PLASTIC", "PLATE", "PLATYPUS", "PLAY", "PLOT", "POINT", "POISON", "POLE", "POLICE", "POOL", "PORT", "POST", "POUND", "PRESS", "PRINCESS", "PUMPKIN", "PUPIL", "PYRAMID", "QUEEN", "RABBIT", "RACKET", "RAY", "REVOLUTION", "RING", "ROBIN", "ROBOT", "ROCK", "ROME", "ROOT", "ROSE", "ROULETTE", "ROUND", "ROW", "RULER", "SATELLITE", "SATURN", "SCALE", "SCHOOL", "SCIENTIST", "SCORPION", "SCREEN", "SCUBA DIVER", "SEAL", "SERVER", "SHADOW", "SHAKESPEARE", "SHARK", "SHIP", "SHOE", "SHOP", "SHOT", "SINK", "SKYSCRAPER", "SLIP", "SLUG", "SMUGGLER", "SNOW", "SNOWMAN", "SOCK", "SOLDIER", "SOUL", "SOUND", "SPACE", "SPELL", "SPIDER", "SPIKE", "SPINE", "SPOT", "SPRING", "SPY", "SQUARE", "STADIUM", "STAFF", "STAR", "STATE", "STICK", "STOCK", "STRAW", "STREAM", "STRIKE", "STRING", "SUB", "SUIT", "SUPERHERO", "SWING", "SWITCH", "TABLE", "TABLET", "TAG", "TAIL", "TAP", "TEACHER", "TELESCOPE", "TEMPLE", "THEATER", "THIEF", "THUMB", "TICK", "TIE", "TIME", "TOKYO", "TOOTH", "TORCH", "TOWER", "TRACK", "TRAIN", "TRIANGLE", "TRIP", "TRUNK", "TUBE", "TURKEY", "UNDERTAKER", "UNICORN", "VACUUM", "VAN", "VET", "WAKE", "WALL", "WAR", "WASHER", "WASHINGTON", "WATCH", "WATER", "WAVE", "WEB", "WELL", "WHALE", "WHIP", "WIND", "WITCH", "WORM", "YARD"]

function generateColors() {
  colors = ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow","yellow","yellow",
            "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green",
            "assassin","assassin","assassin"]
  colors.push(firstToGo)
}


function generateWords() {
  firstToGo = ["yellow", "green"][Math.floor(Math.random() * 2)]
  colors = words = []
  wordbase = originwordbase.slice()
  generateColors()
  var randomColor = randomWord = ""
  for (var i = 0; i < 25; i++) {
    randomColor = colors.splice(Math.floor(Math.random() * colors.length), 1)[0]
    randomWord = wordbase.splice(Math.floor(Math.random() * wordbase.length), 1)[0]
    words.push({cardcolor: randomColor, cardword: randomWord})
  }
  updateBoard()
}

function generateHTML() {
  var boardHTML = ""
  var x = 0
  for (var i = 0; i < 5; i++) {
    boardHTML += "<div class='row'>"
    for (var j = 0; j < 5; j++) {
      var tempHTML = "<div class='cell " + words[x].cardcolor + "'>" + words[x].cardword + "</div>"
      x += 1
      boardHTML += tempHTML
    }
    boardHTML += "</div>"
  }
  return boardHTML
}

function generateSchemeHTML() {
  var boardHTML = ""
  var x = 0
  for (var i = 0; i < 5; i++) {
    boardHTML += "<div class='row'>"
    for (var j = 0; j < 5; j++) {
      var tempHTML = "<div class='cell " + words[x].cardcolor + "' style='background: "+ cssColors[words[x].cardcolor] + "'>" + words[x].cardword + "</div>"
      x += 1
      boardHTML += tempHTML
    }
    boardHTML += "</div>"
  }
  $(".board").html(boardHTML)
}

function updateBoard(funcName) {
  $("hr").css("background", cssColors[firstToGo])
  $(".board").html(generateHTML())
  
  $(".cell").click(function(){
    var bgType = this.className.split(" ")[1]
    
    if (imagesShowed) {
      $(this).css("background-image", "url(" + cssURLs[bgType] + ")");
    }
    else {
      $(this).css("background-color", cssColors[bgType]);
    }
  })
}

$("#switchScheme").click(function() {
  if (schemeShowed) {
    schemeShowed = false
    $("#switchScheme").html("Show")
    updateBoard()
  }
  else {
    schemeShowed = true
    $("#switchScheme").html("Hide")
    generateSchemeHTML()    
  }
})

$("#switchImages").click(function() {
  if (imagesShowed) {
    imagesShowed = false
    $("#switchImages").html("Switch Images")
  }
  else {
    imagesShowed = true
    $("#switchImages").html("Switch Images OFF")
  }
})

generateWords()