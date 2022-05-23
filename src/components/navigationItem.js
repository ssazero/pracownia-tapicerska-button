import React from "react"
import { Link } from "gatsby"

const NavigationItem = props => {
  return (
    <li className="navigation__item">
      <Link
        to={props.to}
        className="navigation__item-link"
        activeClassName="navigation__item-link--active"
      >
        {props.children}
      </Link>
    </li>
  )
}

export default NavigationItem
