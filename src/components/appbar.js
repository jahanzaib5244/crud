import React from 'react';
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SettingsIcon from '@material-ui/icons/Settings';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },

    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },

    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));



function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
   const shoot = (a) => {
        alert(a);
      }
  

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>

            <div className={classes.toolbar} />
            <Divider />
    
            <List>
                <Divider />

                <Divider />
                
                <Link to="/">
                <ListItem button key="add user" onClick={<Link to="/"></Link>} >
                    <ListItemIcon > <HomeIcon /> </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                </Link>
                <Divider />
                <Link to="/user">
                <ListItem button key="add user"   >
                    <ListItemIcon> <PersonIcon /> </ListItemIcon>
                    <ListItemText primary="Users" />
                </ListItem>
                </Link>
                <Link to="/roles">
                <ListItem button key="add user" >
                    <ListItemIcon> <RecordVoiceOverIcon /> </ListItemIcon>
                    <ListItemText primary="Role" />
                </ListItem>
                </Link>
                <Link to="/permission">
                <ListItem button key="add user" >
                    <ListItemIcon> <VpnKeyIcon /> </ListItemIcon>
                    <ListItemText primary="Permission" />
                </ListItem>
                </Link>
                <Divider />
                
                <Link to="/news">
                <ListItem button key="add user" >
                    <ListItemIcon> <AssignmentIcon /> </ListItemIcon>
                    <ListItemText primary="News" />
                </ListItem>
                </Link>
                <Link to="/pages">
                <ListItem button key="add user" >
                    <ListItemIcon> <MenuBookIcon /> </ListItemIcon>
                    <ListItemText primary="Pages" />
                </ListItem>
                </Link>
                <Link to="/menu">
                <ListItem button key="add user" >
                    <ListItemIcon> <MenuIcon /> </ListItemIcon>
                    <ListItemText primary="Menu" />
                </ListItem>
                </Link>
                <Link to="/advance">
                <ListItem button key="add user" >
                    <ListItemIcon> <SettingsIcon /> </ListItemIcon>
                    <ListItemText primary="Advanced" />
                </ListItem>
                </Link>
                <Divider />

                
                <ListItem button key="add user" >
                    <ListItemIcon> <ExitToAppIcon /> </ListItemIcon>
                    <ListItemText primary="Log Out" />
                </ListItem>
                
            </List>
            <Divider />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Back pack
          </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
               
                
            </main>
        </div>
    );
}


export default ResponsiveDrawer;
