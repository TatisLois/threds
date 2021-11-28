import React from 'react'
import { supabase } from '../../constants'

export default function AuthenticationButton() {
  const [user, setUser] = React.useState({})
  const signIn = async () => {
    let { user, error, session } = await supabase.auth.signIn({
      provider: 'twitter'
    })
    console.log('error', error)
    console.log('user', user)
    setUser({ user, error, session })
  }

  console.log('d', supabase.auth.user())
  return <button onClick={() => signIn()}>Sign In</button>
}
