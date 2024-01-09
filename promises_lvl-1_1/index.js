function doubleNum (num) {
    return new Promise((resolve, reject) => {
        if(isNaN(num)){
            const isNotANumber = new Error("Argument must be a Number!");
            return reject(isNotANumber);
        } else {
            setTimeout(() => {
                const multiplyWithTwo = num * 2;
                return resolve(multiplyWithTwo);
            }, 2000);
        };
    });
};

doubleNum(4)
    .then(result => console.log(result))
    .catch(err => console.log(err));