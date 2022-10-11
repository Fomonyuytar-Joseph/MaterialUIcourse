import React from 'react'
import {  makeStyles } from "@material-ui/core";
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
import {format} from "date-fns";
import {Avatar} from '@material-ui/core';


     const drawerWidth= 240
     const useStyles = makeStyles((theme) => {
      return {
        page: {
          background: '#f9f9f9',
          width: '100%',
          padding: theme.spacing(3),
        },
        root: {
          display: 'flex',
        },
        drawer: {
          width: drawerWidth,
        },
        drawerPaper: {
          width: drawerWidth,
        },
        active: {
          background: '#f4f4f4'
        },
        title: {
          padding: theme.spacing(2),
        },
        appBar:{
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
        toolbar:theme.mixins.toolbar,
        date:{
          flexGrow:1
        },
        avatar:{
          marginLeft: theme.spacing(2 )
        }
           
        
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
    <AppBar
     className={classes.appBar}
     elevation={0}>
      <Toolbar  >
        <Typography className={classes.date}>
       Today is the  {format(new Date(), 'do MMMM Y')}
        </Typography>
        <Typography>
          Joseph
        </Typography>
        <Avatar src="/mario-av.png" className={classes.avatar}/> 
      </Toolbar>

    </AppBar>



    {/* side drawer */}
    <div>
        <Drawer 
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{paper:classes.drawerPaper}}

        >
      <Typography variant='h5' className={classes.title}>
      
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
          <div className={classes.toolbar }> </div>
          {children}
           
        
        </div>
    
    
    </div>
  )
}

export default Layout