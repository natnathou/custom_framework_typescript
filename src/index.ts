import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const users = User.buildUserCollection();

users.on('change', () => {
	console.log(users);
});

users.fetch();
