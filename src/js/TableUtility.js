import uuid from 'uuid'
import { Link } from 'react-router-dom'

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

    static generateTransactionRow(id, currencyName, units, totalCost, deleteFunction) {
        return (
            <tr key={id}>
                <td>{currencyName}</td>
                <td>{units}</td>
                <td>${totalCost}</td>
                <td>
                    <Link className="btn btn-warning" to={`\edit\/${id}`}>Edit</Link>
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
                                <select required defaultValue="default" className="form-control" name="currency">
                                    <option value="" key="default" hidden>Select Currency</option>
                                    {currencies.map((currency, index) => <option value={currency.id} key={currency.id}>{currency.name}</option>)}
                                </select>
                            </td>
                            <td>
                                <input required className="form-control" type="number" min="1" id="units" placeholder="Units Purchased"/>
                            </td>
                            <td>
                                <input required className="form-control" type="number" min="1" id="totalCost" placeholder="Total Cost (AUD)"/>
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

    static generateEditTransactionForm(transaction, currencies, editTransactionFunction) {
        return (
            <form onSubmit={editTransactionFunction}>
                <table className="table">
                    {TableUtility.generateHeaderRow(["Currency Type", "Units Purchased", "Total Cost (AUD)", "", ""])}
                    <tbody>
                        <tr>
                            <td>
                                <select required defaultValue={transaction.currencyID} className="form-control" name="currency">
                                    {currencies.map((currency, index) => <option value={currency.id} key={currency.id}>{currency.name}</option>)}
                                </select>
                            </td>
                            <td>
                                <input required className="form-control" type="number" min="1" id="units" defaultValue={transaction.units}/>
                            </td>
                            <td>
                                <input required className="form-control" type="number" min="1" id="totalCost" defaultValue={transaction.totalCost}/>
                            </td>
                            <td>
                                <button className="btn btn-primary">Edit Transaction</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        )
    }
}
