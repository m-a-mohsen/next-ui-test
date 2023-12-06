import { button as buttonStyles } from "@nextui-org/theme";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Dashboard() {
  return (
    <>
      <div>Dashboard</div>
      <LogoutLink
        className={buttonStyles({
          color: "danger",
          radius: "full",
          variant: "ghost",
        })}
      >
        Sign out
      </LogoutLink>
    </>
  );
}
