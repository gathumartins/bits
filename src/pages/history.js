import React from 'react';
import Layout from '../components/Layout';
import HistoryTop from '../components/WhoWeAre/HistoryTop';
import Founders from '../components/WhoWeAre/Founders';

function history() {
    return (
        <Layout>
            <HistoryTop />
            <Founders />
        </Layout>
    )
}

export default history;
