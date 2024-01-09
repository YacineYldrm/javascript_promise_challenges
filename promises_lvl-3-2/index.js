const returnRandomNum = (timeOut) => {

    return new Promise((resolve, reject) => {
        const randomNumber = Math.ceil(Math.random() * 1000);
        if(isNaN(timeOut)){
            const notANumber = new Error("Argument must be a Number!");
            return reject(notANumber);
        } else {
            setTimeout(() => {
                return resolve(randomNumber);
            }, timeOut);
        };
    });
};

Promise.all([returnRandomNum(500), returnRandomNum(2000)]) 
        .then(result => console.log(result))
        .catch(err => console.log(err));
        
