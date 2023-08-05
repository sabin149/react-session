import { IUserResponseItem } from 'types/api/users/UserType';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IState {
  userInfo: Pick<IUserResponseItem, 'name'>;
}

interface IActions {
  setUserInfo: (userInfo: IState['userInfo']) => void;
}

const INITIAL_STATE: IState = {
  userInfo: {
    name: ''
  }
};

export const useUserStore = create(
  devtools<IState & IActions>(
    (set) => ({
      ...INITIAL_STATE,
      setUserInfo: (userInfo) => set({ userInfo })
    }),
    {
      name: 'UserStore'
    }
  )
);

export type TUserStore = IState & IActions;
