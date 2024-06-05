export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <nav>Header Root</nav>
                <section>Navbar Admin</section>
                {children}
                <footer>Footer Root</footer>
            </body>
        </html>
    );
}