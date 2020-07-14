import React = require("react");
import { MessageComponent } from "./MessageComponent";
import { MessageSource } from "../model/MessageSource";
import { Centered } from "./Centered";
import { observer } from "mobx-react";
import { observable, computed } from "mobx";

@observer
export class App extends React.Component {
	@observable hugeList = false;

	@computed get messageSource() {
		return new MessageSource(this.hugeList ? 10 * 1000 : 100);
	}

	render() {
		return (
			<Centered style={{ height: "100%" }}>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						height: "100%",
					}}
				>
					<h1 style={{ padding: 0, marginBottom: 0 }}>
						Virtual Scrolling Demo
					</h1>
					<div style={{ padding: 10 }}>
						<input
							type="checkbox"
							id="hugeList"
							checked={this.hugeList}
							onChange={(e) =>
								(this.hugeList = e.currentTarget.checked)
							}
						/>
						<label htmlFor="hugeList">Display 10k items</label>
					</div>

					<div style={{ flex: 1, overflow: "auto" }}>
						{this.messageSource.messages.map((m) => (
							<div key={m.id}>
								<MessageComponent msg={m} />
							</div>
						))}
					</div>
				</div>
			</Centered>
		);
	}
}
