import { useState } from 'react'
import './App.css';
import Jatekter from './components/Jatekter';

function App() {
    //const lista=["X","X"," ","O"," "," "," "," ","O"]
    // A statek olyan változók, amelyek leírják a program aktuális állapotát, és a React automatikusan frissíti az oldal azon részét, 
    // amely a state-ben megahtározott változóktól függ. A state-k beállítása a useState hokkal történik. A useState hook egy speciális függvény, 
    // visszatérési értéke egy lista,
    //  melynek két eleme van: a változó és a változót beállító függvény. 
    //  A változó értéke a továbbiakban közvetlenül nem, csak ezen függvényen keresztül módosítható.

    const [lista,setLista] = useState(["X","X"," ","O"," "," "," "," ","O"])

    // program állapotát a lepes változó is leírja
    const  [lepes,setLepes]=useState(0)

    function katt(adat){ //a kattintott mező indexét jelöli,  jelzi, hogy a felhasználó melyik mezőre kattintott.
      //a fgv a  játék állapotát frissíti, amikor a felhasználó rákattint egy cellára.

      console.log("appban",adat)
          //lista[adat]="X" így nem változtathatjuk meg a state értékét
      //csak a setterén/beállítófüggvényén keresztül. 

      //1. készíts egy másolatot a változóról. 
      const sl=[...lista]

      //2. változtasd meg az értékét

      if (lepes%2==0){ //a sl tömb adott indexe
        sl[adat]="X"
      }else{
         sl[adat]="O" //sor megváltoztatja a kattintott mező értékét a megfelelő jelle
      }    
      //3. beállítóvüggvényen keresztül változtasd meg az eredeti változót.  a lista állapotának frissítése
      setLista([...sl]) //értékadás történi a háttérben: lista=sl
      let slepes=lepes+1 //növeli a lépések számát
      setLepes(slepes) 


    }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe</h1>
       

      </header>

      <article>
        <div className="jatekter">
        {/* Az App komponens átadja a saját katt függvényét a Jatekter komponensnek úgy, hogy az a props.katt(adat) 
        révén vissza tudjon jelezni, amikor egy cellára kattintanak. */}
          <Jatekter lista={lista} katt={katt}/>  {/* most kapcsoltuk össze a két komponenst */}

        </div>

      </article>
      <footer>Szalóki Klaudia</footer>
    </div>
  );
}

export default App;
