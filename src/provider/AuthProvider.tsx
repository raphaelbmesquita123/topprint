import { ReactNode, useContext, useEffect, useState } from "react";
import { AuthContext } from '../context/AuthContext';
import firebase from "firebase/app";
import { auth } from '../services/firebase';

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthProvider: React.FC = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider 
  value={{
    user
  }}
  >
    {children}
  </AuthContext.Provider>;

}

export function useAuth () {
  return useContext(AuthContext)
}