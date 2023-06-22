/* eslint-disable no-undef */
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  default_user_pass: process.env.DEFAULT_USER_PASS,
  defalt_student_pass: process.env.DEFAULT_STUDENT_PASS,
  defalt_faculty_pass: process.env.DEFAULT_FACULTY_PASS,
  defalt_admin_pass: process.env.DEFAULT_ADMIN_PASS,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt_secret: process.env.JWT_SECRET,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_expires_id: process.env.JWT_EXPIRES_IN,
  jwt_algorithom: process.env.JWT_ALGORITHOM,
  jwt_refresch_expires_in: process.env.JWT_REFRESCH_EXPIRES_IN,
};
