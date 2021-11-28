import { supabase } from './supabase';

async function twitterSignIn() {
  try {
    const { error } = await supabase.auth.signIn({
      provider: 'twitter'
    });
    if (error) throw error;
  } catch (error) {
    console.log('sign in function:', error);
  }
}

export default twitterSignIn;
