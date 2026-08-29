// Landings transaccionales (SEO local y comercial).
// Cada entrada genera una página en /<slug>/ — se prerenderiza, entra al sitemap
// y se enlaza desde el footer. El contenido debe ser único por página.

export interface LandingFaq {
  q: string
  a: string
}

export interface LandingSection {
  h2: string
  text: string
}

export interface Landing {
  slug: string
  /** Ciudad o zona para schema areaServed (o 'Ecuador' para la general) */
  area: string
  metaTitle: string
  metaDescription: string
  keywords: string
  eyebrow: string
  h1: string
  lead: string
  bullets: string[]
  sections: LandingSection[]
  faqs: LandingFaq[]
  waText: string
  testimonial?: { text: string; author: string; city: string }
  /** Fecha de publicación/actualización para el sitemap (YYYY-MM-DD) */
  date: string
}

export const LANDINGS: Landing[] = [
  {
    slug: 'arena-para-gatos-quito',
    area: 'Quito',
    metaTitle: 'Arena para Gatos en Quito | Entrega a Domicilio | Popipet Ecoarena',
    metaDescription:
      'Compre arena ecológica de pellets para gatos en Quito con entrega a domicilio. Sin polvo, elimina olores y rinde 3 veces más. Saco de 10 kg. Pida en línea o por WhatsApp.',
    keywords:
      'arena para gatos quito, arena para gatos a domicilio quito, arena ecológica para gatos quito, pellets para gatos quito, donde comprar arena para gatos en quito',
    eyebrow: 'Entrega a domicilio en Quito',
    h1: 'Arena para gatos en Quito, con entrega a domicilio',
    lead: 'Popipet Ecoarena llega a todo Quito: norte, sur, centro y los valles de Cumbayá, Tumbaco y Los Chillos. Arena ecológica de pellets de madera, sin polvo y sin olores, directo a la puerta de su hogar.',
    bullets: [
      'Entrega a domicilio en todo el Distrito Metropolitano de Quito',
      'Pague en línea con tarjeta o coordine por WhatsApp',
      'Saco de 10 kg que rinde como 30 kg de arena tradicional',
      'Sin polvo: ideal para departamentos y espacios cerrados'
    ],
    sections: [
      {
        h2: 'Pensada para la vida en departamento',
        text: 'En Quito gran parte de los gatos vive en departamentos, donde el arenero suele estar en el baño, la lavandería o el balcón. Ahí el polvo de la arena mineral se nota en pisos y muebles, y los olores se concentran rápido. Los pellets de madera de Popipet no levantan polvo al escarbar y neutralizan el olor de la orina con la resina natural de la madera, sin perfumes que solo lo disimulan. El resultado: un departamento que no huele a arenero, aunque el espacio sea pequeño.'
      },
      {
        h2: 'Menos viajes cargando sacos',
        text: 'Como un saco de 10 kg rinde aproximadamente lo que 30 kg de arena tradicional, comprará menos veces y cargará menos peso — y con la entrega a domicilio ni siquiera eso: su pedido llega hasta su edificio o casa en cualquier sector de la ciudad. El residuo, además, es aserrín biodegradable que puede ir con los desechos orgánicos.'
      }
    ],
    faqs: [
      {
        q: '¿Hacen entregas en todo Quito?',
        a: 'Sí. Entregamos en el norte, centro, sur y los valles (Cumbayá, Tumbaco, Los Chillos, Calderón y más). El costo de envío se confirma al procesar el pedido según el sector.'
      },
      {
        q: '¿Cuánto tarda la entrega en Quito?',
        a: 'Los pedidos dentro de Quito normalmente se entregan en 24 a 48 horas laborables luego de confirmado el pago.'
      },
      {
        q: '¿Cómo pago mi pedido en Quito?',
        a: 'Puede pagar en línea con tarjeta de crédito o débito directamente en la página, o escribirnos por WhatsApp para coordinar el pago y la entrega.'
      }
    ],
    waText: 'Hola, quiero pedir Popipet Ecoarena con entrega en Quito.',
    testimonial: {
      text: 'Mi gata es muy delicada con las arenas y se adaptó desde el primer día. No genera polvo y el departamento se mantiene sin olores.',
      author: 'María José R.',
      city: 'Quito'
    },
    date: '2026-08-28'
  },
  {
    slug: 'arena-para-gatos-guayaquil',
    area: 'Guayaquil',
    metaTitle: 'Arena para Gatos en Guayaquil | Entrega a Domicilio | Popipet Ecoarena',
    metaDescription:
      'Arena ecológica de pellets para gatos en Guayaquil con entrega a domicilio. Máximo control de olores incluso con calor y humedad. Saco de 10 kg. Pida en línea o por WhatsApp.',
    keywords:
      'arena para gatos guayaquil, arena para gatos a domicilio guayaquil, arena ecológica para gatos guayaquil, pellets para gatos guayaquil, donde comprar arena para gatos en guayaquil',
    eyebrow: 'Entrega a domicilio en Guayaquil',
    h1: 'Arena para gatos en Guayaquil, con entrega a domicilio',
    lead: 'Popipet Ecoarena llega a toda Guayaquil y sus alrededores: Samborondón, Vía a la Costa, Durán y más. Arena de pellets de madera que controla los olores incluso con el calor y la humedad de la costa.',
    bullets: [
      'Entrega a domicilio en Guayaquil, Samborondón, Durán y alrededores',
      'Control de olores superior, clave en clima cálido y húmedo',
      'Saco de 10 kg que rinde como 30 kg de arena tradicional',
      'Pague en línea con tarjeta o coordine por WhatsApp'
    ],
    sections: [
      {
        h2: 'El clima de la costa exige más de una arena',
        text: 'Con el calor y la humedad de Guayaquil, el olor del arenero se intensifica mucho más rápido que en la sierra, y las arenas perfumadas apenas lo disimulan por unas horas. Los pellets de Popipet atacan el problema de raíz: la resina natural de la madera neutraliza el amoníaco de la orina en el momento en que el pellet la absorbe. Además, al mantener el lecho seco, dificulta la proliferación de bacterias y hongos, algo especialmente importante en ambientes húmedos.'
      },
      {
        h2: 'Rinde más, aun con varios gatos',
        text: 'En hogares guayaquileños con más de un gato, el gasto en arena se siente cada mes. Como solo se retira la zona hidratada y no se desecha arena limpia pegada en grumos, un saco de 10 kg rinde aproximadamente lo que 30 kg de arena tradicional. Y con la entrega a domicilio, no tiene que cargar sacos bajo el sol: su pedido llega hasta su casa o urbanización.'
      }
    ],
    faqs: [
      {
        q: '¿Hacen entregas en todo Guayaquil?',
        a: 'Sí. Entregamos en Guayaquil y sus alrededores, incluyendo Samborondón, Vía a la Costa y Durán. El costo de envío se confirma al procesar el pedido según el sector.'
      },
      {
        q: '¿La arena funciona bien con el calor de Guayaquil?',
        a: 'Sí, y es justamente donde más se nota la diferencia: la resina natural de la madera neutraliza el olor del amoníaco apenas el pellet absorbe la orina, en lugar de taparlo con perfume. El lecho se mantiene seco y fresco.'
      },
      {
        q: '¿Cómo pago mi pedido en Guayaquil?',
        a: 'Puede pagar en línea con tarjeta de crédito o débito directamente en la página, o escribirnos por WhatsApp para coordinar el pago y la entrega.'
      }
    ],
    waText: 'Hola, quiero pedir Popipet Ecoarena con entrega en Guayaquil.',
    testimonial: {
      text: 'Tengo dos conejos y un hámster. Uso Popipet para todos y rinde muchísimo más que cualquier sustrato que compraba antes.',
      author: 'Carlos A.',
      city: 'Guayaquil'
    },
    date: '2026-08-28'
  },
  {
    slug: 'arena-para-gatos-cuenca',
    area: 'Cuenca',
    metaTitle: 'Arena para Gatos en Cuenca | Entrega a Domicilio | Popipet Ecoarena',
    metaDescription:
      'Compre arena ecológica de pellets para gatos en Cuenca con entrega a domicilio. Biodegradable y compostable, sin polvo y sin olores. Saco de 10 kg. Pida en línea o por WhatsApp.',
    keywords:
      'arena para gatos cuenca, arena para gatos a domicilio cuenca, arena ecológica para gatos cuenca, pellets para gatos cuenca, donde comprar arena para gatos en cuenca',
    eyebrow: 'Entrega a domicilio en Cuenca',
    h1: 'Arena para gatos en Cuenca, con entrega a domicilio',
    lead: 'Popipet Ecoarena llega a Cuenca y sus alrededores. Arena ecológica de pellets de madera, 100% biodegradable: perfecta para hogares cuencanos que separan sus residuos o compostan en el jardín.',
    bullets: [
      'Entrega a domicilio en Cuenca y alrededores',
      '100% biodegradable: el residuo puede ir al compost del jardín',
      'Saco de 10 kg que rinde como 30 kg de arena tradicional',
      'Pague en línea con tarjeta o coordine por WhatsApp'
    ],
    sections: [
      {
        h2: 'Una arena que va con el estilo de vida cuencano',
        text: 'Cuenca es una de las ciudades del país donde más hogares separan sus residuos y mantienen huertos o jardines. Con la arena mineral tradicional, todo el desecho termina en la basura común. Con Popipet, el residuo es aserrín 100% natural que puede integrarse al compost o desecharse con los orgánicos. Un solo cambio en el arenero reduce de forma notable la basura no aprovechable del hogar.'
      },
      {
        h2: 'Sin polvo, mejor para gatos y personas',
        text: 'El polvo fino de las arenas minerales es una causa frecuente de estornudos e irritaciones, tanto en los gatos como en quienes limpian el arenero. Los pellets de madera prácticamente no generan polvo al escarbar ni al servir el producto, por lo que son la opción recomendada para hogares con personas alérgicas o gatos de vías respiratorias sensibles.'
      }
    ],
    faqs: [
      {
        q: '¿Hacen entregas en Cuenca?',
        a: 'Sí. Entregamos en Cuenca y sus alrededores. El costo de envío se confirma al procesar el pedido según el sector.'
      },
      {
        q: '¿Puedo compostar la arena usada?',
        a: 'Sí. El pellet hidratado se deshace en aserrín 100% natural, sin químicos ni perfumes, que puede integrarse al compost del jardín o desecharse con los residuos orgánicos.'
      },
      {
        q: '¿Cómo pago mi pedido en Cuenca?',
        a: 'Puede pagar en línea con tarjeta de crédito o débito directamente en la página, o escribirnos por WhatsApp para coordinar el pago y la entrega.'
      }
    ],
    waText: 'Hola, quiero pedir Popipet Ecoarena con entrega en Cuenca.',
    testimonial: {
      text: 'Lo utilizo en las caballerizas y el cambio fue notable: menos olor, menos moscas y el desecho va directo al compost de la finca.',
      author: 'Verónica T.',
      city: 'Cuenca'
    },
    date: '2026-08-28'
  },
  {
    slug: 'comprar-arena-de-pellets-para-gatos',
    area: 'Ecuador',
    metaTitle: 'Comprar Arena de Pellets para Gatos en Ecuador | Popipet Ecoarena',
    metaDescription:
      'Compre arena de pellets de madera para gatos en Ecuador: $13 + IVA el saco de 10 kg que rinde como 30 kg de arena tradicional. Pago en línea con tarjeta y envíos a todo el país.',
    keywords:
      'comprar arena de pellets para gatos, arena de pellets para gatos ecuador, precio arena de pellets para gatos, pellets de madera para gatos ecuador, arena ecologica para gatos comprar',
    eyebrow: 'Envíos a todo el Ecuador',
    h1: 'Comprar arena de pellets para gatos en Ecuador',
    lead: 'Popipet Ecoarena es arena de pellets de aserrín de madera 100% natural, hecha en Ecuador. Un saco de 10 kg cuesta $13 + IVA y rinde aproximadamente lo que 30 kg de arena tradicional. Pague en línea con tarjeta y reciba su pedido en cualquier ciudad del país.',
    bullets: [
      'Saco de 10 kg por $13 + IVA, con rendimiento de hasta 3 sacos de arena común',
      'Pago en línea con tarjeta de crédito o débito, o pedido por WhatsApp',
      'Envíos a todo el Ecuador: el costo depende de la ciudad de destino',
      'Rastree su pedido en línea con el código que recibe por correo'
    ],
    sections: [
      {
        h2: 'Cuánto cuesta realmente una arena',
        text: 'El precio de etiqueta engaña: lo que define el gasto mensual es el rendimiento. Con la arena aglomerante tradicional se desecha mucha arena limpia pegada a cada grumo; con los pellets solo se retira la zona hidratada. Por eso un saco de 10 kg de Popipet reemplaza aproximadamente 30 kg de arena tradicional, y el costo por semana de uso termina siendo menor aunque el saco parezca más caro.'
      },
      {
        h2: 'Cómo comprar en 3 pasos',
        text: 'Primero, agregue los sacos que necesite al carrito desde esta página o desde la página principal. Segundo, elija cómo pagar: en línea con su tarjeta de crédito o débito, o enviando el pedido por WhatsApp para coordinar con un asesor. Tercero, reciba el pedido en su domicilio: le llega un código de rastreo por correo para seguir el estado de su entrega en todo momento.'
      }
    ],
    faqs: [
      {
        q: '¿Cuál es el precio de la arena de pellets Popipet?',
        a: 'El saco de 10 kg cuesta $13 + IVA. Por su rendimiento, equivale aproximadamente a 30 kg de arena tradicional, por lo que el costo mensual real es menor que el de la arena común.'
      },
      {
        q: '¿A qué ciudades hacen envíos?',
        a: 'Enviamos a todo el Ecuador. El costo de envío se calcula según la ciudad de destino y se confirma al procesar el pedido.'
      },
      {
        q: '¿Qué métodos de pago aceptan?',
        a: 'Puede pagar en línea con tarjeta de crédito o débito directamente en la página, o enviar su pedido por WhatsApp y coordinar el pago con nuestro equipo.'
      },
      {
        q: '¿Puedo rastrear mi pedido?',
        a: 'Sí. Al confirmar su compra recibe por correo un código con el que puede consultar el estado de su pedido en línea en cualquier momento.'
      }
    ],
    waText: 'Hola, quiero comprar arena de pellets Popipet Ecoarena.',
    date: '2026-08-28'
  }
]

export const LANDING_BY_SLUG: Record<string, Landing> = Object.fromEntries(
  LANDINGS.map((l) => [l.slug, l])
)
