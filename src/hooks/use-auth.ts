import { usePortalContext } from 'contexts';
import { User } from 'types';

// @todo: move to a central config folder?
const isLocal = window.location.hostname.includes('localhost');

const dummyUser: User = {
  id: 0,
  email: 'user@liveintent.com',
  name: 'Dummy User',
  type: 'internal',
};

export default function useAuth() {
  const portalContext = usePortalContext();

  const user: User = isLocal ? dummyUser : portalContext.get('me');

  return { user };
}
