import { Switch, Route } from 'react-router-dom'
import Currency from './Currency'
import Transaction from './Transaction'
import GroupedTransactions from './GroupedTransactions'

export default class Main extends React.Component {
  constructor(props) {
    super(props)

    this.addTransaction = this.addTransaction.bind(this)
    this.removeTransaction = this.removeTransaction.bind(this)
    this.editTransaction = this.editTransaction.bind(this)

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

  removeTransaction(id) {
    this.setState((prevState) => ({
      transactions: prevState.transactions.filter((transaction) => transaction.id !== id)
    }))
  }

  editTransaction(id, currencyID, units, totalCost) {
    this.removeTransaction(id)
    this.addTransaction(currencyID, units, totalCost)
  }

  render() {
    return (
      <Switch>
      <Route exact path='/' render={() => (
        <GroupedTransactions
          addTransaction={this.addTransaction}
          removeTransaction={this.removeTransaction}
          editTransaction={this.editTransaction}
          transactions={this.state.transactions}
          currencies={this.state.currencies}
        />
      )} />
    </Switch>
    )
  }
}
