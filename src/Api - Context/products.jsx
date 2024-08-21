const API = 'http://localhost:10000/fepi/items';
const CATEGORY_API = 'http://localhost:10000/fepi/categories';

export const getItemsRequest = () => axios.get(`${API}`);
export const getItemByIdRequest = (id) => axios.get(`${API}/${id}`);
export const getCategoriesRequest = () => axios.get(`${CATEGORY_API}`);