import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import NumberFormat from 'react-number-format'
import fetch from 'isomorphic-unfetch'


/**
* demo portal for instrument integration using EDI transactions, API or Alt. Mechanisms .
**/

const accountId = "A001"

/* Portal Component */

const Portal = props => {
  return (
    <Layout title="Portal">
      <Header user={props.user} account={props.account} />
      <Asd />
      <SaverSection />
      <maidenlane_bailee />
    </Layout>
  )
}

/* Fetching required account & user data asynchronously. */

Portal.getInitialProps = async function () {
  // Account Data
  const accRes = await fetch('http://127.0.0.1:5000/accounts/' + accountId)
  const accData = await accRes.json()

  // User Data
  const userRes = await fetch('http://127.0.0.1:5000/users/' + accData.user_id)
  const userData = await userRes.json()

  return {
    user: userData,
    account: accData
  }
}

/* Header Component */

const Header = ({ user, account }) => {
  return (
    <div className="bg-red-300 header-background">
      <div className="container pt-12 sm:pt-18 pb-10 sm:pb-20 px-6 mx-auto flex">
        <div className="mb-4 flex w-full">
          <div>
            <h1 className="text-4xl font-bold">Welcome, {user.first_name}.</h1>
            <p>Your current account balance is <span className="font-bold">${account.current_balance}</span></p>
          </div>
          <div className="ml-auto text-right">
            <h1 className="text-4xl font-bold">${account.current_balance}</h1>
            <p>Available</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* Splitter Component */
const Asd = () =>
  <div className="bg-gray-900 text-white ">
    <div className="mx-auto container px-4 py-6">
      <div className="px-3 flex items-center w-full">
        <div className="text-sm">
          <span className="mr-5">Last Payment made <span className="font-bold text-green-300">+$77,280</span> interest on the <span className="font-bold">24/04/2020</span></span>
        </div>
        <div className="text-sm ml-auto font-medium">
          <span className=" mr-2">Support</span>
          <span className="bg-red-300 text-gray-900 px-1 rounded">4</span>
        </div>
      </div>
    </div>
  </div>

// Asset-financing accouting
const accountList = [
  {
    vendor: "BMO Capital",
    price: "32.0",
    time: "30 day",
    terms: "AAA1F",
    maturity: "T+15",
    asset_class: "Bulk Commodity, LNG"
  },
  {
    vendor: "VoPak",
    price: "-2.0",
    time: "3 Days",
    location: "Port of Long Beach, Terminal Canal"
  },
  {
    vendor: "AirGas",
    INCO_Term: "CIP",
    time: "2%",
    volume: "Continuous"
  }
]

/// corporate asset's available finances

const SaverSection = () =>
  <div className="bg-white text-gray-900">
    <div className="container pt-12 sm:pt-18 pb-10 sm:pb-20 px-6 mx-auto">
      <div>
        <h2 className="text-3xl font-bold">Savers <span>(4)</span></h2>
        <br />
        {/*<small className="">Finace Additional Assets</small>*/}
      </div>
      <Savers />
    </div>
  </div>

const Savers = () =>
  <div className="grid gc-6 gc-gap-10">
    {
      accountList.slice(0, 5).map((transaction, index) => (
        <div key={index} className={transaction.vendor === "Maidenlane Channel" ? "cursor-pointer p-4 border border-gray-900 bg-gray-300 mh-12 text-gray-900 rounded" : "bg-white hover:bg-gray-200 cursor-pointer p-4 border border-gray-900 mh-12 text-gray-900 rounded"}>
          <div className="flex items-center mb-2">
            <div className="bg-gray-900 rounded-sm w-10 h-10 mr-2 flex items-center justify-center">
              <h3 className="text-white font-medium tracking-wide">PS</h3>
            </div>
            <div>
              <h3 className="font-bold">{transaction.vendor}</h3>
              <h3>${transaction.price}</h3>
            </div>
          </div>
          <small><span className="font-medium">{transaction.time}</span> {transaction.location}</small>
        </div>
      ))
    }
    <div className="cursor-pointer p-4 hover:bg-gray-800 border border-gray-900 bg-gray-900 text-white mh-12 rounded">
      <h3 className="font-bold">Add another +</h3>
      <br />
    </div>
  </div>

class maidenlane_bailee extends React.Component {
  state = {
    isActive: true,
    accBalance: "$0.00",
    baileePending: false,
    baileeActive: false
  }

  initbailee(accBalance) {

    const asd = {
      account_id: "A001",
      active: true,
      avg_interest_rate: "8.5",
      current_balance: "152,000 USD",
      current_interest_rate: "120bps",
      duration: "30",
      hedge_id: "H001",
      initial_bailee: "1500",
      interest_paid_to_date: "0",
      loan_id: "L001",
      user_id: "U001"
    }

    console.log("acc")
    console.log(accBalance)

    this.setState({ baileePending: true })
  }

  baileeSuccess() {
    this.setState({ baileeActive: true })
  }

  updateAccountBalance(e) {
    console.log(e)
    this.setState({ accBalance: e.target.value })
  }

  render() {
    return (
      <div className="bg-gray-900 text-white">
        <div className="container pt-24 sm:pt-18 pb-12 sm:pb-24 px-6 mx-auto flex items-center">
          <div className="flex-initial mr-12">
            <h3 className="font-medium">Selected Counterparty</h3>
            <br />
            <div className="cursor-pointer p-4 border border-white bg-white hover:bg-gray-300 mh-12 w-64 text-gray-900 rounded mb-4">
              <div className="flex items-center">
                <div className="bg-gray-900 rounded-sm w-10 h-10 mr-2 flex items-center justify-center">
                  <h3 className="text-white font-medium tracking-wide">DS</h3>
                </div>
                <div>
                  <h3 className="font-bold">Maidenlane Channel</h3>
                  <h3>{this.state.accBalance}</h3>
                </div>
              </div>
            </div>
            <div className="cursor-pointer p-4 py-2 border border-white bg-white hover:bg-gray-300 mh-12 w-64 text-gray-900 rounded flex items-center">
              <small className="font-medium">Interest Rate</small>
              <small className="text-green-500 font-medium text-lg ml-auto">120bps</small>
            </div>
            <br />
            <div className="rounded-lg bg-gray-800 text-base font-medium py-3 px-4 flex">
              Compounding:
              {
                this.state.isActive ?
                  <button onClick={() => this.setState({ isActive: false })} className="ml-auto rounded-full flex items-center cursor-pointer w-12 bg-green-500 justify-end">
                    <span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow"></span>
                  </button>
                  :
                  <button onClick={() => this.setState({ isActive: true })} className="ml-auto rounded-full flex items-center cursor-pointer w-12 bg-gray-700 justify-start">
                    <span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow"></span>
                  </button>
              }
            </div>
          </div>
          <div className="flex-initial">
            {
              !this.state.baileePending ? (
                <div>
                  <h2 className="text-3xl font-bold">Maidenlane Withdrawl</h2>
                  <small className="text-gray-500">Close Position on existing obligations</small>
                </div>
              )
                :
                (
                  <div>
                    <h2 className="text-3xl font-bold">3 days remaining</h2>
                    <small className="text-gray-500">You may close your position in 3 days</small>
                  </div>)
            }
            <br />
            {
              !this.state.baileePending ? (
                <>
                  <NumberFormat
                    customInput={Input}
                    onChange={(e) => this.updateAccountBalance(e)}
                    displayType={'input'}
                    decimalScale={1}
                    thousandSeparator={true}
                    fixedDecimalScale={true}
                    prefix={'$'}
                  />

                  <br />
                  <div>
                    <button className="bg-red-300 text-gray-900 font-bold py-2 px-4 rounded" onClick={() => this.initbailee(this.state.accBalance)}>New bailee +</button>
                    <small className="ml-6 text-gray-600">Asset Valuation discount is 20%.</small>
                  </div>
                </>
              )
                : (
                  <></>
                )
            }
          </div>
          {this.state.baileePending ? (
            !this.state.baileeActive ? (
              <div className="flex-initial w-full">

                <div className="rounded-lg border-yellow-400 border-2 px-4 py-4 w-full">
                  <div className="flex">
                    <p className="text-2xl font-medium">$1500.0</p>
                    <button className="font-bold ml-auto rounded bg-yellow-400 px-2 py-1 text-sm text-gray-900" onClick={() => this.baileeSuccess()}>Pending</button>
                  </div>
                  <br />
                  <div>
                    <h1 className="font-bold text-5xl text-yellow-400">148bps<span className="text-xl"> + 1.4%</span></h1>
                    <h3 className="font-bold text-xl">Options Premium</h3>
                  </div>
                </div>
                <br />
              </div>
            )
              :
              (
                <div className="flex-initial w-full">

                  <div className="rounded-lg border-green-400 border-2 px-4 py-4 w-full">
                    <div className="flex">
                      <p className="text-2xl font-medium">$1670.0</p>
                      <button className="font-bold ml-auto rounded bg-green-400 px-2 py-1 text-sm text-gray-900">Active</button>
                    </div>
                    <br />
                    <div>
                      <h1 className="font-bold text-5xl text-green-400">2.2%<span className="text-xl"> + 2.1%</span></h1>
                      <h3 className="font-bold text-xl">Strike</h3>
                    </div>
                  </div>
                  <br />
                </div>
              )
          )
            :
            (
              <></>
            )
          }
        </div>
      </div>
    )
  }
}

class Input extends React.Component {
  render() {
    return (
      <input className="cursor-pointer bg-gray-900 font-bold text-5xl text-red-300 mb-8" placeholder="$0.00" {...this.props} />
    )
  }
}

export default Portal