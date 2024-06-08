import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// const url = "http://192.168.0.201:8080/zayady";
const url = "https://zayady.deltawy.com";

// Async thunk for getLorems
export const getLorems = createAsyncThunk(
  "getLorems",
  async (object, { getState, rejectWithValue }) => {
    console.log(getState());
    try {
      const { data } = await axios.get(
        `${url}/rest/test.product/getParentCategories/`
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

// Async thunk for getLastproduct
export const getLastproduct = createAsyncThunk(
  "getLastproduct",
  async (object, { getState, rejectWithValue }) => {
    console.log(getState());
    try {
      const { data } = await axios.get(
        `${url}/rest/test.product/getLastproductJson`
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);
 
 // Async thunk for getBanners
export const getBanners = createAsyncThunk(
  "getBanners",
  async (object, { getState, rejectWithValue }) => {
    console.log(getState());
    try {
      const { data } = await axios.get(
        `${url}/rest/test.product/getBanners`
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);
 
 // Async thunk for getUserOrderDetails
 
export const getUserOrderDetails = createAsyncThunk(
  "getUserOrderDetails",
  async (itemId, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${url}/rest/test.product/getUserOrderDetails/`,
        {
          id: itemId.id,
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error searching products:', error);
      return rejectWithValue(error.response);
    }
  }
);
 // Async thunk for addToCart
 
 export const addToCart = createAsyncThunk(
  'addToCart',
  async ({ UserId, productId, count }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${url}/rest/test.orderbill/addToCart`,
        {
          UserId,
          productId,
          count,
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error adding to cart:', error);
      return rejectWithValue(error.response);
    }
  }
);
 // Async thunk for finishCart
//  export const finishCart = createAsyncThunk(
//   'finishCart',
//   async ({ id }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         `${url}/rest/test.orderbill/finishCart`,
//         {
//           id: id,
//         }
//       );
//       return response.data;
//     } catch (error) {
//       console.error('Error finishing cart:', error);
//       return rejectWithValue(error.response);
//     }
//   }
// );

// Async thunk for search 
export const searchProducts = createAsyncThunk(
  "searchProducts",
  async (searchTerm, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${url}/rest/test.product/search/`,
        {
          searchTerm: searchTerm,
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error searching products:', error);
      return rejectWithValue(error.response);
    }
  }
);

 
// Async thunk for getClients 
export const getClients = createAsyncThunk(
  "getClients",
  async (object, { getState, rejectWithValue }) => {
    console.log(getState());
    try {
      const { data } = await axios.get(
        `${url}/rest/test.product/getClients`
      );
      return data;
      console.log(data)
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);
export const getMostViewed = createAsyncThunk(
  "getMostViewed",
  async ( object, { getState, rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${url}/rest/test.categories/getMostViewed`,
        {
          id: 6,
        }
      );
       return data;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);
 // Async thunk for getSubCategories
export const getSubCategories = createAsyncThunk(
  "getSubCategories",
  async (props, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${url}/rest/test.product/getSubCategories/`,
        {
          "id": props.id
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response);
    }
  }
);
 // Async thunk for getproductJson
 export const getproductJson = createAsyncThunk(
  "getproductJson",
  async (props, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${url}/rest/test.product/getproductJson/`,
        {
          "id": props.id
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response);
    }
  }
);
 // Async thunk for getProductDetails
 export const getProductDetails = createAsyncThunk(
  "getProductDetails",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${url}/rest/test.product/getProductDetails/`,
        {
          "id": productId.productId
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response);
    }
  }
);
   
  
//  Async thunk for getFullCategory
export const getFullCategory = createAsyncThunk(
  "getFullCategory",
  async ({ productId, specs , page ,brandId}, { getState, rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${url}/rest/test.categories/getFullCategory`,
        {
          page: page ,
          brandId: brandId ,
          catId: productId,
          minPrice: 29,
          maxPrice: 29,
          specs: specs,
        }
      );
       return data;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

// export const getSearchResult = createAsyncThunk(
//   "getFullCategory",
//   async (items, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const data = await axios
//         .post(`${url}/rest/test.categories/getFullCategory`,, {
//           ...items,
//            headers :{
//             "Content-Type" : "application/json"
//           }
//         })
//         .then((res) => res.data);
//       return data;
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );


const loremSlice = createSlice({
  name: "lorem",
  initialState: {
    loremsData: [],
    lastProductData: [],
    getBannersData: [],
    getFullCategoryData: [],
    getClientsData: [],
    getMostViewedData: [],
    getproductJsonData: [],
    getSubCategoriesData: [],
    getProductDetailsData: [],
    searchProductsData: [],
    getUserOrderDetailsData: [],
    addToCartData: [],
    // finishCartData: [],
    loading: false,
    isSuccess: false,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getLorems.pending]: (state, action) => {
      state.loading = true;
    },
    [getLorems.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.loremsData = payload;
      state.isSuccess = true;
    },
    [getLorems.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
    [getLastproduct.pending]: (state, action) => {
      state.loading = true;
    },
    [getLastproduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.lastProductData = payload;
      state.isSuccess = true;
    },
    [getLastproduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
    // [finishCart.pending]: (state, action) => {
    //   state.loading = true;
    // },
    // [finishCart.fulfilled]: (state, { payload }) => {
    //   state.loading = false;
    //   state.finishCartData = payload;
    //   state.isSuccess = true;
    // },
    // [finishCart.rejected]: (state, { payload }) => {
    //   state.loading = false;
    //   state.isSuccess = false;
    //   state.message = "failed";
    // },
    [getProductDetails.pending]: (state, action) => {
      state.loading = true;
    },
    [getProductDetails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.getProductDetailsData = payload;
      state.isSuccess = true;
    },
    [getProductDetails.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
    [addToCart.pending]: (state, action) => {
      state.loading = true;
    },
    [addToCart.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.addToCartData = payload;
      state.isSuccess = true;
    },
    [addToCart.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
    [searchProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [searchProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
       state.searchProductsData = payload;
      state.lastProductData = payload;
       state.isSuccess = true;
    },
    [searchProducts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
    [getproductJson.pending]: (state, action) => {
      state.loading = true;
    },
    [getproductJson.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.getproductJsonData = payload;
      state.isSuccess = true;
    },
    [getproductJson.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
    [getUserOrderDetails.pending]: (state, action) => {
      state.loading = true;
    },
    [getUserOrderDetails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.getUserOrderDetailsData = payload;
      state.isSuccess = true;
    },
    [getUserOrderDetails.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
    [getBanners.pending]: (state, action) => {
      state.loading = true;
    },
    [getBanners.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.getBannersData = payload;
      state.isSuccess = true;
    },
    [getBanners.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
    [getSubCategories.pending]: (state, action) => {
      state.loading = true;
    },
    [getSubCategories.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.getSubCategoriesData = payload;
      state.isSuccess = true;
    },
    [getSubCategories.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
    [getMostViewed.pending]: (state, action) => {
      state.loading = true;
    },
    [getMostViewed.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.getMostViewedData = payload;
      state.isSuccess = true;
    },
    [getMostViewed.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
    [getClients.pending]: (state, action) => {
      state.loading = true;
    },
    [getClients.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.getClientsData = payload;
      state.isSuccess = true;
    },
    [getClients.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
    [getFullCategory.pending]: (state, action) => {
      state.loading = true;
   },
   [getFullCategory.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.getFullCategoryData = payload;
      state.isSuccess = true;
   },
   [getFullCategory.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
   },
  },
});

export default loremSlice;
