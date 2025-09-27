import { sso } from '@better-auth/sso'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { anonymous } from 'better-auth/plugins'

const auth = betterAuth({
  database: drizzleAdapter({}, { provider: 'pg' }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 1
  },
  plugins: [sso(), anonymous()]
})

export { auth }
