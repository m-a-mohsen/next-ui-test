'use client'
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useRouter } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
     Kbd,
} from "@nextui-org/react";

import { SearchIcon } from "../../../../components/icons";

export default function UserNavbar() {

    	const searchInput = (
        <Input
          aria-label="Search"
          classNames={{
            inputWrapper: "bg-default-100",
            input: "text-sm",
            base: "max-w-full sm:max-w-[10rem] h-10",
          }}
          endContent={
            <Kbd className="hidden lg:inline-block" keys={["command"]}>
              K
            </Kbd>
          }
          labelPlacement="outside"
          placeholder="Search..."
          startContent={
            <SearchIcon className="pointer-events-none flex-shrink-0 text-base text-default-400" />
          }
          type="search"
        />
      );
  return (
    <Navbar className=" rounded-2xl" isBlurred={true}  >
      <NavbarContent justify="start">
        <NavbarContent className="hidden gap-3 sm:flex">
          <NavbarItem isActive>
            <Link
              className=" text-2xl font-bold"
              color="primary"
              href="/dashboard"
            >
              Dashboard
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/sessions" aria-current="page" color="foreground">
              Sessions
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/spaced-repetition">
              Spaced repetitions
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        {/* <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        /> */}
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name="Jason Hughes"
              size="sm"
              src="https://avatars.githubusercontent.com/u/52429360?v=4&s=150"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <span className=" ">Signed in as</span>
              <span className="font-light"> (User)</span>
              <p className="font-semibold">ma.abdel.mohsen@gmail.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            {/* <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem> */}
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" href="/api/auth/logout">
              Sign out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
