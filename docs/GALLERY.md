# Gallery Albums

Gallery albums are file-based so new photos can be added without changing page
templates.

## Add Photos To An Existing Album

1. Copy images into the album folder:

   ```txt
   public/albums/vida-escolar-archivo/
   ```

2. Use a sortable filename. The newest filename becomes the album cover by
   default:

   ```txt
   2026-06-21-curso-verano-01.jpg
   2026-06-21-curso-verano-02.jpg
   ```

3. Add each file to `src/data/albums.ts` with `file`, `alt`, and optional
   `caption`.

## Add A New Album

1. Create a folder under `public/albums/`, for example:

   ```txt
   public/albums/curso-verano-2026/
   ```

2. Add an album entry in `src/data/albums.ts`.

3. Set the album `date` to control album order.

The album cover is selected automatically from the newest photo filename in
that album.
