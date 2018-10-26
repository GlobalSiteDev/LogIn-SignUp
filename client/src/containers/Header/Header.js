import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import FontAwesome from 'react-fontawesome';
import SideNav from '../../components/SideNav/SideNav';


class Header extends Component {
    state = {
        showNav: false
    }

    onToggleNav = () => {
        this.setState({showSideNav: true})
    }

    render() {
        return (
            <header className={styles.Header}>
                <Link to="/">
                    LOGO
                </Link>
                <FontAwesome 
                    name="bars"
                    style={{
                        color: '#fff',
                        float: 'right',
                        marginRight: '15px'
                    }}
                />
                <SideNav
                    showNav={this.state.showNav}
                    onToggleNav={this.onToggleNav}
                    />
            </header>
        )
    }
}

export default Header;
