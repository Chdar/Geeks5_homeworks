import { useUsers } from '../hooks/useUsers';
import { useUserStore } from '../store/userStore';
import UserCard from './UserCard';

const UserList = () => {
  const { isLoading, isError } = useUsers();
  const users = useUserStore((state) => state.users);

  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <p>Ошибка загрузки данных.</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;