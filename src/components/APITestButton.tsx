import { useAuth, useApi } from 'hooks';

function APITestButton() {
    const { user } = useAuth();

    //
    const fetchUser = useApi(`/user/${user.id}`);

    const handleClick = () => {
        fetchUser();
    }

  return (
      <button
          type="button"
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleClick}
      >
          Push me to make an api call
      </button>
  );
}

export default APITestButton;
