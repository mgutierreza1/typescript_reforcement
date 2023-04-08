export const TiposBasicos = () => {

    const nombre: string = 'Melvin';
    const edad: number = 123;
    const activo: boolean = true;
    const poderes: string[] = [];

    poderes.push('Velocidad');

    return (
        <div>
            <h1>Tipos Basicos</h1>
            {nombre}
            <br/>
            {poderes.join(',')}
        </div>
    )
}

export default TiposBasicos;