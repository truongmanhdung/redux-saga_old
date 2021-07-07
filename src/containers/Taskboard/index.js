import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import React, { Component } from "react";
import { connect } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import { bindActionCreators } from "redux";
import * as workActions from "../../actions/work";
import * as modalActions from "../../actions/modal";
import WorkForm from "../../components/workform/index";
import WorkItem from "../../components/workitem/index";
import { STATUSES } from "../../constansts";
import styles from "./styles";
import PropTypes from "prop-types";
import Search from "../../components/search/index";
class taskBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    componentDidMount() {
        const { workActionsCreators } = this.props;
        const { fetchWorksRequest } = workActionsCreators;
        fetchWorksRequest();
    }
    handleClickOpen = () => {
        const { modalActionsCreators,workActionsCreators } = this.props;
        const { editWorks } = workActionsCreators;
        editWorks(null);
        const { showModal, changeModalTitle } =
        modalActionsCreators;
        showModal();
        changeModalTitle("Thêm mới công việc");
    };
    handleClose = () => {
        const { modalActionsCreators } = this.props;
        const { hideModal } =
        modalActionsCreators;
        hideModal();
    };
    handleSearch = (e) => {
        const { value } = e.target;
        const { workActionsCreators } = this.props;
        const { filterWorks } = workActionsCreators;
        filterWorks(value);
    };
    onEditForm = (work)=>{
        const { modalActionsCreators,workActionsCreators } = this.props;
        const { editWorks } = workActionsCreators;
        editWorks(work);
        const { showModal, changeModalTitle } =
        modalActionsCreators;
        showModal();
        changeModalTitle("Sửa công việc");
    }
    onDelete = (id)=>{
        if(confirm("bạn có muốn xóa không")){
            const { workActionsCreators } = this.props;
            const { deleteWorks } = workActionsCreators;
            deleteWorks(id);
        }
    }
    updateStatus = (id) =>{
        if(confirm("Bạn có muốn hoàn thành công việc hay không?")){
            const { workActionsCreators } = this.props;
            const { deleteWorks } = workActionsCreators;
            deleteWorks(id);
        }
    }
    renderBoard() {
        const { listWorks} = this.props;
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
                                updateStatus = {this.updateStatus}
                                onForm = {this.onEditForm}
                                works={workFilter}
                                status={status}
                                onDelete={this.onDelete}
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


    render() {
        const {modalReduce, classes} = this.props;
        const open = modalReduce.showModal;
        const title = modalReduce.title;
        return (
            <div>
                {/* <Button
                    variant="contained"
                    className={classes.m_20}
                    color="primary"
                    onClick={this.getData}
                >
                    Get Data
                </Button> */}
                <Button
                    variant="contained"
                    className={classes.m_20}
                    color="primary"
                    onClick={this.handleClickOpen}
                >
                    <AddIcon />
                    THÊM CÔNG VIỆC
                </Button>
                <Search handleSearch={this.handleSearch} />
                <div className={classes.root}>{this.renderBoard()}</div>
                <WorkForm open={open} title={title} handleClose={this.handleClose} />
            </div>
        );
    }
}

taskBoard.propTypes = {
    classes: PropTypes.object,
    workActionsCreators: PropTypes.shape({
        fetchWorksRequest: PropTypes.func,
        filterWorks: PropTypes.func,
    }),
    modalActionsCreators: PropTypes.shape({
        showModal: PropTypes.func,
        hideModal: PropTypes.func,
        changeModalContent: PropTypes.func,
        changeModalTitle: PropTypes.func,
    }),
};

const mapStateToProps = (state) => {
    return {
        listWorks: state.works.listWorks,
        modalReduce: state.modalReduce
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        workActionsCreators: bindActionCreators(workActions, dispatch),
        modalActionsCreators: bindActionCreators(modalActions, dispatch),

    };
};
export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(taskBoard)
);
