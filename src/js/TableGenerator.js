import uuid from 'uuid'

export default class TableGenerator {

    static generateHeader(columns) {
        return (
            <thead>
                <tr>
                    {columns.map((column) => <th key={uuid()} scope="col">{column}</th>)}
                </tr>
            </thead>
        );
    }
}