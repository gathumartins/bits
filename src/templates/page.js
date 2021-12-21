import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

function Page({ data }) {
    const page = data.wpPage;
    return (
        <Layout>
            <h1>{page.title}</h1>
        </Layout>
    )
}
export const query = graphql`
query($databaseId:Int!){
     wpPage(databaseId: {eq: $databaseId}) {
    title
    content
  }
}`

export default Page;
