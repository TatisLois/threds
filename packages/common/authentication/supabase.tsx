import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://euxkomwifugdvkurhnsk.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzM1MTA0NCwiZXhwIjoxOTUyOTI3MDQ0fQ.nuGJNjEJwEhNxtIGGTUBKvwYETfAq94nJdUIpvKQaT4'
export const supabase = createClient(supabaseUrl, supabaseKey)