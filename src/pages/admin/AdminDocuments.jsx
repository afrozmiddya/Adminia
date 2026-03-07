import { Search, Filter, CheckCircle, XCircle, Download } from 'lucide-react';

export function AdminDocuments() {
    const documentsList = [
        { student: 'John Doe', doc10th: 'Verified', doc12th: 'Verified', idProof: 'Pending', photo: 'Pending' },
        { student: 'Jane Smith', doc10th: 'Verified', doc12th: 'Verified', idProof: 'Verified', photo: 'Verified' },
        { student: 'Michael Brown', doc10th: 'Pending', doc12th: 'Pending', idProof: 'Pending', photo: 'Pending' },
        { student: 'Emma Wilson', doc10th: 'Verified', doc12th: 'Rejected', idProof: 'Verified', photo: 'Verified' },
    ];

    const renderStatus = (status) => {
        if (status === 'Verified') return <span className="inline-flex items-center w-2 h-2 rounded-full bg-success mr-2" title="Verified"></span>;
        if (status === 'Rejected') return <span className="inline-flex items-center w-2 h-2 rounded-full bg-danger mr-2" title="Rejected"></span>;
        return <span className="inline-flex items-center w-2 h-2 rounded-full bg-warning mr-2" title="Pending"></span>;
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-text">Document Verification</h1>
                    <p className="text-gray-500 mt-1">Review applicant uploaded documents.</p>
                </div>
            </div>

            <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 border-b border-border flex flex-col sm:flex-row justify-between gap-4">
                    <div className="relative">
                        <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="Search by student name..." className="pl-10 pr-4 py-2 border border-border rounded-lg outline-none focus:border-primary transition-colors text-sm w-full sm:w-80" />
                    </div>
                    <button className="flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                        <Filter className="w-4 h-4" /> Filter Pending
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-gray-50/50 text-gray-500 font-medium border-b border-border">
                            <tr>
                                <th className="px-6 py-4">Student</th>
                                <th className="px-6 py-4">10th Marksheet</th>
                                <th className="px-6 py-4">12th Marksheet</th>
                                <th className="px-6 py-4">ID Proof</th>
                                <th className="px-6 py-4">Passport Photo</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {documentsList.map((row, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-text">{row.student}</td>
                                    <td className="px-6 py-4 text-text">{renderStatus(row.doc10th)}{row.doc10th}</td>
                                    <td className="px-6 py-4 text-text">{renderStatus(row.doc12th)}{row.doc12th}</td>
                                    <td className="px-6 py-4 text-text">{renderStatus(row.idProof)}{row.idProof}</td>
                                    <td className="px-6 py-4 text-text">{renderStatus(row.photo)}{row.photo}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-1.5 text-gray-500 hover:text-primary hover:bg-primary/10 rounded transition-colors" title="Download All">
                                                <Download className="w-4 h-4" />
                                            </button>
                                            <button className="p-1.5 text-gray-500 hover:text-success hover:bg-success/10 rounded transition-colors" title="Approve Pending">
                                                <CheckCircle className="w-4 h-4" />
                                            </button>
                                            <button className="p-1.5 text-gray-500 hover:text-danger hover:bg-danger/10 rounded transition-colors" title="Reject Pending">
                                                <XCircle className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
