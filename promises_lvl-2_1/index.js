function returnARandomNumber () {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.round(Math.random() * 10);
        const min = 6;

        if(randomNumber < min){
            reject(randomNumber);
        } else {
            return resolve(randomNumber);
        }
    })

}

returnARandomNumber()
    .then(result => console.log(result))
    .catch(result => console.log("Number is too small: ", result))
