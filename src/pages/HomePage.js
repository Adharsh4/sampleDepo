import React, { Component, useEffect } from 'react'
import Page from 'components/Page';

import { useStateValue } from '../components/utility/stateProvider';
function HomePage() {
    return (
        <div className="home-page">
                 <Page
      title="Home"
      breadcrumbs={[{ name: 'home', active: true }]}
      className="HomePage"
    >
        <div className="mx-auto">
                <h1 className="text-center mx-auto">Welcome to Chennai Depo</h1></div>
                </Page>
            </div>
    )
}

export default HomePage
