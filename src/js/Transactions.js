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
// 1. Added uuid package to generate unique IDs
// 2. Working with whole numbers, as opposed to decimals, for simplicity

import React from 'react'
import Currency from './Currency'
import Transaction from './Transaction'
import TableGenerator from './TableGenerator'

export default class Transactions extends React.Component {
    constructor(props) {
        super(props);
        this.addTransaction = this.addTransaction.bind(this);
        this.removeTransaction = this.removeTransaction.bind(this);
        this.transactionsForCurrency = this.transactionsForCurrency.bind(this);
        this.handleAddTransaction = this.handleAddTransaction.bind(this);
        this.allTransactionsTableRows = this.allTransactionsTableRows.bind(this);
        this.addTransactionForm = this.addTransactionForm.bind(this);
        this.renderAllTransactions = this.renderAllTransactions.bind(this);
        this.transactionRow = this.transactionRow.bind(this);
        this.state = {
            transactions: [],
            currencies: [
                new Currency("Garlic Coin", 10),
                new Currency("Doge Coin", 5)
            ]
        };
    }

    addTransaction(currencyID, units, totalCost) {
        this.setState((prevState) => ({
            transactions: prevState.transactions.concat(new Transaction(currencyID, units, totalCost))
        }));
    }

    handleAddTransaction(e) {
        e.preventDefault(); // do not reload the whole page on form submission

        const currencyID = e.target.elements.currency.value;
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

    handleEditTransaction(id) {
        console.log(id);
    }

    editTransaction(id, currencyID, units, totalCost) {
        this.removeTransaction(id);
        this.addTransaction(currencyID, units, totalCost);
    }

    transactionRow(transaction) {
        const currency = this.state.currencies.find((currency) => currency.id === transaction.currencyID);
        return (
            <tr key={transaction.id}>
                <td>{currency.name}</td>
                <td>{transaction.units}</td>
                <td>${transaction.totalCost}</td>
                <td>
                    <button className="btn btn-warning" onClick={(e) => {
                        this.handleEditTransaction(transaction.id);
                    }}>Edit</button>
                </td>
                <td>
                    <button className="btn btn-danger" onClick={(e) => {
                        this.removeTransaction(transaction.id);
                    }}>Remove</button>
                </td>
            </tr>
        );
    }

    allTransactionsTableRows() {
        return this.state.transactions.map((transaction, index) => {
            const currency = this.state.currencies.find((currency) => currency.id === transaction.currencyID);
            return this.transactionRow(transaction);
        })
    }

    addTransactionForm() {
        return (
            <form onSubmit={this.handleAddTransaction}>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>
                                <select required className="form-control" name="currency">
                                    <option value="" defaultValue hidden>Select Currency</option>
                                    {this.state.currencies.map((currency, index) => {
                                        return <option value={currency.id} key={currency.id}>{currency.name}</option>
                                    })}
                                </select>
                            </td>
                            <td>
                                <input className="form-control" type="number" min="1" id="units" placeholder="Units Purchased"/>
                            </td>
                            <td>
                                <input className="form-control" type="number" min="1" id="totalCost" placeholder="Total Cost (AUD)"/>
                            </td>
                            <td>
                                <button className="btn btn-primary">Add Transaction</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        );
    }

    renderAllTransactions() {
        return (
            <div>
                <h1 className="display-4">Transactions</h1>
                <table className="table">
                    {TableGenerator.generateHeader(["Currency Type", "Units Purchased", "Total Cost (AUD)", "", ""])}
                    <tbody>
                        {this.allTransactionsTableRows()}
                    </tbody>
                </table>
                {this.addTransactionForm()}
            </div>
          )
    }

    transactionsForCurrency(currencyID) {
        return this.state.transactions.filter((transaction) => transaction.currencyID == currencyID)
    }

    renderGroupedTransactions() {
        const distinctCurrencies = [...new Set(this.state.transactions.map((transaction, index) => transaction.currencyID))];

        return (
            <div>
                <h1 className="display-4">Grouped Transactions</h1>
                <table className="table">
                    {TableGenerator.generateHeader(["Currency Type", "Units Purchased", "Total Cost (AUD)", "", ""])}
                    <tbody>
                        {
                            distinctCurrencies.map(currencyID => {

                                const currency = this.state.currencies.find((currency) => currency.id === currencyID);
                                const currencyTransactions = this.transactionsForCurrency(currencyID);
                                const totalCost = Object.keys(currencyTransactions).reduce((sum, key) => sum + currencyTransactions[key].totalCost, 0);
                                const totalUnits = Object.keys(currencyTransactions).reduce((sum, key) => sum + currencyTransactions[key].units, 0);

                                let output = currencyTransactions.map((transaction, index) => {
                                    return this.transactionRow(transaction);
                                });

                                output.push(
                                    <tr>
                                        <td></td>
                                        <td><b>{totalUnits}</b></td>
                                        <td><b>${totalCost}</b></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                );

                                return output;
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }

    render() {
        // return this.renderGroupedTransactions();
        return this.renderAllTransactions();
    };

    // todo
    // 1. Add ability to change between views
    // 2. Create a class for utilities for building the tables (to tidy up this class)
    // 3. Add ability to edit transactions
}