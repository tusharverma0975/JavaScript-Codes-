function addition(a)
{
    return function(b)
    {
        return function(c)
        {
            return a+b+c;
        }
    }
}
let result2= addition(2)(3)(5);
console.log(result);

//currying example function addition(a) {
    function addition(a) {
        return b => c => d => a + b + c + d;
      }
      let result = addition(2)(3)(5)(10);
      console.log(result);    //op - 20
      

