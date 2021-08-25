import  React from 'react';
import styled from 'styled-components';
import logo from '../assets/Potato-Mochi-Plush.jpg';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import { FaBars } from 'react-icons/fa';
import CartButtons from './CartButtons'

const NavContainer = styled.nav `
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .nav-center {
        width: 90vw;
        margin: 0 auto;
        max-width: var(--max-width);
    }

    .nav-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .nav-logo {
        width: 7vw;
        height: 7vw;
        margin-left: -15px;
    }

    .nav-toggle {
        background: transparent;
        border: transparent;
        color: var(--clr-primary-5);
        cursor: pointer;
        svg{
            font-size: 2rem;
        }
    }

    .nav-links{
        display: none;
    }

`

const Nav = () => {
    return <NavContainer>
        <div className = "nav-center">
            <div className = "nav-header">
                <Link to= "/">
                    <img className = "nav-logo" src={logo} alt='couch potato'/>
                </Link>
                <button type="button" className="nav-toggle">
                    <FaBars/>
                </button>

                <ul className ="nav-links">
                    {links.map(
                        (link) => {
                            const {id, text,url} = link;
                            return <li key = {id}>
                                <Link to = {url}>
                                    {text}
                                </Link>
                            </li>
                        }
                    )}
                </ul>
                <CartButtons/>              
            </div>
        </div>
    </NavContainer>
}

export default Nav;