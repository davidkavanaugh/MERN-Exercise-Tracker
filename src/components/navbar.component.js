import React from 'react';
import './navbar.component.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import NavDrawer from './navdrawer.component';

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
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Hidden mdDown>
                        <div className="nav">
                            <Typography variant="h6">
                                Exercise Tracker
                            </Typography>
                            <div className="nav-links">
                                {Object.entries(navLinks).map(([key, value]) => {
                                    return (
                                        <Typography variant="h6" className="link">
                                            <Link to={value.url}>
                                                {key}
                                            </Link>
                                        </Typography>
                                    )
                                })}
                            </div>
                        </div>
                    </Hidden>
                    <Hidden mdUp>
                        <div className="nav">
                            <Typography variant="h6" style={{padding: '7px 7px'}}>
                                Exercise Tracker
                            </Typography>
                            <NavDrawer navLinks={navLinks} />
                        </div>
                    </Hidden>
                </Toolbar>
            </AppBar>    
        </div>
    );
}

export default Navbar; 