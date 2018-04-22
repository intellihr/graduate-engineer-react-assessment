import uuid from 'uuid'

export default class TableUtility {

    static generateHeaderRow(columns) {
        return (
            <thead>
                <tr>
                    {columns.map((column) => <th key={uuid()} scope="col">{column}</th>)}
                </tr>
            </thead>
        )
    }

    static generateRow(columns, className = "table-light") {
        return (
            <tr>
                {columns.map((column) => <td className={className} key={uuid()} scope="col">{column}</td>)}
            </tr>
        )
    }

    static generateTransactionRow(id, currencyName, units, totalCost, editFunction, deleteFunction) {
        return (
            <tr key={id}>
                <td>{currencyName}</td>
                <td>{units}</td>
                <td>${totalCost}</td>
                <td>
                    <button className="btn btn-warning" onClick={editFunction}>Edit</button>
                </td>
                <td>
                    <button className="btn btn-danger" onClick={deleteFunction}>Remove</button>
                </td>
            </tr>
        )
    }

    static generateAddTransactionForm(currencies, addTransactionFunction) {
        return (
            <form onSubmit={addTransactionFunction}>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>
                                <select required className="form-control" name="currency">
                                    <option value="" defaultValue hidden>Select Currency</option>
                                    {currencies.map((currency, index) => {
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
        )
    }
}
