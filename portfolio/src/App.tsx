import './App.css'
import Header from './pages/Header'
import Portfolio from './pages/Portfolio'

function App() {

  return (
    <div class="bg-gray-950 text-gray-300 min-h-screen flex justify-center p-8">
      <div class="max-w-7xl w-full">
        <Header></Header>

        <Portfolio></Portfolio>  
      </div>
    </div>
  )
}

export default App
