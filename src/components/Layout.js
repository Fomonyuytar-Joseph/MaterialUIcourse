import React from 'react'
import { makeStyles } from "@material-ui/core";
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';

     const drawerWidth= 240
const useStyles = makeStyles({
              page:{
                background:"#f9f9f9",
                width:"100%"

              },
              drawer:{
                width:drawerWidth,
                

              },
              drawerPaper:{
                width:drawerWidth,
                

              },
              root:{
                  display:"flex"
              },
              active:{
                background:"#f4f4f4"
              }
            
})

function Layout({children}) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
      {
        text:"My notes",
        icon: <SubjectOutlined  color="secondary"/>,
        path:"/create"
      },
      {
        text:"Create Note",
        icon: <AddCircleOutlined color="secondary"/>,
        path:"/"
      }
    ]
  return (
    <div className={classes.root}>
    {/* app bar */}



    {/* side drawer */}
    <div>
        <Drawer 
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{paper:classes.drawerPaper}}

        >
      <Typography variant='h5'>
        Joseph Notes
      </Typography>

      {/* List Links */}
      <List>
          {
            menuItems.map(item =>(
              <ListItem
              button
              key={item.text}
              onClick={()=> history.push(item.path)}
              className={location.pathname==item.path ? classes.active : null}
              
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.text}</ListItemText>

                </ListItem>
            ))
            
          }
      </List>
      </Drawer>
    </div>

        <div className={classes.page}>
        {children}
        </div>
    
    
    </div>
  )
}

export default Layout