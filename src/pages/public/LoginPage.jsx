import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';

export function LoginPage() {
    return (
        <div className="min-h-[calc(100vh-72px)] flex">
            {/* Left side - Image/Illustration */}
            <div className="hidden lg:flex w-1/2 bg-primary/10 relative items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <div className="relative z-10 text-center px-12">
                    <h2 className="text-4xl font-bold text-text mb-4">Welcome Back to Adminia</h2>
                    <p className="text-lg text-gray-600">Access your dashboard to continue your admission process.</p>
                </div>
            </div>

            {/* Right side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
                <div className="w-full max-w-md bg-card p-8 rounded-2xl shadow-sm border border-border">
                    <div className="mb-8 text-center">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                            <LogIn className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-text mb-2">Student Login</h2>
                        <p className="text-gray-500">Enter your credentials to access your account</p>
                    </div>

                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-sm font-medium text-text mb-1">Email Address</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2.5 rounded-xl border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <label className="block text-sm font-medium text-text">Password</label>
                                <a href="#" className="text-sm font-medium text-primary hover:text-primary/80">Forgot?</a>
                            </div>
                            <input
                                type="password"
                                className="w-full px-4 py-2.5 rounded-xl border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                            />
                            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                                Remember me
                            </label>
                        </div>

                        <Link to="/student" className="w-full flex items-center justify-center py-3 px-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                            Login
                        </Link>
                    </form>

                    <p className="mt-8 text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/register" className="font-semibold text-primary hover:text-primary/80 transition-colors">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
