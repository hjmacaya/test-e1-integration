import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
const postURL = "https://lagarto6.ing.puc.cl/ordenes-compra/?id=skdfhskdjcamsk21234"
const patchURL = "https://lagarto6.ing.puc.cl/ordenes-compra/skdfhskdjcamsk21234"

export default function Home() {

  // Declare the states variables
  const [data, setData] = useState(null)
  const [data2, setData2] = useState(null)

  // Make POST request to API with axios
  function handleGetClick() {
    try {
      console.log("Post to server")
      let body = {
        "cliente": "lucasvsj",
        "sku" : 932845791283,
        "fechaEntrega" : "2023-12-12",
        "cantidad" : 12,
        "urlNotificacion" : "https://www.example.com/"
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

  // PATCH request
  function handlePatchClick() {
    try {
      console.log("Patch to server")
      let body = {
        "estado": "rechazado",
      }
      axios.patch(patchURL, body)
      .then((response) => {
        console.log(response)
        setData2(response.data)
      })

    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="container text-center my-3 p-3 bg-white shadow rounded">
      <h1> Recorreccion E1 </h1>

      {/* Btns to make requests */}
      <div className="d-flex flex-row justify-content-center gap-2 my-2">
        <button className='btn btn-dark' onClick={handleGetClick}> Post </button>
        <button className='btn btn-dark' onClick={handlePatchClick}> Patch </button>
      </div>
    </div>
  )
}
