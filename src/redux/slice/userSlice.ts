import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { deleteData, fetchData, postData, putData } from 'api/genericApi';
import { ERROR, IDLE, LOADING, SUCCESS } from 'redux/constant/constant';
import { IUserInfo, IUserResponseItem, UserInfoToApiMapper } from 'types/api/users/UserType';

export const getAllUsers = createAsyncThunk('user/getAllUsers', async (_, { rejectWithValue }) => {
  try {
    const response = await fetchData<IUserResponseItem[]>('users');
    return response;
  } catch (error: any) {
    return rejectWithValue(error.response ? error.response.data : error);
  }
});

export const getUserById = createAsyncThunk('user/getUserById', async (id: string, { rejectWithValue }) => {
  try {
    const response = await fetchData<IUserResponseItem>(`users/${id}`);
    return response;
  } catch (error: any) {
    return rejectWithValue(error.response ? error.response.data : error);
  }
});

export const addUser = createAsyncThunk('user/addUser', async (data: IUserInfo, { rejectWithValue }) => {
  try {
    const postPayload = UserInfoToApiMapper(data);
    const response = await postData<'string'>('users', postPayload);
    return response;
  } catch (error: any) {
    return rejectWithValue(error.response ? error.response.data : error);
  }
});

export const updateUser = createAsyncThunk('user/updateUser', async (data: IUserInfo, { rejectWithValue }) => {
  try {
    const postPayload = UserInfoToApiMapper(data);
    await putData<'string'>(`users/${postPayload.id}`, postPayload);
    return data.id;
  } catch (error: any) {
    return rejectWithValue(error.response ? error.response.data : error);
  }
});

export const deleteUser = createAsyncThunk('user/deleteUser', async (userId: number, { rejectWithValue }) => {
  try {
    await deleteData<'string'>(`users/${userId}`);
    return userId;
  } catch (error: any) {
    return rejectWithValue(error.response ? error.response.data : error);
  }
});

type TUserState = {
  usersData: IUserResponseItem[];
  userData: IUserResponseItem;
  usersStatus: string;
  userByIdStatus: string;
  addUserStatus: string;
  updateUserStatus: string;
  deleteUserStatus: string;
  usersError: string;
  userError: string;
  addUserError: string;
  updateUserError: string;
  deleteUserError: string;
};

const initialState: TUserState = {
  usersData: [] as IUserResponseItem[],
  userData: {} as IUserResponseItem,
  usersStatus: IDLE,
  userByIdStatus: IDLE,
  addUserStatus: IDLE,
  updateUserStatus: IDLE,
  deleteUserStatus: IDLE,
  usersError: '',
  userError: '',
  addUserError: '',
  updateUserError: '',
  deleteUserError: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUsersStatus: (state) => {
      state.usersStatus = IDLE;
    },
    resetUserStatus: (state) => {
      state.userByIdStatus = IDLE;
    },
    resetAddUserStatus: (state) => {
      state.addUserStatus = IDLE;
    },
    resetUpdateUserStatus: (state) => {
      state.updateUserStatus = IDLE;
    },
    resetDeleteStatus: (state) => {
      state.deleteUserStatus = IDLE;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.usersStatus = LOADING;
      })
      .addCase(getAllUsers.fulfilled, (state, { payload }) => {
        state.usersStatus = SUCCESS;
        state.usersData = payload;
      })
      .addCase(getAllUsers.rejected, (state, { payload }) => {
        state.usersStatus = ERROR;
        state.usersError = payload as string;
      })
      .addCase(getUserById.pending, (state) => {
        state.userByIdStatus = LOADING;
      })
      .addCase(getUserById.fulfilled, (state, { payload }) => {
        state.userByIdStatus = SUCCESS;
        state.userData = payload;
      })
      .addCase(getUserById.rejected, (state, { payload }) => {
        state.userByIdStatus = ERROR;
        state.userError = payload as string;
      })
      .addCase(addUser.pending, (state) => {
        state.addUserStatus = LOADING;
      })
      .addCase(addUser.fulfilled, (state) => {
        state.addUserStatus = SUCCESS;
      })
      .addCase(addUser.rejected, (state, { payload }) => {
        state.addUserStatus = ERROR;
        state.addUserError = payload as string;
      })
      .addCase(updateUser.pending, (state) => {
        state.updateUserStatus = LOADING;
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.updateUserStatus = SUCCESS;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.updateUserStatus = ERROR;
        state.updateUserError = payload as string;
      })
      .addCase(deleteUser.pending, (state) => {
        state.deleteUserStatus = LOADING;
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.deleteUserStatus = SUCCESS;
        const users = state.usersData;
        state.usersData = users.filter((user) => user.id !== payload);
      })
      .addCase(deleteUser.rejected, (state, { payload }) => {
        state.deleteUserStatus = ERROR;
        state.deleteUserError = payload as string;
      });
  }
});

export const { resetAddUserStatus, resetDeleteStatus, resetUpdateUserStatus, resetUserStatus, resetUsersStatus } = userSlice.actions;
export default userSlice.reducer;
