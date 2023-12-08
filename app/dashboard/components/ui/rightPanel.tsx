"use client";
import {
  Accordion,
  AccordionItem,
  Button,
  Link,
  Card,
  Avatar,
  User,
} from "@nextui-org/react";

export default function RightPanel() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
//-----------------My Awards-----------------
 

  
 
    
    
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
        name="Prince Li"
        description={
          <Link href="https://github.com/m-a-mohsen" size="sm" isExternal>
            @princedope
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
            @phillip-G
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
            @Janadev
          </Link>
        }
        avatarProps={{
          src: "https://i.pravatar.cc/150?img=9",
        }}
      />
    </div>
  );
      
 

//-------------------------------------------

  const leaderBoard = (
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
          src: "https://i.pravatar.cc/150?img=11",
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
          src: "https://i.pravatar.cc/150?img=16",
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
          src: "https://i.pravatar.cc/150?img=13",
        }}
      />
    </div>
  );

  return (
    <Accordion variant="splitted" selectionMode="multiple" isCompact>
      <AccordionItem key="1" aria-label="My Awards" title="Co-Students">
        {coStudents}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Instructors" title="Instructors">
        {leaderBoard}
      </AccordionItem>
    </Accordion>
  );
}
