const generateRandomNumber = num => Math.floor(Math.random() * num);

const outputs = {
    sign: ['cat', 'dog', 'tiger', 'elephant', 'lion'],
    luckStatus: ['bad luck', 'worst luck', 'average luck', 'good luck', 'best luck'],
    action: ['go eat', 'go to casino', 'stay home', 'go sleep']
};

let mixedMessage = [];

for (let key in outputs) {
    let numberOfIndex = generateRandomNumber(outputs[key].length);
    
    switch(key) {
        case 'sign':
            mixedMessage.push(`Your sign right now is '${outputs[key][numberOfIndex]}'`);
            break;
        case 'luckStatus':
            mixedMessage.push(`You are having ${outputs[key][numberOfIndex]}`);
            break;
        case 'action':
            mixedMessage.push(`You should ${outputs[key][numberOfIndex]}`);
    };
};

