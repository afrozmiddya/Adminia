import { Plus, Download, Search, Filter } from 'lucide-react';

export function StudentTable() {
    const students = [
        { id: '1001', name: 'John Doe', course: 'B.Tech CS', rank: '1245', mobile: '+1 234-567-8900', email: 'john@example.com', session: '2024-2028' },
        { id: '1002', name: 'Jane Smith', course: 'B.Sc Math', rank: '890', mobile: '+1 234-567-8901', email: 'jane@example.com', session: '2024-2027' },
        { id: '1003', name: 'Michael Brown', course: 'B.A English', rank: '3421', mobile: '+1 234-567-8902', email: 'michael@example.com', session: '2024-2027' },
        { id: '1004', name: 'Emma Wilson', course: 'B.Com Fin', rank: '567', mobile: '+1 234-567-8903', email: 'emma@example.com', session: '2024-2027' },
        { id: '1005', name: 'William Jones', course: 'B.Tech Civil', rank: '2341', mobile: '+1 234-567-8904', email: 'william@example.com', session: '2024-2028' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-text">Students Directory</h1>
                    <p className="text-gray-500 mt-1">Manage all enrolled students data.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-background border border-border text-text rounded-lg font-medium hover:bg-gray-50 transition-colors">
                        <Download className="w-4 h-4" /> Export CSV
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm">
                        <Plus className="w-4 h-4" /> Add Student
                    </button>
                </div>
            </div>

            <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 border-b border-border flex flex-col sm:flex-row justify-between gap-4">
                    <div className="relative">
                        <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="Search students..." className="pl-10 pr-4 py-2 border border-border rounded-lg outline-none focus:border-primary transition-colors text-sm w-full sm:w-80" />
                    </div>
                    <button className="flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                        <Filter className="w-4 h-4" /> Filter
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-gray-50/50 text-gray-500 font-medium border-b border-border">
                            <tr>
                                <th className="px-6 py-4">Student ID</th>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Course</th>
                                <th className="px-6 py-4">Entrance Rank</th>
                                <th className="px-6 py-4">Mobile</th>
                                <th className="px-6 py-4">Email</th>
                                <th className="px-6 py-4">Session</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {students.map((student) => (
                                <tr key={student.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-text">{student.id}</td>
                                    <td className="px-6 py-4 text-text font-medium">{student.name}</td>
                                    <td className="px-6 py-4 text-gray-500">{student.course}</td>
                                    <td className="px-6 py-4 text-gray-500">{student.rank}</td>
                                    <td className="px-6 py-4 text-gray-500">{student.mobile}</td>
                                    <td className="px-6 py-4 text-gray-500">{student.email}</td>
                                    <td className="px-6 py-4 text-gray-500">{student.session}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
