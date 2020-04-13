/* words for cards */
const englishWords = ["AFRICA", "AGENT", "AIR", "ALIEN", "ALPS", "AMAZON", "AMBULANCE", "AMERICA", "ANGEL", "ANTARCTICA", "APPLE", "ARM", "ATLANTIS", "AUSTRALIA", "AZTEC", "BACK", "BALL", "BAND", "BANK", "BAR", "BARK", "BAT", "BATTERY", "BEACH", "BEAR", "BEAT", "BED", "BEIJING", "BELL", "BELT", "BERLIN", "BERMUDA", "BERRY", "BILL", "BLOCK", "BOARD", "BOLT", "BOMB", "BOND", "BOOM", "BOOT", "BOTTLE", "BOW", "BOX", "BRIDGE", "BRUSH", "BUCK", "BUFFALO", "BUG", "BUGLE", "BUTTON", "CALF", "CANADA", "CAP", "CAPITAL", "CAR", "CARD", "CARROT", "CASINO", "CAST", "CAT", "CELL", "CENTAUR", "CENTER", "CHAIR", "CHANGE", "CHARGE", "CHECK", "CHEST", "CHICK", "CHINA", "CHOCOLATE", "CHURCH", "CIRCLE", "CLIFF", "CLOAK", "CLUB", "CODE", "COLD", "COMIC", "COMPOUND", "CONCERT", "CONDUCTOR", "CONTRACT", "COOK", "COPPER", "COTTON", "COURT", "COVER", "CRANE", "CRASH", "CRICKET", "CROSS", "CROWN", "CYCLE", "CZECH", "DANCE", "DATE", "DAY", "DEATH", "DECK", "DEGREE", "DIAMOND", "DICE", "DINOSAUR", "DISEASE", "DOCTOR", "DOG", "DRAFT", "DRAGON", "DRESS", "DRILL", "DROP", "DUCK", "DWARF", "EAGLE", "EGYPT", "EMBASSY", "ENGINE", "ENGLAND", "EUROPE", "EYE", "FACE", "FAIR", "FALL", "FAN", "FENCE", "FIELD", "FIGHTER", "FIGURE", "FILE", "FILM", "FIRE", "FISH", "FLUTE", "FLY", "FOOT", "FORCE", "FOREST", "FORK", "FRANCE", "GAME", "GAS", "GENIUS", "GERMANY", "GHOST", "GIANT", "GLASS", "GLOVE", "GOLD", "GRACE", "GRASS", "GREECE", "GREEN", "GROUND", "HAM", "HAND", "HAWK", "HEAD", "HEART", "HELICOPTER", "HIMALAYAS", "HOLE", "HOLLYWOOD", "HONEY", "HOOD", "HOOK", "HORN", "HORSE", "HORSESHOE", "HOSPITAL", "HOTEL", "ICE", "ICE CREAM", "INDIA", "IRON", "IVORY", "JACK", "JAM", "JET", "JUPITER", "KANGAROO", "KETCHUP", "KEY", "KID", "KING", "KIWI", "KNIFE", "KNIGHT", "LAB", "LAP", "LASER", "LAWYER", "LEAD", "LEMON", "LEPRECHAUN", "LIFE", "LIGHT", "LIMOUSINE", "LINE", "LINK", "LION", "LITTER", "LOCH NESS", "LOCK", "LOG", "LONDON", "LUCK", "MAIL", "MAMMOTH", "MAPLE", "MARBLE", "MARCH", "MASS", "MATCH", "MERCURY", "MEXICO", "MICROSCOPE", "MILLIONAIRE", "MINE", "MINT", "MISSILE", "MODEL", "MOLE", "MOON", "MOSCOW", "MOUNT", "MOUSE", "MOUTH", "MUG", "NAIL", "NEEDLE", "NET", "NEW YORK", "NIGHT", "NINJA", "NOTE", "NOVEL", "NURSE", "NUT", "OCTOPUS", "OIL", "OLIVE", "OLYMPUS", "OPERA", "ORANGE", "ORGAN", "PALM", "PAN", "PANTS", "PAPER", "PARACHUTE", "PARK", "PART", "PASS", "PASTE", "PENGUIN", "PHOENIX", "PIANO", "PIE", "PILOT", "PIN", "PIPE", "PIRATE", "PISTOL", "PIT", "PITCH", "PLANE", "PLASTIC", "PLATE", "PLATYPUS", "PLAY", "PLOT", "POINT", "POISON", "POLE", "POLICE", "POOL", "PORT", "POST", "POUND", "PRESS", "PRINCESS", "PUMPKIN", "PUPIL", "PYRAMID", "QUEEN", "RABBIT", "RACKET", "RAY", "REVOLUTION", "RING", "ROBIN", "ROBOT", "ROCK", "ROME", "ROOT", "ROSE", "ROULETTE", "ROUND", "ROW", "RULER", "SATELLITE", "SATURN", "SCALE", "SCHOOL", "SCIENTIST", "SCORPION", "SCREEN", "SCUBA DIVER", "SEAL", "SERVER", "SHADOW", "SHAKESPEARE", "SHARK", "SHIP", "SHOE", "SHOP", "SHOT", "SINK", "SKYSCRAPER", "SLIP", "SLUG", "SMUGGLER", "SNOW", "SNOWMAN", "SOCK", "SOLDIER", "SOUL", "SOUND", "SPACE", "SPELL", "SPIDER", "SPIKE", "SPINE", "SPOT", "SPRING", "SPY", "SQUARE", "STADIUM", "STAFF", "STAR", "STATE", "STICK", "STOCK", "STRAW", "STREAM", "STRIKE", "STRING", "SUB", "SUIT", "SUPERHERO", "SWING", "SWITCH", "TABLE", "TABLET", "TAG", "TAIL", "TAP", "TEACHER", "TELESCOPE", "TEMPLE", "THEATER", "THIEF", "THUMB", "TICK", "TIE", "TIME", "TOKYO", "TOOTH", "TORCH", "TOWER", "TRACK", "TRAIN", "TRIANGLE", "TRIP", "TRUNK", "TUBE", "TURKEY", "UNDERTAKER", "UNICORN", "VACUUM", "VAN", "VET", "WAKE", "WALL", "WAR", "WASHER", "WASHINGTON", "WATCH", "WATER", "WAVE", "WEB", "WELL", "WHALE", "WHIP", "WIND", "WITCH", "WORM", "YARD"];
const hebrewWords = ["אביב","אביר","אבן","אגודל","אגוז","אוהד","אוויר","אולימפוס","אוסטרליה","אור","אחות","אטלנטיס","איברים","איל","אינטרנט","אירופה","אמבולנס","אמזון","אמריקה","אנגליה","אנטארקטיקה","אפריקה","אצטדיון","אקדח","אריה","ארנב","אש","באפלו","באר","בדיקה","בור","בחורה","בייג׳ינג","בישול","בית המשפט","בית הספר","בית חולים","בנק","בן גוריון","בקבוק","בר","ברדס","ברווז","ברז","ברזל","בריכה","ברכיים","ברלין","ברמודה","ברק","גאון","גדר","גורד שחקים","גוש","גז","גזר","גיבור על","גל","גלידה","גלימה","גמד","גנב","גרב","גרמניה","גשר","דבש","דגים","דואר","דוב","דינוזאור","דלעת","דקל","דרקון","דשא","האופרה","האלפים","האצטקית","הבנה","הדבק","ההימלאיה","הוגן","הודו","הוליווד","הון","החיים","החצוצרה","הכנסייה","המלטה","הערה","הפלטיפוס","הר","התאמה","התרסקות","ואן","ואקום","וו","וושינגטון","וטרינר","ורד","זהב","זית","זכוכית","זמן","זנב","זרוע","זרם","חגורה","חד קרן","חדק","חוזה","חוט","חוף","חור","חותם","חזה","חזיר","חזרה","חייזר","חייל","חיסור","חליל","חליפה","חלל","חלק","חן","חנות","חצר","חרוז","חרק","חשבון","חתול","טבעת","טון","טוקיו","טורקיה","טיוטה","טיול","טייס","טיל","טלסקופ","טעינה","יד","יהלום","יוון","יום","יומן","יופיטר","ילד","יער","ירוק","ירח","כדור","כובע","כוח","כוכב","כותנה","כיור","כיכר","כיסא","כיסוי","כלב","כספית","כפפה","כפתור","כרטיס","כריש","כתום","כתר","לב","להוביל","להחליק","להקה","לווין","לוויתן","לוח","לוחם","לוך נס","לונדון","לחץ","לייזר","לילה","לימוזינה","לימון","לנצח","לעבור","לעוף","לפיד","מאזניים","מבריח","מברשת","מגדל","מגף","מדינה","מדענית","מהפכה","מודל","מוות","מוסקבה","מועדון","מוקש","מורה","מזל","מזלג","מחבת","מחזור","מחט","מחלה","מטוס","מיטה","מייפל","מיליונר","מים","מיקרוסקופ","מכה","מכונית","מכונת כביסה","מכנסיים","מכשפה","מלאי","מלאך","מלון","מלחמה","מלך","מלכה","ממותה","מנוע","מנוף","מנטה","מנצח","מסה","מסוק","מסך","מסלול","מעבדה","מעגל","מפתח","מצנח","מצרים","מקדש","מקל","מקסיקו","מרגלים","מרכז","מרץ","משולש","משחק","משטרה","מתג","מתחם","נדנדה","נורה","נחושת","ניו יורק","נייר","נינג׳ה","נמל","נסיך","נסיכה","נעילה","נעל","נפילה","נץ","נקודה","נשמה","נשמע","נשר","סוכן","סוללה","סוס","סיבוב","סילון","סין","סיפון","סכין","ספינה","ספל","סרט","סתיו","עגל","עוך דין","עוף חול","עטלף","עין","עכביש","עכבר","עלילה","עמוד","עמוד השדרה","ענב","ענק","עקרב","פאי","פארק","פה","פינגווין","פיצוץ","פיראט","פירמידה","פלסטיק","פנים","פסנתר","פעמון","פצצה","פרסה","פתק","צ׳כית","צוות","צוללן","צוק","צינור","ציפור","ציפורניים","צל","צלב","צלחת","צרפת","צרצר","קו","קובייה","קובץ","קוד","קומיקס","קונצרט","קופסא","קוץ","קור","קורבן","קזינו","קטשופ","קיווי","קילו","קיר","קישור","קליפה","קנגורו","קנדה","קנטאור","קסם","קרח","קרן","קרקע","קש","קשר","קשת","ראש","רגל","רובוט","רוח","רולטה","רומא","רומן","רופא","ריבה","ריקוד","רכבת","רעל","רעש","רשת","שבלול","שבתאי","שגרירות","שדה","שדון","שוט","שולחן","שומה","שוקולד","שורה","שורש","שייקספיר","שינוי","שלג","שליט","שמלה","שמן","שן","שנהב","שעון","שרת","תא","תאריך","תג","תואר","תולעת","תיאטרון","תלמיד","תמנון","תפוח","תרגיל"];
const words = englishWords;

