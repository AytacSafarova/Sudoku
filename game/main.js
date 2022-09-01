let alltd = document.querySelectorAll("td")
let btn = document.getElementById("candidate-switch")
let value = document.querySelectorAll(".value")
let span = document.querySelectorAll(".candidates")
let numbers = document.querySelectorAll(".number-control")



let selected
alltd.forEach(item => {
  item.addEventListener('click', () => {
    if (item.childElementCount == 2) {
      selected?.classList.remove('selected')
      item.classList.add("selected")
      selected = item

    }
  })
})



// btn.addEventListener('click', sendnumber)
// numbers.forEach((num) =>{
//   num.addEventListener('click', sendnumber);
// })
numbers.forEach((num) =>{
  num.addEventListener('click', sendnumber);
})


let buttonTextContent;
function sendnumber() {
  let buttonTextContent = this.textContent;
  if(btn.checked){
    console.log('check')

check(buttonTextContent)      
      
      }
      else{
        nocheck(buttonTextContent)
        console.log('no check')
      }
  
    }


      function check (buttonTextContent){

            console.log('fcjkvrgvkr')
            span.forEach(i => {
                if (i.parentElement.className == "selected") {
                  i.innerHTML = `${buttonTextContent}`
                }
            
              })
          }
              
function nocheck (buttonTextContent){
      value.forEach(i => {
          if (i.parentElement.className == "selected") {
            i.innerHTML = `${buttonTextContent}`
          }
      
        })
      }
          
          