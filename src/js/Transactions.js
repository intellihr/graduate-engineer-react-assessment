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
        super(props)
        this.addTransaction = this.addTransaction.bind(this)
        this.removeTransaction = this.removeTransaction.bind(this)
        this.transactionsForCurrency = this.transactionsForCurrency.bind(this)
        this.handleAddTransaction = this.handleAddTransaction.bind(this)
        this.allTransactionsTableRows = this.allTransactionsTableRows.bind(this)
        this.addTransactionForm = this.addTransactionForm.bind(this)
        this.transactionRow = this.transactionRow.bind(this)
        this.handleEditTransaction = this.handleEditTransaction.bind(this)
        this.renderTransactionsTotal = this.renderTransactionsTotal.bind(this)
        this.state = {
            transactions: [],
            currencies: [
                new Currency("Garlic Coin", 10),
                new Currency("Doge Coin", 5)
            ]
        }
    }

    addTransaction(currencyID, units, totalCost) {
        this.setState((prevState) => ({
            transactions: prevState.transactions.concat(new Transaction(currencyID, units, totalCost))
        }))
    }

    handleAddTransaction(e) {
        e.preventDefault() // do not reload the whole page on form submission

        const currencyID = e.target.elements.currency.value
        const units = parseInt(e.target.elements.units.value)
        const totalCost = parseInt(e.target.elements.totalCost.value)

        this.addTransaction(currencyID,units,totalCost)

        e.target.elements.units.value = ''
        e.target.elements.totalCost.value = ''
    }

    removeTransaction(id) {
        this.setState((prevState) => ({
            transactions: prevState.transactions.filter((transaction) => transaction.id !== id)
        }))
    }

    handleEditTransaction(id) {
        console.log(id)
    }

    editTransaction(id, currencyID, units, totalCost) {
        this.removeTransaction(id)
        this.addTransaction(currencyID, units, totalCost)
    }

    transactionRow(transaction) {
        const currency = this.state.currencies.find((currency) => currency.id === transaction.currencyID)
        const editFunction = (e) => this.handleEditTransaction(transaction.id)
        const deleteFunction = (e) => this.removeTransaction(transaction.id)
        return TableUtility.generateTransactionRow(transaction.id, currency.name, transaction.units, transaction.totalCost, editFunction, deleteFunction)
    }

    allTransactionsTableRows() {
        return this.state.transactions.map((transaction, index) => {
            return this.transactionRow(transaction)
        })
    }

    addTransactionForm() {
        return TableUtility.generateAddTransactionForm(this.state.currencies, this.handleAddTransaction)
    }

    transactionsForCurrency(currencyID) {
        return this.state.transactions.filter((transaction) => transaction.currencyID == currencyID)
    }

    renderGroupedTransactions() {
        const distinctCurrencies = [...new Set(this.state.transactions.map((transaction, index) => transaction.currencyID))]

        return distinctCurrencies.map(currencyID => {

            const currency = this.state.currencies.find((currency) => currency.id === currencyID)
            const currencyTransactions = this.transactionsForCurrency(currencyID)
            const totalCost = Object.keys(currencyTransactions).reduce((sum, key) => sum + currencyTransactions[key].totalCost, 0)
            const totalUnits = Object.keys(currencyTransactions).reduce((sum, key) => sum + currencyTransactions[key].units, 0)

            let output = currencyTransactions.map((transaction, index) => {
                return this.transactionRow(transaction)
            })

            output.push(TableUtility.generateRow([`${currency.name} Total`, totalUnits, `$${totalCost}`, "", ""], "table-info"))

            return output
        })
    }

    renderTransactionsTotal() {
        const totalCost = Object.keys(this.state.transactions).reduce((sum, key) => sum + this.state.transactions[key].totalCost, 0)
        const totalUnits = Object.keys(this.state.transactions).reduce((sum, key) => sum + this.state.transactions[key].units, 0)

        if (totalUnits != 0) {
            return TableUtility.generateRow([`All Transactions Total`, totalUnits, `$${totalCost}`, "", ""], "table-success")
        }
    }

    render() {
        return (
            <div>
                <h1 className="display-4">Transactions</h1>
                <table className="table">
                    {TableUtility.generateHeaderRow(["Currency Type", "Units Purchased", "Total Cost (AUD)", "", ""])}
                    <tbody>
                        {this.renderGroupedTransactions()}
                        {this.renderTransactionsTotal()}
                    </tbody>
                </table>
                {this.addTransactionForm()}
            </div>
        )
    }

    // todo
    // 1. Add ability to edit transactions
    // 2. Resolve issue where no value can be entered in the form number fields
}
