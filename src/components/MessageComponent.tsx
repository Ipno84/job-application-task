import * as React from "react";
import { observer } from "mobx-react";
import TextareaAutosize from "react-textarea-autosize";
import { Message } from "../model/MessageSource";
import { observable } from "mobx";

@observer
export class MessageComponent extends React.Component<{ msg: Message }> {
	@observable focused = false;

	render() {
		const { msg } = this.props;
		return (
			<div
				style={{
					padding: 5,
					background: msg.idx % 2 == 0 ? "lightgray" : "lightblue",
					border: "1px solid",
					borderColor: msg.idx % 2 == 0 ? "gray" : "blue",
				}}
			>
				Message {msg.idx}:
				<TextareaAutosize
					style={{
						boxSizing: "border-box",
						width: "100%",
						resize: "none",
					}}
					onChange={(s) => {
						msg.text = s.currentTarget.value;
					}}
					onFocus={() => (this.focused = true)}
					onBlur={() => (this.focused = false)}
					value={msg.text}
				/>
				<div
					style={{
						transition: "height 1s",
						height: this.focused ? 30 : 0,
						overflow: "hidden",
					}}
				>
					<button>I don't do anything</button>
				</div>
			</div>
		);
	}
}
