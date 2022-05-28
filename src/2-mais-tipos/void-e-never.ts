type User = {
    name: string,
    lastName: string,
    dateOfBirth: string,
    age?: number // determina essa chave como sendo opcional
}

const gabriella: User = {
    name: 'gabriella',
    lastName: 'fidler',
    dateOfBirth: '02/01/1993',
    age: 29
}

// union types
// | funciona como 'ou' ||

type logLevel = 'info' | 'error' | 'debug';

function logMessage(message: string, log: logLevel) {
    console.log(`${message} - ${log}`);
}

logMessage('uma mensagem', 'debug');

//interception funciona como 'and' pra juntar alias types num só

type About = {
    bio: string,
    interest: string[]
}

type userProfile = User & About;

const gabriellaProfile: userProfile = {
    name: 'gabriella',
    lastName: 'fidler',
    dateOfBirth: '02/01/1993',
    age: 29,
    bio: 'ela tem bochechas lindas',
    interest: ['gatos', 'caes', 'pizzas']
}

