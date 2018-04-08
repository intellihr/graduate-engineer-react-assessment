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

export default class Transactions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: [
                {
                    currency: "Garlic Coin",
                    unit: 10,
                    cost: 20
                },
                {
                    currency: "Doge Coin",
                    unit: 5,
                    cost: 50
                }
            ]
        };
    }

    addTransaction(currency, unit, cost) {
        this.setState((prevState) => ({
            transactions: prevState.transactions.concat({
                currency: currency,
                unit: unit,
                cost: cost
            })
        }));
    }

    render() {
        return (
            <div>
                <h1>Transactions</h1>
                {this.state.transactions.map((transaction, index) => (<Transaction key={index} currency={transaction.currency} unit={transaction.unit} cost={transaction.cost} />))}
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