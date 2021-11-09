import React from 'react';
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout';
import HistoryTop from '../components/WhoWeAre/HistoryTop';
import Founders from '../components/WhoWeAre/Founders';

function history() {
    return (
        <Layout>
            <Helmet>
                <title>NairoBits-History</title>
            </Helmet>
            <HistoryTop />
            <Founders />
        </Layout>
    )
}

export default history;
