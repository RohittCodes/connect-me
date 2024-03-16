"use client";

import * as React from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CommandBox() {
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState([] as any[]);
  const [posts, setPosts] = React.useState([] as any[]);

  const getImageData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos/?_limit=10`
    ).then((res) => res.json());
    setImage(response);
  };

  const getPostData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/?_limit=10`
    ).then((res) => res.json());
    setPosts(response);
  };

  React.useEffect(() => {
    getImageData();
    getPostData();
  }, []);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div>
      <kbd className="pointer-events-none inline-flex w-54 h-8 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[12px] text-muted-foreground opacity-100">
        Shortcuts <span className="text-sm">⌘</span>K
      </kbd>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Images">
            {image.map((item) => (
              <Link href={`/images/${item.id}`} key={item.id}>
                <CommandItem>
                  <Image
                    alt={item.title}
                    src={item.thumbnailUrl}
                    width={32}
                    height={32}
                    className="rounded-full mr-2"
                  />
                  <span>{item.title}</span>
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Posts">
            {posts.map((item) => (
              <Link href={`/posts/${item.id}`} key={item.id}>
                <CommandItem>
                  <Rocket className="mr-2 h-4 w-4" />
                  <span>{item.title}</span>
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
