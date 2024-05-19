const name2 = (num1,num2) => (  num1+num2 )    //agar single argument hai toh same hi line m and return bhi lagane ki jrut nahi hoti 
//agar ( ) isme wrap kia toh paranthesis likhne ki need nahi hai 

const name3 = (num1,num2) =>{ return  num1+num2 ;}   //agar return lgaya toh aise likhna padega \
//ye implicit return hai 
// ab jaise object ko return karna hai 

const returningObject = (num1,num2)=> ({username.tushar}); //object ko paranthesis m hi likhna padega  ()

console.log(name2(10,20));  