import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

const Home = () => (
  <Layout title="Maidenlane Instrument">
    <Introduction />
    <Asd />
    <First />
    <div className="bg-blue-300">
      <div className="container pt-8 sm:pt-16 pb-10 sm:pb-24 px-6 mx-auto">
        <div>
          <h1 className="text-3xl font-bold mb-2">Asset-backed, with cash-settled options</h1>
          <p>Forward Embeded Volumetric Optionality Contracts, or FEVO's are a new type of financial primitive that we have extended with our smart contract protocol to bring shipping documents and financial products together. Options against non-delivery of commodities can be cash-settled, in any currency, thus reducing risk. <a href="https://freight.page.link/demo">Request more information today </a></p>
          <br />
          <p>Visit us online at <a href="https://freighttrust.com">Freight Trust</a> </p>
          <br />
        </div>
      </div>
    </div>
  </Layout>
)

const Introduction = () =>
  <>
    <div className="bg-green-200 header-background">
      <div className="container pt-12 sm:pt-18 pb-10 sm:pb-20 px-6 mx-auto flex">
        <div>
          <header className="mb-4">
            <h1 className="text-5xl font-bold mb-4">Commodity Primitives <br />w/ Decentralized Physical Settlement.</h1>
            <p>From Asset-backed trade financing, to smart contract escrowing</p>
            <p>Maidenlane is a Instrument as a Service offering that enables </p>
            <br />
            <button className="bg-gray-900 text-white font-bold py-4 px-6 rounded"><a href="https://freight.page.link/demo">Request Information</a></button>
          </header>
        </div>
        <div className="hidden lg:block feature-image ml-auto"></div>
      </div>
    </div>
  </>

/* Splitter Component */
const Asd = () =>
  <div className="bg-gray-900 text-white font-sans">
    <div className="mx-auto container px-4 py-6">
      <div className="py-6 px-2 grid gc-4 items-start">
        <div className="flex flex-col">
          <span className="mr-5 font-bold text-2xl">Finance Shippments</span>
          <p className="text-blue-100">Financing, not Factoring.
            <br />
          </p>
          <br />
          <small className="text-gray-300"></small>
        </div>
        <div className="flex flex-col">
          <span className="mr-5 font-bold text-2xl">Indexed Pricing</span>
          <p className="text-blue-100">Pricing Data by <a href="https://www.drewry.co.uk/">Drewy</a></p>
          <br />
          <small className="text-gray-300"></small>
        </div>
        <div className="flex flex-col">
          <span className="mr-5 font-bold text-2xl">Regulated</span>
          <p className="text-blue-100">MLP in Wyoming<br /></p>
          <br />
        </div>
        <div className="flex flex-col">
          <span className="mr-5 font-bold text-2xl">Legacy Integrations</span>
          <p className="text-blue-100">EDI Transaction Support<br /></p>
          <br />
        </div>
      </div>
    </div>
  </div>

const First = () =>
  <div className="container pt-8 sm:pt-16 pb-10 sm:pb-24 px-6 mx-auto">
    <div>
      <h1 className="text-3xl font-bold mb-2">Merging Trade and Finance, together</h1>
      <p>Maidenlane is a product introduced and maintained by Freight Trust and Clearing Corporation, a US-based startup. Integrations with existing EDI transaction sets and modern API's mean no new work flows need to be learned or created to leverage FEVO's in your existing business processes. Pricing models for any FEVO are available. </p>
      <br />
      <p>FEVO is licensed under the BSD-3 Clause, whereas patents and pending patents are owned wholly by FreightTrust and Clearing Corporation.</p>
      <br />
    </div>
  </div>

export default Home