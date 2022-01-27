import React  from "react";
import {ReactComponent as Logo} from '../../assets/instagram.svg';
import './Login.css';
class Login extends React.Component{
    state={
        email:'',
        pwd:''
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.isLogin(true)
        // console.log('Loging in....')
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className="div-login">
                <div className="div-login-login">
                    <Logo />
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
                        <input type='password' name='pwd' placeholder='Password' required onChange={this.handleChange} />
                        <button onSubmit={this.handleSubmit}>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;