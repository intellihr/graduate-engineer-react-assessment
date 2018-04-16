import { Switch, Route } from 'react-router-dom'
import Transactions from './Transactions'

const Main = () => (
    <Switch>
      <Route exact path='/' component={Transactions}/>
      <Route path='/transactions' component={Transactions}/>
    </Switch>
)

export default Main