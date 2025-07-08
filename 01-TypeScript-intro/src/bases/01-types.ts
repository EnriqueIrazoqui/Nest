export let name = 'Enrique';
export const age = 26;
export const isValid: boolean = true;

name = 'John';


export const templateString = `Esto es un string
multilinea
que puede tener
" dobles
' simple
inyectar valores ${name}
expresiones ${1 + 1}
numeros: ${age}
booleanos: ${isValid}
`

console.log(templateString);