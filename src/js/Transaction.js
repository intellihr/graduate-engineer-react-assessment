import uuid from 'uuid'

export default class Transaction {
    constructor(currencyID, units, totalCost) {
        this.id = uuid();
        this.currencyID = currencyID;
        this.units = units;
        this.totalCost = totalCost;
    }
}