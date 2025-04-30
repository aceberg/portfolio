import { Show } from 'solid-js'
import './App.css'
import Header from './pages/Header'
import Portfolio from './pages/Portfolio'
import { currentPage } from './utils/exports'
import MyCV from './pages/MyCV'

function App() {

  return (
    <div class="bg-gray-950 min-h-screen flex flex-col">
      <Header></Header>
      <div class="flex justify-center px-8 mb-8">
        <div class="max-w-7xl w-full">
          <Show
            when={currentPage() === "portfolio"}
            fallback={<MyCV></MyCV>}
          >
            <Portfolio></Portfolio>  
          </Show>
        </div>
      </div>
    </div>
  )
}

export default App
