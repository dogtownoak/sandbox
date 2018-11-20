var superman = {
    firstName: 'Clark',
    lastName: 'Kent',

    revealIdentity: function(){
        return this.firstName+this.lastName;
    }
}

var batman = {
    firstName: 'Bruce',
    lastName: 'Wayne',

    revealIdentity: function(){
        return this.firstName+this.lastName;
    }
}


var superHero = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

    this.revealIdentity = function(){
        return this.firstName+this.lastName;
    }
}

var superman = new superHero('clark','kent');

console.log(superman.firstName);

var batman = new superHero ('bruce', 'wayne');

console.log(batman.firstName);

var hulk = new Superhero('Bruce','Banner');
console.log(hulk.revealIdentity());


// Exercise

var currentlyListenin = {
    album: "Wild Honey",
    artist: "The Beach Boys",
    releaseDate: 1967,
    label: "Capital Records"
}

var newSong = function(album, artist, releaseDate, label){
    this.album = album;
    this.artist = artist;
    this.releaseDate = releaseDate;
    this.label = label;
}

newSong.prototype.cost = "20";

var newSong2 = new newSong('songs by bill','bill', 2018, 'bills label');
console.log(newSong2);

var newSong3 = new newSong(1,'sally', 'this year', 'sally label');

var newSong4 = new newSong(false, NaN, 202222, 'false label');
var newSong4 = new newSong('sdfsfds','bill', 2018, 'bills label');



var flower = {
    color: "green",
    size: "6in",
    smell: "bart",
    stemColor: "green",
    petal: 8
}


var flower = function(color, size, smell, stemColor, petal){
    this.color = color;
    this.size = size;
    this.smell = smell;
    this.stemColor = stemColor;
    this.petal = petal;
};

flower.prototype = {
    origin: function(){
    console.log(`I'm from San Francisco`);
},
    wilt: function(){
    this.petal--;
    },
    water: function(){
    this.petal++;
    }
};

var rose = new flower('black', '6ft', 'pizza', 'red', 6);

var lilly = new flower('blue', '3ft', 'apples', 'green', 12);
//////////////////////////CONVERT TYPES OF FLOWERS TO CLASS////////////////////////////

class Flower{
    constructor(color, size, smell, stemColor, petal){
        this.color = color;
        this.size = size;
        this.smell = smell;
        this.stemColor = stemColor;
        this.petal = petal;
    }

    origin() {
        return console.log(`I'm from San Francisco`);
    }

    wilt() {
        return --this.petal;
    }

    water() {
        return ++this.petal;
    }
}

var rose = new Flower('black', '6ft', 'pizza', 'red', 6)
    

class Plants extends Flower {
    constructor(color, smell, petal, store){
        super(color, smell, petal);
        this.store = store;
    }

    wilt(){
        return console.log('Water Me!');
    }
}




// Convert into a class
class Superhero{
    constructor(firstName, lastName, superheroName='Unknown'){
        this.firstName =  firstName;
        this.lastName = lastName;
        this.superheroName = superheroName;
    }

    revealIdentity() {
        return this.firstName+this.lastName;
    }
}

var superman = new Superhero('Clark', 'Kent');


// Above is the same as below but written a different way as a class
var Superhero = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

    this.revealIdentity = function(){
        return this.firstName+this.lastName;
    }
}


class Superhero{
    constructor(firstName, lastName, superheroName='Unknown'){
        this.firstName =  firstName;
        this.lastName = lastName;
        this.superheroName = superheroName;
    }

    revealIdentity() {
        return this.firstName+this.lastName;
    }

//////////////////ChILD CLASS STARTS//////////////////////////////
class Superman extends Superhero{
    constructor(firstName, lastName, power){
        super(firstName, lastName, 'Superman');
        this.power = power;
    }
}
    hasCatchPhrase(){
        return `I will save the earth by flying`;
    }
///////////////CHILD CLASS ENDS//////////////////////////////////
// Super initializes the constructor of the parent class.  Super is for the parent class.

var supermanObj = new Superman('Clark', 'Kent', 'can fly');

supermanObj.revealIdentity();

console.log(`Superman's power is ${supermanObj.power}`);
console.log('His superhero name is ${supermanObj.superheroName}')

