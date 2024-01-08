import { useEffect, useState } from "react"
import ReactMarkdown from 'react-markdown'
import React from "react"

const Markdown=()=>{
  const[text,setText]= useState("welcome")

  
  useEffect(()=>{

},[text])



  return(
    <div className="container">
      <textarea className="left" onChange={(e)=>setText(e.target.value)} ></textarea>
      <div className="right"><ReactMarkdown>{text}</ReactMarkdown></div>
    </div>
  )
}

export default Markdown