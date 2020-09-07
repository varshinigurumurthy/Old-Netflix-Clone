import React, { Component } from 'react';
import { TabList, Tab , Tabs , TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';
import '../css/TabsNav.css';
import TabDevices from './tabs_nav/TabDevices';
import TabPrices from './tabs_nav/TabPrices';
import TabContentOne from './TabContentOne';
import TabContentTwo from './TabContentTwo';
import TabContentThree from './TabContentThree';

 class TabComponent extends Component {
     state = {
         tabIndex : 0
     }
     render() {
         return (
            <div>
                <Tabs className = "tabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => 
                this.setState({tabIndex})}
                >
                  <TabList className = "tab-nav-container">
                      <Tab className={`${this.state.tabIndex === 0? '.tab-selected active' : null}`}>
                          <TabDoor />
                      <p className="lgScreen" style={{marginBottom: '1.875rem'}}>
                          <strong>
                              No commitments <br />
                          Cancel online at anytime
                          </strong>
                          </p>
                          <br/>
                          <span className= "mdScreen" style={{marginTop:'0.4rem'}}>Cancel</span>
                      </Tab>
                      
                      <Tab className={`${this.state.tabIndex === 1? '.tab-selected active' : null}`}>
                          <TabDevices />
                      <p className="lgScreen" style={{marginTop: '-5.3125rem'}}>
                          <strong>
                              Watch anywhere
                              </strong>
                              </p>
                              <span className="mdScreen" style={{marginTop: '-5.3125rem'}}>Devices</span>
                      </Tab>
                      <Tab className={`${this.state.tabIndex === 2? '.tab-selected active' : null}`}>
                          <TabPrices/>
                      <p className="lgScreen">
                          <strong>
                              Pick your price
                              </strong>
                              </p>
                              <br/>
                              <span className="mdScreen">Prices</span>
                      </Tab>
                  </TabList>
                  {/* Tab Content */}
                  <TabPanel>
                      <TabContentOne />
                  </TabPanel>
                  <TabPanel>
                      <TabContentTwo />
                  </TabPanel>
                  <TabPanel>
                      <TabContentThree />
                  </TabPanel>              
                </Tabs>
            </div>
         );
     }
 }

 export default TabComponent;