
import './App.css'
import quotes from './assets/quotes.json'
import QuoteBox from './assets/components/QuoteBox';


function App() {

  console.log(quotes);

  

  return (
    <>
      <div className="App">
        <QuoteBox />
      </div>
    </>
  )
}

export default App
