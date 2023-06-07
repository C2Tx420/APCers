import React from 'react'
import './Button.scss'

export default function Button({size='m',color='colored',children}) {
    return (
        <>
            <button className={`${size} ${color} btn`}>{children}</button>
        </>
    )
  }