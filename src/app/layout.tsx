import '@/styles/globals.css';

export const metadata = {
    title: 'Promptopia',
    description: 'Discover and share AI prompts',
};

export default function RootLayout({ children }: any) {
    return (
        <html lang="en">
            <div className="main">
                <div className="gradient"/>
            </div>

            <main className="app">
                {children}
            </main>
        </html>
    );
}