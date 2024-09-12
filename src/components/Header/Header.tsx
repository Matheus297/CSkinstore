"use client";
import React from 'react'
import 'bulma/css/bulma.min.css';
import { Logo, Navbar } from './styles';
import Link from 'next/link';


interface Props {
    children?: any
}


export const Header = ({ children }: Props) => {
    return (
        <Navbar className="navbar is-primary">
            <div className="navbar-brand">
                <Link
                style={{display: 'flex'}}
                 href={{
                    pathname: '/home',
                    query: undefined
                }}
                >
                    <Logo className="navbar-item" src='https://www.cskinstore.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo%201.daef7967.png&w=256&q=75' />
                </Link>
            </div>
        </Navbar>
    )
}

export default Header