import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, File, CheckCircle, XCircle, Download, ExternalLink } from 'lucide-react';

export function ApplicationReview() {
    const { id } = useParams();

    // Mock data for the review page
    const studentInfo = [
        { label: 'Full Name', value: 'John Doe' },
        { label: 'Date of Birth', value: '15 May 2004' },
        { label: 'Gender', value: 'Male' },
        { label: 'Mobile', value: '+1 234 567 8900' },
        { label: 'Email', value: 'johndoe@example.com' },
        { label: 'Course Applied', value: 'B.Tech Computer Science' },
        { label: 'Entrance Rank', value: '1,245' },
        { label: 'Nationality', value: 'Indian' },
        { label: 'Aadhaar Number', value: 'XXXX XXXX 1234' },
    ];

    const documents = [
        { name: '10th Marksheet', status: 'Pending', url: '#' },
        { name: '12th Marksheet', status: 'Pending', url: '#' },
        { name: 'ID Proof', status: 'Verified', url: '#' },
        { name: 'Passport Photo', status: 'Verified', url: '#' },
    ];

    return (
        <div className="max-w-6xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link to="/admin/applications" className="p-2 border border-border rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-text">Review Application</h1>
                        <p className="text-gray-500 mt-1">Application ID: <span className="text-text font-medium">{id || 'CG27-001'}</span></p>
                    </div>
                </div>
                <div className="px-3 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
                    Under Review
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Student Info */}
                <div className="col-span-1 lg:col-span-2 space-y-8">
                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-bold text-text mb-6 pb-2 border-b border-border">Applicant Information</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                            {studentInfo.map((info) => (
                                <div key={info.label}>
                                    <dt className="text-sm font-medium text-gray-500 mb-1">{info.label}</dt>
                                    <dd className="text-base font-semibold text-text">{info.value}</dd>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-bold text-text mb-4 pb-2 border-b border-border">Academic History</h2>
                        <div className="space-y-4">
                            <div className="p-4 border border-border rounded-lg">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold text-text">12th Grade / HSC</h3>
                                    <span className="text-primary font-bold">89.5%</span>
                                </div>
                                <p className="text-sm text-gray-500">State Board • Science Stream • 2022</p>
                            </div>
                            <div className="p-4 border border-border rounded-lg">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold text-text">10th Grade / SSC</h3>
                                    <span className="text-primary font-bold">92.0%</span>
                                </div>
                                <p className="text-sm text-gray-500">State Board • 2020</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Documents & Action */}
                <div className="space-y-8">
                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-bold text-text mb-4 pb-2 border-b border-border">Uploaded Documents</h2>
                        <div className="space-y-4">
                            {documents.map((doc) => (
                                <div key={doc.name} className="flex flex-col gap-2 p-3 border border-border rounded-lg">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <File className="w-5 h-5 text-gray-400" />
                                            <span className="text-sm font-medium text-text">{doc.name}</span>
                                        </div>
                                        {doc.status === 'Verified' ? (
                                            <CheckCircle className="w-4 h-4 text-success" />
                                        ) : (
                                            <span className="text-xs bg-warning/10 text-warning px-2 py-0.5 rounded-full font-medium">Pending</span>
                                        )}
                                    </div>
                                    <div className="flex gap-2 mt-2">
                                        <button className="flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-medium border border-border rounded bg-background hover:bg-gray-50 text-text">
                                            <ExternalLink className="w-3.5 h-3.5" /> View
                                        </button>
                                        <button className="flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-medium border border-border rounded bg-background hover:bg-gray-50 text-text">
                                            <Download className="w-3.5 h-3.5" /> DL
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-bold text-text mb-4 pb-2 border-b border-border">Final Decision</h2>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-text mb-2">Admin Comments</label>
                            <textarea
                                className="w-full px-3 py-2 border border-border rounded-lg outline-none focus:border-primary resize-none"
                                rows="4"
                                placeholder="Enter rejection reason or approval notes..."
                            ></textarea>
                        </div>

                        <div className="flex gap-4">
                            <button className="flex-1 py-2.5 rounded-lg font-semibold bg-danger text-white flex items-center justify-center gap-2 hover:bg-danger/90 transition-colors shadow-sm">
                                <XCircle className="w-5 h-5" />
                                Reject
                            </button>
                            <button className="flex-1 py-2.5 rounded-lg font-semibold bg-success text-white flex items-center justify-center gap-2 hover:bg-success/90 transition-colors shadow-sm">
                                <CheckCircle className="w-5 h-5" />
                                Approve
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
