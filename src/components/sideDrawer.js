import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Navigation from "./navigation"
import Backdrop from "./backdrop"

const SideDrawer = props => {
  let sideDrawerClasses = ["side-drawer", "side-drawer--closed"]
  if (props.opened) {
    sideDrawerClasses = ["side-drawer", "side-drawer--opened"]
  }
  return (
    <>
      <Backdrop show={props.opened} clicked={props.closed} />
      <div className={sideDrawerClasses.join(" ")}>
        <nav className="side-drawer__nav">
          <Navigation clicked={props.closed} />
          <div className="side-drawer__contact">
            <a href="tel:+48503658858" className="side-drawer__link">
              <FontAwesomeIcon icon="mobile-alt" className="side-drawer__fa" />
              Telefon
            </a>
            <a
              href="mailto:kontakt@pracownia-button.pl"
              className="side-drawer__link"
            >
              <FontAwesomeIcon icon="envelope" className="side-drawer__fa" />
              Email
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default SideDrawer
