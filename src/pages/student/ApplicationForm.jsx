import { useState } from 'react';
import { Check } from 'lucide-react';

export function ApplicationForm() {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        { id: 1, name: 'Admission Details' },
        { id: 2, name: 'Personal Information' },
        { id: 3, name: 'Identity & Citizenship' },
        { id: 4, name: 'Review' },
    ];

    const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, 4));
    const handlePrev = () => setCurrentStep(prev => Math.max(prev - 1, 1));

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-text">New Application</h1>
                <p className="text-gray-500 mt-1">Please fill out all the steps carefully.</p>
            </div>

            {/* Stepper Header */}
            <div className="bg-card border border-border p-4 rounded-xl shadow-sm overflow-x-auto">
                <div className="flex items-center justify-between min-w-max gap-4 px-2">
                    {steps.map((step, index) => (
                        <div key={step.id} className="flex items-center">
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full font-medium ${currentStep > step.id ? 'bg-success text-white' :
                                    currentStep === step.id ? 'bg-primary text-white' :
                                        'bg-gray-100 text-gray-400'
                                }`}>
                                {currentStep > step.id ? <Check className="w-5 h-5" /> : step.id}
                            </div>
                            <span className={`ml-3 font-medium ${currentStep === step.id ? 'text-primary' : currentStep > step.id ? 'text-text' : 'text-gray-400'}`}>
                                {step.name}
                            </span>
                            {index < steps.length - 1 && (
                                <div className={`w-8 sm:w-16 h-px mx-4 ${currentStep > step.id ? 'bg-success' : 'bg-gray-200'}`} />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Form Content */}
            <div className="bg-card border border-border rounded-xl p-6 lg:p-8 shadow-sm">
                <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>

                    {currentStep === 1 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-text mb-6 border-b pb-2">Admission Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {['Session', 'College District', 'College Name', 'Course Under By', 'Admission Type', 'Admission Category', 'Entrance Test', 'Course', 'Stream', 'Entrance Roll No', 'Entrance Rank'].map(field => (
                                    <div key={field}>
                                        <label className="block text-sm font-medium text-text mb-1.5">{field}</label>
                                        <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" placeholder={`Enter ${field}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-text mb-6 border-b pb-2">Personal Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {['Student Name', 'Gender', 'Date of Birth', 'Mobile', 'Email', 'Father\'s Name', 'Mother\'s Name'].map(field => (
                                    <div key={field}>
                                        <label className="block text-sm font-medium text-text mb-1.5">{field}</label>
                                        <input type={field === 'Date of Birth' ? 'date' : 'text'} className="w-full px-4 py-2.5 rounded-xl border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" placeholder={`Enter ${field}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-text mb-6 border-b pb-2">Identity & Citizenship</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {['Residential Status', 'Country', 'Nationality', 'ABC / APAAR ID', 'Aadhaar Number'].map(field => (
                                    <div key={field}>
                                        <label className="block text-sm font-medium text-text mb-1.5">{field}</label>
                                        <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" placeholder={`Enter ${field}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className="space-y-6 text-center py-8">
                            <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-4">
                                <Check className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-text">Review Application</h2>
                            <p className="text-gray-500 max-w-md mx-auto">Please ensure all provided details are correct. Once submitted, you cannot edit the application until reviewed.</p>
                        </div>
                    )}

                    {/* Form Actions */}
                    <div className="flex justify-between items-center pt-8 mt-8 border-t border-border">
                        <button
                            type="button"
                            onClick={handlePrev}
                            className={`px-6 py-2.5 rounded-xl font-medium border border-border hover:bg-gray-50 transition-colors ${currentStep === 1 ? 'opacity-0 pointer-events-none' : ''}`}
                        >
                            Back
                        </button>

                        {currentStep < 4 ? (
                            <button type="submit" className="px-6 py-2.5 rounded-xl font-medium bg-primary text-white hover:bg-primary/90 transition-colors shadow-sm">
                                Next Step
                            </button>
                        ) : (
                            <button type="button" className="px-8 py-2.5 rounded-xl font-medium bg-success text-white hover:bg-success/90 transition-colors shadow-sm">
                                Submit Application
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
