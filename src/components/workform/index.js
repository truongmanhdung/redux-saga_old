import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as actionWorks from '../../actions/work';
import { withStyles } from "@material-ui/core";
import styles from "./styles";
class workForms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name_work: '',
            userId: 1,
            time: '',
            description: '',
            status: false
        };
    };

    componentDidUpdate(nextProps) {
        
    }
    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    }

    onSave = (e) => {
        e.preventDefault();
        this.props.onAddWork(this.state);
    }
    render() {
        const {name_work,time,description} = this.state;
        const { open, handleClose, title } = this.props;
        return (
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                        {title}
                    </DialogTitle>
                    <form onSubmit={this.onSave}>
                        <DialogContent >
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Name"
                                type="fullname"
                                required
                                fullWidth
                                name="name_work"
                                value={name_work}
                                onChange={this.onChange}
                            />
                            <TextField
                                margin="dense"
                                id="name1"
                                label="Description"
                                type="text"
                                required
                                fullWidth
                                name="description"
                                value={description}
                                onChange={this.onChange}
                            />
                            <TextField
                                margin="dense"
                                id="name2"
                                label="Time"
                                required
                                type="number"
                                fullWidth
                                name="time"
                                value={time}
                                onChange={this.onChange}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button type="submit" color="primary">
                                Thêm
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onAddWork: (work) => dispatch(actionWorks.addWorks(work))
    };
};
export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(workForms))