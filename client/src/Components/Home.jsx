import React from 'react'
import Layout from './Layout'
import { useAuth } from '../Context/auth'
import Login from './Login'

const Home = () => {
  const [auth, setAuth] = useAuth()
  return (
    <>
      {
        !auth?.user ? (
          <>
            <Login />
          </>
        ) : (
          <>
            <Layout title={'Home Page'}>
              <h1>hello</h1>
              <pre>{JSON.stringify(auth, null, 4)}</pre>
            </Layout>

          </>
        )
      }


    </>
  )
}

export default Home
