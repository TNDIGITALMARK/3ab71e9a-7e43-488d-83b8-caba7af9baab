"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 font-heading font-bold text-xl text-ocean-blue hover:text-light-blue transition-colors"
        >
          <div className="w-8 h-8 bg-ocean-blue rounded-full flex items-center justify-center">
            <div className="w-5 h-5 bg-white rounded-full relative">
              <div className="absolute inset-1 bg-light-blue rounded-full"></div>
            </div>
          </div>
          <span>SURF ADVENTURES</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-foreground hover:text-ocean-blue transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-foreground hover:text-ocean-blue transition-colors font-medium"
          >
            Shop
          </Link>
          <Link
            href="/lessons"
            className="text-foreground hover:text-ocean-blue transition-colors font-medium"
          >
            Surf Lessons
          </Link>
          <Link
            href="/about"
            className="text-foreground hover:text-ocean-blue transition-colors font-medium"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-foreground hover:text-ocean-blue transition-colors font-medium"
          >
            Contact
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {/* Desktop actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-foreground hover:text-ocean-blue">
              <User className="w-4 h-4 mr-1" />
              Account
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground hover:text-ocean-blue">
              <ShoppingBag className="w-4 h-4 mr-1" />
              Cart
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground hover:text-ocean-blue p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-b border-border">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-foreground hover:text-ocean-blue transition-colors font-medium py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block text-foreground hover:text-ocean-blue transition-colors font-medium py-2"
              onClick={toggleMenu}
            >
              Shop
            </Link>
            <Link
              href="/lessons"
              className="block text-foreground hover:text-ocean-blue transition-colors font-medium py-2"
              onClick={toggleMenu}
            >
              Surf Lessons
            </Link>
            <Link
              href="/about"
              className="block text-foreground hover:text-ocean-blue transition-colors font-medium py-2"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block text-foreground hover:text-ocean-blue transition-colors font-medium py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-border space-y-2">
              <Button variant="ghost" size="sm" className="w-full justify-start text-foreground hover:text-ocean-blue">
                <User className="w-4 h-4 mr-2" />
                Account
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start text-foreground hover:text-ocean-blue">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Cart
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}