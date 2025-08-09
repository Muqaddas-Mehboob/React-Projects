import './App.css'

function App() {
  /* The code `console.log(process.env.REACT_APP_APPWRITE_URL)` is logging the value of the environment
  variable `REACT_APP_APPWRITE_URL` to the console. This can be useful for debugging or checking the
  value of environment variables during development. */

  console.log(import.meta.env.VITE_APPWRITE_URL)

  return (
    <><h1>Hello with appwrite</h1></>
  )
}

export default App
