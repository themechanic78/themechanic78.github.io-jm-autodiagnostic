import React, { useState } from 'react';

// JM Auto Diagnostic - Single-file React component using TailwindCSS
// Default export: <JMWebsite />

const translations = {
  en: {
    name: 'JM Auto Diagnostic',
    tagline: 'Professional automotive diagnostics and consulting',
    hero: {
      title: 'Precision diagnostics for modern vehicles',
      subtitle:
        'Specialized technical analysis to identify mechanical, electrical, and electronic faults accurately.',
      cta: 'Contact Us',
    },
    servicesTitle: 'Our Services',
    services: [
      {
        title: 'Initial Evaluation & History Review',
        desc:
          'Interview and review of vehicle history, symptoms and previous maintenance to define a diagnostic strategy.',
      },
      {
        title: 'Advanced Electronic Diagnostics',
        desc:
          'Use of professional diagnostic tools to read fault codes, live data and perform functional tests.',
      },
      {
        title: 'Mechanical & Electrical Analysis',
        desc:
          'Physical inspections, multimeter and oscilloscope measurements to pinpoint component issues.',
      },
      {
        title: 'Technical Reporting & Recommendations',
        desc:
          'Detailed report with confirmed causes, recommended repairs, cost estimates and preventive advice.',
      },
    ],
    aboutTitle: 'About Us',
    about:
      'JM Auto Diagnostic offers specialized technical analysis for the precise identification of faults in modern vehicles. We work with workshops, fleets, dealerships, and private clients to deliver efficient, data-driven solutions for complex automotive problems.',
    contactTitle: 'Contact',
    contactDesc:
      'Reach out for a consultation, quote, or remote support. Use the contact form, call, email or message on WhatsApp.',
    form: {
      name: 'Your name',
      email: 'Your email',
      message: 'Brief description of the issue or request',
      submit: 'Send message',
    },
    footer: '© JM Auto Diagnostic. All rights reserved.',
  },
  es: {
    name: 'JM Auto Diagnostic',
    tagline: 'Consultoría y diagnóstico automotriz profesional',
    hero: {
      title: 'Diagnóstico de precisión para vehículos modernos',
      subtitle:
        'Análisis técnico especializado para identificar fallas mecánicas, eléctricas y electrónicas con precisión.',
      cta: 'Contáctanos',
    },
    servicesTitle: 'Nuestros Servicios',
    services: [
      {
        title: 'Evaluación inicial y revisión de historial',
        desc:
          'Entrevista y revisión del historial del vehículo, síntomas y mantenimientos previos para definir la estrategia de diagnóstico.',
      },
      {
        title: 'Diagnóstico electrónico avanzado',
        desc:
          'Uso de herramientas profesionales para lectura de códigos, datos en tiempo real y pruebas funcionales.',
      },
      {
        title: 'Análisis mecánico y eléctrico',
        desc:
          'Inspecciones físicas, mediciones con multímetro y osciloscopio para localizar fallas en componentes.',
      },
      {
        title: 'Informe técnico y recomendaciones',
        desc:
          'Informe detallado con causas confirmadas, reparaciones recomendadas, estimación de costos y consejos preventivos.',
      },
    ],
    aboutTitle: 'Sobre Nosotros',
    about:
      'JM Auto Diagnostic ofrece análisis técnico especializado para la identificación precisa de fallas en vehículos modernos. Trabajamos con talleres, flotas, concesionarios y clientes particulares para ofrecer soluciones eficientes y basadas en datos.',
    contactTitle: 'Contacto',
    contactDesc:
      'Contáctanos para una consulta, presupuesto o soporte remoto. Usa el formulario, llama, envía un correo o un mensaje por WhatsApp.',
    form: {
      name: 'Tu nombre',
      email: 'Tu correo',
      message: 'Breve descripción del problema o solicitud',
      submit: 'Enviar mensaje',
    },
    footer: '© JM Auto Diagnostic. Todos los derechos reservados.',
  },
  no: {
    name: 'JM Auto Diagnostic',
    tagline: 'Profesjonell diagnostikk og rådgivning for biler',
    hero: {
      title: 'Presis diagnostikk for moderne kjøretøy',
      subtitle:
        'Spesialisert teknisk analyse for nøyaktig identifisering av mekaniske, elektriske og elektroniske feil.',
      cta: 'Kontakt oss',
    },
    servicesTitle: 'Våre tjenester',
    services: [
      {
        title: 'Innledende evaluering & historikk',
        desc:
          'Teknisk intervju og gjennomgang av kjøretøyhistorikk for å bestemme diagnostisk strategi.',
      },
      {
        title: 'Avansert elektronisk diagnostikk',
        desc:
          'Bruk av profesjonelt diagnoseutstyr for feilkoder, sanntidsdata og funksjonstester.',
      },
      {
        title: 'Mekanisk og elektrisk analyse',
        desc:
          'Fysiske tester, målinger med multimeter og oscilloskop for å avdekke komponentfeil.',
      },
      {
        title: 'Teknisk rapportering & anbefalinger',
        desc:
          'Detaljert rapport med bekreftede årsaker, anbefalte løsninger, kostnadsoverslag og forebyggende råd.',
      },
    ],
    aboutTitle: 'Om oss',
    about:
      'JM Auto Diagnostic tilbyr spesialisert teknisk analyse for nøyaktig identifisering av feil i moderne kjøretøy. Vi samarbeider med verksteder, flåter, forhandlere og private kunder for å levere effektive og datadrevne løsninger.',
    contactTitle: 'Kontakt',
    contactDesc:
      'Ta kontakt for konsultasjon, tilbud eller fjernstøtte. Bruk kontaktskjemaet, ring, send e-post eller WhatsApp-melding.',
    form: {
      name: 'Ditt navn',
      email: 'Din e-post',
      message: 'Kort beskrivelse av problemet eller forespørselen',
      submit: 'Send melding',
    },
    footer: '© JM Auto Diagnostic. Alle rettigheter reservert.',
  },
};

