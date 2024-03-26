function returnHours(data) {
    if (data && !(data instanceof Date)) {
     throw new TypeError('Esperando uma estância de Date()');
    }

    if (!data) {
        data = new Date();
    }
    
    return data.toLocaleTimeString('pt-BR');
}

const hora = returnHours(); 

console.log(hora);