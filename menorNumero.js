const numbers = [1, 4, 3, 9, 0, 5, 2, -1];

const menorNumero = () => {
    let menorNumero = numbers[0];

    for(let number of numbers) {
        if(number < menorNumero) {
            menorNumero = number;
        }
    }
    return menorNumero;
}
console.log(menorNumero());
