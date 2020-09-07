import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


function FooterChoosePlan() {
        return(
                 <FooterContainer>
                     <div className="footer-wrapper">
                <span className="question-link"
                style={{ marginLeft: '10%', color: '#999'}}>
                    Questions? Call &nbsp;<Link>Contact Us</Link></span>
                <div className="footer-columns">
                    <ul>
                        <li>
                            <Link>FAQ</Link>
                        </li>
                    </ul>    

                    <ul>
                        <li>
                            <Link>Help Center</Link>
                        </li>
                    </ul>
                    
                    <ul>
                        <li>
                            <Link>Terms of use</Link>
                        </li>
                    </ul>       
                    <ul>
                        <li>
                            <Link>Privacy</Link>
                        </li>
                    </ul>
                    </div>
                    </div>
            </FooterContainer>
        )
}

export default FooterChoosePlan;

//Footer Container
const FooterContainer = styled.footer`
    justify-content: center;
    background: #f3f3f3;
    padding: 1.875rem;
    margin-top: 10rem;
    position: relative;
    border-top: 1px solid #e6e6e6;
    z-index: 5;

    .footer-columns {
        width: 80%;
        margin: 1rem 3rem 0 3rem;
        color: #999;    
        font-size: 0.9rem;
        display: grid;
        grid-template-columns: repeat(4, 15.625rem);
        grid-gap: 0.3rem;
    }

    .footer-wrapper {
        margin: 0 auto;
        padding: 1.25rem;
    }

    .question-link {
        margin-left: 3rem;
        font-size: 1rem;
        color: #999;
    }

    ul li {
        list-style: none;
        margin-left: 24%;
    }

    a {
        color: #999;
        font-size: 0.8125rem;
        &:hover {
            text-decoration: underline;
            cursor: pointer;
            color: #999;
        }    
    }

    `;
