import AppLayout from '../components/core/layout/AppLayout';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
