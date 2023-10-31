import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Section from './components/section/Section';
import Sidebar from './components/sidebar/Sidebar';

import Home from './pages/Home/Home';
import DPWI from './pages/DPWI/DPWI';
import PMTE from './pages/PMTE/PMTE';
import DPWI_PMTE from './pages/DPWI_PMTE/DPWI_PMTE';

import ComplianceMatters from './pages/DPWI/Compliance_Matters/ComplianceMatters';
import Reporting from './pages/DPWI/Reporting/Reporting';
import Audit from './pages/DPWI/Reporting/Audit/Audit';
import Managementreport from './pages/DPWI/Reporting/Management_Report/Managementreport';
import Parliamentary from './pages/DPWI/Parliamentary/Parliamentary';
import Training from './pages/DPWI/Training/Training';
import Leadership from './pages/DPWI/Leadership/Leadership';
import Faqs from './pages/DPWI/FAQS/Faqs';
import Policies from './pages/DPWI/Policies/Policies';
import Expenditure from './pages/DPWI/Expenditure/Expenditure';
import BudgetMatters from './pages/DPWI/Budget_Matters/BudgetMatters';


import TrainingPmte from './pages/PMTE/Training/TrainingPmte';
import PoliciesPmte from './pages/PMTE/Policies/PoliciesPmte';
import ReportingPmte from './pages/PMTE/Reporting/ReportingPmte';

import AuditPmte from './pages/PMTE/Reporting/Audit/AuditPmte';
import ManReportPmte from './pages/PMTE/Reporting/Management_Report/ManReportPmte';
import FinStatement from './pages/PMTE/Reporting/Fin_Statement/FinStatement';


function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">

          <div className="row">
            <div className="col-12">
              <Header />
            </div>

            <div className="col-2 sidebar">
              <Sidebar />
            </div>

            <div className="col-10 pe-5" id="wrapper">
              <Section />
              <hr />
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='dpwi' element={<DPWI />}></Route>
                <Route path='pmte' element={<PMTE />}></Route>
                <Route path='dpwi_pmte' element={<DPWI_PMTE />}></Route>

                <Route path='budget_matters' element={<BudgetMatters />}></Route>
                <Route path='expenditure' element={<Expenditure />}></Route>
                <Route path='compliance_matters' element={<ComplianceMatters />}></Route>

                <Route path='reporting' element={<Reporting />}></Route>
                <Route path='audit' element={<Audit />}></Route>
                <Route path='man_report' element={<Managementreport />}></Route>

                <Route path='policies' element={<Policies />}></Route>
                <Route path='training' element={<Training />}></Route>                
                <Route path='parliamentary' element={<Parliamentary />}></Route>
                <Route path='faqs' element={<Faqs />}></Route>
                <Route path='leadership' element={<Leadership />}></Route>

                <Route path='reporting_pmte' element={<ReportingPmte />}></Route>
                <Route path='audit_pmte' element={<AuditPmte />}></Route>
                <Route path='man_report_pmte' element={<ManReportPmte />}></Route>
                <Route path='fin_statement_pmte' element={<FinStatement />}></Route>
                
                <Route path='policies_pmte' element={<PoliciesPmte />}></Route>
                <Route path='training_pmte' element={<TrainingPmte />}></Route>
              </Routes>

              
            </div>

            <div className="col-12">
              <Footer />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
