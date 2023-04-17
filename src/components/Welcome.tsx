import { useAuth } from 'hooks';
import { keys } from 'helpers';

function Welcome() {
  const { user } = useAuth();

  return (
    <div>
      <p className="text-2xl">Welcome to your new Portal app!</p>
      <p className="text-sm mt-8 mb-1">You are currently logged in as:</p>
      <ul>
        {keys(user).map(key => (
          <li key={key}><span className="font-bold ml-4">{key}</span>: {user[key]}</li>
        ))}
      </ul>
    </div>
  );
}

export default Welcome;
