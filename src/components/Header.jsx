import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function NAME (props) {
    console.log(props)
    const isLoggedIn = props.isLoggedIn
    return isLoggedIn ? <h2> Welcome </h2> : <h2>Create Account</h2>

  }

