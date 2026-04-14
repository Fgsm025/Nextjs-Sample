const LoadingPage = (): React.JSX.Element => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/40 backdrop-blur-[1px]">
    <div className="flex flex-col items-center gap-4">
      <span className="h-12 w-12 animate-spin rounded-full border-4 border-light-input/30 border-t-light-text" />
      <p className="text-sm font-medium text-light-text">Loading...</p>
    </div>
  </div>
);

export default LoadingPage;
