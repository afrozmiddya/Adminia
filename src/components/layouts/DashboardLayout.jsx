import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function DashboardLayout({ navigation, title }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    return (
        <div className="min-h-screen bg-background flex font-sans text-text">
            {/* Mobile overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-text/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-[260px] bg-card border-r border-border transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="h-[72px] flex items-center px-6 border-b border-border justify-between lg:justify-start">
                    <Link to="/" className="text-2xl font-bold text-primary">{title}</Link>
                    <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-text hover:text-primary">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <nav className="p-4 space-y-2">
                    {navigation.map((item) => {
                        const isActive = location.pathname.startsWith(item.href) && (item.href !== '/student' && item.href !== '/admin');
                        const isExact = location.pathname === item.href;
                        const currentActive = item.href === '/student' || item.href === '/admin' ? isExact : isActive || isExact;

                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${currentActive
                                        ? 'bg-primary text-card shadow-sm'
                                        : 'text-text hover:bg-background hover:text-primary'
                                    }`}
                                onClick={() => setSidebarOpen(false)}
                            >
                                <Icon className="w-5 h-5" />
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 lg:pl-[260px] flex flex-col min-h-screen">
                <header className="h-[72px] bg-card border-b border-border flex items-center px-4 lg:hidden sticky top-0 z-30 shadow-sm">
                    <button onClick={() => setSidebarOpen(true)} className="p-2 text-text hover:text-primary transition-colors">
                        <Menu className="w-6 h-6" />
                    </button>
                    <span className="ml-4 text-xl font-bold text-primary">{title}</span>
                </header>
                <main className="flex-1 p-4 lg:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
