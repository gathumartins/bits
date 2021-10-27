import React from "react";
import Layout from "../components/Layout";
import Slider from '../components/Home/Slider';
import Video from "../components/Home/Video";
import Impact from "../components/Home/Impact";
// import News from "../components/Home/News";
import Partners from "../components/Home/Partners";
import Helmet from 'react-helmet';


const IndexPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>NairoBits-Home</title>
        </Helmet>
        <Slider />
        <Video />
        <Impact />
        {/* <News />*/}
        <Partners />
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage
