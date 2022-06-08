import { Header, Table, About, Results, Warning, Footer } from './container'

import './themes.scss'

function App() {

  return (
    <div className='app_light'>
      <Header />
      <About />
      <Warning />
      <Table />
      <Results />
      <Footer />
    </div>
  )
}

export default App
