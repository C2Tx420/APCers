import React from 'react'
import './Button.scss'

export default function Button({ size = 'm', color = 'colored', onClick, disable, children }) {
    return (
        <>
            <button className={`${size} ${color} ${disable ? 'disable' : ''} btn`} onClick={onClick} >{children}</button>
        </>
    )
}