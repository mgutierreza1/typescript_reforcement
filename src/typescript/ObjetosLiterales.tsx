interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNro: number;
}

export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombreCompleto: 'Melvin',
        edad: 20,
        direccion: {
            pais: 'Bolivia',
            casaNro: 0
        }
    };

  return (
    <div>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
                {JSON.stringify(persona, null, 2)}
            </pre>
        </code>
    </div>
  )
}
