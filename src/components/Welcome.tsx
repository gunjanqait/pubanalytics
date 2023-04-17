import { useAuth } from 'hooks';
import { keys } from 'helpers';
import { Button } from '@liveintent/lui';

function Welcome() {
  const { user } = useAuth();

  return (
    <div>
      <p className="text-2xl">Welcome to your new Portal app!</p>
      <p className="text-sm mt-8 mb-1">You are currently logged in as:</p>
      <ul>
        {keys(user).map((key) => (
          <li key={key}>
            <span className="font-bold ml-4">{key}</span>: {user[key]}
          </li>
        ))}
      </ul>

      <div className="pt-4 flex justify-center">
        <Button
          label="I'm a LUI Button!"
          onClick={() => alert('Beep, Boop!')}
        />
      </div>
    </div>
  );
}

export default Welcome;
