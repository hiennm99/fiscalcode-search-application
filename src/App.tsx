// ============================================
// App - Refactored with all routes
// ============================================
import { EntitySearch } from "@features/entity-search";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import { AddressList } from './features/entity-detail/AddressList';
import { AssetList } from './features/entity-detail/AssetList';
import { BankList } from './features/entity-detail/BankList';
import { ContactList } from './features/entity-detail/ContactList';
import { EntityDetail } from "./features/entity-detail/EntityDetail";
import { EntityInfo } from './features/entity-detail/EntityInfo';
import { EredeList } from "./features/entity-detail/EredeList";
import { GuarantorList } from './features/entity-detail/GuarantorList';
import { JobList } from './features/entity-detail/JobList';
import { JointList } from './features/entity-detail/JointList';
import { OthersList } from "./features/entity-detail/OthersList";
import { PossibleGuarantorList } from "./features/entity-detail/PossibleGuarantorList";


const App = () => {
    return (
        <Router>
            <Routes>
                {/* Search page */}
                <Route path="/" element={<EntitySearch />} />

                {/* Entity detail routes */}
                <Route path="/entity/:entity_id" element={<EntityDetail />}>
                    <Route index element={<EntityInfo />} />
                    <Route path="addresses" element={<AddressList />} />
                    <Route path="contacts" element={<ContactList />} />
                    <Route path="banks" element={<BankList />} />
                    <Route path="jobs" element={<JobList />} />
                    <Route path="assets" element={<AssetList />} />
                    <Route path="guarantors" element={<GuarantorList />} />
                    <Route path="joints" element={<JointList />} />
                    <Route path="possible" element={<PossibleGuarantorList />} />
                    <Route path="others" element={<OthersList />} />
                    <Route path="erede" element={<EredeList />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;