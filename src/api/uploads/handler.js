const ClientError = require('../../exceptions/ClientError');

class UploadsHandler {
  constructor(service, validator, albumsService) {
    this._service = service;
    this._validator = validator;
    this._albumsService = albumsService;

    this.postUploadCoverHandler = this.postUploadCoverHandler.bind(this);
  }

  async postUploadCoverHandler(request, h) {
    try {
      const { cover } = request.payload;
      
      this._validator.validateCoverHeaders(cover.hapi.headers);
      
      const filename = await this._service.writeFile(cover, cover.hapi);
      const { id } = request.params;
      const fileLocation = `http://${process.env.HOST}:${process.env.PORT}/albums/covers/${filename}`;

      await this._albumsService.addAlbumCover({ id, coverUrl: fileLocation });

      return h.response({
        status: 'success',
        message: 'Sampul berhasil diunggah',
      }).code(201);
    } catch (error) {
      if (error instanceof ClientError) {
        return h.response({
          status: 'fail',
          message: error.message,
        }).code(error.statusCode);
      }

      console.error(error);
      return h.response({
        status: 'error',
        message: error.message,
      }).code(500);
    }
  }
}

module.exports = UploadsHandler;
