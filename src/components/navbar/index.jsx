import React from 'react'
import './navbar.css'
import {navbar} from '../../utils/navbar'

export default function Navbar() {
  return (
    <ul>
        {
            navbar.map(item => <li key={item.id}>{item.title}</li>)
        }
    </ul>
  )
}
