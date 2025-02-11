import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Property from './pages/Property';
import Tenants from './pages/Tenants';
import AddProperty from './pages/AddProperty';
import Maintainer from './pages/Maintainer';
import Contacts from './pages/Contacts';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/property" element={<Property />} />
            <Route path="/tenants" element={<Tenants />} />
            <Route path="/add-property" element={<AddProperty />} />
            <Route path="/maintainer" element={<Maintainer />} />
            <Route path="/contacts" element={<Contacts />} />
        </Routes>
    );
};

export default AppRoutes;
