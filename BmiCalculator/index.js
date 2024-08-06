const form= document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('called');
  const height= parseInt(document.querySelector('#height').value);
  const weight =parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if(height ==='' || height<=0 || isNaN(height))
  {
    result.innerHTML=`"Value not defined"${height}`;
  }
   if(weight==='' || weight<=0 || isNaN(weight))
  {
    result.innerHTML="weight not defined";
  }
  else{

result.innerHTML=  (weight/ ((height*height)/1000)).toFixed(2);
  }

  console.log('sdfaf',height);
});

 