import uuid from 'uuid'

export default class TableGenerator {

    static generateHeader(columns) {
        return (
            <thead>
                <tr>
                    {columns.map((column) => <th key={uuid()} scope="col">{column}</th>)}
                </tr>
            </thead>
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
}