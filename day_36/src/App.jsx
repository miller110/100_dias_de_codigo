import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import CondicionalComponent from './components/CondicionalComponent'
import Counter from './components/Counter'
import GithubUser from './components/GitHubUser'

function App() {

  return (
      <div>
        <GithubUser
          userName = "miller110"/>
      </div>
  )
}

export default App;
