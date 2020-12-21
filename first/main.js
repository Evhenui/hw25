let buttonClickFirst = document.querySelector("#buttonClickFirst"); 
let counterFirst = document.querySelector("#counterFirst"); 
let buttonClickSecond = document.querySelector("#buttonClickSecond"); 
let counterSecond = document.querySelector("#counterSecond");
let buttonClear = document.querySelector("#buttonClear");

let setCounter = document.querySelector("#setCounter"); 
let setId = document.querySelector("#setId"); 
let setValue = document.querySelector("#setValue"); 

let getlocalCounterFirst = localStorage.getItem('counterLocalFirst');
let getlocalCounterSecond = localStorage.getItem('counterLocalSecond');

counterFirst.value = getlocalCounterFirst ;
counterSecond.value = getlocalCounterSecond;

buttonClickFirst.addEventListener('click', function clickButtonFirst () {
  let counterLocalFirst;
  counterLocalFirst = counterFirst.value++;
  localStorage.setItem('counterLocalFirst', counterLocalFirst + 1);
})

buttonClickSecond.addEventListener('click', function clickButtonSecond () {
  let counterLocalSecond;
  counterLocalSecond = counterSecond.value++;
  localStorage.setItem('counterLocalSecond', counterLocalSecond + 1);
})

buttonClear.addEventListener('click', function clicClear () {
  localStorage.setItem('counterLocalFirst', 0);
  counterFirst.value = 0;
  localStorage.setItem('counterLocalSecond', 0);
  counterSecond.value = 0;
})

setCounter.addEventListener('click', function clickButtonSet () {
if(setId.value === "1"){
  let counterSetFirst;
  counterSetFirst = setValue.value;
  localStorage.setItem('counterLocalFirst', counterSetFirst );
  counterFirst.value = localStorage.getItem('counterLocalFirst');
}
else if(setId.value === "2"){
  let counterSetSecond;
  counterSetSecond = setValue.value;
  localStorage.setItem('counterLocalSecond', counterSetSecond );
  counterSecond.value = localStorage.getItem('counterLocalSecond');
}
else{
  alert("there is no such ID")
}

})