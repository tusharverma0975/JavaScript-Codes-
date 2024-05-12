let rectangle ={
    length :2,
    breadth :4
};
for (let key in rectangle)
{    //keys are reflected through key variable 
    //     //values are reflected through rectangle[key]
    console.log(key,rectangle[key]);    // isme bracket lganae k baad hum value access kar sakte hai 
}
//object cloning in js 
let src={
    length: 43,
    breadth : 44,
    height : 100
};
let dest={};
for(let key in src)
{
    dest[key] = src[key];
}
console.log(dest);

//2nd method 
let srci={
    a:10,
    b:20,
    c:30
};
let desti = Object.assign({},srci);
console.log(desti);
 


// 2 or more values are copying into thiss
let ano={value: 66};
let destii = Object.assign({},srci,ano );
// 3rd method 
let src3={
    a: 10,
    b: 45,
    c: 66
};
