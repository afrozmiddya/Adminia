import { Activity, FileText, Hash, Award, CheckCircle } from 'lucide-react';

export function StudentDashboard() {
    const stats = [
        { name: 'Application Status', value: 'Under Review', icon: Activity, color: 'text-primary', bg: 'bg-primary/10' },
        { name: 'Documents Uploaded', value: '3 / 5 Documents', icon: FileText, color: 'text-secondary', bg: 'bg-secondary/10' },
        { name: 'Application ID', value: 'CG27-001', icon: Hash, color: 'text-purple-600', bg: 'bg-purple-100' },
        { name: 'Admission Status', value: 'Pending', icon: Award, color: 'text-warning', bg: 'bg-warning/10' },
    ];

    const steps = [
        { id: 1, name: 'Registration', status: 'complete' },
        { id: 2, name: 'Documents', status: 'complete' },
        { id: 3, name: 'Review', status: 'current' },
        { id: 4, name: 'Decision', status: 'upcoming' },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-text">Welcome, Student Name</h1>
                <p className="text-gray-500 mt-1">Track your admission progress here.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-card border border-border rounded-xl p-6 shadow-sm flex items-start gap-4 h-full">
                        <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} flex-shrink-0`}>
                            <stat.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">{stat.name}</p>
                            <p className="text-lg font-bold text-text">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Progress Stepper */}
            <div className="bg-card border border-border rounded-xl p-6 lg:p-8 shadow-sm">
                <h2 className="text-lg font-bold text-text mb-6">Application Progress</h2>
                <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2" />
                    <div className="absolute top-1/2 left-0 w-1/2 h-1 bg-primary -translate-y-1/2 transition-all duration-500" />

                    <div className="relative flex justify-between">
                        {steps.map((step) => (
                            <div key={step.id} className="flex flex-col items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-card relative z-10 transition-colors ${step.status === 'complete' ? 'bg-success text-white' :
                                        step.status === 'current' ? 'bg-primary text-white' :
                                            'bg-gray-200 text-gray-400'
                                    }`}>
                                    {step.status === 'complete' ? (
                                        <CheckCircle className="w-5 h-5" />
                                    ) : (
                                        <span className="text-sm font-bold">{step.id}</span>
                                    )}
                                </div>
                                <span className={`mt-3 text-sm font-medium ${step.status === 'current' ? 'text-primary' :
                                        step.status === 'complete' ? 'text-text' :
                                            'text-gray-400'
                                    }`}>
                                    {step.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
