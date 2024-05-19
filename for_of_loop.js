var name = "tushar";
for (const num of name) {
  console.log(num);
}

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(arr);
  // break;
}
//jaise space k baad hame loop break karna hai toh aise ho jaega 
var arr2 = "tushar verma";

for (var num of arr2) {
  if (num === ' ') {
    console.log(`Space found in the string.`);
    break;
  } else {
    console.log(num);
  }
}
