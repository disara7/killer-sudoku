// app/layout.tsx
import './global.css';
export const metadata = {
    title: 'Killer Sudoku',
    description: 'Find combinations that sum to a target',
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
  