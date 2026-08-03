const steps = [
  { n: "01", icon: "☎", title: "Consúltanos", text: "Cuéntanos qué quieres comprar. Confirmamos que tus productos pueden enviarse." },
  { n: "02", icon: "▣", title: "Compra en España", text: "Compra directamente en tus tiendas favoritas y utiliza nuestra dirección de recepción." },
  { n: "03", icon: "≡", title: "Envía tus facturas", text: "Comparte las facturas y el seguimiento. Todos los artículos deben contar con factura." },
  { n: "04", icon: "□", title: "Lo preparamos", text: "Recibimos, agrupamos y embalamos tus compras para enviarlas juntas." },
  { n: "05", icon: "⌂", title: "Recíbelo en Caracas", text: "Coordinamos con el courier la entrega puerta a puerta en la dirección que nos indiques." },
];

const faqs = [
  ["¿Ustedes realizan la compra?", "No. Tú compras directamente en la tienda y mantienes el control de tu pedido, pago y factura."],
  ["¿Puedo comprar en varias tiendas?", "Sí. Puedes enviar diferentes compras a nuestra dirección en España para que las recibamos y agrupemos."],
  ["¿Todos los productos necesitan factura?", "Sí. Necesitamos la factura de cada artículo que forme parte del envío."],
  ["¿Puedo enviar cualquier producto?", "No todos los productos pueden transportarse. Consúltanos antes de comprar para confirmar que el artículo está permitido."],
  ["¿Dónde entregan?", "Durante la primera etapa entregamos únicamente en Caracas, en la dirección indicada por el cliente."],
  ["¿Cómo se calcula el 10%?", "Sumamos el valor total de tus facturas y el coste definitivo del envío. Nuestra tarifa corresponde al 10% de esa cantidad."],
];

function BoxCharacter({ small = false }: { small?: boolean }) {
  return (
    <div className={`box-character ${small ? "box-small" : ""}`} aria-hidden="true">
      <span className="box-tape" />
      <span className="box-eye eye-left" />
      <span className="box-eye eye-right" />
      <span className="box-smile" />
    </div>
  );
}

