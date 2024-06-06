import React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
const Kanban = () => {
  return (
    <div className="flex flex-col w-full">
      <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <Link href="#" className="lg:hidden" prefetch={false}>
          <Package2Icon className="h-6 w-6" />
          <span className="sr-only">Home</span>
        </Link>
        <div className="w-full flex-1">
          <form>
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                type="search"
                placeholder="Search projects..."
                className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
              />
            </div>
          </form>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
            >
              <img
                src="/placeholder.svg"
                width="32"
                height="32"
                className="rounded-full"
                alt="Avatar"
              />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Backlog</h3>
              <Button size="sm">Add Task</Button>
            </div>
            <div className="grid gap-4">
              <Card>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">Website Redesign</div>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Client: Acme Inc.
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Due: June 30, 2024
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-end gap-2">
                  <Button variant="ghost" size="sm">
                    <DeleteIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoveIcon className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">Mobile App Development</div>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Client: Globex Corp.
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Due: July 15, 2024
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-end gap-2">
                  <Button variant="ghost" size="sm">
                    <DeleteIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoveIcon className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">To-Do</h3>
              <Button size="sm">Add Task</Button>
            </div>
            <div className="grid gap-4">
              <Card>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">Logo Design</div>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Client: Stark Industries
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Due: May 31, 2024
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-end gap-2">
                  <Button variant="ghost" size="sm">
                    <DeleteIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoveIcon className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">Content Writing</div>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Client: Stark Industries
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Due: June 15, 2024
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-end gap-2">
                  <Button variant="ghost" size="sm">
                    <DeleteIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoveIcon className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">In Progress</h3>
              <Button size="sm">Add Task</Button>
            </div>
            <div className="grid gap-4">
              <Card>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">Website Development</div>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Client: Stark Industries
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Due: July 1, 2024
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-end gap-2">
                  <Button variant="ghost" size="sm">
                    <DeleteIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoveIcon className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">Mobile App Design</div>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Client: Globex Corp.
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Due: June 30, 2024
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-end gap-2">
                  <Button variant="ghost" size="sm">
                    <DeleteIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoveIcon className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Done</h3>
              <Button size="sm">Add Task</Button>
            </div>
            <div className="grid gap-4">
              <Card>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">Branding Guidelines</div>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Client: Acme Inc.
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Due: May 15, 2024
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-end gap-2">
                  <Button variant="ghost" size="sm">
                    <DeleteIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoveIcon className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">Social Media Strategy</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

function DeleteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  );
}
function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function MoveIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="5 9 2 12 5 15" />
      <polyline points="9 5 12 2 15 5" />
      <polyline points="15 19 12 22 9 19" />
      <polyline points="19 9 22 12 19 15" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="22" />
    </svg>
  );
}
function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
export { Kanban };
