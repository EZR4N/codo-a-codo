const buttons =document.getElementsByClassName('comprarTickets')

const btnClick= (e)=>{
    console.log('hola')
    location.href='/codo-a-codo/integrador2/index.html'
}

buttons[0].addEventListener('click', btnClick, false)
buttons[1].addEventListener('click', btnClick, false)
