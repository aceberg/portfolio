import { Show } from 'solid-js'
import { Router, Route, useNavigate } from "@solidjs/router";
import './App.css'
import Header from './pages/Header'
import Portfolio from './pages/Portfolio'
import { currentPage, setCurrentPage } from './utils/exports'
import MyCV from './pages/MyCV'
import { getDataFromGithub } from './utils/github'

function App() {

  getDataFromGithub();

  return (
    <div class="bg-gray-950 min-h-screen flex flex-col">
      <Header></Header>
      <div class="flex justify-center px-8 mb-8">
        <div class="max-w-7xl w-full">
          <Router>
            <Route path="/cv" component={routeCV}/>
          </Router>
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


function routeCV() {
  const navigate = useNavigate();
  navigate("/", { replace: true });
  
  setCurrentPage("cv");

  return (<></>);
}