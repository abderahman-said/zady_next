import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getUserOrderDetails } from "./lorem/loremSlice";

  const Url = "https://zayady.deltawy.com";
  // const Url = "http://192.168.0.201:8080/zayady"; 

   export const finishCart = createAsyncThunk(
    "finishCart",
    async (id, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const data = await axios
          .post(`${Url}/rest/test.orderbill/preparefinishCart`, {
            id,
          })
          .then((res) => res.data);
        return data;
      } catch (err) {
        return rejectWithValue(err.message);
      }
    }
  );


const ShopSlice = createSlice({
  name: "Shop",
  initialState: {
    isLoading: false,
    error: null,
    CartArr: null,
    searchArr: [],
    ShowSearch: true,
    SetSearchInput: "",
    CartsArr: null,
    MainCatsArr: null,
    SubCategoriesArr: null,
    ProductsCats: [],
    CtsproductArr: [],
    TestProArr: [],
    PDFUrl: "",
    SubCatsArr: [],
    OriginalImageArr: null,
    UserFinishedBillsArr: null,
  },
  reducers: {
    searchChar: (state, action) => {
      state.SetSearchInput = action.payload;
    },
    InitaialCtsproductArr: (state, action) => {
      state.TestProArr = action.payload;
    },
    ClearCart: (state, action) => {
      state.CartsArr = null;
    },
  },
  extraReducers: {
    [getUserOrderDetails.fulfilled]: (state, action) => {
      state.CartsArr = action.payload;
    },
    // [finishCart.fulfilled]: (state, action) => {
    // },

    
  },
});
export const {
  // searchChar,
  InitaialCtsproductArr,
  ClearCart,
} = ShopSlice.actions;

export default ShopSlice.reducer;
