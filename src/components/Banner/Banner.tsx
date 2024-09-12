"use client";
import React from 'react'
import 'bulma/css/bulma.min.css';
import { Banner, WrapperImage, WrapperImageLogo } from './styles';


interface Props {
    children?: any
}


export const BannerComponent = ({ children }: Props) => {
    return (
        <>
            <Banner className="section">
                <div className="container">
                    <div className="banner">
                        <h1 className="title">Welcome to Our Website</h1>
                        <p className="subtitle">We're glad you're here. Enjoy exploring our content!</p>
                        <WrapperImage>
                            <WrapperImageLogo src="https://via.placeholder.com/1200x600" alt="Banner Image" />
                        </WrapperImage>
                    </div>
                </div>
            </Banner>
        </>
    )
}