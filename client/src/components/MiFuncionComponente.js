import { useState } from 'react';

function MiFuncionComponente() {

    const [contador, setContador ] = useState(0); 

    const handleClick = function () {
        console.log("Le di click en incrementar MiFuncionComponente")
        // contador += 1;
        setContador(contador+1);
    }

    return (
        <div>
            Hola desde MiFuncionComponente
            <div>
                Esto es un boton incremental:
            </div>
            <div>
                <span id="numero">{contador}</span>
                <button onClick={handleClick}>Incrementar</button>
            </div>
        </div>
    );
}

export default MiFuncionComponente;
