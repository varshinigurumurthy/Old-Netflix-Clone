import React, { Component } from 'react'
import logo from '../svg/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right';
import { Button } from './Button';
//Media Query
import { generateMedia } from 'styled-media-query';

class Header extends Component{
    render() {
        return(
          <HeaderContainer className="header-container">
              <Div className="header-top">
                <Logo src={logo} alt="" />
                <MyNavLink to="/login" className=" btn signIn-btn" activeClassName="active">Sign In</MyNavLink>
              </Div> 
              {/* Header Content */}
              <HeaContent className="header-content">
                  <Title>Unlimited movies, TV <br/> shows and more.</Title>
                  <SubTitle>Watch anywhere. Cancel anytime.</SubTitle>
                  <Link to="/choose-plan" >
                  <Button className="main-offer-btn" primary>
                      try it now
                  <Icon className="Icon" icon={ic_keyboard_arrow_right} size={37} />
                  </Button>
                  </Link>
              </HeaContent>
          </HeaderContainer>
        )
    }
}

export default Header;  

const customMedia = generateMedia({
    lgDesktop: '1350px',
    mdDesktop: '1150px',
    tablet: '960px',
    smtablet: '740px'
})


//logo
const Logo= styled.img`
    width: 10rem;
    height: 3.5rem;
    position: absolute;
    top: 25%;
    left: 10%;
    transform: translate(-50% ,-50%);
    ${customMedia.lessThan('tablet')`
        left: 20%;
    `}
`;
    
//Header container

const HeaderContainer = styled.header`
.Icon svg {
    vertical-align: bottom !important;
    margin-left: 1.5rem;
    
    ${customMedia.lessThan('smtablet')`
    display: none ! important;
`}
}
`;

const MyNavLink= styled(NavLink)`
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50% , -50%);
    cursor: pointer;
    transition: background 0.2s ease-in;
    &:hover{
        background: #d30913;
    }
    ${customMedia.lessThan('smtablet')`
        margin-top: 1.25rem;
        right: 5%;
    `}
`;

//Header Top
const Div = styled.div`
    position: relative;
    height: 10rem;
    z-index: 1;
`;

// Header content
const HeaContent = styled.div`
    width: 65%;
    position: relative;
    margin: 4.4rem auto 0;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    z-index: 1;
    ${customMedia.lessThan('smtablet')`
    display: grid;
    grid-template-rows: repeat(3, 60px);
    margin-top: 8rem;   
    `}
    }

  

    .main-offer-btn {
        ${customMedia.lessThan('lgDesktop')`
            margin: 0 33%;
            font-size: 1.5rem;
        `}
        ${customMedia.lessThan('mdDesktop')`
            margin: 0 25%;
            font-size: 1.5rem;
        `}
        ${customMedia.lessThan('tablet')`
            margin: 0 20%;
            font-size: 1.3rem;
        `}
    }
`;



// Main title
const Title = styled.h1`
    margin: 0 0 1.1rem;
    font-size: 3.5rem;
    font-weight: 600;
    line-height: 1.1em;
    ${customMedia.lessThan('tablet')`
    font-size: 2.6rem;
`}
`;

// Sub Title
const SubTitle= styled.h2`
    font-weight: 300;
    font-size: 1.875rem;
    line-height: 1.25em;
    margin: 0 0 1.875rem;
    ${customMedia.lessThan('smtablet')`
    font-size: 1.4rem;
    margin: 0;
`}
`;
