function funcionGeneradora(){
    let i= 0
    yield i+10;
    yield i+100
    yield i +1000
}

const fnGen = funcionGeneradora()

console.log(fnGen.next())