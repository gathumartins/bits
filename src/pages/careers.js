import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import CareersTop from '../components/CareersTop';

function careers() {
    return (
        <div>
            <Layout>
                <Helmet>
                    <title>NairoBits-Careers</title>
                </Helmet>
                <CareersTop />
            </Layout>
        </div>
    )
}

export default careers
