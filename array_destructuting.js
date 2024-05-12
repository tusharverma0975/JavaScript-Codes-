var students={
    name:'Tushar',
    age:28,
    hobbies:["Singing","Dancing"]
  }
  const {age} =students ;     //array destruction hai   
  const {hobbies: myHobby}= students;   // ab isme m apna custom naam bhi de skta hu 
  console.log(myHobby) //op  hobbies: [ 'Singing', 'Dancing' ] }
  console.log(age);

  //rest operator 
  //isme saari value ek saath aa jati hai 
  const {...printing}= students;
  console.log('printing rest opetator',printing);


  //spread operator basically hamara overwrite karta hai cheejo ko 


  //Push method in array 
  const heros =["tushar","verma","sharma"];
const  fanily_sirname=["verma","pahuja","baman"];
heros.push(fanily_sirname);
console.log(heros);       // OP- [ 'tushar', 'verma', 'sharma', [ 'verma', 'pahuja', 'baman' ] ]   //3rd index m hamara ye value aa jaegi 


//concat method in array 
const heros2 =["tushar","verma","sharma"];
const  fanily_sirname2=["verma","pahuja","baman"];   //isme alag ek variable banana padega 
var temp =heros2.concat(fanily_sirname2);   //op - [ 'tushar', 'verma', 'sharma', 'verma', 'pahuja', 'baman' ]
console.log(temp);  

//getting the keys from the object 
var tinderUser={
  id:1,
  name:"tushar",
  sirName:"verma"
} 
console.log('keys of object are',Object.keys(tinderUser));
console.log('keys of values are',Object.values(tinderUser));
