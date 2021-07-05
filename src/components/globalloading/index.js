import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import loadingicon from '../../assets/images/l.gif';
import styles from './style';
class globalLoading extends Component {
    render() {
        const {classes,showLoading} = this.props;
        let html = null;
        if(showLoading === true){
            html = (<div className={classes.globalLoading}>
                <img src={loadingicon} alt="loading" className={classes.icon}/>
            </div>);
        }
        return (
            <div>
                {html}
            </div>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        showLoading: state.loading.showLoading,
    };
};

const withConnect = connect(
    mapStateToProps,
    null
);

export default compose(
    withStyles(styles),
    withConnect
)(globalLoading);

