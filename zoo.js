//var favoriteFood = "bacon";

// function sleep(name){
//     console.log (name + " sleeps for 8 hours");
// }
var animalPopulation = 0;

function run() {
    // sleep("Tigger");
    // eat("Tigger", "meat");
    // eat("Tigger", "bacon");

    var Tigger = new Tiger("Tigger");
    Tigger.eat("meat");
    // tigger.eat("kibble");

    var Pooh = new Bear("Pooh");
    Pooh.eat("fish");
    Pooh.eat("meat");

    var Rarity = new Unicorn("Rarity");
    Rarity.eat("marshmallows");

    var Gemma = new Giraffe("Gemma");
    Gemma.eat("meat");
    Gemma.eat("leaves");

    var Stinger = new Bee("Stinger");
    Stinger.eat("ice cream");
    Stinger.eat("pollen");

    var Zoebot = new Zookeeper("Zoebot");
    var Animals = [Tigger, Pooh, Rarity, Gemma, Stinger];
    Zoebot.feedAnimals(Animals, "Pasta");
    console.log("There are " + animalPopulation + " Animals in the zoo");

    Animal.getPopulation();
    // Tigger.getPopulation();

    // var p1 = new Polygon(20, 40);
    // var p2 = new Polygon(100, 200);
    // p1.sayName();
    // p2.sayHistory();

}

// function eat(name, food){
//     console. log (name + " eats " + food);
//     favoriteFood == food ? console.log("YUM!!! " + name + " wants more " + food) : console.log();
// }

class Animal {

    constructor(name, favoriteFood){
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }

    static getPopulation() {
        return animalPopulation;
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");

    }

    eat(food) {
        console. log (this.name + " eats " + food);
        food == this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();
    }


}

class Tiger extends Animal{

    constructor(name) {
        super(name, "meat");
        this.name = name;
        this.favoriteFood = "meat";

    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");

    }

    eat(food) {
        console. log (this.name + " eats " + food);
        food == this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();
    }

}


class Bear extends Animal{

    constructor(name){
        super(name, "fish");
        this.name = name;
        this.favoriteFood = "fish";

    }

    eat(food){
        console. log (this.name + " eats " + food);
        if(food == this.favoriteFood) {
            console.log("YUM!!! " + this.name + " wants more " + food)
        } else {
            this.sleep();
        }


    }

    sleep(){
        console.log(this.name + " hibernates for 4 months");
    }
}

class Unicorn extends Animal{

    constructor(name){
        super(name, "marshmallows");
        this.name = name;
        this.favoriteFood = "marshmallows";

    }

    eat(food) {
        console.log(this.name + " eats " + food);
        if (food == this.favoriteFood) {
            console.log("YUM!!! " + this.name + " wants more " + food)
            this.sleep();
        } else {
            this.sleep();
        }
    }

    sleep(){
        console.log(this.name + " sleeps in a cloud");
    }
}

class Giraffe extends Animal{

    constructor(name){
        super(name,'leaves');
        // this.name = name;
        // this.favoriteFood = "leaves";

    }

    eat(food){
        if (food == this.favoriteFood){
            console. log (this.name + " eats " + food);
            console.log("YUM!!! " + this.name + " wants more " + food);
            this.sleep() ;
        }else{
            console.log ("YUCK!!! " + this.name + " will not eat " + food);
        }
    }

        sleep(){
        console.log(this.name + " sleeps for 8 hours");
    }
}

class Bee extends Animal{

    constructor(name){
        super(name,'pollen');
        // this.name = name;
        // this.favoriteFood = "pollen";

    }

    eat(food){
        if (food == this.favoriteFood){
            console. log (this.name + " eats " + food);
            console.log("YUM!!! " + this.name + " wants more " + food);
            this.sleep() ;
        }else{
            console.log ("YUCK!!! " + this.name + " will not eat " + food);
        }


    }

    sleep(){
        console.log(this.name + " never sleeps");
    }
}

// class Polygon extends Shape{
//
//     constructor(height, width) {
//         super('Polygon');
//         this.name = 'Polygon';
//         this.height = height;
//         this.width = width;
//     }
//
//
//     //method #2
//     sayHistory() {
//         console.log('"Polygon" is derived from the Greek polus (many) ' +
//             'and gonia (angle).');
//     }
//
// }
//
//
// class Shape{
//
//     constructor(name) {
//         this.name = name;
//         this.special = true;
//     }
//
//
//     sayHistory() {
//         console.log("Shapes have a wonderful history.");
//     }
//
//
// }

class Zookeeper {

    constructor(name){
        this.name = name;
    }

    feedAnimals(animals, food){
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + animalPopulation + " total animals.");
        for (var i=0; i< animals.length; i++){
            animals[i].eat(food);
        }
    }
}