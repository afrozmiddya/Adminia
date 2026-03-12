import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Users,
  FileText,
  CheckCircle,
  XCircle,
  Search,
  Filter,
} from "lucide-react";

/* ---------------------- Applications Table ---------------------- */

export function ApplicationsTable({ limit }) {
  const applications = [
    {
      id: "CG27-001",
      name: "John Doe",
      course: "B.Tech Computer Science",
      status: "Pending",
      date: "Oct 24, 2024",
    },
    {
      id: "CG27-002",
      name: "Jane Smith",
      course: "B.Sc Mathematics",
      status: "Under Review",
      date: "Oct 23, 2024",
    },
    {
      id: "CG27-003",
      name: "Michael Brown",
      course: "B.A English",
      status: "Approved",
      date: "Oct 22, 2024",
    },
    {
      id: "CG27-004",
      name: "Emma Wilson",
      course: "B.Com Finance",
      status: "Rejected",
      date: "Oct 21, 2024",
    },
    {
      id: "CG27-005",
      name: "William Jones",
      course: "B.Tech Civil",
      status: "Approved",
      date: "Oct 20, 2024",
    },
  ];

  const displayData = limit ? applications.slice(0, limit) : applications;

  const getStatusStyle = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-600";
      case "Rejected":
        return "bg-red-100 text-red-600";
      case "Under Review":
        return "bg-blue-100 text-blue-600";
      default:
        return "bg-yellow-100 text-yellow-600";
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
      {!limit && (
        <div className="p-4 border-b border-border flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search applications..."
              className="pl-10 pr-4 py-2 border border-border rounded-lg outline-none focus:border-primary transition-colors text-sm w-full sm:w-80"
            />
          </div>

          <button className="flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-gray-50 text-gray-500 font-medium border-b border-border">
            <tr>
              <th className="px-6 py-4">Application ID</th>
              <th className="px-6 py-4">Student Name</th>
              <th className="px-6 py-4">Course</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {displayData.map((app) => (
              <tr
                key={app.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 font-medium">{app.id}</td>
                <td className="px-6 py-4">{app.name}</td>
                <td className="px-6 py-4 text-gray-500">{app.course}</td>

                <td className="px-6 py-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                      app.status
                    )}`}
                  >
                    {app.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-gray-500">{app.date}</td>

                <td className="px-6 py-4 text-right">
                  <Link
                    to={`/admin/applications/${app.id}`}
                    className="text-primary font-medium hover:text-primary/80"
                  >
                    Review
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------------------- Admin Dashboard ---------------------- */

export function AdminDashboard() {
  const [phase1, setPhase1] = useState(false);
  const [phase2, setPhase2] = useState(false);

  const stats = [
    {
      name: "Total Applications",
      value: "1,248",
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      name: "Under Review",
      value: "142",
      icon: FileText,
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    },
    {
      name: "Approved",
      value: "892",
      icon: CheckCircle,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      name: "Rejected",
      value: "214",
      icon: XCircle,
      color: "text-red-600",
      bg: "bg-red-100",
    },
  ];

  return (
    <div className="space-y-8">

      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Overview of all admission activities.
        </p>
      </div>

      {/* Phase Control */}
      <div className="bg-white border rounded-xl p-6 shadow-sm flex gap-10">

        {/* Phase 1 */}
        <div className="flex items-center gap-4">
          <span className="font-medium">Phase 1(Application)</span>

          <button
            onClick={() => setPhase1(!phase1)}
            className={`px-4 py-2 rounded-lg text-white text-sm font-medium ${
              phase1 ? "bg-red-500" : "bg-green-600"
            }`}
          >
            {phase1 ? "Deactivate" : "Activate"}
          </button>

          <span className="text-sm text-gray-500">
            {phase1 ? "Active" : "Inactive"}
          </span>
        </div>

        {/* Phase 2 */}
        <div className="flex items-center gap-4">
          <span className="font-medium">Phase 2(Documentation)</span>

          <button
            onClick={() => setPhase2(!phase2)}
            className={`px-4 py-2 rounded-lg text-white text-sm font-medium ${
              phase2 ? "bg-red-500" : "bg-green-600"
            }`}
          >
            {phase2 ? "Deactivate" : "Activate"}
          </button>

          <span className="text-sm text-gray-500">
            {phase2 ? "Active" : "Inactive"}
          </span>
        </div>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-card border border-border rounded-xl p-6 shadow-sm flex items-center justify-between"
          >
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">
                {stat.name}
              </p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>

            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Applications */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Recent Applications</h2>

          <Link
            to="/admin/applications"
            className="text-sm font-medium text-primary hover:text-primary/80"
          >
            View All
          </Link>
        </div>

        <ApplicationsTable limit={5} />
      </div>

    </div>
  );
}