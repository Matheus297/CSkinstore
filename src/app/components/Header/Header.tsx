"use client";
import 'bulma/css/bulma.min.css';
import { Logo, Navbar } from './styles';


interface Props {
    children?: any
}


export const Header = ({ children }: Props) => {
    return (
        <Navbar className="navbar is-primary">
            <div className="navbar-brand">
                <Logo className="navbar-item" src='https://www.cskinstore.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo%201.daef7967.png&w=256&q=75' />
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
        </Navbar>
    )
}

export default Header