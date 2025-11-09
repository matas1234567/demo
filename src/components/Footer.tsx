import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Pasiulymai: [
      { label: "Vieno puslapio sprendimas", href: "/solutions/one-page" },
      { label: "Dinaminis sprendimas", href: "/solutions/dynamic-page" },
      { label: "Individualus sprendimas", href: "/solutions/individual" },
      { label: "Marketingo pasiulymas", href: "/#pricing"},
    ],
    Kompanija: [
      { label: "Apie mus", href: "/#leadership" },
      { label: "Karjeros", href: "/#leadership" },
    ],
    Resursai: [
      { label: "DUK", href: "/#faq" },
      { label: "Pagalba", href: "/contact" },
    ],
    Teises: [
      { label: "Privatumo politika", href: "/legal/privacy-policy" },
      { label: "Naudojimo salygos", href: "/legal/terms-of-service" },
      { label: "Slapukų politika", href: "/legal/cookie-policy" },
    ],
  };
  


  const socialLinks = [
    { icon: Facebook, href: "https://www.instagram.com/arnaslink/", label: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/matas-michailinas-48ba9b2a1/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/arnaslink/", label: "Instagram" },
  ];

// Ą Č Ę Ė Į Š Ų Ū Ž
// ą č ę ė į š ų ū ž


  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-foreground mb-4 block">
              Hobbin
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Kuriame unikalias skaitmenines patirtis verslams, kurie vertina kokybę ir aiškius rezultatus. Kiekvienas projektas — individualus sprendimas, gimstantis iš supratimo, ko reikia jūsų prekės ženklui.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Hobbin. Visos teises rezervuotos.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Susisiek su mumis
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

