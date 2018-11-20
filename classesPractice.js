function Animal (type, isAlive) {
    this.type = type;
    this.isAlive = isAlive;
};

var blueFrog = new Animal ('blue', 'true');

class Amphibians extends Animal {
    constructor(type, isAlive, laysEggs){
        super(type, isAlive);
        this.laysEggs = laysEggs;
}
}

var frogAmph = new Amphibians ("black frog", "false", "true");

class Reptiles extends Animal {
    constructor(type, isAlive="true", hasScales){
        super(type, isAlive);
        this.hasScales = hasScales;
    }
}

var snake = new Reptiles ('snake', hasScales="true" )

// ////////////////////////////////////

Answers

class Animals {
    constructor(type, isAlive) {
      this.type = type;
      this.isAlive = isAlive;
    }
  }
  
  class Amphibians extends Animals {
    constructor(type, isAlive, laysEggs) {
      super(type, isAlive);
      this.laysEggs = laysEggs;
    }
  }
  
  class Reptiles extends Animals {
    constructor(type, isAlive, hasScales) {
      super(type, isAlive);
      this.hasScales = hasScales;
    }
  }
  
  class Frog extends Amphibians {
    constructor(type, isAlive, laysEggs) {
      super(type, isAlive, laysEggs);
    }
  }
  
  class Turtle extends Amphibians {
    constructor(type, isAlive, laysEggs) {
      super(type, isAlive, laysEggs);
    }
  }
  
  class Snake extends Reptiles {
    constructor(type, isAlive, hasScales) {
      super(type, isAlive, hasScales);
    }
  }
  
  
  var frog = new Frog(`Bull Frog`, true, true);
  
  console.log(`If frog is alive ${frog.isAlive}`);
  
  var snake = new Snake(`Python`, true, true);
  
  console.log(`If snake has scales ${snake.hasScales}`)