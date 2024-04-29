import { useState } from 'react'
import './App.css'
import Main from './components/Main'
/**
 * Challenge: Start a brand new React app!
 * - Create a separate App component
 * - Import and render the App component here
 * - In the App component, render a <main> element
 * - Style everything to look like the slide
 */
export default function App() {


  return (
    <>
    <div className='flex justify-center items-center border border-black h-screen'>
     <Main />
    </div>
    </>
  )
}


