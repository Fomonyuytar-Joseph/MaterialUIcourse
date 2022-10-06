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
              }
})

function Layout({children}) {
    const classes = useStyles()
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
      </Drawer>
    </div>

        <div className={classes.page}>
        {children}
        </div>
    
    
    </div>
  )
}

export default Layout