"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { BookOpen, ChevronRight, Terminal } from "lucide-react"
import Link from "next/link"

export default function AssemblyGuide() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-zinc-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30">
          <div className="absolute top-1/2 left-0 h-[40rem] w-[40rem] -translate-y-1/2 -translate-x-1/2 rounded-full bg-zinc-700 opacity-20 blur-[128px]" />
          <div className="absolute top-1/2 right-0 h-[40rem] w-[40rem] translate-y-1/2 translate-x-1/2 rounded-full bg-zinc-800 opacity-20 blur-[128px]" />
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-32 w-32 rounded-full bg-gradient-to-br from-zinc-700/10 to-zinc-800/10 blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              delay: i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              left: `${30 + i * 20}%`,
              top: `${20 + i * 20}%`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.1)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        style={{ opacity: 0.3 }}
      />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="mb-6 bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-200 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl">
            Assembly Guide
          </h1>
          <p className="mb-12 text-xl text-zinc-400">
            Learn assembly language programming through interactive lessons and hands-on practice
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-zinc-800 to-zinc-900 transition-all hover:scale-105 hover:from-zinc-700 hover:to-zinc-800"
            >
              <Link href="/playground" className="flex items-center gap-2">
                <Terminal className="h-5 w-5" />
                Playground
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group border-purple-500/20 bg-background/50 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-500/40"
            >
              <Link href="/guide" className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Guide
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Code decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-8 left-8 hidden rounded-lg border border-zinc-800 bg-black/50 p-4 backdrop-blur-sm lg:block"
        >
          <pre className="font-mono text-sm text-zinc-400">
            <code>{`section .text
  global _start

_start:
  ; Your journey begins here`}</code>
          </pre>
        </motion.div>

        {/* Terminal-style decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="absolute bottom-8 right-8 hidden rounded-lg border border-zinc-800 bg-black/50 p-4 backdrop-blur-sm lg:block"
        >
          <div className="flex items-center gap-1.5 mb-2">
            <div className="h-2 w-2 rounded-full bg-zinc-700" />
            <div className="h-2 w-2 rounded-full bg-zinc-700" />
            <div className="h-2 w-2 rounded-full bg-zinc-700" />
          </div>
          <div className="font-mono text-sm text-zinc-400">
            <span className="text-zinc-500">$</span> ./assembly-guide
          </div>
        </motion.div>
      </div>
    </div>
  )
}

