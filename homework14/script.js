class Human {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    };
    humanInfo() {
        console.log(this);
    };
};

const anton = new Human('Anton', 33);
const alex = new Human('Alex', 19);
const john = new Human('John', 17);

const owners = [anton, alex, john].map((item) => { item.humanInfo() });

class Car {
    constructor(brand,model,year,number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.number = number;
        this.owner = null;
    };
    initOwner(human) {
        if(human.age >= 18) {
            this.owner = human;
        } else {
            console.log('Владелец машины должен быть старше 18 лет');
            this.owner = 'Нет владельца';
        }
    };
    displayOwnerInfo() {
        console.log(this);
    }
};

const audi = new Car('Audi', 'A4', 2015,'KA1111ET');
const bmw = new Car('BMW', 'M3', 2012,'KA2222ET');
const mazda = new Car('Mazda', 'RX8', 2017,'KA3333ET');

audi.initOwner(anton);
bmw.initOwner(alex);
mazda.initOwner(john);
let cars = [audi, bmw, mazda];
cars.map((item) => { item.displayOwnerInfo() });