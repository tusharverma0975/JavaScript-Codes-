console.log("tusah");

let rect = {
  length: 1,
  breadth: 2,
  draw() {
    console.log("draw");
  },
};

function CreateRectangle(len, bre) {
  //Functionname should be in capital as per the rules so c is capital in this
  return {
    length: len,
    breadth: bre,
    draw() {
      console.log("draw");
    },
  };
}

let temp = CreateRectangle(5, 10);
//For defining the functionwe have 2 methods first factory function Second list constructor function
//constructor function m first letter should be capital
//In the construction functionwe are defining a mattermethodand we are not returning anything like in constructor we are returning the function but in constructor we are not returning anything we are just defining it

//Factory functionyou are requesting a function to return something buttonconstructor we are just defining the function

//In JavaScript new is a function that is returning object empty

//Now we printing it suing constructro

//Constructor function should be in pascal notation eg NumberOfStudents
//Ye code constructor ka code hai

//constructor function -> prop/methods -> intialise/Define
function Tushar(len, bre) {
  this.length = len;
  this.breadth = bre; //this ye apke current object ko dikhata hai
}
let name = new Tushar(10, 20, color);
//new keyword hamare code m empty object ko print karta hai
// `` back tick character hai ye isme saara code aa jata ahi constructor ka
//this hamare current object ko refer karte hai

// pass  by reference
let a = { value: 10 };
function inc(a) {
  a.value++;
}
inc(a);
console.log(a);
//Dynamic nature of objects iska matlab hum value dalne k baad bhi change kar skte hai
function Tushar(len, bre) {
  this.length = len;
  this.breadth = bre; //this ye apke current object ko dikhata hai
}
let name5 = new Tushar(10, 20);
name5.color = "yellow";
console.log(name);

//functions are also onjects in js coz agar ek function k andar hum kuch property define kar rahe hai toh vo object aur object hamare function hi hote hai

//primitive or referecce in notebook

// agar let a=5 matlab ye hamara primitive hai aur primitive k case m copy banti hai
let a1 = 5;
function inc(a1) {
  a1++;
}
console.log(a1); //op 5

// ye hai pass by reference isme humne object k throuugh value pass ki hai

let a3 = { value: 5 };
function inc(a3) {
  a3.value++;
}
inc(a3);
console.log(a3);

//Primitive - number, string , boolean , undef , null
// Reference function , object , array
//ye value
let finalValue = {
  len: 66,
  val: 99,
};
//for in loop
for (let temp in finalValue) {
  console.log(temp, finalValue[temp]); // agar value ko bhi access karna hai
}
//for of loop hum array maps inpar lgate hai
// ab jaise m chahta hu ki meri values using for in k through  hi print ho toh object.keys k through hum kar skte hai aur unme kya kya values hai object.entries

let finalValuess = {
  len_tee: 66,
  val_tee: 99,
};
//for in loop
for (let temp of Object.entries(finalValuess)) {
  console.log(temp, finalValuess[temp]); // agar value ko bhi access karna hai
}

// ab jaise mrko find karna hai koe property exist karti hai ya nhi
if ("color" in finalValuess) {
  console.log("Prseent");
} else console.log("absent");

//ab mrko object ko clone karna hai toh m normal assign k through bhi kar skta hu
let dest = Object.assign({}, src); // assign k andar empty array dalo fir jo src hai uski saari values dal do

// object cloning 3 dot lgake bhi kar skte hai
let dest2 = { ...src };

// garbage collector apne aap hi memory allocate karta hai jo unused constant hai usko automatically memory free kara deta hai
let clooone = {
  a: 10,
  b: 122,
  c: 88,
};

let desti = {}; //hamne ye empty array bna lia
for (let key in clooone) {
  desti[key] = clooone[key];
}
console.log(desti);
// 3rd method for cloning
let desti3 = {
  a: 10,
  b: 122,
  c: 88,
};
let src = { ...desti3 };
console.log(src);

