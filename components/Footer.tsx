export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full mt-10 border-t border-t-border bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
        <p className="text-sm text-primary">
          &copy; {currentYear} Buchkie. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
