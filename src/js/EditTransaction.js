import React from 'react'
import TableUtility from './TableUtility'
import {isUndefined} from 'lodash'

export default class EditTransaction extends React.Component {
    constructor(props) {
        super(props)
        this.handleEditTransaction = this.handleEditTransaction.bind(this)
    }

    get editTransactionForm () {
        const {
            transaction,
            currencies,
            editTransaction
        } = this.props

        if (isUndefined(transaction)) {
            return (
                <div>Please provide a valid transaction ID</div>
            )
        }

        return TableUtility.generateEditTransactionForm(transaction, currencies, this.handleEditTransaction)
    }

    handleEditTransaction(e) {
        const {
            transaction
        } = this.props

        e.preventDefault() // do not reload the whole page on form submission

        const currencyID = e.target.elements.currency.value
        const units = parseInt(e.target.elements.units.value)
        const totalCost = parseInt(e.target.elements.totalCost.value)

        this.props.editTransaction(transaction.id, currencyID, units, totalCost)
    }

    render() {
        return (
            <div>
                <h1 className="display-4">Update Transaction</h1>
                {this.editTransactionForm}
            </div>
        )
    }
}
