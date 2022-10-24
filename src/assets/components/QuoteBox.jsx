import quotes from '../quotes.json'
import { useState } from 'react'
import ExtraComponents from './ExtraComponents'

const QuoteBox = ()=>{

    const randomIndex = Math.floor(Math.random()*quotes.length)
    const [index, setIndex] = useState(randomIndex)

    const changePhrase = ()=>{
      const randomNum = Math.floor(Math.random()*quotes.length)
      setIndex(randomNum)
  } 

  const colors =["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#D9D970" ]
  const randomColorIndex = Math.floor(Math.random()*colors.length)
  document.body.style = `background: ${colors[randomColorIndex]}`

    return(
        <div className='container'>
            <div className="quote-box">
            <div className='imgQuote'><i class="fa-solid fa-quote-left" style={{color: colors[randomColorIndex]}}></i></div>
                <h2 style={{color: colors[randomColorIndex]}}>{quotes[index].quote}</h2>
            </div>
            <div className='autor'>
                <h2 style={{color: colors[randomColorIndex]}}>{quotes[index].author}</h2>
                <ExtraComponents colors={colors} randomColorIndex={randomColorIndex} changePhrase={changePhrase} />
            </div>    
        </div>
        )
    }

export default QuoteBox