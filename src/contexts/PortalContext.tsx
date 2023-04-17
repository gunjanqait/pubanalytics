import { createContext, PropsWithChildren, useContext } from 'react';

export type PortalContext = Map<PropertyKey, any> | undefined;
const Context = createContext<PortalContext | null>(null);
export const usePortalContext = () => useContext(Context)!;

const PortalContextProvider: React.FC<PropsWithChildren<{ value: PortalContext }>> = ({
  children,
  value,
}) => <Context.Provider value={value}>{children}</Context.Provider>;

export default PortalContextProvider;
