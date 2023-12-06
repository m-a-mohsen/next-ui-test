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
    <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          {/* <Card className="max-w-xs mx-auto mb-4">
      <Text>Sales</Text>
      <Metric>$ 71,465</Metric>
      <Flex className="mt-4">
        <Text>32% of annual target</Text>
        <Text>$ 225,000</Text>
      </Flex>
      <ProgressBar value={32} className="mt-2" />
        </Card> */}
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
            })}
          >
            {" "}
            Sign in{" "}
          </LoginLink>
        </div>
        <div className="mt-8">
          <Snippet variant="bordered" size="sm">
            npm install open-tech-camp
            {/* <span>
                  Get started by forking <Code color="primary">GitHub repo</Code>
                </span> */}
          </Snippet>
        </div>
      </section>
    </div>
  );
}
