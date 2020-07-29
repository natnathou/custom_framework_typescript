type CallBack = () => void;

export class Eventing {
	events: { [key: string]: CallBack[] } = {};

	on(eventName: string, callback: CallBack): void {
		const handlers = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers;
	}

	trigger(eventName: string): void {
		const handler = this.events[eventName] || [];
		handler.forEach((callBack: CallBack): void => {
			callBack();
		});
	}
}
