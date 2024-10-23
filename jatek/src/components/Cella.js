import './cella.css'
import React from 'react'

function Cella(props) {

    function katt(){
        console.log("katt", props.index)
        props.katt(props.index)
      }

  return (
    <div className='cella' onClick={()=>{katt()}}>
        {props.elem}     {/*átadtuk a lista elemeit megjelenítésra a cellának */}


    </div>
  )
}


export default Cella