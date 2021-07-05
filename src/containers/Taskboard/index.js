import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import React, { Component } from "react";
import { connect } from "react-redux";

import 'react-toastify/dist/ReactToastify.css';
import { bindActionCreators } from "redux";
import * as workActions from "../../actions/work";
import WorkForm from "../../components/workform/index";
import WorkItem from "../../components/workitem/index";
import { STATUSES } from "../../constansts";
import styles from "./styles";
import Search from '../../components/search/index';
class taskBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    // componentDidMount() {
    //     const { workActionsCreators } = this.props;
    //     const { fetchWorksRequest } = workActionsCreators;
    //     fetchWorksRequest();
    // }
    renderBoard() {
        const { listWorks } = this.props;
        var html = null;
        html = (
            <Grid container spacing={3}>
                {STATUSES.map((status, index) => {
                    if (listWorks) {
                        const workFilter = listWorks.filter(
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
                    }
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
    getData = () =>{
        const { workActionsCreators } = this.props;
        const { fetchWorksRequest } = workActionsCreators;
        fetchWorksRequest();
    }
    handleSearch = (e) =>{
        const {value} = e.target;
        const { workActionsCreators } = this.props;
        const {filterWorks} = workActionsCreators;
        filterWorks(value);
    }

    render() {
        
        const { classes } = this.props;
        const { open } = this.state;
        return (
            <div>
                <Button
                    variant="contained"
                    className={classes.m_20}
                    color="primary"
                    onClick={this.getData}
                >
                    Get Data
                </Button>
                <Button
                    variant="contained"
                    className={classes.m_20}
                    color="primary"
                    onClick={this.handleClickOpen}
                >
                    <AddIcon />
                    THÊM CÔNG VIỆC
                </Button>
                <Search handleSearch = {this.handleSearch} />
                <div className={classes.root}>{this.renderBoard()}</div>
                <WorkForm open={open} handleClose={this.handleClose} />
               
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listWorks: state.works.listWorks,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        workActionsCreators: bindActionCreators(workActions, dispatch),
    };
};
export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(taskBoard)
);
