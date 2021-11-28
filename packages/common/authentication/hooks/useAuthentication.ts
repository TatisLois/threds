import { supabase } from '../supabase';
import type { User } from '@supabase/supabase-js';

type Authenticated = {
  user: User;
  isAuthenticated: Boolean;
};
function useAuthentication(): Authenticated {
  const user = supabase.auth.user();
  console.log(user);

  return { isAuthenticated: Boolean(user), user };
}

export default useAuthentication;
