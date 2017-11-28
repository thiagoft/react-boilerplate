import React, {Component} from "react";

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Header extends Component {

    logout(event) {
        localStorage.clear();
        this.props.props.history.push("/");
    }

    render() {
        return (
            <div>
                <AppBar title="Title" 
                style={{paddingLeft:'220px'}}
                showMenuIconButton={false}
                iconElementRight={
                    <IconMenu
                        iconButtonElement=
                        {
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        }
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    >
                        <MenuItem primaryText="My Account" />
                        <MenuItem primaryText="Logout" onClick={this.logout.bind(this)} />
                    </IconMenu> 
                }
                />
            </div>
        );
    }
}
export default Header;