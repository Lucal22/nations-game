import { Header, Table, About, Results, Footer } from './container'
import { useSelector } from 'react-redux';


import './themes.scss'

function App() {
  const themeSelector = useSelector((state)=> state.theme.value)
  return (
    <div 
    className={!themeSelector?'app_light':'app_dark'}
    >
      <Header />
      <Table />
      <Footer />
    </div>
  )
}

export default App
