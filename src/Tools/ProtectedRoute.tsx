import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContextType';

export const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? element : <Navigate to="/adm" />;
};
