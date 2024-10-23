import Cella from "./Cella"
import React from 'react'


function Jatekter(props) { //props tartalmazza a lista és katt fgvt

    function katt(adat){  //az eseményt kezeli, amikor egy cellára kattintanak, és továbbítja az eseményt az App komponens felé.
        console.log("játéktér", adat) // egy cellára kattintanak, a kattintott cella indexét (adat) megkapj
        props.katt(adat) // kattintott cella indexét továbbítja a szülő komponensnek, azaz az Appnak
        //az App komponens katt függvényét hívjuk meg

    }



  return (
    <>
        {
            props.lista.map((elem,index)=> {
                return <Cella elem={elem} key={index} index={index} katt={katt}/>
            })

        }
    
    
    
    </>
  )
}


export default Jatekter



