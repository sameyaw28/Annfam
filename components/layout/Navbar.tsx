"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navItems } from "@/data/nav";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-250 ease-out",
        scrolled
          ? "bg-surface/85 backdrop-blur-md shadow-sm border-b border-line"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-xl tracking-display"
        >
          <Image
            src="/logo.png"
            alt="ANNFAM Foundation"
            width={40}
            height={40}
            priority
            className="h-10 w-10 rounded-xl object-cover shadow-md"
          />
          <span className="font-semibold">ANNFAM</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-ink-muted transition-colors duration-150 hover:text-ink focus-visible:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/donate" variant="accent">
            Donate
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink transition duration-150 ease-out hover:border-brand hover:text-brand"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-line bg-surface transition-[max-height,opacity] duration-300 ease-out",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-brand-soft transition-colors duration-150"
            >
              {item.label}
            </Link>
          ))}
          <Button
            href="/donate"
            variant="accent"
            className="mt-2 w-full"
          >
            Donate
          </Button>
        </Container>
      </div>
    </header>
  );
}
