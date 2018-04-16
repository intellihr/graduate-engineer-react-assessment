import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'
import Main from './Main'

render(
  <BrowserRouter>
    <div>
      <Header />
      <Main />
    </div>
  </BrowserRouter>,
  document.getElementById('app')
)