import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';
interface userProps {
	id?: number;
	name?: string;
	age?: number;
}

export class User {
	events: Eventing = new Eventing();

	constructor(public data: userProps) {}

	get(propsName: string): userProps {
		return this.data[propsName];
	}

	set(update: userProps): void {
		Object.assign(this.data, update);
	}

	fetch(): void {
		axios
			.get(`http://localhost:3000/users/${this.get('id')}`)
			.then((response: AxiosResponse) => {
				this.set(response.data);
			})
			.catch((e) => {
				console.log(typeof e);
				console.log(e);
			});
	}

	save(): void {
		console.log('ok');
		let id = this.get('id');
		if (!id) {
			axios.post(`http://localhost:3000/users`, this.data).catch((e) => {
				console.log(e);
			});
		} else {
			axios
				.put(`http://localhost:3000/users/${id}`, this.data)
				.catch((e) => {
					console.log(e);
				});
		}
	}
}
