export const metadata = {
  title: "Velocity Haul Pros",
  description: "Truck delivery and junk removal in Baton Rouge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
