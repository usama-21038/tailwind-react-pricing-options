import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultChart from './components/Results chart/ResultChart'

function App() {
  return (
    <>
      <header>
        <Navbar />
        {/* <DaisyNav /> */}
      </header>
      <main>
        <PricingOptions />

        <ResultChart></ResultChart>
      </main>
      <footer></footer>
    </>
  )
}

export default App
