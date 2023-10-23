const blobToBase64 = (blob) => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  return new Promise((resolve) => {
    reader.onloadend = () => {
      resolve(reader.result);
    };
  });
};
// const compressFile = async (file) => {
//   // eslint-disable-next-line no-new
//   const fileCompresor = new Compressor(file, {
//     quality: 0.6,
//     success(result) {
//       return result;
//     },
//     error(err) {
//       return err.message;
//     },
//   });
//   return fileCompresor;
// };

export default blobToBase64;
