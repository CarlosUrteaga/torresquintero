export const site = {
  name: "Colegio Profr. Gregorio Torres Quintero",
  shortName: "Torres Quintero",
  founded: 1979,
  description:
    "Jardín de niños y primaria con educación integral, aprendizaje significativo y formación en valores.",
  email: "informes@torresquintero.edu.mx",
  whatsappDisplay: "55 3429 4293",
  whatsapp: "5215534294293",
  phoneDisplay: "55 5120 4530",
  phone: "525551204530",
  address:
    "Valle de Florido 113, Valle de Aragón 1ra Secc., C.P. 57100, Nezahualcóyotl, Estado de México",
  mapUrl:
    "https://www.google.com/maps/place/Valle+de+Florido+113,+Valle+de+Aragon+1ra+Secc,+57100+Nezahualc%C3%B3yotl,+M%C3%A9x./@19.4911521,-99.0600967,17z",
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hola, deseo recibir información sobre inscripciones en el Colegio Torres Quintero.",
)}`;

export const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/colegio/", label: "Colegio" },
  { href: "/modelo-educativo/", label: "Modelo educativo" },
  { href: "/niveles/", label: "Niveles" },
  { href: "/vida-escolar/", label: "Vida escolar" },
  { href: "/admisiones/", label: "Admisiones" },
  { href: "/contacto/", label: "Contacto" },
] as const;

export const activities = [
  {
    title: "Inglés",
    image: "/images/ingles.jpg",
    text: "El aprendizaje del inglés desde pequeños fortalece habilidades para su desarrollo académico. En sexto grado, el colegio prepara a sus estudiantes para certificarse ante Cambridge.",
  },
  {
    title: "Computación",
    image: "/images/computacion.jpg",
    text: "Desde Jardín de Niños, la computación acerca a los estudiantes a recursos para escribir, dibujar, consultar, aprender, comunicarse e informarse.",
  },
  {
    title: "Danza",
    image: "/images/danza.jpg",
    text: "Favorece la condición física, la socialización, la autoestima, el ritmo y la coordinación.",
  },
  {
    title: "Música",
    image: "/images/musica.jpg",
    text: "Contribuye al desarrollo cognitivo, social, motor, emocional y del lenguaje.",
  },
  {
    title: "Ajedrez",
    image: "/images/ajedrez.jpg",
    text: "Favorece el razonamiento, la coordinación y el desarrollo de aptitudes mentales.",
  },
  {
    title: "Educación física",
    image: "/images/educacion-fisica.png",
    text: "Apoya el desarrollo motriz, social y deportivo, además de promover la salud y el trabajo en equipo.",
  },
] as const;

export const gallery = [
  { src: "/images/instalaciones-portada.jpg", alt: "Fachada de las instalaciones del colegio" },
  { src: "/images/patio-preescolar.jpg", alt: "Patio de Jardín de Niños" },
  { src: "/images/pasillo.jpg", alt: "Pasillo de las instalaciones" },
  { src: "/images/aula.jpg", alt: "Aula del colegio" },
  { src: "/images/preescolar-aula.jpg", alt: "Aula de Jardín de Niños" },
  { src: "/images/primaria-aula.jpg", alt: "Aula de primaria" },
  { src: "/images/patio.jpg", alt: "Patio escolar" },
  { src: "/images/biblioteca.jpg", alt: "Espacio de biblioteca" },
  { src: "/images/actividad-1.jpg", alt: "Actividad escolar en las instalaciones" },
  { src: "/images/actividad-2.jpg", alt: "Actividad de la comunidad escolar" },
  { src: "/images/actividad-3.jpg", alt: "Convivencia escolar" },
] as const;
