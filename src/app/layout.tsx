import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Merchant Authority - Launch Your Professional Shopify Store in 48 Hours',
  description: 'Expert Shopify store setup service - Get your professional store launched in 48 hours',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className="bg-background text-on-background font-body-md antialiased">
        {/* Google Fonts */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&amp;family=Work+Sans:wght@400;600&amp;display=swap" 
          rel="stylesheet"
        />
        {/* Material Symbols */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" 
          rel="stylesheet"
        />
        {children}
      </body>
    </html>
  );
}