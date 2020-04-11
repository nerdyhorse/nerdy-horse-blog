import React from "react"
import logo from "./logo.svg"
import { Link } from "gatsby"
import "./style.css"

class Header extends React.Component {
  getLinkStyle(location, pathname) {
    return {
      paddingBottom: location.pathname === pathname ? `5px` : `0px`,
      boxShadow:
        location.pathname === pathname ? `0px 1px 0px 0px black` : `none`,
    }
  }

  getNavListItem(isLast, style, text, link) {
    const className = isLast ? "nav-li-last" : "nav-li"

    return (
      <li className={className}>
        <hi className="li-h1" style={style}>
          <Link className="li-link" to={link}>
            {text}
          </Link>
        </hi>
      </li>
    )
  }

  render() {
    const { location } = this.props

    const homeLinkStyle = this.getLinkStyle(location, "/")
    const projectsLinkStyle = this.getLinkStyle(location, "/projects")
    const postsLinkStyle = this.getLinkStyle(location, "/posts")
    const aboutLinkStyle = this.getLinkStyle(location, "/about")

    return (
      <div className="header-main">
        <Link className="logo-link" to={`/`}>
          <img src={logo} alt="nerdyhorse logo" className="logo-img" />
        </Link>

        <div className="header-nav">
          <ul className="nav-ul">
            {this.getNavListItem(false, homeLinkStyle, "Home", "/")}
            {this.getNavListItem(
              false,
              projectsLinkStyle,
              "Projects",
              "/projects"
            )}
            {this.getNavListItem(false, postsLinkStyle, "Posts", "/posts")}
            {this.getNavListItem(true, aboutLinkStyle, "About", "/about")}
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
