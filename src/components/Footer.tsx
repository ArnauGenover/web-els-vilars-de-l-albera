import Link from "next/link";
import { TreePine, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-sand-200 bg-forest-900 text-sand-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <TreePine className="h-6 w-6 text-sand-300" />
              <span className="text-lg font-bold text-white">
                Els Vilars de l&apos;Albera
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-sand-400">
              Terreny d&apos;acampada i natura a l&apos;Alt Empordà. Un espai de
              12.000m² pensat per a l&apos;escoltisme i el respecte per la
              natura.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sand-300">
              Navegació
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                { href: "/", label: "Inici" },
                { href: "/projecte", label: "El Projecte" },
                { href: "/excursions", label: "Excursions" },
                { href: "/entorn", label: "Espais d'interès" },
                { href: "/contacte", label: "Contacte" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sand-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sand-300">
              Contacte
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2 text-sand-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Espolla, Alt Empordà
                  <br />
                  42°24&apos;47.06&quot;N 2°59&apos;45.89&quot;E
                </span>
              </li>
              <li className="flex items-center gap-2 text-sand-400">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href="mailto:info@elsvilarsdelalbera.cat"
                  className="transition-colors hover:text-white"
                >
                  info@elsvilarsdelalbera.cat
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-forest-800 pt-6 text-center text-xs text-sand-400">
          © {new Date().getFullYear()} Els Vilars de l&apos;Albera. Tots els
          drets reservats.
        </div>
      </div>
    </footer>
  );
}
