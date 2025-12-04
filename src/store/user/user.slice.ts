import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthorizationStatus } from "../../const";
import { loginAction, logoutAction, checkAuthAction } from "../api-actions";
import { UserState } from "../../types/state";

const initialState: UserState = {
  user: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<string | null>) {
      console.log('ee', action);
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
        state.error = null;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginAction.rejected, (state, action) => {
        //state.error = action.payload ?? 'Неизвестная ошибка';
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(checkAuthAction.rejected, (state, action) => {
        //state.error = action.payload ?? 'Неизвестная ошибка';
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});

export const { setError } = userSlice.actions;
