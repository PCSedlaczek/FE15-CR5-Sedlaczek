"use strict";
// Animal objects
new Animal("Spike", "male", "small", 4, false, "arif-hidayat-mGQ5-MTqRbQ-unsplash.jpg");
new Animal("Snow", "female", "small", 3, false, "yuhan-chang-RJi6yT6zPZ0-unsplash.jpg");
// Dog objects
new Dog("Sushi", "female", "large", 2, true, "flouffy-g2FtlFrc164-unsplash.jpg", "Australian Shepherd", true);
new Dog("Snoop Dog", "male", "medium", 3, false, "victor-grabarczyk-N04FIfHhv_k-unsplash.jpg", "Terrier", false);
// Cat objects
new Cat("Feline Dion", "female", "medium", 5, true, "karina-vorozheeva-rW-I87aPY5Y-unsplash.jpg", "Angora", "Gray", "www.angoras.com");
new Cat("Meowley Cyrus", "female", "small", 1, false, "alvan-nee-ZCHj_2lJP00-unsplash.jpg", "Siamese", "Ginger", "www.siamese.com");
// Loop through objects array
let pets = document.getElementById("pets");
for (let val of animals) {
    pets.innerHTML += val.display();
}
// Toggle card info
// let imgs = document.getElementsByClassName("card-img-top") as HTMLCollection;
// let info = document.getElementsByClassName("card-body") as HTMLCollection;
// let visibility = false as boolean;
// for (let i=0; i<imgs.length; i++) {
//   imgs[i].addEventListener("click", function() {
//     let element = info[i] as HTMLElement;
//     if (visibility == false) {
//       element.style.opacity = "1";
//       element.style.transition = "0.25s";
//       element.style.height = "100px";
//       element.style.paddingTop = "10px";
//       visibility = true;
//     } else {
//       element.style.opacity = "0";
//       element.style.height = "0";
//       element.style.padding = "0";
//       visibility = false;
//     }
//   })
// }
