//function ko call karne ko hi invoke karna bolte hai 
function run()
{
    console.log('runnug');
}
run();
//funciton assignment  = isme bas hum ek function ko ek variable m assign kar dete hai 
let value = function run2()
{
    console.log('runnug');
}

//call karna hai toh m isko aise likh sakta hu 
value();   //agar hum run2 ko likhege toh direct call nahi kar skte 
//agar hum function assignment ko upar call kar dege toh ye nahi chalega sirf funciton declaration ko upar move karta hai 


let value_anonymous= function()
{
    console.log('anonymous');
}


//ab jaise mrko ye chae tha ki m jitni bhi argumnets pass kar du to ek inbuilt funciton hota hai argumnets jo saari arguments leta hai aur return kar deta hai 
function sum(a,b)   // ye hamne function hi dynamic bna dia 

{
    let total =0;
    for(let item of arguments)
    total=total+item;
    return total;
}
let ans= sum(10,20,30,40,50);   //ab yha mne itni saari arguments dali aur value print kar di usne 
console.log(ans);
