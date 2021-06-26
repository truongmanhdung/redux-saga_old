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
    },
    mx_10: {
        marginLeft: 10,
        marginRight: 10,
    },
    m_20: {
        margin: 20,
    },
});
export default styles;
