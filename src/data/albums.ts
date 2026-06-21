export type AlbumPhoto = {
  file: string;
  alt: string;
  caption?: string;
};

export type Album = {
  slug: string;
  title: string;
  description: string;
  date: string;
  photos: AlbumPhoto[];
};

export const albums = [
  {
    slug: "dia-del-padre-2026",
    title: "Día del Padre 2026",
    description: "Celebración del Día del Padre con la comunidad Torres Quintero.",
    date: "2026-06-21",
    photos: [
      {
        file: "2026-06-21-dia-del-padre-01.jpg",
        alt: "Celebración del Día del Padre en Torres Quintero",
      },
      {
        file: "2026-06-21-dia-del-padre-02.jpg",
        alt: "Familias durante la celebración del Día del Padre",
      },
      {
        file: "2026-06-21-dia-del-padre-03.jpg",
        alt: "Actividad escolar del Día del Padre",
      },
      {
        file: "2026-06-21-dia-del-padre-04.jpg",
        alt: "Convivencia del Día del Padre",
      },
      {
        file: "2026-06-21-dia-del-padre-05.jpg",
        alt: "Participación de familias en el Día del Padre",
      },
      {
        file: "2026-06-21-dia-del-padre-06.jpg",
        alt: "Momento de la celebración del Día del Padre",
      },
      {
        file: "2026-06-21-dia-del-padre-07.jpg",
        alt: "Actividad de convivencia del Día del Padre",
      },
      {
        file: "2026-06-21-dia-del-padre-08.jpg",
        alt: "Comunidad escolar en el Día del Padre",
      },
      {
        file: "2026-06-21-dia-del-padre-09.jpg",
        alt: "Celebración familiar en Torres Quintero",
      },
      {
        file: "2026-06-21-dia-del-padre-10.jpg",
        alt: "Día del Padre en el colegio",
      },
      {
        file: "2026-06-21-dia-del-padre-11.jpg",
        alt: "Convivencia escolar del Día del Padre",
      },
      {
        file: "2026-06-21-dia-del-padre-12.jpg",
        alt: "Familias participando en actividad escolar",
      },
      {
        file: "2026-06-21-dia-del-padre-13.jpg",
        alt: "Actividad del Día del Padre con estudiantes",
      },
      {
        file: "2026-06-21-dia-del-padre-14.jpg",
        alt: "Celebración del Día del Padre con estudiantes y familias",
      },
      {
        file: "2026-06-21-dia-del-padre-15.jpg",
        alt: "Participación familiar del Día del Padre",
      },
      {
        file: "2026-06-21-dia-del-padre-16.jpg",
        alt: "Momento de convivencia del Día del Padre",
      },
      {
        file: "2026-06-21-dia-del-padre-17.jpg",
        alt: "Celebración de la comunidad escolar",
      },
      {
        file: "2026-06-21-dia-del-padre-18.jpg",
        alt: "Día del Padre 2026 en Torres Quintero",
        caption: "Día del Padre 2026",
      },
    ],
  },
  {
    slug: "vida-escolar-archivo",
    title: "Vida escolar",
    description: "Actividades, instalaciones y momentos de la comunidad Torres Quintero.",
    date: "2022-02-14",
    photos: [
      {
        file: "2022-instalaciones-portada.jpg",
        alt: "Fachada de las instalaciones del colegio",
        caption: "Instalaciones",
      },
      {
        file: "2022-patio-preescolar.jpg",
        alt: "Patio de Jardín de Niños",
        caption: "Patio de Jardín de Niños",
      },
      {
        file: "2022-pasillo.jpg",
        alt: "Pasillo de las instalaciones",
      },
      {
        file: "2022-aula.jpg",
        alt: "Aula del colegio",
      },
      {
        file: "2022-preescolar-aula.jpg",
        alt: "Aula de Jardín de Niños",
      },
      {
        file: "2022-primaria-aula.jpg",
        alt: "Aula de primaria",
      },
      {
        file: "2022-patio.jpg",
        alt: "Patio escolar",
      },
      {
        file: "2022-biblioteca.jpg",
        alt: "Espacio de biblioteca",
      },
      {
        file: "2022-actividad-01.jpg",
        alt: "Actividad escolar en las instalaciones",
      },
      {
        file: "2022-actividad-02.jpg",
        alt: "Actividad de la comunidad escolar",
      },
      {
        file: "2022-actividad-03.jpg",
        alt: "Convivencia escolar",
      },
    ],
  },
] satisfies Album[];

export function photoPath(album: Album, photo: AlbumPhoto) {
  return `/albums/${album.slug}/${photo.file}`;
}

export function getAlbumPhotos(album: Album) {
  return [...album.photos].sort((a, b) => b.file.localeCompare(a.file));
}

export function getAlbumCover(album: Album) {
  return getAlbumPhotos(album)[0];
}

export function getAlbums() {
  return [...albums].sort((a, b) => b.date.localeCompare(a.date));
}
