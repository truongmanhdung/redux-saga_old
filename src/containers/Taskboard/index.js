import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import Grid from "@material-ui/core/Grid";

import { STATUSES } from "../../constansts";
import WorkForm from "../../components/workform/index";
import WorkItem from "../../components/workitem/index";
const works = [
    {
        name: "học lập trình1",
        description: "học react js1",
        time: 30,
        status: 1,
    },
    {
        name: "học lập trình2",
        description: "học react js2",
        time: 30,
        status: 1,
    },
    {
        name: "học lập trình3",
        time: 30,
        description: "học react js3",
        status: 0,
    },
];
class taskBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    renderBoard() {
        var html = null;
        html = (
            <Grid container spacing={3}>
                {STATUSES.map((status, index) => {
                    const workFilter = works.filter(
                        (work) => work.status === status.value
                    );
                    return (
                        <WorkItem
                            onform={this.handleClickOpen}
                            works={workFilter}
                            status={status}
                            key={index}
                            index={index}
                        />
                    );
                })}
            </Grid>
        );
        return html;
    }
    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };
    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;
        return (
            <div>
                <Button
                    variant="contained"
                    className={classes.m_20}
                    color="primary"
                    onClick={this.handleClickOpen}
                >
                    <AddIcon />
                    THÊM CÔNG VIỆC
                </Button>
                <div className={classes.root}>{this.renderBoard()}</div>
                <WorkForm open={open} handleClose={this.handleClose} />
            </div>
        );
    }
}

export default withStyles(styles)(taskBoard);
