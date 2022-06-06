import { Header, Table, Results, Warning, Footer } from './container'
import './global.css'

function App() {

  return (
    <div className='app'>
      <Header />
      <Warning />
      <Table />
      <Results />
      <Footer />
    </div>
  )
}

export default App
