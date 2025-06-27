// app/layout.tsx
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Lawn Estimator</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
