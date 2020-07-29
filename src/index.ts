import { User } from './models/User';

let user = new User({ name: 'myName', age: 13 });

user.setUser({ name: 'phili' });

user.on('change', () => {
	console.log('1');
});

user.on('change', () => {
	console.log('2');
});

user.on('click', () => {
	console.log('2');
});

console.log(user);
