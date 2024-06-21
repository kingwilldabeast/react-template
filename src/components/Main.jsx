import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function NAME (props) {
    console.log(props)
    const thing = ""
    const userType = "guest"

        switch (userType) {
            case "guest":
                return <GuestComponent/>
                break

            case "user":
                return <UserComponent/>
                break

            case "admin":
                return <AdminComponent/>
                break

            default:
                return <IsLoggedOut/>

        }
  
  }