/* team names */
const TEAM1 = "Blue";
const TEAM2 = "Red";

/* card colors */
const CARD_DEFAULT_COLOR = "mintcream";
const NEUTRAL_COLOR = CARD_DEFAULT_COLOR;
const SPY_COLOR = "black";
const teamColorMap = new Map();
teamColorMap.set(TEAM1, TEAM1.toLowerCase());
teamColorMap.set(TEAM2, TEAM2.toLowerCase());
teamColorMap.set(NEUTRAL_COLOR, NEUTRAL_COLOR);
teamColorMap.set(SPY_COLOR, SPY_COLOR);

/* total cards per type */
const N_CARDS = 25;
const N_TEAM_CARDS = 8;
const N_NEUTRAL_CARDS = 7;
const N_SPY_CARDS = 1;

/* html id's */
const TEAM1_ID = "team1";
const TEAM2_ID = "team2";
const TEAM1_CARDS_LEFT_ID = "team1-cards-left";
const TEAM2_CARDS_LEFT_ID = "team2-cards-left";
const GAMEBOARD_ID = "gameboard";
const SPYMASTER_ID = "spymaster";
const END_TURN_ID = "end-turn";
const CURRENT_TEAM_ID = "current-team";
const NEW_GAME_ID = "new-game";

/* html elements */
const GAMEBOARD_ELEM = document.getElementById(GAMEBOARD_ID);

