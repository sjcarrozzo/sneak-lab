import {getFirestore,collection,getDocs,query,where,doc, getDoc} from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const fetchAllCategories = async () => {
  const querySnapshot = await getDocs(collection(db, "categories"));
  const categories = [];

  querySnapshot.forEach((doc) => categories.push(doc.data()));

  return categories;
};

export const fetchAllProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = [];

  querySnapshot.forEach(doc => products.push({ ...doc.data(), id: doc.id }));

  return products;
};

//decide and execute specific type of fetch: by category or brand
export const fetchWithParams = (filterType, filter) => {
  return filterType === "category"
    ? fetchByCategory(filter)
    : fetchByBrand(filter);
};

//filter products by category
const fetchByCategory = async (filter) => {
  const q = query(collection(db, "products"), where("category", "==", filter));
  const products = []

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach( doc => { products.push( { ... doc.data(), id: doc.id }) });
    return products

};

//filter products by brand
const fetchByBrand = async(filter) => {
  
  const q = query(collection(db, "products"), where("brand", "==", filter));
  const products = []

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach( doc => { products.push( { ... doc.data(), id: doc.id }) });
  return products
};

//find the product by Id
export const fetchProductById = async (productId) => {
  
  const docRef = doc(db,"products",productId);
  const docSnap = await getDoc(docRef);
    
  return { ...docSnap.data(), id: docSnap.id }
};
