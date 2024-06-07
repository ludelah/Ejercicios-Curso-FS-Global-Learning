import { readFileSync } from 'node:fs';
import { writeFileSync } from 'node:fs';

const datos = readFileSync('datos.txt').toString().split(' ');

const isPair = (value) => {
  return Number(value) % 2 == 0
}

const pares = datos.filter(isPair)

console.log(pares.join('-'))

writeFileSync('pares.txt', pares.join(' '))