class Card {
    constructor(cardDisplay, color) {
        this._cardDisplay = cardDisplay;
        this._color = color;
        this._chosen = false;
    }

    cover(element, card) {
        element.style.backgroundColor = card.color;
        element.firstChild.remove();
        element.appendChild(card.cardDisplay);
    }

    get cardDisplay() { return this._cardDisplay; }

    set cardDisplay(cardDisplay) { this._cardDisplay = cardDisplay; }

    get color() { return this._color; }

    set color(color) { this._color = color; }

    get chosen() { return this._chosen; }

    set chosen(boolean) { this._chosen = boolean; }
}

class CoverCard extends Card {
    constructor(img, color) {
        super(img, color);
    }

    // cover(element) {
    //     element.style.backgroundColor = this._color;
    //     element.firstChild.style.display = "none";
    //     element.appendChild(this._cardDisplay);
    // }
}

const coverCardMap = new Map();
const createCoverCardMap = () => {
    const colors = [teamColorMap.get(TEAM1), teamColorMap.get(TEAM2), NEUTRAL_COLOR, SPY_COLOR];

    for (let i = 0; i < colors.length; ++i) {
        const color = colors[i];
        const img = createNewElem("img", ["src", "class"], [getImagePath(color), "card-avatar"]);
        coverCardMap.set(color, new CoverCard(img, color));
    }
};

