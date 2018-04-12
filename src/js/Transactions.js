// ### User Stories
// 1. I must be able to record a transaction with the following details:
//    - What cryptocurrency was purchased
//    - How many units of the cryptocurrency were purchased
//    - What was the total purchase price, in AUD, of the transaction
// 1. I must be able to see a list of all of my recorded transactions grouped by cryptocurrency. For each cryptocurrency owned, show the following:
//    - Units owned
//    - Total paid in AUD
// 1. I must be able to see the sum total AUD I have paid for all of my cryptocurrencies.
// 1. I must be able to delete transactions.
// 1. I must be able to edit transactions.

import React from 'react'
import uniqid from 'uniqid'

export default class Transactions extends React.Component {
    constructor(props) {
        super(props);
        this.addTransaction = this.addTransaction.bind(this);
        this.removeTransaction = this.removeTransaction.bind(this);
        this.transactionsForCurrency = this.transactionsForCurrency.bind(this);
        this.getCurrencyTotals = this.getCurrencyTotals.bind(this);
        this.state = {
            transactions: [
                {
                    id: 1,
                    currency_id: 1,
                    unit: 10,
                    totalCost: 20
                },
                {
                    id: 2,
                    currency_id: 2,
                    unit: 5,
                    totalCost: 50
                },
                {
                    id: 3,
                    currency_id: 1,
                    unit: 50,
                    totalCost: 100
                }
            ],
            currencies: [
                {
                    id: 1,
                    name: "Garlic Coin",
                    costPerUnit: 10
                },
                {
                    id: 2,
                    name: "Doge Coin",
                    costPerUnit: 5
                }
            ]
        };
    }

    addTransaction(currency_id, unit, totalCost) {
        this.setState((prevState) => ({
            transactions: prevState.transactions.concat({
                id: uniqid(),
                currency_id: currency_id,
                unit: unit,
                totalCost: totalCost
            })
        }));
    }

    removeTransaction(id) {
        this.setState((prevState) => ({
            transactions: prevState.transactions.filter((transaction) => transaction.id !== id)
        }));
    }

    editTransaction(id, currency_id, unit, totalCost) {
        this.removeTransaction(id);
        this.addTransaction(currency_id, unit, totalCost);
    }

    transactionsForCurrency(currency_id) {
        const groupedDetails = this.state.transactions.filter((transaction) => transaction.currency_id == currency_id)
        return groupedDetails;
    }

    getCurrencyTotals() {
        let currencies = [];
        const distinctCurrencies = [...new Set(this.state.transactions.map((transaction, index) => transaction.currency_id))];

        currencies = distinctCurrencies.map(currencyID => {
            const currency = this.state.currencies.find((currency) => currency.id === currencyID);
            const currencyTransactions = this.transactionsForCurrency(currencyID);
            const currencySum = Object.keys(currencyTransactions).reduce((sum, key) => {
                return sum + currencyTransactions[key].totalCost;
            }, 0);
            return <div key={currencyID}>{currency.name} total cost: ${currencySum}</div>
        })

        return currencies;
    }

    render() {
        return (
            <div>
                <h1>Transactions</h1>
                
                {this.state.transactions.map((transaction, index) => {
                    const currency = this.state.currencies.find((currency) => currency.id === transaction.currency_id);
                    return <Transaction key={index} currency={currency.name} unit={transaction.unit} totalCost={transaction.totalCost} />
                })}
                {this.getCurrencyTotals()}
            </div>
          )
    };
}

class Transaction extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>{this.props.unit} x {this.props.currency}: ${this.props.totalCost} AUD</p>
        )
    }
}