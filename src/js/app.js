import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import HelloWorld from './HelloWorld'

render(
  <BrowserRouter>
    <Route exact path='/hello' component={HelloWorld} />
  </BrowserRouter>,
  document.getElementById('app')
)
