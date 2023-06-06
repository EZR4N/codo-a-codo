//  DOM
botonesTarifa= document.getElementsByClassName('btnTarifa')
botonesContainer = document.querySelectorAll('.btn-light, .tituloBoton, .tienenDescuento, .porcentajeDescuento, .presentarDocumentacion')
let total
let categories=null
let tickets = null
let selected = null
let i=0;
const price = 200
const totalText = 'Total a pagar: $'
categories = {
    a: { percent: 80, value: '1'},
    b: { percent: 50, value: '2'},
    c: { percent: 15, value: '3'}
}

const form = document.forms.formulario
const inputs = form.getElementsByTagName('input')
const select = form.getElementsByTagName('select')
const totalaPagar = document.getElementById('totalPagar')
const btnReset = document.getElementById('btnReset')
const btnSubmit =document.getElementById('btnSubmit')


totalaPagar.innerText= totalText

const btnTarifaClick = (e) =>{
    selected=(e.target.dataset.index)
    matchCategory(selected)
    totalPrice()
}

const submit = (e) => {
    e.preventDefault()
    const {firstname, lastname, email, tickets, category}=form
    const verified={
        firstname: firstname.value!=='',
        lastname: lastname.value !=='',
        email: email.value.includes('@'),
        tickets: tickets.value >0,
        category: category.value !=='none'
    }
    const values= Object.values(verified)
    const submitAccepted = values.every(value => value)
    if(submitAccepted==false){
        alert('Por favor complete todos los campos de texto');
    return
    }else{
        location.href='/integrador2/exito.html'
    }
    
}




const resetCategories= ()=>{
    total=null
    selected=null
    totalaPagar.innerText=totalText
    console.log(selected)
}

const setCategory=(e)=>{
const option = e.target.value
if(option==='none'){
    resetCategories()
    return
}
category=option
const index = categories[category].value
selected=index
totalPrice()
}

const reset= ()=>{
    for(input of inputs){
        input.value='';
    }
    totalaPagar.innerText=totalText
    }

const setTicket= (e)=>{
    const {value} =e.target
    if (value <0 || isNaN(value)){
        e.target.value=0
        total=null
        return
    }
    tickets=value
    totalPrice()
}








const totalPrice = ()=>{
    if(!tickets || !selected) return;
const totalValue = price * tickets
let pdiscount=0
    
    
        if(selected==1){
            pdiscount=80
        }else{
            if(selected==2){
                pdiscount=50
            }else{
                if(selected==3){
                    pdiscount=15
                }else{return
                }
            }
        }
    
        const discount = (totalValue/100)*pdiscount
        
        total = totalValue-discount
        
    
    totalaPagar.innerText= totalText + total
    
}

const matchCategory = (Selection)=>{
    switch(Selection){
    case "1":
        form.category.value='a'
        break
    case "2":
        form.category.value='b'
        break
    case "3":
        form.category.value='c'
        break
    default:
        throw new Error('algo pasó en match category')
}
}












