// let person = {
//   "name": "matt",
//   "age": 20,
//   "myhobby": function (num) {
//     console.log("gaming", num);
//   }
// };

// console.log(person);
// console.log(person.myhobby(10));

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    console.log("this", this);
  }

  area() {
    return this.height * this.width;
  }

  modify(height, width) {
    this.width = width;
    this.height = height;
  }
}

let rect = new Rectangle(10, 20);
let rect2 = new Rectangle(20, 30);
console.log(rect.area());
rect.modify(30, 40);
console.log(rect.area());
// console.log(rect);