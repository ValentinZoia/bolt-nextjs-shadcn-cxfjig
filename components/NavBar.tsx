import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import { Bell, Home, MessageSquare, Search, User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Placeholder for auth function
const auth = async () => ({ user: { name: 'John Doe', email: 'john@example.com' } });

export default async function NavBar() {
  const session = await auth();

  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/dashboard" className="text-xl font-bold">
          LOGO
        </Link>
        <div className="hidden md:flex items-center gap-4 list-none">
          <Input
            type="search"
            placeholder="Search..."
            className="w-64 bg-primary-foreground text-primary"
          />
          <Link href="/dashboard">
            <Home className="h-6 w-6" />
          </Link>
          <Link href="/dashboard/messages">
            <MessageSquare className="h-6 w-6" />
          </Link>
          <Link href="/dashboard/notifications">
            <Bell className="h-6 w-6" />
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}