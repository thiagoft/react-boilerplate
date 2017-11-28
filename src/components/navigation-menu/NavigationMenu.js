import React, {Component} from "react";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

export default class NavigationMenu extends Component {
  render() {
    return (
      <div>
        <Drawer open={true}
        width={200}>
            <AppBar title="Title" 
                showMenuIconButton={false}
                />
            <MenuItem>Menu Item</MenuItem>
        </Drawer>
      </div>
    );
  }
}