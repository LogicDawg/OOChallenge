class Vechicle{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return 'Beep';
    }
    toString(){
        return `This is a ${this.make} ${this.model} from ${this.year}`;
    }
}

class Car extends Vechicle{
    constructor(make,model,year){
    super(make,model,year);
    this.numWheels = 4;
    }
}

class Motorcycle extends Vechicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 2;
    }

    revEngine(){
        return 'VROOM!!!'
    }
}

class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }
    
    add(newVehicle){
        if(!(newVehicle instanceof Vechicle)){
            return "Only vehicles are allowd in here!"
        }
        if(this.vehicles.length >= this.capacity){
            return "Sorry, we're full"
        }
        this.vehicles.push(newVehicle);
        return 'Vehicle added!';
    }
}