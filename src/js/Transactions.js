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

// Notes:
// 1. Added uniqid package to generate uniqid's which will not need validation to ensure uniqueness
// 2. Working with whole numbers, as opposed to decimals, for simplicity

import React from 'react'
import uniqid from 'uniqid'

export default class Transactions extends React.Component {
    constructor(props) {
        super(props);
        this.addTransaction = this.addTransaction.bind(this);
        this.removeTransaction = this.removeTransaction.bind(this);
        this.transactionsForCurrency = this.transactionsForCurrency.bind(this);
        this.getCurrencyTotals = this.getCurrencyTotals.bind(this);
        this.handleAddTransaction = this.handleAddTransaction.bind(this);
        this.state = {
            transactions: [
                {
                    id: 1,
                    currency_id: 1,
                    units: 10,
                    totalCost: 20
                },
                {
                    id: 2,
                    currency_id: 2,
                    units: 5,
                    totalCost: 50
                },
                {
                    id: 3,
                    currency_id: 1,
                    units: 50,
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

    addTransaction(currency_id, units, totalCost) {
        this.setState((prevState) => ({
            transactions: prevState.transactions.concat({
                id: uniqid(),
                currency_id: currency_id,
                units: units,
                totalCost: totalCost
            })
        }));
    }

    handleAddTransaction(e) {
        e.preventDefault(); // do not reload the whole page on form submission

        const currencyID = parseInt(e.target.elements.currency.value);
        const units = parseInt(e.target.elements.units.value);
        const totalCost = parseInt(e.target.elements.totalCost.value);

        this.addTransaction(currencyID,units,totalCost);

        e.target.elements.units.value = '';
        e.target.elements.totalCost.value = '';
    }

    removeTransaction(id) {
        this.setState((prevState) => ({
            transactions: prevState.transactions.filter((transaction) => transaction.id !== id)
        }));
    }

    editTransaction(id, currency_id, units, totalCost) {
        this.removeTransaction(id);
        this.addTransaction(currency_id, units, totalCost);
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

    // todo
    // 1. Form to add new transactions
    // 2. Delete button on transactions
    // 3. Edit form for transactions
    // 4. Separate view for grouped transactions
    // 5. Add the list of transactions to the grouped transactions output

    render() {
        return (
            <div>
                <h1>Transactions</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Currency Type</th>
                            <th scope="col">Units Purchased</th>
                            <th scope="col">Total Cost (AUD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.transactions.map((transaction, index) => {
                            const currency = this.state.currencies.find((currency) => currency.id === transaction.currency_id);
                            return (
                                <tr key={transaction.id}>
                                    <td>{currency.name}</td>
                                    <td>{transaction.units}</td>
                                    <td>${transaction.totalCost}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {//this.getCurrencyTotals()
                }

                <form onSubmit={this.handleAddTransaction}>
                    <div className="form-group row justify-content-md-center">
                        <select required className="col-sm-2 form-control" name="currency">
                            <option value="" defaultValue hidden>Select Currency</option>
                            {this.state.currencies.map((currency, index) => {
                                return <option value={currency.id} key={currency.id}>{currency.name}</option>
                            })}
                        </select>
                        <input className="col-sm-2 form-control" type="number" min="1" id="units" placeholder="Units Purchased"/>
                        <input className="col-sm-2 form-control" type="number" min="1" id="totalCost" placeholder="Total Cost (AUD)"/>
                        <button className="btn btn-primary">Add Transaction</button>
                    </div>
                </form>
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
            <p>{this.props.units} x {this.props.currency}: ${this.props.totalCost} AUD</p>
        )
    }
}