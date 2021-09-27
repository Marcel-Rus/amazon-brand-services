import React from 'react';
import BrandRegistry from './components/BrandRegistry';
import Transparency from './components/Transparency';
import SecondaryBar from './components/SecondaryBar';
import ProjectZero from './components/ProjectZero';
import IPAccelerator from './components/IPAccelerator';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import AmazonLogo from './assets/images/amazon/logo-amazon-white.svg';
import styles from './App.module.scss';
import './App.scss';

function App() {
    return (
        <Router>
            <div className={`${styles.navBar}`}>
                <div class={`${styles.container}`}>
                    <div className={`top-bar ${styles.topBar} ${styles.darkTopBar}`}>
                        <div className="top-bar-left">
                            <ul className="menu">
                                <img src={AmazonLogo}></img>
                                <li><a href="#0"><Link to="/brandregistry">Brand Registry</Link></a></li>
                                <li><a href="#0"><Link to="/transparency">Transparency</Link></a></li>
                                <li><a href="#0"><Link to="/projectzero">Project Zero</Link></a></li>
                                <li><a href="#0"><Link to="/ipaccelerator">IP Accelerator</Link></a></li>
                            </ul>
                        </div>
                        <div className="top-bar-right">
                            <ul className="menu">
                                <li><a href="#">Progress Report</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <SecondaryBar />
            </div>
            <Switch>
                <Route path="/brandregistry">
                    <BrandRegistry />
                </Route>
                <Route path="/transparency">
                    <Transparency />
                </Route>
                <Route path="/projectzero">
                    <ProjectZero />
                </Route>
                <Route path="/ipaccelerator">
                    <IPAccelerator />
                </Route>
                <Route path="/">
                    <BrandRegistry />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;