function WhatsAppButton({ compact = false }: { compact?: boolean }) {
  return (
    <button className={`whatsapp-button ${compact ? "compact" : ""}`} disabled title="Número disponible próximamente">
      <span className="wa-icon" aria-hidden="true">☎</span>
      <span>{compact ? "WhatsApp" : "Empieza por WhatsApp"}</span>
      {!compact && <small>Número disponible próximamente</small>}
    </button>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Pídelo de España, inicio">
          <BoxCharacter small />
          <span><strong>PÍDELO</strong><small>DE ESPAÑA</small></span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#precio">Cuánto cuesta</a>
          <a href="#preguntas">Preguntas</a>
        </nav>
        <WhatsAppButton compact />
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span /> España → Caracas · Puerta a puerta</div>
          <h1>Compra en España.<br /><em>Recíbelo en Caracas.</em></h1>
          <p className="hero-lead">Tú compras en tus tiendas favoritas. Nosotros recibimos tus pedidos, los agrupamos, los preparamos y coordinamos su entrega.</p>
          <div className="hero-actions">
            <WhatsAppButton />
            <a className="text-link" href="#como-funciona">Ver cómo funciona <span>↓</span></a>
          </div>
          <p className="consult-note">Antes de comprar, consúltanos para confirmar que tus productos pueden enviarse.</p>
        </div>
        <div className="hero-art" aria-label="Pídelo allá. Recíbelo aquí.">
          <div className="pin pin-origin"><i /> <span>ALLÁ</span><small>España</small></div>
          <div className="travel-line" />
          <div className="moving-box"><span className="motion motion-one" /><span className="motion motion-two" /><BoxCharacter /></div>
          <div className="pin pin-destination"><i /> <span>AQUÍ</span><small>Caracas</small></div>
          <div className="hero-stamp"><strong>10%</strong><span>claro y<br />transparente</span></div>
          <p>Pídelo <b>allá.</b> Recíbelo <strong>aquí.</strong></p>
        </div>
      </section>

      <section className="trust-strip" aria-label="Características del servicio">
        <span><i className="coral">♥</i><b>Cercanos</b> Te acompañamos</span>
        <span><i className="yellow">ϟ</i><b>Ágiles</b> Todo en orden</span>
        <span><i className="mint">✓</i><b>Confiables</b> Puerta a puerta</span>
        <span><i className="cream">%</i><b>Claros</b> Tarifa transparente</span>
      </section>

      <section className="section steps-section" id="como-funciona">
        <div className="section-heading">
          <div><span className="section-kicker">Así de sencillo</span><h2>De tus tiendas favoritas<br />hasta tu puerta.</h2></div>
          <p>Un proceso claro, acompañado por WhatsApp desde antes de comprar hasta que recibes tu pedido.</p>
        </div>
        <div className="steps-grid">
          {steps.map((step) => <article className="step-card" key={step.n}>
            <div className="step-top"><span className="step-number">{step.n}</span><span className="step-icon">{step.icon}</span></div>
            <h3>{step.title}</h3><p>{step.text}</p>
          </article>)}
        </div>
        <div className="inline-cta"><div><strong>¿Ya sabes qué quieres comprar?</strong><span>Confírmalo con nosotros antes de hacer el pedido.</span></div><WhatsAppButton compact /></div>
      </section>

      <section className="price-section" id="precio">
        <div className="price-intro"><span className="section-kicker">Sin fórmulas complicadas</span><h2>Sabes cuánto pagas<br />desde el principio.</h2><p>Nuestra tarifa es el <b>10% de la suma del valor de tus facturas y el coste definitivo del envío.</b></p><div className="price-character"><BoxCharacter /><span>¡Así de claro!</span></div></div>
        <div className="calculator-card">
          <span className="example-label">EJEMPLO DE CÁLCULO</span>
          <div className="calc-row"><span>Valor de tus compras</span><b>€500</b></div>
          <div className="calc-row"><span>Envío puerta a puerta</span><b>€100</b></div>
          <div className="calc-row base"><span>Base para calcular</span><b>€600</b></div>
          <div className="calc-total"><span><small>NUESTRA TARIFA</small>10%</span><strong>€60</strong></div>
          <p>Pagas €500 a las tiendas, €100 al courier y €60 a Pídelo de España.</p>
        </div>
      </section>

      <section className="section included-section">
        <div className="section-heading"><div><span className="section-kicker">Nosotros nos encargamos</span><h2>Todo listo para que llegue.</h2></div><p>Convertimos varias entregas y facturas en un único proceso ordenado.</p></div>
        <div className="included-grid">
          {["Recepción de tus compras en España", "Organización de paquetes recibidos", "Comprobación de facturas", "Consolidación de diferentes tiendas", "Preparación y embalaje", "Coordinación con el courier"].map((item, i) => <div key={item}><span>{String(i + 1).padStart(2, "0")}</span><p>{item}</p><b>✓</b></div>)}
        </div>
      </section>

      <section className="restriction-section">
        <div><span className="section-kicker light">Antes de comprar</span><h2>¿Se puede enviar?</h2><p>Todos los artículos deben contar con factura y estar admitidos por el courier. Algunos productos pueden tener restricciones por contenido, cantidad, valor, peso o dimensiones.</p><WhatsAppButton /></div>
        <div className="restriction-card"><BoxCharacter /><strong>Primero pregunta.<br />Después compra.</strong><p>No compres un artículo restringido sin consultarnos.</p></div>
      </section>

      <section className="section faq-section" id="preguntas">
        <div className="section-heading"><div><span className="section-kicker">Todo claro</span><h2>Preguntas frecuentes.</h2></div><p>Lo esencial para realizar tu primer pedido con confianza.</p></div>
        <div className="faq-list">{faqs.map(([q, a], i) => <details key={q} open={i === 0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
      </section>

      <section className="final-cta">
        <div className="final-route"><span className="route-dot coral-dot" /><div /><BoxCharacter /><span className="route-dot mint-dot" /></div>
        <span className="section-kicker">Tu próximo pedido empieza aquí</span>
        <h2>¿Qué te gustaría pedir<br />de España?</h2>
        <p>Escríbenos antes de comprar. Confirmaremos si tus productos pueden enviarse y te explicaremos el proceso.</p>
        <WhatsAppButton />
      </section>

      <footer><a className="brand footer-brand" href="#inicio"><BoxCharacter small /><span><strong>PÍDELO</strong><small>DE ESPAÑA</small></span></a><p>Pídelo <b>allá.</b> Recíbelo <strong>aquí.</strong></p><span>Servicio inicial disponible en Caracas.</span></footer>
      <button className="floating-wa" disabled aria-label="WhatsApp disponible próximamente" title="Número disponible próximamente">☎</button>
    </main>
  );
}
