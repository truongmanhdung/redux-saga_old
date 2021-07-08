import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, Switch, Route } from "react-router-dom";
import routes from "../../routes";
import { connect } from "react-redux";
import * as actionUser from '../../actions/user';
class Header extends React.Component {
    showContent = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    };
    logout = ()=>{
        this.props.onLogout();
    }
    showHeader(){
        var header = null;
        var users = JSON.parse(localStorage.getItem("user"));
        if(users){
            var name = users.name;
            header = (<div  style={{display: 'flex', alignItems: 'center'}}>
                <Button color="secondary">
                    Chào {name}
                </Button>
                <Button variant="contained" color="secondary" onClick={this.logout}>
                    Đăng xuất
                </Button>   
            </div>);
        }else{
            header = (<div  style={{display: 'flex', alignItems: 'center'}}>
                <Button variant="contained" style={{marginRight: 20}} color="secondary">
                    <Link to="/login">Login</Link>
                </Button>
                <Button variant="contained" color="secondary">
                    <Link to="/signup">Sign Up</Link>
                </Button>   
            </div>);
        }
        return header;
    }
    render(){
        
    return (
        
        <div>
            <AppBar position="static">
                <Toolbar style={{display: 'flex', justifyContent: 'space-between',alignItems: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <IconButton
                            edge="start"
                
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">
                            <Link to="/works">List Works</Link>
                        </Typography>
                    </div>
                    <div>
                        {this.showHeader()}
                    </div>
                </Toolbar>
            </AppBar>
            <div>{this.showContent(routes)}</div>
        </div>
    );
}   
}
const mapStateToProps = (state) => {
    return {
        users: state.listUsers
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onLogout : () => dispatch(actionUser.logout())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);