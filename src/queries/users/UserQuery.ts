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

export const useGetUserById = (id: string) => {
  return useQuery<IUserResponseItem, Error>({
    queryKey: [UserQueryKey, id],
    queryFn: () => getUserById(id),
    keepPreviousData: true
  });
};

async function getAllUsers(): Promise<IUserResponseItem[]> {
  return await fetchData<IUserResponseItem[]>('users');
}

async function getUserById(id: string): Promise<IUserResponseItem> {
  return await fetchData<IUserResponseItem>('users/fetch/?Id=' + id);
}
