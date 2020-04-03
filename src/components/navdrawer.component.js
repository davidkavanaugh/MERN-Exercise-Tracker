import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, IconButton, Tabs, Tab } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Route, Link } from 'react-router-dom';
import './navbar.component.css';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

const NavDrawer = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {["right"].map(anchor => (
        <React.Fragment key={anchor}>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Route
                path="/"
                render={({ location }) => (
                  <div>
                    <Tabs
                      orientation="vertical"
                      variant="scrollable"
                      value={location.pathname}
                      onChange={handleChange}
                      aria-label="Vertical tabs example"
                      className={classes.tabs}
                    >
                      {Object.entries(props.navLinks).map(([key, value]) => {
                        return (
                          <Tab 
                              label={key}
                              value={value.url}
                              component={Link}
                              to={value.url}
                              style={{display: 'flex', flexDirection:'column'}}
                              className="tab"
                          />
                        )}
                      )}
                    </Tabs>
                  </div>
                )}
            />
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default NavDrawer;