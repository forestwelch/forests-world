import requireContext from "require-context.macro";

const imageContext = requireContext("./", false, /\.(png|jpe?g|svg)$/);

const images: { [key: string]: string } = imageContext
  .keys()
  .reduce((acc: any, key: string) => {
    acc[key] = imageContext(key);
    return acc;
  }, {});

export default images;
