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

numbers.forEach((num) => {
  num.addEventListener('click', sendnumber);
})

let result=[]
function sendnumber() {
  let buttonTextContent = this.textContent;
  if (btn.checked) {
    console.log('check')

    check(buttonTextContent)

  }
  else {
    nocheck(buttonTextContent)
    console.log('no check')
  }

}


function check(buttonTextContent) {
  span.forEach(item => {
    if (item.parentElement.className === "selected") {
      result = item.innerHTML.split('');  /*convert str to arr */

    
    if (result.includes(`${buttonTextContent}`)) {
      result[result.indexOf(buttonTextContent)] = '';
      result.sort();
      item.innerHTML = `${result.join('')}`; /*convert arr to str */
    }
    else {
      result.push(buttonTextContent);
      result.sort();
      item.innerHTML = `${result.join('')}`;
      console.log(item)
    }}

  })
}

function nocheck(buttonTextContent) {
  value.forEach(i => {
    if (i.parentElement.className ==="selected") {
      i.innerHTML = `${buttonTextContent}`
    }

  })
}


