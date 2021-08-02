import React from 'react'
import Page from 'components/Page';

function CustomerHomePage() {
    return (
        <div>
            <Page
      title="Home"
      breadcrumbs={[{ name: 'home', active: true }]}
      className="CustomerHomePage"
    >
        <div className="mx-auto">
                <h1 className="text-center mx-auto">Welcome Customer</h1></div>
                </Page>
        </div>
    )
}

export default CustomerHomePage
