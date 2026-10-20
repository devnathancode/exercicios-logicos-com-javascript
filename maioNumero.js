const numbers = [1, 4, 3, 7, 2, 9, 3, 0];

const maiorNumero = () => {
    let maiorNumero = numbers[0];

    for(let i = 1; i < numbers.length; i++) {
        if(numbers[i] > maiorNumero) {
            maiorNumero = numbers[i];
        }
    }
    return maiorNumero
}

console.log(maiorNumero());
