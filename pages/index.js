import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
const postURL = "http://lagarto6.ing.puc.cl/ordenes-compra/?id=skdfhskdjcamsk21234"

export default function Home() {

  // Declare the states variables
  const [data, setData] = useState(null)

  // Make POST request to API with axios
  function handleGetClick() {
    try {
      console.log("Post to server")
      let body = {
        "cliente": "lucasvsj",
        "sku" : 932845791283,
        "fechaEntrega" : "2023-12-12",
        "cantidad" : 12,
        "urlNotificacion" : "www.example.com"
      }
      axios.post(postURL, body)
      .then((response) => {
        console.log(response)
        setData(response.data)
      })

    } catch (err) {
      console.error(err)
    }
  }



  return (
    <div className='container text-center m-3 p-3'>
      <h1> Recorreccion E1 </h1>

      {/* Deployar resultados */}
      <button className='btn btn-dark' onClick={() => handleGetClick}> Get </button>
    </div>
  )
}
