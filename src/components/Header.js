import React, {useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import Modal from "Components/navigation/NavigationModal";
import {appRoutes} from "../router";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const currentPage = appRoutes.find(link => {
    return (link.path === useLocation().pathname);
  }) || {};

  const Menu = () => {
    if(!showMenu) return null;

    return (
      <Modal className="navigation__modal" Toggle={() => setShowMenu(false)}>
        <div className="navigation__menu">
          {appRoutes.map(({path, name}) => (
            <NavLink to={path} className="navigation__link" onClick={() => setShowMenu(false)} key={`mobile-link-${name}`}>
              <span>{ name }</span>
            </NavLink>
          ))}
        </div>
      </Modal>
    );
  };

  return (
    <header className="header">
      <button className="navigation__menu-button" onClick={() => setShowMenu(!showMenu)}>
        Open
        {/*<ImageIcon*/}
        {/*  title={showMenu ? "Hide Navigation" : "Show Navigation"}*/}
        {/*  icon={MenuIcon}*/}
        {/*/>*/}
      </button>

      <div className="navigation__current-page">{currentPage.name || ""}</div>
      <div className="navigation__profile-image" />

      { Menu() }
    </header>
  );
};

export default Header;
