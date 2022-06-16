import getImageUrl from "../../../lib/getImageUrl";

export const makeListProductsWImages = async (productArr) => {
  // get each image's url and add the new product to the new list
  // it only gets the main image
  // other (color) images will be fetched on the single product page
  let result = [];
  for (let i = 0; i < productArr.length; i++) {
    const url = await getImageUrl(productArr[i].imagePath);
    const pWUrl = { ...productArr[i], imageUrl: url };
    result.push(pWUrl);
  }

  return result;
};
