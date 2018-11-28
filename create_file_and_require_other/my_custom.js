console.log('custom file call here');

module.exports.customFunction = () => {
    console.log('Customr function');
    return 'custom function return this';
}

module.exports.addTwoNumber = (number1, number2) => {
    return number1 + number2;
}