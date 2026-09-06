"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, User, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/page";

const Header = () => {
  const pathname = usePathname();

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="bg-background">
      {/* Top Header */}
      <div className="w-full border-b border-border">
        <div
          className={cn(
            "flex w-full items-center justify-between",
            "h-20 px-5",
            "sm:h-22 sm:px-8",
            "lg:h-26 lg:px-12",
            "xl:px-16",
          )}
        >
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/Logo.svg"
              width={166}
              height={64}
              alt="tobamsgroup_Logo"
              loading="eager"
              className="h-auto w-32 sm:w-36 lg:w-41.5"
            />
          </Link>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Button
              className={cn("h-11 rounded-lg", "w-36", "lg:h-12 lg:w-41.75")}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                <User className="h-3 w-4 text-primary" />
              </div>

              <span className="h6">Account</span>

              <ChevronDown className="h-5 w-5" />
            </Button>

            <Button
              variant="secondary"
              className={cn(
                "h-11 rounded-lg border h6 text-background",
                "w-36",
                "lg:h-12 lg:w-41.75",
              )}
            >
              Take Assessment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden bg-foreground text-background"
            onClick={() => {
              setMobileMenuOpen((prev) => !prev);
              setMobileDropdown(null);
            }}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </Button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden h-17.25 w-full md:block">
        <div className="mx-auto flex h-17.25 w-full max-w-261.25 justify-center px-4 lg:px-8">
          {navigation.map((item) => {
            const active = isActive(item.href);
            const hasDropdown = Boolean(item.dropdown);

            return (
              <div
                key={item.label}
                className="relative flex items-center justify-center"
                onMouseEnter={() => hasDropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "group relative flex items-center gap-1.5 px-2.5 pb-0.5",
                    "h6-normal whitespace-nowrap transition-colors",
                    "lg:px-3",
                    active
                      ? "text-primary h6"
                      : "text-foreground hover:text-primary",
                  )}
                >
                  <span>{item.label}</span>

                  {hasDropdown && (
                    <ChevronDown
                      size={20}
                      className={cn(
                        "transition-transform duration-200",
                        openDropdown === item.label && "rotate-180",
                      )}
                    />
                  )}

                  {/* Active underline */}
                  <span
                    className={cn(
                      "absolute bottom-0 left-1 right-4 h-0.5 rounded-full",
                      "bg-primary transition-all duration-200",
                      active
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0",
                    )}
                  />
                </Link>

                {/* Desktop Dropdown */}
                {hasDropdown && openDropdown === item.label && (
                  <div className="absolute left-0 top-full z-50 w-52 pt-2">
                    <div className="rounded-xl border bg-background p-1.5 shadow-lg">
                      {item.dropdown?.map((dropdownItem) => {
                        const dropdownActive = isActive(dropdownItem.href);

                        return (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className={cn(
                              "block rounded-lg px-3 py-2.5 text-sm",
                              "transition-colors",
                              dropdownActive
                                ? "bg-primary/10 text-primary"
                                : "text-foreground/60 hover:bg-background hover:text-foreground",
                            )}
                          >
                            {dropdownItem.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-b border-border md:hidden">
          <nav className="max-h-[calc(100vh-5rem)] overflow-y-auto px-5 py-4 sm:px-8">
            <div className="flex flex-col">
              {navigation.map((item) => {
                const active = isActive(item.href);
                const hasDropdown = Boolean(item.dropdown);
                const dropdownOpen = mobileDropdown === item.label;

                return (
                  <div key={item.label} className="border-b border-border">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "flex flex-1 items-center py-4",
                          "h6-normal",
                          active ? "text-primary h6" : "text-foreground",
                        )}
                      >
                        {item.label}
                      </Link>

                      {hasDropdown && (
                        <button
                          type="button"
                          onClick={() =>
                            setMobileDropdown(dropdownOpen ? null : item.label)
                          }
                          className="flex h-10 w-10 items-center justify-center"
                          aria-label={`Toggle ${item.label} submenu`}
                        >
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 transition-transform duration-200",
                              dropdownOpen && "rotate-180",
                            )}
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile Dropdown */}
                    {hasDropdown && dropdownOpen && (
                      <div className="mb-3 ml-3 flex flex-col rounded-lg bg-muted p-1.5">
                        {item.dropdown?.map((dropdownItem) => {
                          const dropdownActive = isActive(dropdownItem.href);

                          return (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={cn(
                                "rounded-lg px-3 py-3 text-sm",
                                dropdownActive
                                  ? "bg-primary/10 text-primary"
                                  : "text-foreground/50 hover:bg-background hover:text-foreground",
                              )}
                            >
                              {dropdownItem.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Actions */}
            <div className="flex flex-col gap-3 pt-5 sm:flex-row">
              <Button className="h-12 w-full rounded-lg sm:flex-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                  <User className="h-3 w-4 text-primary" />
                </div>

                <span className="h6">Account</span>

                <ChevronDown className="h-5 w-5" />
              </Button>

              <Button
                variant="secondary"
                className="h-12 w-full rounded-lg border h6 text-background sm:flex-1"
              >
                Take Assessment
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
