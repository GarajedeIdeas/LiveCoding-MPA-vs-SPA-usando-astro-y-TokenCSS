
import AdviceGenerator from './AdviceGenerator'


function App({advice}) {

  return (
    <div className="App">
      <h1>Advice Generator App</h1>
      <AdviceGenerator advice={advice}/>
    </div>
  )
}

export default App
