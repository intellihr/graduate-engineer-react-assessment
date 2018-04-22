import React from 'react'

export default class EditTransaction extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1 className="display-4">Edit Transaction</h1>
            </div>
        )
    }
}