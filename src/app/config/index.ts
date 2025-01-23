import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join((process.cwd(), '.env')) })

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,

  database_url: process.env.DATABASE_URL,
  database_url_local: process.env.DATABASE_URL_LOCAL,

  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  default_password: process.env.DEFAULT_PASS,

  super_admin: {
    name: process.env.SUPER_ADMIN_NAME,
    email: process.env.SUPER_ADMIN_EMAIL,
    contactNumber: process.env.SUPER_ADMIN_CONTACT_NUMBER,
    password: process.env.SUPER_ADMIN_PASS,
  },

  jwt: {
    access_secret: process.env.JWT_ACCESS_SECRET,
    refresh_secret: process.env.JWT_REFRESH_SECRET,
    access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
    refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  },

  frontend_url: {
    live: process.env.FRONTEND_URL_LIVE,
    local: process.env.FRONTEND_URL_LOCAL,
  },

  sendMail: {
    email: process.env.EMAIL_ADDRESS,
    email_app_password: process.env.EMAIL_APP_PASSWORD,
  },
}
