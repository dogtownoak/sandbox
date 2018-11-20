var motor = {
    color : 'red',
    maxSpeed : 98,
    make : 'Honda',
    model: 'CB350 Four',
    year: 1973,

}
// make a method

getModelAndMake: function(){
    console.log(`Model: ${this.model} Make: ${this.make}`);
}
}

motor.getModelAndMake()

console.log(console.color);

// Exercise

var currentlyReading = {
    title: 'The Wind-Up Bird Chronicle',
    author: "Haruki Murakami",
    year: 1994,
    rating: 4.2
}

sayOutLoud: function(){
    console.log(`The author of this book is ${this.author}`);
}