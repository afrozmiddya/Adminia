import { Upload, File, CheckCircle, Clock, AlertCircle } from 'lucide-react';

export function StudentDocuments() {
    const documents = [
        { name: '10th Marksheet', status: 'Approved', type: 'Required' },
        { name: '12th Marksheet', status: 'Under Review', type: 'Required' },
        { name: 'ID Proof', status: 'Pending', type: 'Required' },
        { name: 'Passport Photo', status: 'Rejected', type: 'Required', message: 'Image is too blurry' },
    ];

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Approved':
                return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-success/10 text-success"><CheckCircle className="w-3.5 h-3.5" /> {status}</span>;
            case 'Under Review':
                return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary"><Clock className="w-3.5 h-3.5" /> {status}</span>;
            case 'Rejected':
                return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-danger/10 text-danger"><AlertCircle className="w-3.5 h-3.5" /> {status}</span>;
            default:
                return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600"><File className="w-3.5 h-3.5" /> {status}</span>;
        }
    };

    return (
        <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-text">Document Center</h1>
                    <p className="text-gray-500 mt-1">Upload and manage your required admission documents.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {documents.map((doc) => (
                    <div key={doc.name} className={`bg-card border rounded-xl p-6 shadow-sm transition-colors ${doc.status === 'Rejected' ? 'border-danger/30 bg-danger/5' : 'border-border'}`}>
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className={`p-3 rounded-lg flex-shrink-0 ${doc.status === 'Approved' ? 'bg-success/10 text-success' :
                                        doc.status === 'Under Review' ? 'bg-primary/10 text-primary' :
                                            doc.status === 'Rejected' ? 'bg-danger/10 text-danger' :
                                                'bg-gray-100 text-gray-500'
                                    }`}>
                                    <File className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-text">{doc.name}</h3>
                                    <span className="text-xs text-gray-500">{doc.type}</span>
                                </div>
                            </div>
                            {getStatusBadge(doc.status)}
                        </div>

                        {doc.status === 'Rejected' && (
                            <p className="text-sm text-danger mb-4 font-medium flex items-center"><AlertCircle className="w-4 h-4 mr-1" /> {doc.message}</p>
                        )}

                        <div className={`border-2 border-dashed rounded-lg p-6 text-center ${doc.status === 'Approved' ? 'border-success/20 bg-success/5 pointer-events-none' : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50 cursor-pointer transition-colors'}`}>
                            {doc.status !== 'Approved' ? (
                                <>
                                    <Upload className="w-6 h-6 mx-auto text-gray-400 mb-2" />
                                    <p className="text-sm text-text font-medium">Click to upload or drag & drop</p>
                                    <p className="text-xs text-gray-500 mt-1">PDF, JPG or PNG (max. 5MB)</p>
                                </>
                            ) : (
                                <>
                                    <CheckCircle className="w-6 h-6 mx-auto text-success mb-2" />
                                    <p className="text-sm text-success font-medium">Document verified successfully</p>
                                </>
                            )}
                        </div>

                        {doc.status !== 'Approved' && (
                            <button className={`w-full mt-4 py-2.5 rounded-lg text-sm font-medium border transition-colors ${doc.status === 'Rejected' ? 'border-danger text-danger hover:bg-danger hover:text-white' : 'border-border text-text hover:bg-gray-50'}`}>
                                {doc.status === 'Rejected' ? 'Re-Upload Document' : 'Select File'}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
