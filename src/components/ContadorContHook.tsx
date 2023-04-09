import { useCounter } from "../hooks/useCounter"


export const ContadorContHook = () => {

    const {valor, acumular} = useCounter(5);

    return (
        <div>
            <h3>
                Contador Cont Hook: 
                <small> {valor}</small>
            </h3>

            <button className="btn btn-primary" onClick={() => acumular(1)}>
                +1
            </button>

            &nbsp;

            <button className="btn btn-primary" onClick={() => acumular(-1)}>
                -1
            </button>
        </div>
    )
}