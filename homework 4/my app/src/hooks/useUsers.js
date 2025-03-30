import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useUserStore } from '../store/userStore';

export const useUsers = () => {
  const setUsers = useUserStore((state) => state.setUsers);

  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(data);
      return data;
    }
  });
};
