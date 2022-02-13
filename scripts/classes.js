"use strict";
// Create arrays for objects
let animals = [];
// let cats: Array<Cat> = [];
// let dogs: Array<Dog> = [];
// let birds: Array<Bird> = [];
// let reptiles: Array<Reptile> = [];
class Animal {
    constructor(name, gender, size, age, vaxx, img) {
        this.name = name;
        this.gender = gender;
        this.size = size;
        this.age = age;
        this.vaxx = vaxx;
        this.img = img;
        animals.push(this);
    }
    cardStart() {
        return `
      <!-- Animal card -->
      <div class="col px-3 pb-4">
        <div class="card">
          <img src="img/animals/`;
    }
    cardMiddle() {
        return `${this.img}" alt="${this.name}" 
          class="card-img-top d-none d-md-block">
          <div class="card-header text-center bg-dark text-white position-relative">${this.name}
            <button type="button" title="Show image"
            class="btn exp-btn1 btn-outline-dark text-white position-absolute top-0 end-0 m-2 p-0 d-block d-md-none d-lg-none">
              <i class="exp-icon1 bi bi-arrows-expand" role="img"></i>
            </button>
            <button type="button" title="Show info"
            class="btn exp-btn2 btn-outline-dark text-white position-absolute top-0 end-0 m-2 p-0 d-none d-md-block d-lg-none">
              <i class="exp-icon2 bi bi-arrows-expand" role="img"></i>
            </button>
          </div>
          <div class="card-body d-block d-md-none d-lg-block">
            <ul class="list-unstyled mb-2">
              <li>Gender: ${this.gender}</li>
              <li>Age: ${this.age}</li>
              <li>Size: ${this.size}</li>
            </ul>
            <!-- Vaccination status -->
            <p class="card-text text-center">
              <button type="button" class="btn vaxx-btn">
                Vaccination 
                <i class="vaxx-icon bi" role="img"></i>
              </button>
            </p>`;
    }
    cardEnd() {
        return `
          </div>
        </div>
      </div>`;
    }
    display() {
        return this.cardStart() + this.cardMiddle() +
            this.cardEnd();
    }
}
class Cat extends Animal {
    constructor(name, gender, size, age, vaxx, img, breed, furColor, breedInfo) {
        super(name, gender, size, age, vaxx, img);
        this.breed = breed;
        this.furColor = furColor;
        this.breedInfo = breedInfo;
        // cats.push(this);
    }
    cardStart() {
        return `
    <!-- Cat card -->
    <div class="col px-3 pb-4">
      <div class="card">
        <img src="img/cats/`;
    }
    cardEnd() {
        return `
            <ul class="list-unstyled mb-2">
              <li>Breed: ${this.breed}</li>
              <li>Fur color: ${this.furColor}</li>
              <li>
                <a class="nav-link px-0" href="${this.breedInfo}">Breed info</a>
              </li>
            </ul>`;
    }
    display() {
        return this.cardStart() + super.cardMiddle() +
            this.cardEnd() + super.cardEnd();
    }
}
class Dog extends Animal {
    constructor(name, gender, size, age, vaxx, img, breed, training) {
        super(name, gender, size, age, vaxx, img);
        this.breed = breed;
        this.training = training;
        // dogs.push(this);
    }
    cardStart() {
        return `
    <!-- Dog card -->
    <div class="col px-3 pb-4">
      <div class="card">
        <img src="img/dogs/`;
    }
    cardEnd() {
        return `
            <ul class="list-unstyled mb-2">
              <li>Breed: ${this.breed}</li>
              <li>Training: ${this.training}</li>
            </ul>`;
    }
    display() {
        return this.cardStart() + super.cardMiddle() +
            this.cardEnd() + super.cardEnd();
    }
}
