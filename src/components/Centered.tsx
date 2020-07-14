import React = require("react");

export function Centered(props: {
	children: React.ReactNode;
	style?: React.CSSProperties;
}) {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "row",
				...props.style,
			}}
		>
			<div style={{ flex: "1", maxWidth: 800 }}>{props.children}</div>
		</div>
	);
}
