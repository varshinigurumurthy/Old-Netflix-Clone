import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { Icon } from  'react-icons-kit/';
import {ic_cancel} from 'react-icons-kit/md/ic_cancel';
import {ic_check} from 'react-icons-kit/md/ic_check';
import { generateMedia } from 'styled-media-query';
import {Link} from 'react-router-dom';

function TabContentThree() {
    return(
        <TabContainer>
            <div className = "tab-content">
                <div className = "tab-top-content">
                    <span style = {{fontSize: '1.4rem'}}>
                        Choose one plan and watch everything on Netflix.
                    </span>
                    <br/>
                    <Link className= "btn" to="/choose-plan">
                    <Button className= "btn">try it now</Button>
                    </Link>
                    </div>
            </div> 
              {/* Tab Bottom Content */}
              <div className = "tab-bottom-content">
                  <table>
                      <thead>
                          <tr>
                              <th></th>
                              <th>Basic</th>
                              <th>Standard</th>
                              <th>Premium</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>Monthly Price</td>
                              <td>$9.99</td>
                              <td>$13.99</td>
                              <td>$16.99</td>
                          </tr>
                          <tr>
                              <td>HD available</td>
                              <td>
                                  <Icon icon ={ic_cancel} size={20}/>
                              </td>
                              <td>
                                  <Icon icon ={ic_check} size={20}/>
                              </td>
                              <td>
                                  <Icon icon ={ic_check} size={20}/>
                              </td>
                          </tr>
                          <tr>
                          <td>Ultra HD available</td>
                          <td>
                                  <Icon icon ={ic_cancel} size={20}/>
                              </td>
                              <td>
                                  <Icon icon ={ic_cancel} size={20}/>
                              </td>
                              <td>
                                  <Icon icon ={ic_check} size={20}/>
                              </td>
                          </tr>
                          <tr>
                          <td>Screens you can watch at the same time</td>
                          <td>1</td>
                          <td>2</td>
                          <td>4</td>
                          </tr>
                          <tr>
                          <td>Watch on your laptop, TV, phone and tablet</td>
                          <td>
                                  <Icon icon ={ic_check} size={20}/>
                              </td>
                              <td>
                                  <Icon icon ={ic_check} size={20}/>
                              </td>
                              <td>
                                  <Icon icon ={ic_check} size={20}/>
                              </td>
                          </tr>
                          <tr>
                          <td>Unlimited Movies and TV shows</td>
                          <td>
                                  <Icon icon ={ic_check} size={20}/>
                              </td>
                              <td>
                                  <Icon icon ={ic_check} size={20}/>
                              </td>
                              <td>
                                  <Icon icon ={ic_check} size={20}/>
                              </td>
                          </tr>
                          <tr>
                          <td>Cancel anytime</td>
                          <td>
                                  <Icon icon ={ic_check} size={20}/>
                              </td>
                              <td>
                                  <Icon icon ={ic_check} size={20}/>
                              </td>
                              <td>
                                  <Icon icon ={ic_check} size={20}/>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
        </TabContainer>
    )
}

export default TabContentThree;

//Media Query
const customMedia = generateMedia({
    lgDesktop : '1350px',
    mdDesktop: '1000px'
})


// Main Tab Content Container
const TabContainer = styled.div`
    background: var(--main-deep-dark);

    .tab-content {
        margin: 0 15%;
    }

    // Tab Top Content
    .tab-top-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        justify-content: center;
        align-items: center;
        padding: 2.5rem 0;
        margin-left: 12rem;
        ${customMedia.lessThan('lgDesktop')`
            grid-template-columns: 1fr;
            row-gap: 1.5rem;
            text-align: center;
        `}
    }

    span {
        grid-column: 1 / 8;
        ${customMedia.lessThan('lgDesktop')`
            grid-column: 1 / -1;            
        `}
    }

    .btn {
        grid-column: 10 / 12;
        margin-left: 3rem;
        margin-right: 5.1rem;
        ${customMedia.lessThan('mdDesktop')`
            grid-column: 1 / -1;
            margin-left: 30%;
            margin-right: 30%;
        `}
    }
    
    // Table
    table {
        width: 70%;
        margin-left: 14rem;
        margin-top: 2rem;
        border-collapse: collapse;
    }

    table thead th {
        text-transform: uppercase;
        padding: 0.8rem;
    }

    table tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }

    table tbody tr td {
        color: #999;
        padding: 0.8rem 1.2rem;
        text-align: center;
    }

    table tbody tr td:first-child {
        text-align: left;
    }

    table tbody tr:nth-child(even) {
        background: #222;
    }
`;