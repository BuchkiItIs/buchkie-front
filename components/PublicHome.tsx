export default function PublicHome() {
  return (
    // 1. Remove min-h-screen from the top-level div.
    <div className="flex items-center justify-center font-sans">
      {/* 2. Remove min-h-screen from main. */}
      <main className="flex w-full max-w-3xl flex-col items-center justify-between p-16  bg-white dark:bg-black sm:items-start">
        <div className="border border-dashed border-border rounded-xl p-12 h-96 w-full flex items-center justify-center text-primary">
          Your page content will go here (currently blank)
        </div>
      </main>
    </div>
  );
}
