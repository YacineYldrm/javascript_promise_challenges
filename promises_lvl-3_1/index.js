// Erstelle eine Funktion, die ein Promise zurückgibt.
// Die Funktion soll eine Zahl als Parameter bekommen.
// Das Promise soll diese Zahl mit sich selbst multiplizieren und dann das Ergebnis als Resolve zurückgeben.
// Schreibe eine weitere Funktion. Diese soll auch eine Zahl als Parameter übergeben bekommen.
// Wir wollen in dieser Funktion die erste Funktion aufrufen und die .then() Methode nutzen, um die erste Funktion öfters aufzurufen. Insgesamt soll die erste Funktion 3 mal aufgerufen werden und als Parameter immer den Rückgabewert des vorherigen Aufrufs erhalten.

function squareNumber (num) {
    return new Promise((resolve, reject)=> {
        if(isNaN(num)){
            const notANumber = new Error("Argument must be a Number!");
            return reject(notANumber);
        } else {
            const multiplyWithItSelf = num * num;
            return resolve(multiplyWithItSelf);
        };
    });    
};

function chainBuilder(num){
    return squareNumber(num)
    .then(result => squareNumber(result))
    .then(result => squareNumber(result))
    .then(result => squareNumber(result))
    .then(result => console.log(result))
    .catch(err => console.log(err));
}

chainBuilder(2);