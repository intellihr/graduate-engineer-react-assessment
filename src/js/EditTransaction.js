import React from 'react'

export default class EditTransaction extends React.Component {
    constructor(props) {
        super(props)
    }

    get transactions() {
        const {
            transactions
        } = this.props

        return transactions
    }

    get currencies() {
        const {
            currencies
        } = this.props

        return currencies
    }

    render() {
        return (
            <div>
                <h1 className="display-4">Edit Transaction</h1>
                {console.log(this.transactions)}
                {console.log(this.props.transactionID)}
            </div>
        )
    }
}