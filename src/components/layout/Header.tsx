"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "À propos", href: "/a-propos" },
  { label: "Programmes", href: "/programmes" },
  { label: "Galerie", href: "/galerie" },
  { label: "Actualités", href: "/actualites" },
];

// Icône Menu Hamburger
const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 12H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M3 6H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M3 18H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M13.2 5.3a1 1 0 0 1 1.4 0l6.1 6.1a1 1 0 0 1 0 1.4l-6.1 6.1a1 1 0 0 1-1.4-1.4l4.4-4.4H4a1 1 0 1 1 0-2h13.6l-4.4-4.4a1 1 0 0 1 0-1.4Z"
    />
  </svg>
);

// Icône Fermer (X)
const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M6 6L18 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M13.5 22v-8h2.7l.4-3h-3.1V9.2c0-.9.3-1.6 1.6-1.6h1.7V5c-.3 0-1.4-.1-2.7-.1-2.7 0-4.6 1.6-4.6 4.7V11H7v3h2.5v8h4z"
    />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.2-.8a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
    />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2a9.9 9.9 0 0 0-8.6 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1 1 12 20Zm4.6-6.1c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.6.1l-.8 1c-.2.2-.3.2-.6.1a6.6 6.6 0 0 1-3.2-2.8c-.2-.3 0-.4.1-.6l.6-.8c.1-.2.1-.4 0-.6l-.7-1.6c-.2-.4-.4-.3-.6-.3h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.5 4 .6.3 1.1.5 1.5.6.6.2 1.1.2 1.5.1.5-.1 1.3-.5 1.4-1 .2-.5.2-1 .1-1.1 0-.1-.2-.2-.4-.3Z"
    />
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2v.2l8 5.2 8-5.2V8H4Zm16 10V10.6l-7.5 4.9a1 1 0 0 1-1.1 0L4 10.6V18h16Z"
    />
  </svg>
);

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2 4.5 5.3V11c0 5.3 3.7 9.8 7.5 11 3.8-1.2 7.5-5.7 7.5-11V5.3L12 2Zm0 18c-2.6-1-5.5-4.5-5.5-9V6.6L12 4.5l5.5 2.1V11c0 4.5-2.9 8-5.5 9Z"
    />
  </svg>
);

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      {/* Top bar - sécurité + réseaux (caché sur mobile) */}
      <div className="hidden md:block bg-white border-b border-gray-200">
        <div className="container-acdev flex items-center justify-between text-sm py-2">
          <div className="flex items-center gap-4">
            {/* Option sécurité - cacher mes infos */}
            <a
              href="https://www.google.com/search?q=météo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#16A34A] underline"
            >
              <ShieldIcon className="h-4 w-4" />
              <span className="font-medium">Cacher ma visite</span>
            </a>
            <span className="text-gray-300">|</span>
            <span className="text-gray-700">Appel d’urgence :</span>
            <span className="text-[#DC2626] font-semibold">à venir</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-600">Suivez-nous :</span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#1E40AF] underline"
            >
              <FacebookIcon className="h-4 w-4" />
              <span>Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#1E40AF] underline"
            >
              <InstagramIcon className="h-4 w-4" />
              <span>Instagram</span>
            </a>
            <a
              href="mailto:inside_development@yahoo.com"
              className="inline-flex items-center gap-2 text-[#1E40AF] underline"
            >
              <MailIcon className="h-4 w-4" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container-acdev py-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold text-[#DC2626]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ACDEV
            </Link>

            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-black">
                  {item.label}
                </Link>
              ))}
              <Link
                href="/nous-soutenir"
                className="px-4 py-2 bg-[#DC2626] text-white"
              >
                Faire un don
              </Link>
            </nav>
          </div>

          {/* Mobile Navigation - Simplifiée */}
          <div className="flex md:hidden items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold text-[#DC2626]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ACDEV
            </Link>

            {/* Right side: Don + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/nous-soutenir"
                className="px-3 py-2 bg-[#DC2626] text-white text-sm"
              >
                Faire un don
              </Link>

              {/* Hamburger */}
              <button
                className="p-2 text-black"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={
                  mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"
                }
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <button
            className="absolute inset-0 bg-black/40"
            aria-label="Fermer le menu"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white border-l border-gray-200 overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <Link
                href="/"
                className="text-lg font-bold text-[#DC2626]"
                style={{ fontFamily: "var(--font-heading)" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                ACDEV
              </Link>
              <button
                className="p-2 text-black"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fermer le menu"
              >
                <CloseIcon />
              </button>
            </div>

            <nav className="p-6">
              <p className="text-xs uppercase tracking-wider text-gray-600 mb-4">
                Menu
              </p>

              <div className="border border-gray-200">
                <Link
                  href="/"
                  className="flex items-center justify-between px-4 py-4 text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-lg">Accueil</span>
                  <ArrowIcon className="h-4 w-4 text-gray-500" />
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between px-4 py-4 text-black border-t border-gray-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-lg">{item.label}</span>
                    <ArrowIcon className="h-4 w-4 text-gray-500" />
                  </Link>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-xs uppercase tracking-wider text-gray-600 mb-4">
                  Actions
                </p>
                <Link
                  href="/nous-soutenir"
                  className="block w-full text-center px-6 py-4 bg-[#DC2626] text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Faire un don
                </Link>

                <a
                  href="https://www.google.com/search?q=météo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#16A34A]"
                >
                  <ShieldIcon className="h-5 w-5" />
                  <span>Cacher ma visite</span>
                </a>

                <div className="mt-6">
                  <p className="text-xs uppercase tracking-wider text-gray-600 mb-3">
                    Réseaux
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="text-[#1E40AF]"
                    >
                      <FacebookIcon className="h-6 w-6" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="text-[#1E40AF]"
                    >
                      <InstagramIcon className="h-6 w-6" />
                    </a>
                    <a
                      href="https://wa.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="text-[#16A34A]"
                    >
                      <WhatsAppIcon className="h-6 w-6" />
                    </a>
                    <a
                      href="mailto:inside_development@yahoo.com"
                      aria-label="Email"
                      className="text-[#1E40AF]"
                    >
                      <MailIcon className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
