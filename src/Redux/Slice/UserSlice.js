import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../Service/Config";
import { toast } from "react-toastify";



export const addAdminProduct = createAsyncThunk(
  "post/addProduct",
  async (data, rejectWithValue) => {
    console.log(777, data);
    try {
      let formData = new FormData();
      formData.append("title", data.title);
      formData.append("price", data.price);
      formData.append("description", data.description);
      formData.append("image", data.image);
      const response = await instance.post("post", formData);
      console.log(777, response.data.message);
      if (response.data.message) {
        toast(response.data.message);
        return response.data.message;
      }
    } catch (err) {
      toast(err.response.data.error);
      // console.log(err.response.data.error);
      return rejectWithValue(err.message);
    }
  }
);

export const userSlice = createSlice({
  name: "counter",
  initialState: {
    loading: false,
    error: "",
    token: "",
    productData: [],
    message: "",
  },

  extraReducers: {
    [addAdminProduct.pending]: (state, action) => {
      state.loading = true;
      state.message = " ";
    },
    [addAdminProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.message += action.payload;
    },
    [addAdminProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function

export default userSlice.reducer;
