import { Route, Routes } from "react-router-dom";
// Pages
// # Normal Pages:
import HomePage from "./Pages/GlobalPages/HomePage";
import FindJobPage from "./Pages/JobsPages/FindJobPage";
import JobDetailsPage from "./Pages/JobsPages/JobDetailsPage";
import FindEmployerPage from "./Pages/EmployersPages/FindEmployerPage";
import EmployerDetailsPage from "./Pages/EmployersPages/EmployerDetailsPage";
import FindCandidatePage from "./Pages/CandidatesPages/FindCandidatePage";
import JobAlertsPage from "./Pages/GlobalPages/JobAlertsPage";
import MyJobsPage from "./Pages/GlobalPages/MyJobsPage";
import EmployersPage from "./Pages/GlobalPages/EmployersPage";
import CandidatesPage from "./Pages/GlobalPages/CandidatesPage";
import ApplicationsPage from "./Pages/GlobalPages/ApplicationsPage";
import PricingPlansPage from "./Pages/GlobalPages/PricingPlansPage";
import CustomerSupportPage from "./Pages/GlobalPages/CustomerSupportPage";
// Inner Pages
import NotFoundPage from "./Pages/InnerPages/NotFoundPage";
import TermsAndConditionsPage from "./Pages/InnerPages/TermsAndConditionsPage";
import ComingSoonPage from "./Pages/InnerPages/ComingSoonPage";
import FaqsPage from "./Pages/InnerPages/FaqsPage";
import ContactPage from "./Pages/InnerPages/ContactPage";
import AboutPage from "./Pages/InnerPages/AboutPage";
import BlogsPage from "./Pages/InnerPages/Blogs/BlogsPage";
import BlogDetailsPage from "./Pages/InnerPages/Blogs/BlogDetailsPage";
// # Candidate Pages:
import CandidateDetailsPage from "./Pages/CandidatesPages/CandidateDetailsPage";
import CandidateOverviewPage from "./Pages/DashboardsPages/CandidateDashboard/Pages/CandidateOverviewPage";
import CandidateAppliedJobsPage from "./Pages/DashboardsPages/CandidateDashboard/Pages/CandidateAppliedJobsPage";
import CandidateFavoriteJobsPage from "./Pages/DashboardsPages/CandidateDashboard/Pages/CandidateFavoriteJobsPage";
import CandidateJobAlertPage from "./Pages/DashboardsPages/CandidateDashboard/Pages/CandidateJobAlertPage";
import CandidateSettingsPage from "./Pages/DashboardsPages/CandidateDashboard/Pages/CandidateSettingsPage";
// # Employer Pages:
import EmployerOverviewPage from "./Pages/DashboardsPages/EmployerDashboard/Pages/EmployerOverviewPage";
import EmployerPostJobPage from "./Pages/DashboardsPages/EmployerDashboard/Pages/EmployerPostJobPage";
import EmployerMyJobsPage from "./Pages/DashboardsPages/EmployerDashboard/Pages/EmployerMyJobsPage";
import EmployerSavedCandidatePage from "./Pages/DashboardsPages/EmployerDashboard/Pages/EmployerSavedCandidatePage";
import EmployerPlansAndBillingPage from "./Pages/DashboardsPages/EmployerDashboard/Pages/EmployerPlansAndBillingPage";
import EmployerAllCompaniesPage from "./Pages/DashboardsPages/EmployerDashboard/Pages/EmployerAllCompaniesPage";
import EmployerSettingsPage from "./Pages/DashboardsPages/EmployerDashboard/Pages/EmployerSettingsPage";
import EmployerCompanyInfoPage from "./Pages/DashboardsPages/EmployerDashboard/SetupPages/EmployerCompanyInfoPage";
import EmployerFoundingInfoPage from "./Pages/DashboardsPages/EmployerDashboard/SetupPages/EmployerFoundingInfoPage";
import EmployerSocialMediaProfilePage from "./Pages/DashboardsPages/EmployerDashboard/SetupPages/EmployerSocialMediaProfilePage";
import EmployerContactPage from "./Pages/DashboardsPages/EmployerDashboard/SetupPages/EmployerContactPage";
// # Auth Pages:
import SigninPage from "./Pages/AuthPages/SigninPage";
import SignupPage from "./Pages/AuthPages/SignupPage";
import ForgetPasswordPage from "./Pages/AuthPages/ForgetPasswordPage";
import ResetPasswordPage from "./Pages/AuthPages/ResetPasswordPage";
import EmailVerificationPage from "./Pages/AuthPages/EmailVerificationPage";
// Modals
import ApplyModal from "./Components/Modals/ApplyModal";
import AddCvModal from "./Components/Modals/AddCvModal";
import FiltersModal from "./Components/Modals/FiltersModal/FiltersModal";
import CandidateModal from "./Components/Modals/CandidateModal/CandidateModal";
// Layouts
import MainLayout from "./Layouts/MainLayout";
import AuthLayout from "./Layouts/AuthLayout";
import CandidateDashboardLayout from "./Layouts/CandidateDashboardLayout";
import EmployerDashboardSetupLayout from "./Layouts/EmployerDashboardSetupLayout";
import EmployerDashboardLayout from "./Layouts/EmployerDashboardLayout";
import InnerPagesLayout from "./Layouts/InnerPagesLayout";

