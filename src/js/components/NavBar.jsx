import React from 'react';
import { NavLink } from 'react-router-dom';

export class Navbar extends React.Component {
  
  constructor(){
    
    super();
    
    this.state = {
        data: [
            {
                id: Math.random(),
                label: 'Home', 
                url: '/',
                links: null
            },
            {
                id: Math.random(),
                label: 'New Game', 
                url: '/new',
                links: null
            },
            {
                id: Math.random(),
                label: 'Scoreboard', 
                url: '/scores',
                links: null
            },
        ]
    }
  }
  
  render(){

    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand">React-Tac-Toe</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">{ this.renderMenuItems(this.state.data) }</ul>
        </div>
      </nav>
    );
  }
  
  renderMenuItems(menuData){
    var items = menuData.map((item) => {
        return this.renderNavItem(item);
    });
    
    return items;
    
  }
  
  renderNavItem(navItemData){
    
    if(navItemData.links != null) return this.renderLikeADropDown(navItemData);
    else return this.renderLikeALink(navItemData);
  }
  
  renderLikeADropDown(navItemData){
    var links = navItemData.links.map(function(link){
      return <a key={link.id} className="dropdown-item" href={link.url}>{link.label}</a>;
    });
    
    return (<li key={navItemData.id} className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to={navItemData.label} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {navItemData.label}
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {links}
              </div>
            </li>);
  }
  
  renderLikeALink(navItemData){
    
    return (<li key={navItemData.id} className="nav-item">
              <NavLink className="nav-link" to={navItemData.url}>
                {navItemData.label}
              </NavLink>
            </li>
            );
  }
};