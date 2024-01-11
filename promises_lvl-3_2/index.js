const returnRandomNum = (timeOut) => {

    return new Promise((resolve, reject) => {
        const randomNumber = Math.ceil(Math.random() * 1000);
        if(typeof timeOut !== "number" || isNaN(timeOut) || timeOut < 0){
            const notANumber = new Error("Argument must be a positive number!");
            return reject(notANumber);
        } else {
            setTimeout(() => {
            resolve(randomNumber);
            }, timeOut * 1000);
        };
    });
};

Promise.all([returnRandomNum(1), returnRandomNum(3)]) 
    .then(result => console.log(result))
    .catch(err => console.log(err));
        
