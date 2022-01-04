import React from 'react'

export default function ComParametro(props) {
    const status = props.numero >= 7 ? 'Aprovado' : 'Reprovado'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
            <h3>{props.numero}</h3>
            <h3>{status}</h3>
        </div>
    )
}