
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Check,
  Menu,
  X,
  Sparkles,
  Image as ImageIcon,
  Target,
  MessageCircle,
  Instagram,
  Send,
  ChevronDown,
} from "lucide-react";
import "./style.css";

const ORDER_FORM = "https://forms.gle/mY2wkRphtXaiv8Eo6";

const products = [
  {
    name: "Lumina Essentials",
    category: "PRODUCT STUDIO",
    price: "79 €",
    description: "Une présentation publicitaire professionnelle pour mettre un produit en valeur.",
    features: [
      "1 produit",
      "Jusqu’à 2 visuels publicitaires",
      "1 titre commercial",
      "1 description produit",
      "3 arguments de vente",
    ],
  },
  {
    name: "Lumina Collection",
    category: "PRODUCT STUDIO",
    price: "119 €",
    description: "Une présentation cohérente pour deux produits de votre boutique.",
    features: [
      "Jusqu’à 2 produits",
      "1 visuel par produit",
      "1 titre par produit",
      "1 description par produit",
      "3 arguments de vente par produit",
    ],
  },
];

const campaigns = [
  {
    name: "Campaign Essentiel",
    price: "79 €",
    description: "Une campagne structurée autour d’un objectif commercial précis.",
    features: [
      "Analyse du besoin et de l’objectif",
      "1 angle marketing",
      "3 accroches publicitaires",
      "2 propositions de textes promotionnels",
      "2 appels à l’action",
      "Conseils concrets de diffusion",
    ],
  },
  {
    name: "Campaign Complète",
    price: "149 €",
    description: "Un plan marketing plus complet, prêt à être adapté et déployé.",
    features: [
      "Définition de l’objectif et de la cible",
      "Stratégie et angle marketing",
      "5 accroches publicitaires",
      "4 textes adaptés aux canaux choisis",
      "4 appels à l’action",
      "Plan de diffusion sur 7 jours",
      "Recommandations de suivi",
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  const goToOrder = (offer) => {
    window.open(
      `${ORDER_FORM}?entry.000000000000000000=${encodeURIComponent(offer)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const navItems = [
    ["Offres", "#offres"],
    ["Campaign", "#campaign"],
    ["Notre approche", "#approche"],
    ["FAQ", "#faq"],
  ];

  return (
    <div className="lumina">
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Lumina, accueil">
          <span className="brand-symbol">L.</span>
          <span className="brand-copy">
            <strong>LUMINA</strong>
            <small>PRODUCT STUDIO</small>
          </span>
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-cta"
            href={ORDER_FORM}
            target="_blank"
            rel="noreferrer"
          >
            Demander un devis <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-copy">
            <span className="eyebrow">
              <Sparkles size={15} /> STUDIO CRÉATIF & MARKETING
            </span>
            <h1>
              Vos produits méritent
              <br />
              <span>une image à leur hauteur.</span>
            </h1>
            <p className="hero-text">
              Des visuels publicitaires et des campagnes marketing pensés
              pour présenter votre offre avec clarté, cohérence et
              professionnalisme.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#offres">
                Découvrir les offres <ArrowRight size={17} />
              </a>
              <a className="text-link" href="#approche">
                Découvrir Lumina
              </a>
            </div>
            <div className="hero-note">
              <span className="note-dot" />
              Des prestations adaptées à votre produit et à votre objectif.
            </div>
          </div>

          <div className="hero-art" aria-label="Présentation visuelle Lumina">
            <div className="art-label">LUMINA / CREATIVE WORK</div>
            <div className="art-shape shape-back" />
            <div className="art-shape shape-front">
              <div className="art-glow" />
              <span className="art-number">01</span>
              <span className="art-product">PRODUCT<br />STUDIO</span>
              <span className="art-caption">L’image attire. Le message accompagne.</span>
            </div>
            <div className="art-tag tag-one">VISUELS PRODUITS</div>
            <div className="art-tag tag-two">CAMPAGNES MARKETING</div>
            <span className="art-star">✳</span>
          </div>
        </section>

        <section className="trust-strip">
          <span>POUR LES INDÉPENDANTS</span>
          <i />
          <span>POUR LES BOUTIQUES</span>
          <i />
          <span>POUR LES MARQUES</span>
          <i />
          <span>POUR VOS LANCEMENTS</span>
        </section>

        <section className="section offers-section" id="offres">
          <div className="section-heading">
            <span className="eyebrow">01 — PRODUCT STUDIO</span>
            <h2>Une présentation plus professionnelle.</h2>
            <p>
              Des contenus conçus pour mieux présenter votre produit et
              communiquer ses points forts.
            </p>
          </div>

          <div className="offer-grid">
            {products.map((offer, index) => (
              <article className="offer-card" key={offer.name}>
                <div className="card-topline">
                  <span className="card-index">0{index + 1}</span>
                  <span className="card-category">{offer.category}</span>
                </div>
                <h3>{offer.name}</h3>
                <p className="card-description">{offer.description}</p>
                <div className="price">
                  {offer.price}
                  <small> / prestation</small>
                </div>
                <div className="card-divider" />
                <ul className="feature-list">
                  {offer.features.map((feature) => (
                    <li key={feature}>
                      <Check size={16} /> {feature}
                    </li>
                  ))}
                </ul>
                <a
                  className="button button-outline"
                  href={ORDER_FORM}
                  target="_blank"
                  rel="noreferrer"
                >
                  Choisir cette offre <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="campaign-section" id="campaign">
          <div className="campaign-intro">
            <span className="eyebrow">
              <Target size={15} /> 02 — LUMINA CAMPAIGN
            </span>
            <h2>
              De l’idée
              <br />
              <span>au plan de campagne.</span>
            </h2>
            <p>
              Une campagne marketing structurée, adaptée à votre offre et
              prête à être déployée. Pour une nouveauté, une promotion, un
              lancement ou une mise en avant.
            </p>
            <div className="campaign-note">
              <Check size={17} />
              Peut être commandée seule ou en complément de Product Studio.
            </div>
          </div>

          <div className="campaign-cards">
            {campaigns.map((offer, index) => (
              <article className="campaign-card" key={offer.name}>
                <div className="campaign-card-head">
                  <span>{index === 0 ? "POUR UN BESOIN CIBLÉ" : "PLAN PLUS COMPLET"}</span>
                  <span className="campaign-number">0{index + 1}</span>
                </div>
                <h3>{offer.name}</h3>
                <p>{offer.description}</p>
                <div className="price">
                  {offer.price}
                  <small> / prestation</small>
                </div>
                <ul className="feature-list">
                  {offer.features.map((feature) => (
                    <li key={feature}>
                      <Check size={16} /> {feature}
                    </li>
                  ))}
                </ul>
                <a
                  className="button button-light"
                  href={ORDER_FORM}
                  target="_blank"
                  rel="noreferrer"
                >
                  Choisir cette offre <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section approach-section" id="approche">
          <div className="section-heading">
            <span className="eyebrow">03 — NOTRE APPROCHE</span>
            <h2>Simple, clair, adapté à votre besoin.</h2>
            <p>
              Vous nous expliquez votre projet. Nous préparons une prestation
              définie, avec des livrables adaptés à l’offre choisie.
            </p>
          </div>

          <div className="steps-grid">
            <article className="step">
              <span className="step-number">01</span>
              <ImageIcon size={23} />
              <h3>Vous présentez votre projet</h3>
              <p>
                Votre produit, votre objectif, vos besoins et les réseaux
                que vous souhaitez utiliser.
              </p>
            </article>
            <article className="step">
              <span className="step-number">02</span>
              <MessageCircle size={23} />
              <h3>Nous clarifions la demande</h3>
              <p>
                Nous vérifions les éléments nécessaires et les modalités
                de la prestation avant de la confirmer.
              </p>
            </article>
            <article className="step">
              <span className="step-number">03</span>
              <Sparkles size={23} />
              <h3>Vous recevez vos livrables</h3>
              <p>
                Les visuels, textes ou éléments de campagne inclus dans
                l’offre retenue.
              </p>
            </article>
          </div>
        </section>

        <section className="cta-band">
          <div>
            <span className="eyebrow">VOTRE PROCHAIN PROJET</span>
            <h2>Parlons de votre produit.</h2>
            <p>Présentez-nous votre besoin, sans engagement de commande.</p>
          </div>
          <a
            className="button button-dark"
            href={ORDER_FORM}
            target="_blank"
            rel="noreferrer"
          >
            Présenter mon projet <ArrowRight size={17} />
          </a>
        </section>

        <section className="section faq-section" id="faq">
          <div className="section-heading">
            <span className="eyebrow">04 — FAQ</span>
            <h2>Les questions fréquentes.</h2>
          </div>

          <div className="faq-list">
            {[
              {
                q: "Dois-je déjà avoir des photos de mon produit ?",
                a: "Pas nécessairement. Présentez votre situation dans le formulaire : nous pourrons vérifier ensemble les éléments disponibles et ce qui est réalisable pour votre projet.",
              },
              {
                q: "Puis-je commander uniquement une campagne marketing ?",
                a: "Oui. Lumina Campaign est une prestation indépendante. Vous pouvez également la combiner avec une offre Product Studio.",
              },
              {
                q: "Comment se déroule une commande ?",
                a: "Vous remplissez le formulaire pour présenter votre besoin. Lumina vous recontactera par e-mail afin de préciser la demande et de confirmer les modalités avant le démarrage.",
              },
              {
                q: "Les prestations garantissent-elles des ventes ?",
                a: "Non. Les livrables visent à améliorer la présentation et la communication de votre offre, mais les résultats commerciaux dépendent de nombreux facteurs et ne peuvent pas être garantis.",
              },
            ].map((item, index) => (
              <div className="faq-item" key={item.q}>
                <button
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                  aria-expanded={activeFaq === index}
                >
                  {item.q}
                  <ChevronDown
                    size={19}
                    className={activeFaq === index ? "chevron-open" : ""}
                  />
                </button>
                {activeFaq === index && (
                  <p className="faq-answer">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#accueil">
          <span className="brand-symbol">L.</span>
          <span className="brand-copy">
            <strong>LUMINA</strong>
            <small>PRODUCT STUDIO</small>
          </span>
        </a>
        <p>Des idées claires. Des produits mieux présentés.</p>
        <div className="footer-links">
          <a href="#offres">Product Studio</a>
          <a href="#campaign">Campaign</a>
          <a href={ORDER_FORM} target="_blank" rel="noreferrer">
            Commander
          </a>
        </div>
        <span className="copyright">
          © {new Date().getFullYear()} Lumina Product Studio
        </span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
