for (let container of botonesContainer) {
    
    container.addEventListener('click', btnTarifaClick)
}

btnReset.addEventListener('click', reset)
form.tickets.addEventListener('keyup', setTicket)
form.category.addEventListener('change', setCategory)
form.addEventListener(`submit`, submit)