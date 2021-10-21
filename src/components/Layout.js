import React from 'react';
import Helmet from 'react-helmet';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <React.Fragment>
            <Helmet>
                <style>
                </style>
            </Helmet>
            <Header />
            <main id="primary">
                {children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;
