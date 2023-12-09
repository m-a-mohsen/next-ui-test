'use server'
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
export default async function logout() {
  return  await <LogoutLink>Log Out</LogoutLink>;
}
