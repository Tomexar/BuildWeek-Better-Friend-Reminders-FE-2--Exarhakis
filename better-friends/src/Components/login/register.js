import React from 'react';
import {Form, Input, Button} from './styledComponents';
import { register } from '../../Actions/index';
import {connect} from 'react-redux';

class Register extends React.Component {
    state = {
        un: '',
        pw: '',
        fn: '',
        pn: ''
    }


    handleChanges = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    submit = (e) => {
        e.preventDefault();
        alert('you submitted')
        localStorage.setItem('username', this.state.un)
        localStorage.setItem('password', this.state.pw)
        localStorage.setItem('firstname', this.state.fn)
        localStorage.setItem('phonenumber', this.state.pn)
        this.props.register(this.state);
        this.setState({
            un: '',
            pw: '',
            fn: '',
            pn: ''
        })
    }

    render() {
        return (
            <Form onSubmit={this.submit}>
                <Input name="fn" onChange={this.handleChanges} value={this.state.fn} placeholder="First Name" />
                <Input name="pn" onChange={this.handleChanges} value={this.state.fn} placeholder="Phone Number" />
                <Input name="un" onChange={this.handleChanges} value={this.state.un} placeholder="username" />
                <Input name="pw" onChange={this.handleChanges} value={this.state.pw} placeholder="password" />
                <Button>Register</Button>
            </Form>
        )
    }
}


export default connect(null, {register})(Register);