createCoverCardMap();

const addNTimes = (arr, color, n) => {
    for (let i = 0; i < n; ++i) {
        arr.push(new SpyMasterSquare(color));
    }
};

const addColors = (arr, extra) => {
    let nTeam1 = N_TEAM_CARDS;
    let nTeam2 = N_TEAM_CARDS;

    if (extra === TEAM1) ++nTeam1;
    else ++nTeam2;

    addNTimes(arr, teamColorMap.get(TEAM1), nTeam1);
    addNTimes(arr, teamColorMap.get(TEAM2), nTeam2);
    addNTimes(arr, NEUTRAL_COLOR, N_NEUTRAL_CARDS);
    addNTimes(arr, SPY_COLOR, N_SPY_CARDS);
};

const shuffleArray = (arr) => {
    const len = arr.length;

    for (let i = len - 1; i >= 0; --i) {
        const tmp = arr[i];
        const rand = Math.floor(Math.random() * (i + 1));

        arr[i] = arr[rand];
        arr[rand] = tmp;
    }
};

class SpyMaster {
    constructor() {
        this.newSpyMaster()
    }

    static createColorMap(extra) {
        const spyMasterCard = [];

        addColors(spyMasterCard, extra);
        shuffleArray(spyMasterCard);

        return spyMasterCard;
    };

    newSpyMaster() {
        this._extra = Math.random() >= 0.5.toPrecision(2) ? TEAM1 : TEAM2;
        this._spyMasterCard = SpyMaster.createColorMap(this._extra);
    }

    revealSpyMaster() {
        const gameboardElems = GAMEBOARD_ELEM.children;

        for (let i = 0; i < gameboardElems.length; ++i) {
            gameboardElems[i].style.backgroundColor = this._spyMasterCard[i].color;
            if (this._spyMasterCard[i].color === SPY_COLOR) {
                gameboardElems[i].style.color = "white";
            }
        }
    }

    get extra() { return this._extra; }

    get spyMasterCard() { return this._spyMasterCard; }
}

// const setStyle = (elem, type, val) => {
//     elem.style[type] = val;
// };

class SpyMasterSquare {
    constructor(color) {
        this._color = color;
    }

    get color() { return this._color; }

    set color(color) { this._color = color; }
}

function setAttributes(elem, attr, attrVals) {
    console.assert(attr.length === attrVals.length);

    for (let i = 0; i < attr.length; ++i) {
        elem.setAttribute(attr[i], attrVals[i]);
    }
}

function createNewElem(elem, attr, attrVals) {
    const img = document.createElement(elem);

    setAttributes(img, attr, attrVals);

    return img;
}

function getImagePath(color) {
    switch (color) {
        case teamColorMap.get(TEAM1):
            return "img/woman-avatar.png";
        case teamColorMap.get(TEAM2):
            return "img/guy-avatar.png";
        case NEUTRAL_COLOR:
            return "img/neutral-avatar.png";
        case SPY_COLOR:
            return "img/spy-avatar.png";
    }
}

const revealColor = (element) => {
    codeNames.revealColor(element);
};

const logMove = (team, color) => {
    console.log(team + " chose a " + color + " square");
};

class CodeNames {
    constructor() {
        this.currentTeam = "";
        this.currentCards = [];
        this.spyMaster = {};
        this.team1CardsLeft = N_TEAM_CARDS;
        this.team2CardsLeft = N_TEAM_CARDS;
    }

    static dealCards(currentCards) {
        shuffleArray(words);

        for (let i = 0; i < N_CARDS; ++i) {
            currentCards.push(new Card(words[i], CARD_DEFAULT_COLOR));
        }
    }

    updatePage() {
        IdInnerHTML(TEAM1_ID, TEAM1);
        IdInnerHTML(TEAM2_ID, TEAM2);
        IdInnerHTML(TEAM1_CARDS_LEFT_ID, this.team1CardsLeft);
        IdInnerHTML(TEAM2_CARDS_LEFT_ID, this.team2CardsLeft);
        IdInnerHTML(CURRENT_TEAM_ID, this.currentTeam);
    }

