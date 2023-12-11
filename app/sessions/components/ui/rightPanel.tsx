"use client";
import {
  Accordion,
  AccordionItem,
  Button,
  Link,
  Card,
  Avatar,
  Divider,
  User,
  Chip,
  Checkbox,
  Select,
  SelectItem,
  Slider,
} from "@nextui-org/react";

export default function RightPanel() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  //-----------------co students-----------------
  const coStudents = (
    <div className="pb-2">
      <User
        className="pb-2"
        name="Junior Yorick"
        description={
          <Link href="https://github.com/m-a-mohsen" size="sm" isExternal>
            @yorickdev
          </Link>
        }
        avatarProps={{
          src: "https://i.pravatar.cc/150?img=2",
        }}
      />
      <User
        className="pb-2"
        name="Rose Blackwell"
        description={
          <Link href="https://github.com/m-a-mohsen" size="sm" isExternal>
            @blackcode
          </Link>
        }
        avatarProps={{
          src: "https://i.pravatar.cc/150?img=10",
        }}
      />
      <User
        className="pb-2"
        name="Judith Watkins"
        description={
          <Link href="https://github.com/m-a-mohsen" size="sm" isExternal>
            @jojo
          </Link>
        }
        avatarProps={{
          src: "https://i.pravatar.cc/150?img=5",
        }}
      />
      <User
        className="pb-2"
        name="Prince Jan"
        description={
          <Link href="https://github.com/m-a-mohsen" size="sm" isExternal>
            @jandope
          </Link>
        }
        avatarProps={{
          src: "https://i.pravatar.cc/150?img=6",
        }}
      />
      <User
        className="pb-2"
        name="Phillip Robbins"
        description={
          <Link href="https://github.com/m-a-mohsen" size="sm" isExternal>
            @phillip-g
          </Link>
        }
        avatarProps={{
          src: "https://i.pravatar.cc/150?img=7",
        }}
      />
      <User
        className="pb-2"
        name="Malik Wilkins"
        description={
          <Link href="https://github.com/m-a-mohsen" size="sm" isExternal>
            @wilkinscd
          </Link>
        }
        avatarProps={{
          src: "https://i.pravatar.cc/150?img=8",
        }}
      />
      <User
        className="pb-2"
        name="Jana Blair"
        description={
          <Link href="https://github.com/m-a-mohsen" size="sm" isExternal>
            @janabash
          </Link>
        }
        avatarProps={{
          src: "https://i.pravatar.cc/150?img=19",
        }}
      />
    </div>
  );
  //------------------- instructors------------------------
  const instructors = (
    <div className="pb-2">
      <User
        className="pb-2"
        name="Leonard Bray"
        description={
          <Link href="https://github.com/m-a-mohsen" size="sm" isExternal>
            Ask me
          </Link>
        }
        avatarProps={{
          src: "https://i.pravatar.cc/150?img=50",
        }}
      />
      <User
        className="pb-2"
        name="Millie Dorsey"
        description={
          <Link href="https://github.com/m-a-mohsen" size="sm" isExternal>
            Ask me
          </Link>
        }
        avatarProps={{
          src: "https://i.pravatar.cc/150?img=29",
        }}
      />
      <User
        className="pb-2"
        name="Arthur Fuentes"
        description={
          <Link href="https://github.com/m-a-mohsen" size="sm" isExternal>
            Ask me
          </Link>
        }
        avatarProps={{
          src: "https://i.pravatar.cc/150?img=3",
        }}
      />
    </div>
  );

  //------------------Session details-------------------------
  const sessionDetails = (
    <div className="pb-2">
      <User
        className="pb-2"
        name="Leonard Bray"
        description={
          <Link href="https://github.com/m-a-mohsen" size="sm" isExternal>
            Ask me
          </Link>
        }
        avatarProps={{
          src: "https://i.pravatar.cc/150?img=50",
        }}
      />
      <Divider className="my-2" />
      <div className="text-sm">
        <p>
          Date : <span className="text-primary">12.12.2023</span>
        </p>
        <p>
          Started : <span className="text-primary">09:35 AM</span>
        </p>
        <p>
          Ended : <span className="text-warning">Ongoing</span>
        </p>
      </div>

      <Divider className="my-2" />
      <p className="pb-2 text-sm">Tags :</p>
      <div className="flex flex-wrap gap-1 pb-2">
        <Chip size="sm" color="default">
          Core Content
        </Chip>
        <Chip size="sm" color="primary">
          Backend
        </Chip>
        <Chip size="sm" color="secondary">
          New tech
        </Chip>
        <Chip size="sm" color="success">
          Beginner Level
        </Chip>
        <Chip size="sm" color="warning">
          Fundamental
        </Chip>
        <Chip size="sm" color="danger">
          Important
        </Chip>
      </div>
    </div>
  );
  //------------------My session Controls-------------------------
  const sessionControls = (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">
        Title :{" "}
        <span className="font-normal text-primary"> Express Basics</span>
      </p>
      {/* //-------------------------------Check Boxes--------------------------------- */}
      <div className="flex flex-col gap-2">
        <Checkbox color="primary" size="sm">
          To Study
        </Checkbox>
        <Checkbox color="primary" size="sm">
          Mark as Reference
        </Checkbox>
        <Checkbox color="danger" size="sm">
          Struggling
        </Checkbox>
      </div>
      <Divider className="my-2" />
      {/* //-------------------------------Selects--------------------------------- */}
      <Select
        label="My Understanding Level:"
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
        <SelectItem key="3" value="Expert">
          Expert 😎
        </SelectItem>
      </Select>

      <Select
        label="Spaced Repetition :"
        className=" "
        size="md"
        labelPlacement="outside"
        placeholder="Select Cycle"
      >
        <SelectItem key="1" value="Current Phase">
          1st Cycle
        </SelectItem>
        <SelectItem key="2" value="2nd Cycle">
          2nd Cycle
        </SelectItem>
        <SelectItem key="3" value="3rd Cycle">
          3rd Cycle
        </SelectItem>
        {/* <SelectItem key="4" value="4th Cycle">
          4th Cycle
        </SelectItem>
        <SelectItem key="5" value="5th Cycle">
          5th Cycle
        </SelectItem> */}
      </Select>
      {/* ----------- Button ------------ */}
      <div className="flex justify-around p-2">
        <Button color="primary" variant="ghost" size="sm">
          Update
        </Button>
      </div>
    </div>
  );
  //------------------Session Feedback-------------------------
  const sessionFeedback = (
    <div className="flex flex-col gap-2 pb-2 text-sm">
      <p className="font-medium">
        Title :{" "}
        <span className="font-normal text-primary"> Express Basics</span>
      </p>
      <Slider
        className="px-3"
        size="sm"
        color="warning"
        label="Overall Satisfaction"
        hideValue={true}
        showTooltip={false}
        step={0.1}
        // formatOptions={{ style: "percent" }}
        maxValue={1}
        minValue={0}
        disableThumbScale={true}
        classNames={{
          // base: "max-w-md gap-3",
          filler: "bg-gradient-to-r from-warning to-success ",
        }}
        marks={[
          {
            value: 0.2,
            label: "👎",
          },
          {
            value: 0.5,
            label: "😐",
          },
          {
            value: 0.8,
            label: "👍",
          },
        ]}
        defaultValue={0.2}
        // className="flex "
      />
      <Checkbox color="primary" size="sm">
        Have Previous Experience
      </Checkbox>
      <Divider className="my-2" />{" "}
      {/* -------------------------------content Feedback--------------------------------- */}
      <Slider
        className="px-3"
        size="sm"
        color="warning"
        label="Content Quality"
        hideValue={true}
        showTooltip={false}
        step={0.1}
        // formatOptions={{ style: "percent" }}
        maxValue={1}
        minValue={0}
        disableThumbScale={true}
        classNames={{
          // base: "max-w-md gap-3",
          filler: "bg-gradient-to-r from-warning to-success ",
        }}
        marks={[
          {
            value: 0.2,
            label: "👎",
          },
          {
            value: 0.5,
            label: "😐",
          },
          {
            value: 0.8,
            label: "👍",
          },
        ]}
        defaultValue={0.6}
        // className="flex "
      />
      <Slider
        className="px-3"
        size="sm"
        color="success"
        label="Content Amount"
        hideValue={true}
        showTooltip={false}
        step={0.1}
        // formatOptions={{ style: "percent" }}
        maxValue={0.5}
        minValue={-0.5}
        fillOffset={0}
        defaultValue={-0.1}
        disableThumbScale={true}
        classNames={{
          // base: "max-w-md gap-3",
          filler: "bg-gradient-to-r from-success to-danger ",
        }}
        marks={[
          {
            value: -0.3,
            label: "😴",
          },
          {
            value: 0,
            label: "😶",
          },
          {
            value: 0.3,
            label: "🤕",
          },
        ]}

        // className="flex "
      />
      <Slider
        className="px-3"
        size="sm"
        color="success"
        label="Content Difficulty"
        hideValue={true}
        showTooltip={false}
        step={0.1}
        // formatOptions={{ style: "percent" }}
        maxValue={0.5}
        minValue={-0.5}
        fillOffset={0}
        defaultValue={0.1}
        disableThumbScale={true}
        classNames={{
          // base: "max-w-md gap-3",
          filler: "bg-gradient-to-r from-success to-danger ",
        }}
        marks={[
          {
            value: -0.3,
            label: "🥱",
          },
          {
            value: 0,
            label: "😶",
          },
          {
            value: 0.3,
            label: "🥵",
          },
        ]}

        // className="flex "
      />
      <Checkbox color="primary" size="sm">
        Content has Mistakes
      </Checkbox>
      <Checkbox color="primary" size="sm">
        Content is Outdated
      </Checkbox>
      <Divider className="my-2" />
      <div className="flex justify-around ">
        <Button color="primary" variant="ghost" size="sm">
          Submit
        </Button>
      </div>
    </div>
  );

  return (
    <Accordion
      variant="splitted"
      selectionMode="multiple"
      isCompact
      defaultExpandedKeys={["1"]}
    >
      <AccordionItem
        key="1"
        aria-label="Session details"
        title="Session Details"
      >
        {sessionDetails}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="My Session Controls"
        title="My Session Controls"
      >
        {sessionControls}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Session Feedback"
        title="Session Feedback"
      >
        {sessionFeedback}
      </AccordionItem>
      <AccordionItem key="4" aria-label="My Awards" title="Co-Students">
        {coStudents}
      </AccordionItem>
      <AccordionItem key="5" aria-label="Instructors" title="Instructors">
        {instructors}
      </AccordionItem>
    </Accordion>
  );
}