function App() {

  return (
    <div className="App text-app-text">
      {/* Routes */}
      <Routes>

        {/* === Main Layout === */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-jobs" element={<MyJobsPage />} />
          <Route path="/job-alerts" element={<JobAlertsPage />} />
          <Route path="/employers" element={<EmployersPage />} />
          <Route path="/candidates" element={<CandidatesPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/pricing-plans" element={<PricingPlansPage />} />
          <Route path="/customer-support" element={<CustomerSupportPage />} />
          {/* Jobs */}
          <Route path="/find-job" element={<FindJobPage />}>
            <Route path="/find-job/filters" element={<FiltersModal />} />
          </Route>
          <Route path="/find-job/:jobId" element={<JobDetailsPage />}>
            <Route path="/find-job/:jobId/apply" element={<ApplyModal />} />
          </Route>
          {/* Employer */}
          <Route path="/find-employer" element={<FindEmployerPage />} />
          <Route path="/find-employer/:employerId" element={<EmployerDetailsPage />} />
          {/* Candidate */}
          <Route path="/find-candidate" element={<FindCandidatePage />}>
            <Route path="/find-candidate/:candidateId" element={<CandidateModal />} />
          </Route>
        </Route>

        {/* === Auth Layout === */}
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/email-verification" element={<EmailVerificationPage />} />
        </Route>

        {/* === Candidate Dashboard Layout === */}
        <Route element={<CandidateDashboardLayout />}>
          <Route path="/candidate-dashboard" element={<CandidateOverviewPage />} />
          <Route path="/candidate-dashboard/applied-jobs" element={<CandidateAppliedJobsPage />} />
          <Route path="/candidate-dashboard/favorite-jobs" element={<CandidateFavoriteJobsPage />} />
          <Route path="/candidate-dashboard/job-alert" element={<CandidateJobAlertPage />} />
          <Route path="/candidate-dashboard/settings" element={<CandidateSettingsPage />}>
            <Route path="/candidate-dashboard/settings/add-cv" element={<AddCvModal />} />
          </Route>
        </Route>

        {/* === Employer Dashboard Setup Layout === */}
        <Route element={<EmployerDashboardSetupLayout />}>
          <Route path="/employer-dashboard/setup" element={<EmployerCompanyInfoPage />} />
          <Route path="/employer-dashboard/setup/founding-info" element={<EmployerFoundingInfoPage />} />
          <Route path="/employer-dashboard/setup/social-media-profile" element={<EmployerSocialMediaProfilePage />} />
          <Route path="/employer-dashboard/setup/contact" element={<EmployerContactPage />} />
        </Route>

        {/* === Employer Dashboard Layout === */}
        <Route element={<EmployerDashboardLayout />}>
          <Route path="/employer-dashboard" element={<EmployerOverviewPage />} />
          <Route path="/employer-dashboard/post-job" element={<EmployerPostJobPage />} />
          <Route path="/employer-dashboard/my-jobs" element={<EmployerMyJobsPage />} />
          <Route path="/employer-dashboard/saved-candidate" element={<EmployerSavedCandidatePage />} />
          <Route path="/employer-dashboard/plans-and-billing" element={<EmployerPlansAndBillingPage />} />
          <Route path="/employer-dashboard/all-companies" element={<EmployerAllCompaniesPage />} />
          <Route path="/employer-dashboard/settings" element={<EmployerSettingsPage />} />
        </Route>

        {/* Inner Pages */}
        <Route element={<InnerPagesLayout />}>
          <Route path="*" element=<NotFoundPage /> />
          <Route path="/terms-and-conditions" element=<TermsAndConditionsPage /> />
          <Route path="/coming-soon" element=<ComingSoonPage /> />
          <Route path="/faqs" element=<FaqsPage /> />
          <Route path="/contact" element=<ContactPage /> />
          <Route path="/about" element=<AboutPage /> />
          <Route path="/blogs" element=<BlogsPage /> />
          <Route path="/blogs/:blogId" element=<BlogDetailsPage /> />
        </Route>
      </Routes>
    </div>
  )
}

export default App;