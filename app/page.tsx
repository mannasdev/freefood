"use client"


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ResponsiveBar } from "@nivo/bar"

export default function page() {
  return (
      <>
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950 dark:text-gray-50">
          <div className="container flex h-16 items-center justify-between px-4 md:px-6">
            <Link className="flex items-center gap-2" href="#">
              <TableIcon className="h-6 w-6" />
              <span className="font-semibold">Leftover Eats</span>
            </Link>
            <nav className="hidden space-x-4 md:flex">
              <Link
                  className="rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-300"
                  href="#"
              >
                Explore
              </Link>
              <Link
                  className="rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-300"
                  href="#"
              >
                About
              </Link>
              <Link
                  className="rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-300"
                  href="#"
              >
                Contact
              </Link>
            </nav>
            <Sheet>
              <SheetTrigger asChild>
                <Button className="md:hidden" size="icon" variant="outline">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="grid gap-6 p-6">
                  <Link
                      className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-300"
                      href="#"
                  >
                    <CompassIcon className="h-5 w-5" />
                    Explore
                  </Link>
                  <Link
                      className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-300"
                      href="#"
                  >
                    <InfoIcon className="h-5 w-5" />
                    About
                  </Link>
                  <Link
                      className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-300"
                      href="#"
                  >
                    <MailIcon className="h-5 w-5" />
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </header>
        <main className="flex flex-col">
          <section className="bg-gray-100 py-12 md:py-24 dark:bg-gray-900">
            <div className="container flex flex-col items-center justify-center gap-6 px-4 md:px-6">
              <div className="max-w-xl text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Reduce Food Waste, Share Leftovers</h1>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  Leftover Eats is a community platform where restaurants can easily post their leftover food for others
                  to enjoy.
                </p>
              </div>
              <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
              >
                Post Leftovers
              </Link>
            </div>
          </section>
          <section className="py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="mb-8 space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Leftover Food</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out some of the latest leftover food posts from local restaurants.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Card>
                  <CardHeader>
                    <img
                        alt="Leftover Food"
                        className="aspect-video overflow-hidden rounded-t-lg object-cover"
                        height={225}
                        src="/placeholder.svg"
                        width={400}
                    />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Vegetarian Lasagna</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Freshly made vegetarian lasagna with layers of pasta, ricotta, and roasted vegetables.
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">Restaurant A</Badge>
                        <span className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <img
                        alt="Leftover Food"
                        className="aspect-video overflow-hidden rounded-t-lg object-cover"
                        height={225}
                        src="/placeholder.svg"
                        width={400}
                    />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Grilled Chicken Salad</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Freshly grilled chicken breast on a bed of mixed greens, tomatoes, and cucumbers.
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">Restaurant B</Badge>
                        <span className="text-sm text-gray-500 dark:text-gray-400">4 hours ago</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <img
                        alt="Leftover Food"
                        className="aspect-video overflow-hidden rounded-t-lg object-cover"
                        height={225}
                        src="/placeholder.svg"
                        width={400}
                    />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Beef Stew</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Hearty beef stew with tender chunks of beef, carrots, potatoes, and a rich broth.
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">Restaurant C</Badge>
                        <span className="text-sm text-gray-500 dark:text-gray-400">6 hours ago</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <img
                        alt="Leftover Food"
                        className="aspect-video overflow-hidden rounded-t-lg object-cover"
                        height={225}
                        src="/placeholder.svg"
                        width={400}
                    />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Sushi Platter</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Assortment of fresh sushi rolls, nigiri, and sashimi.
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">Restaurant D</Badge>
                        <span className="text-sm text-gray-500 dark:text-gray-400">8 hours ago</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section className="bg-gray-100 py-12 md:py-24 dark:bg-gray-900">
            <div className="container px-4 md:px-6">
              <div className="mb-8 space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nearby Restaurants with Leftovers</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  View a map of nearby restaurants that have posted their leftover food.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <BarChart className="aspect-[4/3]" />
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-gray-100 py-6 dark:bg-gray-950 dark:text-gray-50">
          <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
            <div className="flex items-center gap-2">
              <TableIcon className="h-6 w-6" />
              <span className="font-semibold">Leftover Eats</span>
            </div>
            <nav className="flex gap-4">
              <Link className="text-sm hover:underline hover:underline-offset-4" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm hover:underline hover:underline-offset-4" href="#">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </footer>
      </>
  )
}

function BarChart(props: any) {
  return (
      <div {...props}>
        <ResponsiveBar
            data={[
              { name: "Jan", count: 111 },
              { name: "Feb", count: 157 },
              { name: "Mar", count: 129 },
              { name: "Apr", count: 150 },
              { name: "May", count: 119 },
              { name: "Jun", count: 72 },
            ]}
            keys={["count"]}
            indexBy="name"
            margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
            padding={0.3}
            colors={["#2563eb"]}
            axisBottom={{
              tickSize: 0,
              tickPadding: 16,
            }}
            axisLeft={{
              tickSize: 0,
              tickValues: 4,
              tickPadding: 16,
            }}
            gridYValues={4}
            theme={{
              tooltip: {
                chip: {
                  borderRadius: "9999px",
                },
                container: {
                  fontSize: "12px",
                  textTransform: "capitalize",
                  borderRadius: "6px",
                },
              },
              grid: {
                line: {
                  stroke: "#f3f4f6",
                },
              },
            }}
            tooltipLabel={({ id }) => `${id}`}
            enableLabel={false}
            role="application"
            ariaLabel="A bar chart showing data"
        />
      </div>
  )
}


function CompassIcon(props: any) {
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
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
  )
}


function InfoIcon(props: any) {
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
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
  )
}


function MailIcon(props: any) {
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
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
  )
}


function MenuIcon(props: any) {
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
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
  )
}


function TableIcon(props: any) {
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
        <path d="M12 3v18" />
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M3 15h18" />
      </svg>
  )
}