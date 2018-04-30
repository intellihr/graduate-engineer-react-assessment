import uuid from 'uuid'

export default class Currency {
    constructor(name, costPerUnit) {
        this.id = uuid()
        this.name = name
    }
}
