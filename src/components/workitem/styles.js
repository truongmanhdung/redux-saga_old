const styles = (theme) => ({
	taskBoard: {
		alignItems: "center",
	},
	shape: {
		padding: 20,
		margin: 20,
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "#009688",
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.secondary,
	},
	root: {
		flexGrow: 1,
	},
	textCenter: {
		textAlign: "center",
	},
	colorRed: {
		color: "#ff1744",
	},
	colorError: {
		backgroundColor: "#ff3d00",
		color: "white",
	},
	textRight: {
		textAlign: "right",
		padding: 20,
		marginBottom: 20,
	},
	mx_10: {
		marginLeft: 10,
		marginRight: 10,
	},
	m_20: {
		margin: 20,
	},
	p_20: {
		padding: 20,
	},
	d_flex: {
		display: "flex",
		justifyContent: "space-between",
		marginLeft: 10,
		marginRight: 10,
		alignItems: "center",
	},
	d_block: {
		opacity: 1,
		visibility: "visible",
	},
	d_none: {
		opacity: 0,
		visibility: "hidden",
	},
});
export default styles;
