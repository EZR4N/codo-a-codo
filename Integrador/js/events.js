const buttons =document.getElementsByClassName('comprarTickets')

const btnClick= (e)=>{
    consolo.log('hola')
    location.href='/integrador2/index.html'
}

buttons[0].addEventListener('click', btnClick, false)
buttons[1].addEventListener('click', btnClick, false)