//factory function m hum value return karte hai aur constructor function m hum this keyword ko use karke value ko return karte hai

//ab jaise mrko string ko object ki form m define karna hai
let LastName = new String("Tushar");

// ab jaise mrko ek string m words ko split karke array ki form m dalna hai
let message = "this is my bullet";
let words = message.split(" ");
console.log(words);
// backtick operator lgake hum jaise bhi text likhege vo vaisa hi print ho jaega

//Starting m number insert karna hai unshift
//number ko agar beech m insert karna hai toh isme splice function use karege
let arr = [1, 2, 4, 5];
arr.splice(2, 0, "a", "b", "c");
console.log(arr);

// .include se hum check kar skte hai mera element vha par pada hai ya nhi
console.log(arr.includes(4));
// ab kisi index k aage se chk karna hai toh
arr.indexOf(4, 2); // 4 pada hai kya 2 index k baad

//callback function k through find karna object ko
let courses = [
  { no: 1, name55: "Tushar" },
  { no: 2, name55: "final" },
];

let course_callback = courses.find(function (course) {
  return course.name55 === "Tushaar";
});

// ab isi ko chota karke likha
let course_callback2 = courses.find((course) => course.name55 === "Tushaar");
//=> function ko dikhata hai ye basically

//emptying an array
let numbers = [1, 2, 3, 4, 4];
// let fin=numbers.length=0;
numbers.splice(0, numbers.length);
console.log(numbers);

let add = [1, 2, 3, 4];
let add2 = [4, 5, 3];
let concatt = add.concat(add2);
console.log(concatt);

//2nd method of combininig
let name1 = [1, 2, 3, 4];
let name2 = [15, 3, 4, 2];
let combined_final = [...name1, ...name2];
console.log(combined_final);

let name5 = [1, 2, 3, 4];
let name6 = [15, 3, 4, 2];
let combined_final6 = [...name5, "a", ...name6, "b"]; // m chahat hu ki iss value k baad a dal do fir b aur normally copy bhi bna skte spread operator use karke
console.log(combined_final6);

let final_filer = [1, 3, -44, 55, 3, -34, -34];
let my_ans = final_filer.filter(function (value) {
  return value > 0;
});
console.log(my_ans); // filter method bhi same way m work karta hai filter lagao aur callback function dal do

//now using arrow function
let final_filer2 = [1, 3, -44, 55, 3, -34, -34];
let my_ans2 = final_filer2.filter((value) => value > 0);
console.log(my_ans);
//filter m aisi value lagao jiski value greater than equal to 0 ho

//map using
let final_filer3 = [1, 3, -44, 55, 3, -34, -34];
let my_ans3 = final_filer3.map((value) => " String " + value);
console.log(my_ans3);

//chaining in js
let numbers77 = [1, 2, -3, -44];
let items = numbers77
  .filter(value => value >= 0)
  .map(num => {
    value: num;
  });
console.log(items);


// Technical suneja codes 
let my_initial_values=[
{
  id: 1,
  name: "kkak",
  isActive: false,

},
{
  id: 1,
  name: "kksfaak",
  isActive: false,

},
{
  id: 1,
  name: "kkafasfdak",
  isActive: false,

},

];

const final_ans=[];
for(let i=0;i<my_initial_values.length;i++)
{
    final_ans.push(my_initial_values[i].name);
}
console.log(final_ans);

var testing = function(){
  console.log(call)   // hitesh chaudhary 
}

console.log(typeof testing)


var testTingPosition = new String('tusharVerma');
testTingPosition.charAt(0).toUpperCase();
console.log(testTingPosition);
console.log(testTingPosition.toUpperCase().charAt(0));


// ab jaise ye pata lagana hai konsa charater konsi position par aa rha hai 
// indexOf  isko use karege 
var testTingPosition2 = new String('tusharVerma');
console.log(testTingPosition.indexOf('u'));


var tempi = new String()

//curryig in js 
function addiioin(a,b,c){
  console.log(addiioin)
}
