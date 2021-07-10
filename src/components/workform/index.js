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
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.workEditing){
          this.setState({
            id: nextProps.workEditing.id,
            name_work: nextProps.workEditing.name_work,
            userId: nextProps.workEditing.userId,
            time: nextProps.workEditing.time,
            description: nextProps.workEditing.description,
            status: nextProps.workEditing.status,
          });
        }else{
            this.setState({
                id: '',
                name_work: '',
                userId: 1,
                time: '',
                description: '',
                status: false
            });
        }
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
        const {workEditing} = this.props;
        e.preventDefault();
        if(workEditing && workEditing.id){
            this.props.onUpdateWork(this.state);
        }else{
            this.props.onAddWork(this.state);
        }
    }
    renderStatus(){
        let html = null;
        const {workEditing, classes} = this.props;
        classes.formControl = undefined;
        if(workEditing && workEditing.id){
            html = (<FormControl className={classes.formControl} style={{width: '200px'}}>
                        <InputLabel  id="demo-simple-select-label">Trạng thái</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={this.onChange} name="status"
                            value={this.state.status}
                        >
                        <MenuItem value={true}>Hoàn thành</MenuItem>
                        <MenuItem value={false}>Chưa hoàn thành</MenuItem>
                        </Select>
                    </FormControl>);
        }
        return html;

    };
    render() {
        const {name_work,time,description } = this.state;

        const { open, handleClose, title ,workEditing} = this.props;

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

                                onChange={this.onChange}
                                value={name_work}
                            />
                            <TextField
                                margin="dense"
                                id="name1"
                                label="Description"
                                type="text"
                                required
                                fullWidth
                                name="description"
                                onChange={this.onChange}
                                value={description}
                            />
                            <TextField
                                margin="dense"
                                id="name2"
                                label="Time"
                                required
                                type="number"
                                fullWidth
                                name="time"
                                min="0"
                                value={time}
                                onChange={this.onChange}
                            />

                            {this.renderStatus()}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button type="submit" color="primary">
                                {workEditing?"sửa công việc" : "thêm công việc"}
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
        workEditing: state.works.workEditing
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onAddWork: (work) => dispatch(actionWorks.addWorks(work)),
        onUpdateWork : (work) => dispatch(actionWorks.updateWorks(work))
    };
};
export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(workForms));
