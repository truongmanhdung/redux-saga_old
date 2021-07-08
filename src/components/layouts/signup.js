import TextField from '@material-ui/core/TextField';
import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import * as actionUser from '../../actions/user';
class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        };
    }

    onChange = (e)=>{
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        const {history} = this.props;
        e.preventDefault();
        this.props.onSignUp(this.state);
        history.push("/works");
    }
    render() {
        return <div>
            <div className="login">
                <h1>Sign Up</h1>
                <form onSubmit={this.onSave}>
                    <TextField onChange={this.onChange} type="name" required style={{width: '100%'}} id="outlined-basic" label="Name" name="name" variant="outlined" />
                    <TextField onChange={this.onChange} type="email" required style={{width: '100%',marginTop: 20}} id="outlined-basic" label="Email" name="email" variant="outlined" />
                    <TextField onChange={this.onChange} type="password" required style={{width: '100%',marginTop: 20}} id="outlined-basic" label="Password" name="password" variant="outlined" />
                    <Button type="submit" style={{marginTop: 20}} variant="contained" color="primary">
                        Đăng ký
                    </Button>
                </form>
            </div>
        </div>;
    }
 
}
const mapStateToProps = (state) => {
    return {
        
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSignUp: (user) => dispatch(actionUser.signup(user)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);