export default function JMWebsite() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleSubmit(e) {
    e.preventDefault();
    // Construct mailto — this keeps the site static and lets the user send via their email client
    const subject = encodeURIComponent(`${t.name} - Consultation Request`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:info@jmautodiagnostic.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">{t.name}</h1>
            <p className="text-sm text-slate-500">{t.tagline}</p>
          </div>
          <div className="flex items-center gap-3">
            <nav className="hidden md:flex gap-4 text-sm">
              <a href="#services" className="hover:underline">{t.servicesTitle}</a>
              <a href="#about" className="hover:underline">{t.aboutTitle}</a>
              <a href="#contact" className="hover:underline">{t.contactTitle}</a>
            </nav>

            <select
              aria-label="Language"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="border rounded-md px-2 py-1 text-sm"
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="no">NO</option>
            </select>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">{t.hero.title}</h2>
            <p className="text-slate-700 mb-6">{t.hero.subtitle}</p>
            <div className="flex gap-3">
              <a
                href="#contact"
                className="inline-block px-5 py-3 bg-sky-600 text-white rounded-md shadow hover:opacity-95"
              >
                {t.hero.cta}
              </a>
              <a
                href="tel:+4712345678"
                className="inline-block px-5 py-3 border rounded-md text-sm"
              >
                +47 12 34 56 78
              </a>
            </div>
          </div>

          <div className="rounded-lg bg-white shadow p-6">
            <h3 className="font-semibold mb-3">{t.servicesTitle}</h3>
            <ul className="space-y-3">
              {t.services.map((s, i) => (
                <li key={i} className="border-l-4 border-slate-200 pl-3">
                  <strong className="block">{s.title}</strong>
                  <span className="text-sm text-slate-600">{s.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="about" className="mt-12 bg-white rounded-lg shadow p-6">
          <h3 className="text-2xl font-bold mb-3">{t.aboutTitle}</h3>
          <p className="text-slate-700">{t.about}</p>
        </section>

        <section id="contact" className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-2">{t.contactTitle}</h3>
            <p className="text-slate-700 mb-4">{t.contactDesc}</p>

            <div className="space-y-2 text-sm text-slate-600">
              <div>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@jmautodiagnostic.com" className="underline">info@jmautodiagnostic.com</a>
              </div>
              <div>
                <strong>Phone:</strong> <a href="tel:+4712345678" className="underline">+47 12 34 56 78</a>
              </div>
              <div>
                <strong>WhatsApp:</strong>{' '}
                <a
                  href="https://wa.me/4712345678"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-4">{t.contactTitle}</h3>
            <div className="mb-3">
              <label className="block text-sm mb-1">{t.form.name}</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm mb-1">{t.form.email}</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm mb-1">{t.form.message}</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="flex gap-3">
              <button className="px-4 py-2 bg-sky-600 text-white rounded">{t.form.submit}</button>
              <a
                href="/jm-brochure.pdf"
                className="px-4 py-2 border rounded text-sm self-center"
              >
                Download brochure
              </a>
            </div>
          </form>
        </section>

        <section className="mt-12 text-center text-sm text-slate-500">
          <p>{t.footer}</p>
        </section>
      </main>

      <footer className="mt-12 py-6 bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 text-center text-xs text-slate-500">
          Built with care for JM Auto Diagnostic.
        </div>
      </footer>
    </div>
  );
}
