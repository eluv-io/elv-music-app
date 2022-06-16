import React, {useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import {ImageIcon} from "elv-components-js";
import Modal from "Components/navigation/NavigationModal";
import MenuIcon from "Assets/icons/menu";
import Logo from "Assets/images/logo";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const links = [
    {path: "/", name: "Home"},
    {path: "/discover", name: "Discover"},
    {path: "/library", name: "Library"}
  ];

  const currentPage = links.find(link => {
    return (link.path === useLocation().pathname);
  }) || {};

  const Menu = () => {
    if(!showMenu) return null;

    return (
      <Modal className="navigation__modal" Toggle={() => setShowMenu(false)}>
        <div className="navigation__menu">
          {links.map(({path, name}) => (
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
        <ImageIcon
          title={showMenu ? "Hide Navigation" : "Show Navigation"}
          icon={MenuIcon}
        />
      </button>

      <div className="navigation__current-page">{currentPage.name || ""}</div>

      <div className="navigation__profile-image" />

      <NavLink className="navigation__logo-container" to="/">
        <ImageIcon icon={Logo} title="Eluvio" className="navigation__logo" />
      </NavLink>

      { Menu() }
    </header>
  );
};

export default Header;
