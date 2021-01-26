function soma(a = 1, b = 1, c =1){
    return a + b + c
}
console.log(soma(3, 4, 1))


function soma2(a, b, c){
    a = isNaN(a) ? 1 : a
    b = isNaN(b) ? 1 : b
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma(1233, 232, 0))

