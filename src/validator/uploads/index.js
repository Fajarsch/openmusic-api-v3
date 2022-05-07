const InvariantError = require('../../exceptions/InvariantError');
const { CoverHeaderSchema } = require('./schema');

const UploadsValidator = {
  validateCoverHeaders: (headers) => {
    const validationResult = CoverHeaderSchema.validate(headers);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = UploadsValidator;
