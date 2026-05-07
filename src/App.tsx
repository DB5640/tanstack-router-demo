import { useState } from 'react'
import './App.css'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

const router = createRouter({
  routeTree
})

declare module "@tanstack/react-router"{
  interface Register{
    router: typeof router
  }
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router} />

  )
}

export default App