    setBoard() {
        this.currentCards = [];
        this.spyMaster = new SpyMaster();
        this.team1CardsLeft = N_TEAM_CARDS;
        this.team2CardsLeft = N_TEAM_CARDS;
        this.currentTeam = this.spyMaster.extra; /* starting team is team with extra card */

        if (this.currentTeam === TEAM1) ++this.team1CardsLeft;
        else ++this.team2CardsLeft;

        CodeNames.dealCards(this.currentCards);

        this.updatePage();
    }

    newGame() {
        this.gameOver = false;
        this.setBoard();
        this.print();
    }

    endGame(winner) {
        this.gameOver = true;
        console.log(winner + " is the winner!");
    }

    getCardIndex(element) {
        for (let i = 0; i < N_CARDS; ++i) {
            if (element.firstChild.innerText === this.currentCards[i].cardDisplay) {
                return i;
            }
        }
    }

    updateCurrentTeam(currentTeam) {
        /*
            0 XOR 1 = 1
            1 XOR 1 = 0
         */
        return currentTeam === TEAM1 ? TEAM2 : TEAM1;
    }

    revealColor(element) {
        const index = this.getCardIndex(element);

        console.assert(index !== undefined);

        const card = this.currentCards[index];

        /* card was already chosen, no need to continue */
        if (this.gameOver || card.chosen === true) return;

        const colorAtSquare = this.spyMaster.spyMasterCard[index].color;
        card.color = colorAtSquare;
        card.chosen = true;

        logMove(this.currentTeam, colorAtSquare);

        /* if team doesn't reveal a card of its color, switch teams */
        if (teamColorMap.get(this.currentTeam) !== colorAtSquare) {
            this.currentTeam = this.updateCurrentTeam(this.currentTeam);
        }

        /* update cards remaining by color */
        if (colorAtSquare === teamColorMap.get(TEAM1)) --this.team1CardsLeft;
        else if (colorAtSquare === teamColorMap.get(TEAM2)) --this.team2CardsLeft;

        /* if all cards of a team are revealed, or the spy card was revealed, end game */
        if (this.team1CardsLeft === 0) this.endGame(TEAM1);
        if (this.team2CardsLeft === 0) this.endGame(TEAM2);
        if (colorAtSquare === SPY_COLOR) this.endGame(this.currentTeam);

        this.updatePage();

        // const attributes = ["src", "class"];
        // const vals = [getImagePath(colorAtSquare), "card-avatar"];
        // const img = createNewElem("img", ["src", "class"], [getImagePath(colorAtSquare), "card-avatar"]);
        // new CoverCard(colorAtSquare).cover(element);
        card.cover(element, coverCardMap.get(colorAtSquare));
    }

    revertGameboard() {
        const cards = GAMEBOARD_ELEM.children;

        for (let i = 0; i < cards.length; ++i) {
            cards[i].style.backgroundColor = this.currentCards[i].color;
            /* since SpyCard's color is white after revealing SpyMaster */
            cards[i].style.color = "black";
        }
    }

    print() {
        for (let i = 0; i < N_CARDS; ++i) {
            const attributes = ["class", "onclick"];
            const vals = ["card", "revealColor(this)"];
            const div = createNewElem("div", attributes, vals);
            div.style.backgroundColor = CARD_DEFAULT_COLOR;

            /* add cardDisplay to card */
            const content = document.createTextNode(this.currentCards[i].cardDisplay);

            const span = document.createElement("span");

            div.appendChild(span);
            span.appendChild(content);
            GAMEBOARD_ELEM.appendChild(div);
        }
    }
}

const IdInnerHTML = (id, message) => {
    document.getElementById(id).innerHTML = message;
};

const codeNames = new CodeNames();
codeNames.newGame();

const setEventListener = (id, type, listener) => {
    document.getElementById(id).addEventListener(type, listener);
};

setEventListener(SPYMASTER_ID, "mousedown", () => codeNames.spyMaster.revealSpyMaster());
setEventListener(SPYMASTER_ID, "mouseup", () => codeNames.revertGameboard());
setEventListener(END_TURN_ID, "click", () => {
    codeNames.currentTeam = codeNames.updateCurrentTeam(codeNames.currentTeam);
    IdInnerHTML(CURRENT_TEAM_ID, codeNames.currentTeam);
});
setEventListener(NEW_GAME_ID, "click", () => {
    IdInnerHTML(GAMEBOARD_ID, "");
    codeNames.newGame();
});