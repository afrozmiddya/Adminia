import { Link } from 'react-router-dom';
import { Users, FileText, CheckCircle, XCircle, Search, Filter } from 'lucide-react';

// Common table component used in Dashboard and Applications page
export function ApplicationsTable({ limit }) {
    const applications = [
        { id: 'CG27-001', name: 'John Doe', course: 'B.Tech Computer Science', status: 'Pending', date: 'Oct 24, 2024' },
        { id: 'CG27-002', name: 'Jane Smith', course: 'B.Sc Mathematics', status: 'Under Review', date: 'Oct 23, 2024' },
        { id: 'CG27-003', name: 'Michael Brown', course: 'B.A English', status: 'Approved', date: 'Oct 22, 2024' },
        { id: 'CG27-004', name: 'Emma Wilson', course: 'B.Com Finance', status: 'Rejected', date: 'Oct 21, 2024' },
        { id: 'CG27-005', name: 'William Jones', course: 'B.Tech Civil', status: 'Approved', date: 'Oct 20, 2024' },
    ];

    const displayData = limit ? applications.slice(0, limit) : applications;

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Approved': return 'bg-success/10 text-success';
            case 'Rejected': return 'bg-danger/10 text-danger';
            case 'Under Review': return 'bg-primary/10 text-primary';
            default: return 'bg-warning/10 text-warning';
        }
    };

    return (
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
            {!limit && (
                <div className="p-4 border-b border-border flex flex-col sm:flex-row justify-between gap-4">
                    <div className="relative">
                        <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="Search applications..." className="pl-10 pr-4 py-2 border border-border rounded-lg outline-none focus:border-primary transition-colors text-sm w-full sm:w-80" />
                    </div>
                    <button className="flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                        <Filter className="w-4 h-4" /> Filter
                    </button>
                </div>
            )}
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-gray-50/50 text-gray-500 font-medium border-b border-border">
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
                            <tr key={app.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4 font-medium text-text">{app.id}</td>
                                <td className="px-6 py-4 text-text">{app.name}</td>
                                <td className="px-6 py-4 text-gray-500">{app.course}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusStyle(app.status)}`}>
                                        {app.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-500">{app.date}</td>
                                <td className="px-6 py-4 text-right">
                                    <Link to={`/admin/applications/${app.id}`} className="text-primary font-medium hover:text-primary/80 transition-colors">
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

export function AdminDashboard() {
    const stats = [
        { name: 'Total Applications', value: '1,248', icon: Users, color: 'text-primary', bg: 'bg-primary/10' },
        { name: 'Under Review', value: '142', icon: FileText, color: 'text-warning', bg: 'bg-warning/10' },
        { name: 'Approved', value: '892', icon: CheckCircle, color: 'text-success', bg: 'bg-success/10' },
        { name: 'Rejected', value: '214', icon: XCircle, color: 'text-danger', bg: 'bg-danger/10' },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-text">Admin Dashboard</h1>
                <p className="text-gray-500 mt-1">Overview of all admission activities.</p>
            </div>

            {/* Analytics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-card border border-border rounded-xl p-6 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">{stat.name}</p>
                            <p className="text-2xl font-bold text-text">{stat.value}</p>
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
                    <h2 className="text-lg font-bold text-text">Recent Applications</h2>
                    <Link to="/admin/applications" className="text-sm font-medium text-primary hover:text-primary/80">View All</Link>
                </div>
                <ApplicationsTable limit={5} />
            </div>
        </div>
    );
}
