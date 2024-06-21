import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function NAME (props) {
    console.log(props)
    const thing = ""
    return (
      
      <div className="">
        <h2>Hello</h2>


        <label htmlFor="boxSize">Select Box Size:</label>
        <select
          id="boxSize"
          name="boxSize"
          onChange={props.handleChange}
          required
        >
          <option disabled selected required>
            Select a size
          </option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
  
      </div>
    )
  }