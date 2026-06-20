export const site = {
	title: 'Colegio Profr. Gregorio Torres Quintero',
	description:
		'Colegio con presencia en Nezahualcoyotl, con enfoque academico, acompanamiento cercano y atencion directa para familias.',
	domain: 'https://www.torresquintero.edu.mx',
	cname: 'www.torresquintero.edu.mx',
	whatsAppNumber: '525543294293',
	whatsAppLabel: '+52 55 4329 4293',
	email: 'informes@torresquintero.edu.mx',
	mapUrl:
		'https://www.google.com/maps/place/Valle+de+Florido+113,+Valle+de+Aragon+1ra+Secc,+57100+Nezahualc%C3%B3yotl,+M%C3%A9x./@19.4911521,-99.0600967,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1fa561a80fff9:0x8564fc1101cefd8e!8m2!3d19.4911521!4d-99.057908',
	address:
		'Valle de Florido 113, Valle de Aragon 1ra Secc, C.P. 57100, Nezahualcoyotl, Estado de Mexico',
} as const;

export const navigation = [
	{ href: '/', label: 'Inicio' },
	{ href: '/noticias-de-profesor-gregorio-torre', label: 'Modelo Educativo' },
	{ href: '/pagina-en-blanco', label: 'Instalaciones' },
	{ href: '/vida-estudiantil', label: 'Que Hacemos' },
	{ href: '/pagina-en-blanco-1', label: 'Galeria' },
	{ href: '/admisiones', label: 'Admisiones' },
	{ href: '/vida-estudiantil-1', label: 'Noticias' },
] as const;

export const whatsAppUrl = `https://wa.me/${site.whatsAppNumber}`;
