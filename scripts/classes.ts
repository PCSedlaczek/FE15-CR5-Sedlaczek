interface Animals {
  name: string;
  gender: string;
  size: string;
  age: number;
  img: string;
  vaxx: boolean;
  display: Function;
}

// Create arrays for objects
let animals: Array<Animal> = [];
// let cats: Array<Cat> = [];
// let dogs: Array<Dog> = [];

class Animal implements Animals {
  constructor(
    public name: string, 
    public gender: string, 
    public size: string, 
    public age: number, 
    public vaxx: boolean,
    public img: string) 
  {
    animals.push(this);
  }

  display() {
    return ``
  }
}

class Cat extends Animal {
  constructor(
    name: string, 
    gender: string, 
    size: string, 
    age: number, 
    vaxx: boolean,
    img: string,
    public breed: string,
    public furColor: string,
    public breedInfo: string) 
  {
    super(name, gender, size, age, vaxx, img);
    // cats.push(this);
  }

  display() {
    return `<!-- Card -->
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="img/animals/${this.img}" alt="${this.name}">
      <div class="card-header text-center bg-dark text-white">${this.name}</div>
      <div class="card-body">
        <p class="card-text">Description</p>
        <button  type="button" class="btn btn-success">Vaccinated: </button>
      </div>
    </div>`
  }
}

class Dog extends Animal {
  constructor(
    name: string, 
    gender: string, 
    size: string, 
    age: number,
    vaxx: boolean, 
    img: string,
    public breed: string,
    public trainingSkills: boolean) 
  {
    super(name, gender, size, age, vaxx, img);
    // dogs.push(this);
  }

  display() {
    return ``
  }
}