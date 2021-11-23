// ===========  URL =============

export const API_FRONTEND_URL = "http://localhost:3000";
export const API_HOST_URL = "https://staging-am.awalmula.co.id";
const API_BASE_VERSION_URL = "/rest/default/V1";
export const API_URL = API_HOST_URL + API_BASE_VERSION_URL;

export const CATEGORIES_URL = API_URL + "/categories";
export const CATEGORIES_PRODUCTS_URL = (categoryId) =>
  API_URL + `/categories/${categoryId}/products`;
export const PRODUCTS_ALL_URL =
  API_URL + "/products?searchCriteria[pageSize]=10";
export const TOKEN_URL = API_URL + "/integration/admin/token";
export const MEDIA_HOST_URL =
  "https://media-www.awalmula.co.id/catalog/product";
