export const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md shadow-md border-b border-b-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo/Title */}
        <div className="shrink-0">
          <span className="text-xl font-extrabold text-white tracking-wider">
            DAPP LOGO
          </span>
        </div>
        <div className="">
          <appkit-button />
        </div>
      </div>
    </header>
  );
};
