import React from 'react';
import Layout from '../components/Layout';
import WhoTop from '../components/WhoWeAre/WhoTop';
import CoreValues from '../components/WhoWeAre/CoreValues';
import OpsModel from '../components/WhoWeAre/OpsModel';

function WhoWeAre() {
    return (
        <Layout>
            <WhoTop />
            <CoreValues />
            <OpsModel />
        </Layout>
    )
}

export default WhoWeAre;
