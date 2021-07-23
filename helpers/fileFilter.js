const texteFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(txt|TXT)$/)) {
        req.fileValidationError = 'Seulement les fichiers .txt sont autorises';
        return cb(new Error('Seulement les fichiers .txt sont autorises'), false);
    }
    cb(null, true);
};
exports.texteFilter = texteFilter;