import { supabase } from './supabase';

async function twitterSignIn() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    console.log('sign out function:', error);
  }
}

export default twitterSignIn;
