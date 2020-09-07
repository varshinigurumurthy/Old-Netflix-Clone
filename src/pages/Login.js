import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import styled from 'styled-components';
import LoginForm from '../components/login/LoginForm';
import LoginFooter from '../components/login/LoginFooter';
import { generateMedia } from 'styled-media-query';

class Login extends Component {
    render() {
        return(
            <div className="main-login-container">
                <div className="header-top">
                    <Logo src= {logo} alt="logo" className="logo"/>
                </div>
                <LoginForm />
                <LoginFooter />
            </div>
        );
    }
}

export default Login;

//Media Query
const customMedia = generateMedia({
    tablet: '640px',
    lgTablet: '740px'
})


 //Logo
 const Logo = styled.img`
    width: 11rem;
    position: absolute;
    top: 25%;
    left: 11%;
    transform: translate(50%, -50%);
    margi-left: 0;
    ${customMedia.lessThan('tablet')`
        top: 25%;
        left: 23%;
    `}
`;