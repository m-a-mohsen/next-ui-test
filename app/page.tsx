import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle, titleUnderLine } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
      <section className="flex flex-col grow items-center justify-center gap-4 py-8 md:py-10  ">
        <div className="inline-block max-w-lg text-center justify-center ">
          <h1 className={title()}>Deliver&nbsp;</h1>
          <h1 className={title({ color: "blue" })}>personalized&nbsp;</h1>
          <br />
          <h1 className={title({ color: "violet" })}>educational&nbsp;</h1>
          <h1 className={title()}>content, and leave no one&nbsp;</h1>
          <h1 className={title({ color: "pink" })}>behind</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Educational system for tech bootcamps
          </h2>
        </div>
        <div className="flex gap-3">
          <Link
            isExternal
            href={siteConfig.links.docs}
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
          >
            Documentation
          </Link>
          <LoginLink
            className={buttonStyles({
              color: "default",
              radius: "full",
              variant: "ghost",
            })}>
            Sign in
          </LoginLink>
        </div>
        <div className="mt-8">
          <Snippet variant="bordered" size="sm">
            npx open-tech-camp
          </Snippet>
        </div>
      </section>
  );
}
