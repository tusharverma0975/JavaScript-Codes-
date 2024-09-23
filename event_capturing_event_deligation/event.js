document.querySelector("#grandParent").addEventListener(
  "click",
  () => {
    console.log("grandparent");
  },
  true
); //true ka matlab ye capturing hai aur ye top downn hierarchy m work kargi

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("parent");
  },
  true
); //capturing
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child");
  },
  false
); //ye bubbling hai toh sabse last m jaegi phle capture call hoga fir bubbling

//isme humne jaise 2nd aur 3rd m false likh dia toh bubbling hogi toh ab printingg child fir parent aise hogi...hum control kar skte hai kaise ye work karna chae

//ab ham chahte hai ki ye event stop ho jae sirf vahi element rahe uske alava kuch aur call na ho toh uske lie event.stopPropagaiton()

//agar humne ye child par lagaya hota toh tab bhi ye teeno call ho chuke hote coz last m aake stop propagation hue hai tab tak teeno call back funciton run ho chuke the in case if we put the stop propagation in grandparent toh vahi funciton chalta aur uske baad kuch call nhi hota

document.querySelector("#propagation").addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("propagation called");
  },
  true
);
document.querySelector("#propagation_child").addEventListener(
  "click",
  () => {
    console.log("propagation_child called");
  },
  true
);
