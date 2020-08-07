import { User } from './models/User';

let user = new User({ id: 1, name: 'neverName', age: 13 });

user.on('save', () => {
	console.log(user);
});

user.fetch();

user.save();
