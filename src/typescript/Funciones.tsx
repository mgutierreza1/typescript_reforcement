import React from 'react'

export const Funciones = () => {

    const sumar = (a: number, b: any): number => {
        return a+b;
    }

  return (
    <div>
        <h3>Funciones</h3>
        <span>
            El resultado es: {sumar(1,'s')}
        </span>
    </div>
  )
}
