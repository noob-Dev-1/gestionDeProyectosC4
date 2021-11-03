import type { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <p>Página de Index</p>
      <Link href="/admin/usuarios">
      <a>Ir a admin usuarios</a>
      </Link>
    </div>
  )
}

export default Home
