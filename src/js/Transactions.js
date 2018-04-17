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
import TableUtility from './TableUtility'

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
        this.handleEditTransaction = this.handleEditTransaction.bind(this);
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
        const currency = this.state.currencies.find((currency) => currency.id === transaction.currencyID)
        const editFunction = (e) => this.handleEditTransaction(transaction.id)
        const deleteFunction = (e) => this.removeTransaction(transaction.id)
        return TableUtility.generateTransactionRow(transaction.id, currency.name, transaction.units, transaction.totalCost, editFunction, deleteFunction)
    }

    allTransactionsTableRows() {
        return this.state.transactions.map((transaction, index) => {
            const currency = this.state.currencies.find((currency) => currency.id === transaction.currencyID);
            return this.transactionRow(transaction);
        })
    }

    addTransactionForm() {
        return TableUtility.generateAddTransactionForm(this.state.currencies, this.handleAddTransaction)
    }

    renderAllTransactions() {
        return (
            <div>
                <h1 className="display-4">Transactions</h1>
                <table className="table">
                    {TableUtility.generateHeaderRow(["Currency Type", "Units Purchased", "Total Cost (AUD)", "", ""])}
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
                    {TableUtility.generateHeaderRow(["Currency Type", "Units Purchased", "Total Cost (AUD)", "", ""])}
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

                                output.push(TableUtility.generateRow(["", totalUnits, `$${totalCost}`, "", ""]))

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