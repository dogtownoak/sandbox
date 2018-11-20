var person

if (person < 8) = "Merry-go-round"
Else (person < 65 && height > 4.5) = "Roller Coaster" 
Else "Lazy River"

var personAge = null;
var ride = null;
var height = null;

if (personAge < 8) {
    ride = "Merry-go-ground";
    console.log(ride);
}
else if (personAge > 8 && personAge < 65 && height > 4.5) {
    ride = "Roller Coaster";
    console.log(ride);
}
Else {
    ride = "Lazy River";
    console.log(ride);
}



var dayNumber = 1;
switch (dayNumber) {
case 0:
  day = 'Sunday';
case 1:
  day = 'Monday';
case 2:
  day = 'Tuesday';
case 3:
  day = 'Wednesday';
case 4:
  day = 'Thursday';
case 5:
  day = 'Friday';
case 6:
  day = 'Saturday';
default:
  day = null;
  alert('wrong value for day');
}


// first example:
var catTalk = function() {
    console.log('MEOW');
}

catTalk();

// Example:

var area = function(){
    var width = 8;
    var height = 8;
    console.log(width * height);
}

area();

// Example:

var disney = function(villian, movie){
    console.log(`${villian} is the meanest character in ${movie}.`)
}

disney("scar", "lion king");

// Example:

