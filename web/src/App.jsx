import { Header, Table, About, Results, Warning, Footer } from './container'
import { useSelector } from 'react-redux';


import './themes.scss'

function App() {
  const themeSelector = useSelector((state)=> state.theme.value)
  return (
    <div 
    className={!themeSelector?'app_light':'app_dark'}
    >
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
