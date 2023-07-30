import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteData, postData, putData } from 'api/genericApi';
import { toast } from 'react-hot-toast';
import { IUserInfo, UserInfoToApiMapper } from 'types/api/users/UserType';
import { UserQueryKey } from './UserKey';

export const useAddUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: IUserInfo) => addUser(data),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [UserQueryKey] });
    },
    onError(error: Error) {
      toast.error(error.message);
    }
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: IUserInfo) => updateUser(data),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [UserQueryKey] });
    },
    onError(error: Error) {
      toast.error(error.message);
    }
  });
};

export const useDeleteFinancialInstitution = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userId: number) => deleteUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [UserQueryKey] });
    },
    onError(error: Error) {
      toast.error(error.message);
    }
  });
};

async function addUser(data: IUserInfo): Promise<string> {
  const postPayload = UserInfoToApiMapper(data);
  return await postData<'string'>('users', postPayload);
}
async function updateUser(data: IUserInfo): Promise<string> {
  const postPayload = UserInfoToApiMapper(data);
  return await putData<'string'>(`users/${postPayload.userId}`, postPayload);
}
async function deleteUser(userId: number): Promise<string> {
  return await deleteData<'string'>(`users/${userId}`);
}
