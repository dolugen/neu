module.exports = {
  settings: {
    parser: {
      enabled: true,
      multipart: true,
      jsonLimit: "10mb",
      formLimit: "10mb",
      formidable: {
        maxFileSize: 1000000,
      },
    },
  },
};
