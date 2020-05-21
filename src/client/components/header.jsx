import React from 'react';
import styles from './header.css';
import logo from "../images/logo.jpg"

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div styleName='styles.headerContainer'>
                <img src={logo} styleName="styles.logo" />
                <h1 styleName="styles.title">Roy Chess Academy</h1>
            </div>
        )
    }
}