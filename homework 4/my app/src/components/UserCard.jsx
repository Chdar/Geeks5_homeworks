import { Card } from 'antd';

const UserCard = ({ user }) => (
  <Card title={user.name} style={{ width: 300, margin: 10 }}>
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>Phone:</strong> {user.phone}</p>
    <p><strong>Website:</strong> {user.website}</p>
  </Card>
);

export default UserCard;