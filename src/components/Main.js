import React, { Component } from 'react';
import './../css/main.css';
import HeaderBar from './header-bar/HeaderBar';
import NavigationMenu from './navigation-menu/NavigationMenu';

class Main extends Component {
  render() {
    return (
      <div className="divMain" >
        <HeaderBar props={this.props} />
        <NavigationMenu/>
      </div>
    );
  }
}

export default Main;
