import { withStyles } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import EditIcon from "@material-ui/icons/Edit";
import React, { Component } from "react";
import styles from "./styles";
class WorkItem extends Component {

    render() {
        const { classes, index, status, works, onForm, onDelete, updateStatus } = this.props;
        const d_none = classes.d_none;
        const d_block = classes.d_block;
        const elements = works.map((work, index) => {
            return (
                <Paper key={index} className={classes.textRight}>
                    <div className={classes.d_flex}>
                        <h3>{work.name_work}</h3>
                        <h3>{work.time}p</h3>
                    </div>
                    <div className={classes.d_flex}>
                        <p>{work.description}</p>
                    </div>
                    <Fab
                        className={work.status === true ? d_none : d_block}
                        onClick = {()=> updateStatus(work.id,work.status)}
                    >
                        <DoneIcon />
                    </Fab>
                    <Fab
                        color="secondary"
                        className={classes.mx_10}
                        onClick={() => onForm(work)}
                        aria-label="edit"
                    >
                        <EditIcon />
                    </Fab>
                    <Fab className={classes.colorError}
                     aria-label="delete"
                     onClick={() => onDelete(work.id)}
                     >
                        <DeleteIcon />
                    </Fab>
                </Paper>
            );
        });
        return (
            <Grid key={index} item xs={12} sm={6}>
                <Paper className={classes.shape}>{status.label}</Paper>
                <div className={classes.p_20}>{elements}</div>
            </Grid>
        );
    }
}
export default withStyles(styles)(WorkItem);
