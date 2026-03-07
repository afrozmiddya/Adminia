import { Link } from 'react-router-dom';
import { FileText, UploadCloud, CheckCircle, ArrowRight, UserPlus, LogIn, ChevronRight } from 'lucide-react';

export function LandingPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-background py-20 lg:py-32">
                <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-[48px] font-bold text-text leading-tight mb-6">
                                Student Admission <br />
                                <span className="text-primary">Made Simple</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                                A modern platform to manage your entire admission journey from application to approval.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/register" className="inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-medium border-2 rounded-xl text-white bg-primary hover:bg-primary/90 transition-all shadow-sm">
                                    Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                                <Link to="/admin" className="inline-flex items-center justify-center px-6 py-3.5 border border-gray-300 rounded-xl text-base font-medium text-text bg-white hover:bg-gray-50 transition-all shadow-sm">
                                    Admin Portal
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-2xl bg-card border border-border overflow-hidden shadow-2xl">
                                <div className="h-8 bg-gray-50 border-b border-border flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="p-6 bg-background space-y-4">
                                    <div className="flex gap-4">
                                        <div className="w-1/4 h-24 bg-card rounded-lg border border-border p-4">
                                            <div className="w-8 h-8 rounded-full bg-primary/20 mb-3" />
                                            <div className="w-16 h-2 bg-gray-200 rounded" />
                                        </div>
                                        <div className="w-1/4 h-24 bg-card rounded-lg border border-border p-4">
                                            <div className="w-8 h-8 rounded-full bg-success/20 mb-3" />
                                            <div className="w-16 h-2 bg-gray-200 rounded" />
                                        </div>
                                        <div className="flex-1 h-24 bg-card rounded-lg border border-border p-4" />
                                    </div>
                                    <div className="h-48 bg-card rounded-lg border border-border p-4">
                                        <div className="w-full h-full border border-dashed border-gray-200 rounded flex items-center justify-center">
                                            <span className="text-gray-400 font-medium">Dashboard Preview</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-[32px] font-bold text-text mb-4">Powerful & Easy to Use</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Everything you need to complete your admission process efficiently.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-[20px] font-semibold text-text mb-3">Online Application</h3>
                            <p className="text-gray-600 leading-relaxed">Submit admission applications digitally with ease and minimal friction.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                                <UploadCloud className="w-6 h-6" />
                            </div>
                            <h3 className="text-[20px] font-semibold text-text mb-3">Upload Documents</h3>
                            <p className="text-gray-600 leading-relaxed">Securely upload documents and certificates for instant verification.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-[20px] font-semibold text-text mb-3">Track Status</h3>
                            <p className="text-gray-600 leading-relaxed">Track admission progress in real time directly from your dashboard.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Admission Process Section */}
            <section id="process" className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-[32px] font-bold text-text mb-4">How It Works</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Simple Steps to Get Admitted</p>
                    </div>

                    <div className="relative">
                        {/* Line connecting steps */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 z-0" />

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
                            {[
                                { step: 1, title: 'Register Account', icon: UserPlus },
                                { step: 2, title: 'Fill Application', icon: FileText },
                                { step: 3, title: 'Upload Documents', icon: UploadCloud },
                                { step: 4, title: 'Application Review', icon: CheckCircle },
                                { step: 5, title: 'Admission Decision', icon: CheckCircle },
                            ].map((item, index) => (
                                <div key={item.step} className="flex flex-col flex-1 items-center bg-card lg:bg-transparent p-6 lg:p-0 rounded-xl border border-border lg:border-none shadow-sm lg:shadow-none">
                                    <div className="w-16 h-16 rounded-full bg-white border-4 border-background flex items-center justify-center shadow-sm text-primary font-bold z-10 mb-4 lg:mb-6">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div className="text-center">
                                        <span className="text-sm font-semibold text-primary mb-1 block">Step {item.step}</span>
                                        <h4 className="text-base font-semibold text-text">{item.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Call To Action */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl lg:text-[40px] font-bold mb-6">Get Started Today</h2>
                    <p className="text-lg text-white/80 mb-10">Access your portal now to begin your admission journey.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/login" className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent rounded-xl text-base font-semibold text-primary bg-white hover:bg-gray-50 transition-all shadow-sm">
                            Student Login
                        </Link>
                        <Link to="/admin/login" className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 rounded-xl text-base font-semibold text-white hover:bg-white/10 transition-all">
                            Admin Login
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
