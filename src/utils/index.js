const mapDBToAlbumModel = ({
  id,
  name,
  year,
  coverUrl,
}) => ({
  id,
  name,
  year,
  coverUrl,
});

const mapDBToSongModel = ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  album_id,
  created_at,
  updated_at,
}) => ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  albumId: album_id,
  createdAt: created_at,
  updatedAt: updated_at,
});

const mapDBUserLikeAlbumModel = ({
  id,
  user_id,
  album_id,
}) => ({
  id,
  userId: user_id,
  albumId: album_id,
});

module.exports = { mapDBToAlbumModel, mapDBToSongModel, mapDBUserLikeAlbumModel };
