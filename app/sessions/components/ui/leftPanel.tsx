"use client";
import {
  Accordion,
  AccordionItem,
  Button,
  Link,
  Card,
  CardBody,
  User,Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue
} from "@nextui-org/react";

export default function LeftPanel() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
//-----------------My Awards-----------------
 

  
 
    
    const rows = [
      {
        key: "1",
        name: "Top Learner",
        when: "10.10.23",
      },
      {
        key: "2",
        name: "Top Challenger",
        when: "11.11.23",
      },
      {
        key: "3",
        name: "JS Master",
        when: "20.11.23",
      },
      {
        key: "4",
        name: "Solid Vaper",
        when: "12.12.23",

      },
    ];
    
    const columns = [
      {
        key: "name",
        label: "What",
      },
      {
        key: "when",
        label: "When",
      },

    ];
    
    const myAwards = (
        <Table isCompact  removeWrapper radius="none" shadow="none" isStriped layout="auto" className="pb-4">
          <TableHeader columns={columns}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow data-hover key={item.key}>
                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      );

//-----------------My Awards-----------------

  const leaderBoard = (
    <ul className="pb-2">
      <li className="flex items-center justify-between pb-2">
        <User
          className=""
          name="Jane Doe"
          description="1842 pts"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
        />
        <h3 className="text-lg font-extralight">#1</h3>
      </li>
      <li className="flex items-center justify-between pb-2">
        <User
          className=""
          name="Pablo Bennett"
          description="1501 pts"
          avatarProps={{
            src: "https://i.pravatar.cc/150?img=15",
          }}
        />
        <h3 className="text-lg font-extralight">#2</h3>
      </li>
      <li className="flex items-center justify-between">
        <User
          className=""
          name="Elsa Shaw"
          description="501 pts"
          avatarProps={{
            src: "https://i.pravatar.cc/150?img=9",
          }}
        />
        <h3 className="text-lg font-extralight">#3</h3>
      </li>
    </ul>
  );


  return (
    <Accordion variant="splitted" selectionMode="multiple" isCompact>
      <AccordionItem
        key="1"
        aria-label="My Awards"
        title="My Awards"
      >
        {myAwards}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Leader board" title="Leader Board">
        {leaderBoard}
      </AccordionItem>
    </Accordion>
  );
}
