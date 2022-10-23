import React from 'react'



const ExtraComponents = (colors, randomColorIndex, changePhrase)=>{
    

    return(

        <div className='buttonContainer'>
            <div className="button-box" >
                <button className='button' onClick={changePhrase} style={{color: colors[randomColorIndex]}} >
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </button>
            </div>
        </div>
    )
}

export default ExtraComponents