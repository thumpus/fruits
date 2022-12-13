import fruits from './foods';
import { choice, remove } from './helpers';

let fruit = choice(fruits);

console.log(`I'd like one ${fruit} please.`);
console.log(`Here you go: ${fruit}`);
console.log('Delicious! May I have another?');

let remainingFruit = remove(fruits, fruit);

console.log(`I'm sorry. We're all out. We have ${remainingFruit.length} left.`)