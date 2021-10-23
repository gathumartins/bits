import React from 'react';
import Layout from '../components/Layout';
import WhoWeAreBan from '../components/WhoWeAre/WhoWeAreBan';
import CoreValues from '../components/WhoWeAre/CoreValues';
import OpsModel from '../components/WhoWeAre/OpsModel';

function WhoWeAre() {
    return (
        <Layout>
            <WhoWeAreBan />
            <CoreValues />
            <OpsModel />
        </Layout>
    )
}

export default WhoWeAre;
