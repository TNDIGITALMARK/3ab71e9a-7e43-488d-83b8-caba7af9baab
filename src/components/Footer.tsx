import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center space-x-2 font-heading font-bold text-xl text-light-blue hover:text-sunset-orange transition-colors mb-4"
            >
              <div className="w-8 h-8 bg-light-blue rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-full relative">
                  <div className="absolute inset-1 bg-ocean-blue rounded-full"></div>
                </div>
              </div>
              <span>SURF ADVENTURES</span>
            </Link>
            <p className="text-background/70 mb-4 text-sm">
              Costa Rica's premier surf destination. Experience the perfect wave with top-quality boards, gear, and expert instruction.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center text-sm text-background/70">
                <MapPin className="w-4 h-4 mr-2 text-light-blue" />
                Playa Hermosa, Guanacaste, Costa Rica
              </div>
              <div className="flex items-center text-sm text-background/70">
                <Phone className="w-4 h-4 mr-2 text-light-blue" />
                +506 2672-0123
              </div>
              <div className="flex items-center text-sm text-background/70">
                <Mail className="w-4 h-4 mr-2 text-light-blue" />
                info@surfadventures.cr
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-background/70 hover:text-light-blue transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-background/70 hover:text-light-blue transition-colors text-sm">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/lessons" className="text-background/70 hover:text-light-blue transition-colors text-sm">
                  Surf Lessons
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-background/70 hover:text-light-blue transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/70 hover:text-light-blue transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/lessons" className="text-background/70 hover:text-light-blue transition-colors text-sm">
                  Beginner Lessons
                </Link>
              </li>
              <li>
                <Link href="/lessons" className="text-background/70 hover:text-light-blue transition-colors text-sm">
                  Private Coaching
                </Link>
              </li>
              <li>
                <Link href="/lessons" className="text-background/70 hover:text-light-blue transition-colors text-sm">
                  Surf Camps
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-background/70 hover:text-light-blue transition-colors text-sm">
                  Board Rentals
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-background/70 hover:text-light-blue transition-colors text-sm">
                  Gear Sales
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Stay Connected</h3>
            <p className="text-background/70 text-sm mb-4">
              Follow us for daily wave reports, surf tips, and Costa Rica surf culture.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-light-blue transition-colors group"
              >
                <Facebook className="w-5 h-5 text-background/70 group-hover:text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-sunset-orange transition-colors group"
              >
                <Instagram className="w-5 h-5 text-background/70 group-hover:text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-light-blue transition-colors group"
              >
                <Twitter className="w-5 h-5 text-background/70 group-hover:text-white" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors group"
              >
                <Youtube className="w-5 h-5 text-background/70 group-hover:text-white" />
              </a>
            </div>

            {/* Operating Hours */}
            <div>
              <h4 className="font-heading font-medium mb-2 text-sm">Operating Hours</h4>
              <div className="text-xs text-background/70 space-y-1">
                <div>Mon - Fri: 7:00 AM - 6:00 PM</div>
                <div>Sat - Sun: 6:30 AM - 7:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Surf Adventures Costa Rica. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-light-blue transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-light-blue transition-colors">
                Terms of Service
              </Link>
              <Link href="/shipping" className="hover:text-light-blue transition-colors">
                Shipping Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}