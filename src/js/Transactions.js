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



// Transactions:
//     User ID
//     CryptoCurrency ID
//     Units purchased
//     Total price paid (AUD)


import React from 'react'
import uniqid from 'uniqid'

export default class Transactions extends React.Component {
    constructor(props) {
        super(props);
        this.addTransaction = this.addTransaction.bind(this);
        this.removeTransaction = this.removeTransaction.bind(this);
        this.state = {
            transactions: [
                {
                    id: 1,
                    currency_id: 1,
                    unit: 10,
                    cost: 20
                },
                {
                    id: 2,
                    currency_id: 2,
                    unit: 5,
                    cost: 50
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

    addTransaction(currency_id, unit, cost) {
        this.setState((prevState) => ({
            transactions: prevState.transactions.concat({
                id: uniqid(),
                currency_id: currency_id,
                unit: unit,
                cost: cost
            })
        }));
    }

    removeTransaction(id) {
        this.setState((prevState) => ({
            transactions: prevState.transactions.filter((transaction) => transaction.id !== id)
        }));
    }

    render() {
        return (
            <div>
                <h1>Transactions</h1>
                
                {this.state.transactions.map((transaction, index) => {
                    const currency = this.state.currencies.find(function (currency) { return currency.id === transaction.currency_id; });
                    return <Transaction key={index} currency={currency.name} unit={transaction.unit} cost={transaction.cost} />
                })}
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
            <p>{this.props.unit} x {this.props.currency}: ${this.props.cost} AUD</p>
        )
    }
}