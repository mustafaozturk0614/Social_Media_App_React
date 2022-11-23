import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../config/AuthService";
const initialStateAuth = {
  token: "",
  isAuthanticated: false,
  auth: [],
  isLoading: false,
  isLoadingRegister: false,
  code: 0,
  error: {
    code: "",
    message: "",
    fields: [],
  },
};

export const fetchLogin = createAsyncThunk(
  "auth/login",

  async (payload) => {
    try {
      const response = await fetch(authService.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .catch((error) => console.log(error));
      return response;
    } catch (err) {
      return err.response;
    }
  }
);

export const fecthRegister = createAsyncThunk(
  "auth/register",

  async (payload) => {
    try {
      const response = await fetch(authService.register, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .catch((error) => console.log(error));
      return response;
    } catch (err) {
      return err.response;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialStateAuth,

  reducers: {},
  extraReducers: (build) => {
    build.addCase(fecthRegister.fulfilled, (state, action) => {
      if (action.payload.code === 200) {
        state.auth = action.payload;
      } else {
        state.error = action.payload;
      }
      console.log(state.error);
      console.log(state.auth);

      state.isLoadingRegister = false;
    });
    build.addCase(fecthRegister.pending, (state, action) => {
      state.isLoadingRegister = true;
    });
    build.addCase(fecthRegister.rejected, (state, action) => {
      state.isLoadingRegister = false;
    });

    build.addCase(fetchLogin.fulfilled, (state, action) => {
      if (action.payload.code === 200) {
        state.token = action.payload.token;
        state.isAuthanticated = true;
        console.log(state.token);
      } else {
        state.error = action.payload;
        console.log(state.error);
      }

      state.isLoading = false;
    });
    build.addCase(fetchLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    build.addCase(fetchLogin.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
