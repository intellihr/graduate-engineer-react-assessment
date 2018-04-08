import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Transactions from './Transactions'

render(
  <BrowserRouter>
    <Route exact path='/transactions' component={Transactions} />
  </BrowserRouter>,
  document.getElementById('app')
)
