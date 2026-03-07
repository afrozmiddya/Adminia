import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LayoutDashboard, FileText, UploadCloud, Users, LogOut } from 'lucide-react';

import LandingLayout from './components/layouts/LandingLayout';
import DashboardLayout from './components/layouts/DashboardLayout';

import {
  LandingPage,
  LoginPage,
  RegisterPage,
  StudentDashboard,
  ApplicationForm,
  StudentDocuments,
  AdminDashboard,
  ApplicationsTable,
  ApplicationReview,
  StudentTable,
  AdminDocuments
} from './pages';

const studentNavigation = [
  { name: 'Dashboard', href: '/student', icon: LayoutDashboard },
  { name: 'My Application', href: '/student/application', icon: FileText },
  { name: 'Documents', href: '/student/documents', icon: UploadCloud },
  { name: 'Logout', href: '/', icon: LogOut },
];

const adminNavigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Applications', href: '/admin/applications', icon: FileText },
  { name: 'Students', href: '/admin/students', icon: Users },
  { name: 'Documents', href: '/admin/documents', icon: UploadCloud },
  { name: 'Logout', href: '/', icon: LogOut },
];

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* Student Portal */}
        <Route path="/student" element={<DashboardLayout navigation={studentNavigation} title="Student Portal" />}>
          <Route index element={<StudentDashboard />} />
          <Route path="application" element={<ApplicationForm />} />
          <Route path="documents" element={<StudentDocuments />} />
        </Route>

        {/* Admin Panel */}
        <Route path="/admin" element={<DashboardLayout navigation={adminNavigation} title="Admin Panel" />}>
          <Route index element={<AdminDashboard />} />
          <Route path="applications" element={<ApplicationsTable />} />
          <Route path="applications/:id" element={<ApplicationReview />} />
          <Route path="students" element={<StudentTable />} />
          <Route path="documents" element={<AdminDocuments />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
