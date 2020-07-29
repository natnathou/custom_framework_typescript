import { User } from './models/User';

let user = new User({ id: 2 });
user.set({ age: 14 });

user.save();

setTimeout(() => console.log(user), 4000);
