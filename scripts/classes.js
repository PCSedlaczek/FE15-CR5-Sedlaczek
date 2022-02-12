"use strict";
// Create arrays for objects
let animals = [];
// let cats: Array<Cat> = [];
// let dogs: Array<Dog> = [];
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
    display() {
        return ``;
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
    display() {
        return `<!-- Card -->
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="img/animals/${this.img}" alt="${this.name}">
      <div class="card-header text-center bg-dark text-white">${this.name}</div>
      <div class="card-body">
        <p class="card-text">Description</p>
        <button  type="button" class="btn btn-success">Vaccinated: </button>
      </div>
    </div>`;
    }
}
class Dog extends Animal {
    constructor(name, gender, size, age, vaxx, img, breed, trainingSkills) {
        super(name, gender, size, age, vaxx, img);
        this.breed = breed;
        this.trainingSkills = trainingSkills;
        // dogs.push(this);
    }
    display() {
        return ``;
    }
}
