import { useQuery } from '@tanstack/react-query';
import { fetchData } from 'api/genericApi';
import { IUserResponseItem } from 'types/api/users/UserType';
import { UserQueryKey } from './UserKey';

export const useGetUsers = () => {
  return useQuery<IUserResponseItem[], Error>({
    queryKey: [UserQueryKey],
    queryFn: getAllUsers,
    keepPreviousData: true
  });
};

export const useGetUserById = (id: string | undefined) => {
  return useQuery<IUserResponseItem, Error>({
    queryKey: [UserQueryKey, id],
    queryFn: () => getUserById(id),
    keepPreviousData: true,
    enabled: !!id
  });
};

async function getAllUsers(): Promise<IUserResponseItem[]> {
  return await fetchData<IUserResponseItem[]>('users');
}

async function getUserById(id: string | undefined): Promise<IUserResponseItem> {
  return await fetchData<IUserResponseItem>(`users/${id}`);
}
