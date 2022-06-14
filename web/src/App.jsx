import { Header, ContentArea, Footer } from './container'
import { useSelector } from 'react-redux';


import './themes.scss'

function App() {
  const themeSelector = useSelector((state)=> state.theme.value)
  return (
    <div 
    className={!themeSelector?'app_light':'app_dark'}
    >
      <Header />
      <ContentArea />
      <Footer />
    </div>
  )
}

export default App
