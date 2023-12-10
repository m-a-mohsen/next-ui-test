"use client";
import {
  Accordion,
  AccordionItem,
  Button,
  Link,
  Card,
  CardBody,
  Divider,
  User,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Select,
  SelectItem,
  Chip,
  Checkbox,
} from "@nextui-org/react";

export default function LeftPanel() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  //-----------------Quick Access-----------------

  const quickAccess = (
    <>
      <div className="flex  items-center ">
        <Button color="default" variant="light" size="sm">
          Prev
        </Button>
        <Button color="primary" variant="ghost" size="sm">
          Today
        </Button>
        <Button color="default" variant="light" size="sm">
          Next
        </Button>
      </div>
      <Divider className="my-2" />
      <ul className="list-inside list-disc pb-2 ">
        <li>
          <Link> Express Basics </Link>
        </li>
        <li>
          <Link> Express Advanced </Link>
        </li>
      </ul>
    </>
  );

  //-----------------Filters-----------------

  const filters = (
    <div className="flex flex-col gap-2">
      {/* <p>By Topic:</p> */}
      <Select
        label="By Topic:"
        className=" "
        size="md"
        labelPlacement="outside"
        placeholder="Select Topic"
      >
        <SelectItem key="1" value="HTML">
          HTML
        </SelectItem>
        <SelectItem key="2" value="CSS">
          CSS
        </SelectItem>
        <SelectItem key="3" value="JavaScript">
          JavaScript
        </SelectItem>
        <SelectItem key="4" value="Typescript">
          Typescript
        </SelectItem>
      </Select>

      {/* <p>By Phase:</p> */}
      <Select
        label="By Phase:"
        className=" "
        size="md"
        labelPlacement="outside"
        placeholder="Select Phase"
      >
        <SelectItem key="1" value="Current Phase">
          Current Phase
        </SelectItem>
        <SelectItem key="2" value="Phase 1">
          Phase 1
        </SelectItem>
        <SelectItem key="3" value="Phase 2">
          Phase 2
        </SelectItem>
        <SelectItem key="4" value="Phase 3">
          Phase 3
        </SelectItem>
        <SelectItem key="5" value="Phase 4">
          Phase 4
        </SelectItem>
      </Select>
      {/* <p>By Week:</p> */}
      <Select
        label="By Week:"
        className=" "
        size="md"
        labelPlacement="outside"
        placeholder="Select week"
      >
        <SelectItem key="1" value="Current Week">
          Current Week
        </SelectItem>
        <SelectItem key="2" value="Week 1">
          Week 1
        </SelectItem>
        <SelectItem key="3" value="Week 2">
          Week 2
        </SelectItem>
        <SelectItem key="4" value="Week 3">
          Week 3
        </SelectItem>
        <SelectItem key="5" value="Week 4">
          Week 4
        </SelectItem>
      </Select>
      {/* //-------------------------------By Tag--------------------------------- */}
      <Select
        label="By Tags:"
        isMultiline={true}
        selectionMode="multiple"
        className=" "
        size="md"
        labelPlacement="outside"
        placeholder="Select tags"
      >
        <SelectItem key="1" value="Week 1">
          Fundamental
        </SelectItem>
        <SelectItem key="2" value="Week 2">
          Important
        </SelectItem>
        <SelectItem key="3" value="Week 3">
          Advanced
        </SelectItem>
        <SelectItem key="4" value="Week 4">
          New Tech
        </SelectItem>
      </Select>
      <Divider className="my-2" />
      {/* //-------------------------------Check Boxes--------------------------------- */}
      <div className="flex flex-col gap-2">
        <Checkbox color="primary" size="sm">
          Recommended
        </Checkbox>
        <Checkbox color="danger" size="sm">
          Marked Struggling
        </Checkbox>
      </div>
      <Divider className="my-2" />
      <Select
        label="By Level of Understanding:"
        className=" "
        size="md"
        labelPlacement="outside"
        placeholder="Select Level"
      >
        <SelectItem key="1" value="Basic">
          Basic
        </SelectItem>
        <SelectItem key="2" value="Intermediate">
          Intermediate
        </SelectItem>
        <SelectItem key="3" value="Master">
          Master
        </SelectItem>
      </Select>
      <Divider className="my-2" />

      <div className="flex justify-around pb-2">
        <Button color="default" variant="light" size="sm">
          reset
        </Button>
        <Button color="primary" variant="ghost" size="sm">
          Apply
        </Button>
      </div>
    </div>
  );
  //-------------------------------Sessions---------------------------------
  const sessions = (
    <ul className="list-inside list-disc pb-2 ">
      <li>
        <Link> Tailwind Basics </Link>
      </li>
      <li>
        <Link> UI Component Libraries </Link>
      </li>
      <li>
        <Link> Drizzle Basics </Link>
      </li>
      <li>
        <Link> SQL (Neon) </Link>
      </li>
    </ul>
  );
  //-------------------------------Sessions---------------------------------
  const references = (
    <ul className="list-inside list-disc pb-2 ">
      <li>
        <Link> Installation </Link>
      </li>
      <li>
        <Link> Github Advanced </Link>
      </li>

    </ul>
  );
  return (
    <Accordion
      variant="splitted"
      selectionMode="multiple"
      isCompact
      defaultExpandedKeys={["1"]}
    >
      <AccordionItem key="1" aria-label="Quick Access" title="Quick Access">
        {quickAccess}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Filter & Sort" title="Filter & Sort">
        {filters}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Sessions" title="All Sessions">
        {sessions}
      </AccordionItem>
      <AccordionItem key="4" aria-label="To Study" title="To Study">
        <p className="pb-2 text-center text-sm font-light">
          You have nothing to study today, Go home :){" "}
        </p>
      </AccordionItem>
      <AccordionItem key="5" aria-label="My References " title="My References">
        {references}
      </AccordionItem>
    </Accordion>
  );
}
