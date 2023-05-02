import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [val,setVal]=useState("");
  const[print,setPrint]=useState(false);
  function getData(e: React.FormEvent<HTMLInputElement>){
    e.preventDefault();
    setVal(e.currentTarget.value);
  }
  return (
    <main className='Home'>
     
      {
        print?<h1>{val}</h1>:null
      }
    
      
        <input type="text"  onChange={getData}/><br/><br/>
        <button onClick={()=>setPrint(true)}>Submit</button>
      
      
    </main>
  )
}
