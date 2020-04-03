import React, { Fragment } from 'react';
import './navbar.component.css';
import NavDrawer from './navdrawer.component';
import {Button, Tabs, Tab, AppBar, Hidden} from '@material-ui/core/';
import { Route, Switch, Link } from 'react-router-dom';

const Navbar = () =>{

    const navLinks = {
        "Exercises": {
            "url": "/"
        },
        "New Exercise": {
            "url": "/create"
        },
        "New User": {
            "url": "/user"
        }
    };

    return (
        <div id="navbar">
            <AppBar position="static">
                <Route
                    path="/"
                    render={({ location }) => (
                        <Fragment>
                            <Hidden mdDown>
                                <div className="nav">
                                    <Link to="/">
                                        <Button 
                                            style={{
                                                color: 'white', 
                                                textTransform: 'capitalize',
                                                padding: '10px 20px',
                                                fontSize: '1.2rem'
                                            }}
                                        >
                                            Exercise Tracker
                                        </Button>
                                    </Link>
                                    <Tabs value={location.pathname}>
                                        {Object.entries(navLinks).map(([key, value]) => {
                                            return (
                                                <Tab 
                                                    label={key}
                                                    value={value.url}
                                                    component={Link}
                                                    to={value.url}
                                                    style={{
                                                        padding: '15px 0px'
                                                    }}
                                                />
                                            )
                                        })}
                                    </Tabs>
                                </div>
                            </Hidden>
                            <Hidden mdUp>
                                <div className="nav">
                                    <Link to="/">
                                        <Button 
                                            style={{
                                                color: 'white', 
                                                textTransform: 'capitalize',
                                                padding: '10px 20px',
                                                fontSize: '1.2rem'
                                            }}
                                        >
                                            Exercise Tracker
                                        </Button>
                                    </Link>
                                    <NavDrawer navLinks={navLinks} />
                                </div>
                            </Hidden>                            
                            <Switch>
                                {Object.entries(navLinks).map(([key, value]) => {
                                    return (
                                        <Route path={value.url} />
                                    )
                                })}
                            </Switch>
                        </Fragment>
                    )}
                />
            </AppBar>
        </div>
    )
}

export default Navbar; 