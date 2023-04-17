import { usePortalContext } from "contexts";
import { User } from "types";

export default function useAuth() {
    const portalContext = usePortalContext();

    const user: User = portalContext.get('me');

    return { user }
}
