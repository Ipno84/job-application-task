import { observable } from "mobx";
import { LoremIpsumMessages } from "./LoremIpsum";

export class MessageSource {
	@observable
	public readonly messages: Message[];

	constructor(count: number) {
		this.messages = new Array<Message>();
		for (let i = 0; i < count; i++) {
			this.messages.push(
				new Message(
					i,
					i,
					LoremIpsumMessages[i % (LoremIpsumMessages.length - 1)]
				)
			);
		}
	}
}

export class Message {
	@observable
	public text: string;

	constructor(
		public readonly idx: number,
		public readonly id: number,
		text: string
	) {
		this.text = text;
	}
}
