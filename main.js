const button = document.getElementById('button')
const display = document.getElementById('display')
let clicks = 0
button.addEventListener('click', () => {
  clicks++
  display.innerHTML = clicks
})

                                       
