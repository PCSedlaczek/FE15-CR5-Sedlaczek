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
// let birds: Array<Bird> = [];
// let reptiles: Array<Reptile> = [];

class Animal implements Animals {
  constructor(
    public name: string,
    public gender: string,
    public size: string,
    public age: number,
    public vaxx: boolean,
    public img: string) {
    animals.push(this);
  }

  cardStart(): string {
    return `
      <div class="col p-3">
        <div class="card">
          <img class="card-img-top" src="img/animals/${this.img}" alt="${this.name}">
          <div class="card-header text-center bg-dark text-white">${this.name}</div>
          <div class="card-body">
            <ul class="list-unstyled mb-2">
              <li>Gender: ${this.gender}</li>
              <li>Age: ${this.age}</li>
              <li>Size: ${this.size}</li>
            </ul>
            <!-- Vaccination status -->
            <p class="card-text text-center">
              <button type="button" class="btn">
                Vaccination 
                <i class="bi" role="img"></i>
              </button>
            </p>`
  }

  cardEnd(): string {
    return `
          </div>
        </div>
      </div>`
  }

  display(): string {
    return this.cardStart() + this.cardEnd()
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
    public breedInfo: string) {
    super(name, gender, size, age, vaxx, img);
    // cats.push(this);
  }

  cardEnd(): string {
    return `
            <ul class="list-unstyled mb-2">
              <li>Breed: ${this.breed}</li>
              <li>Fur color: ${this.furColor}</li>
              <li>
                <a class="nav-link px-0" href="${this.breedInfo}">Breed info</a>
              </li>
            </ul>
          ${super.cardEnd}`
  }

  display(): string {
    return super.cardStart() + this.cardEnd()
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
    public training: boolean) {
    super(name, gender, size, age, vaxx, img);
    // dogs.push(this);
  }

  cardEnd(): string {
    return `
            <ul class="list-unstyled mb-2">
              <li>Breed: ${this.breed}</li>
              <li>Training: ${this.training}</li>
            </ul>
          ${super.cardEnd}`
  }

  display() {
    return super.cardStart() + this.cardEnd()
  }
}