import React, { useEffect } from 'react'
import Layout from './components/layout'
import useGithubContext from './hooks/github-hooks'
import Profile from './components/profile'
import Repositories from './components/repositories'

function App() {
  const { githubState } = useGithubContext()

  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p style={{ marginTop: 300 }}>Loading...</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <p style={{ marginTop: 300 }}>Nenhum usuário pesquisado</p>
      )}
    </Layout>
  );
}

export default App;
