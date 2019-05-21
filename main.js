const calculate = document.querySelector('#calculate')
const regrex = /^[0-9]*[1-9][0-9]*$/
const calcullateTip = () => {
  const bill = document.querySelector('#inputPassword').value
  const tip_option = document.querySelector('#tip').value
  const people = document.querySelector('#people').value
  const result = document.querySelector('.result')
  let total = 0
  if (regrex.test(bill) && tip_option !== '' && people !== '') {
    total = (parseInt(bill) * parseFloat(tip_option) / parseInt(people)).toFixed(2)
    result.innerText = `$ ${total} dollars each `
  } else {
    alert("please enter valid input!")
  }
}
calculate.addEventListener('click', function () {
  calcullateTip()
})