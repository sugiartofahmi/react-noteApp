const ContentLayout = ({ children }) => {
  return (
    <main className="flex flex-col w-full min-h-screen pt-20 items-center bg-[#DFFFD8]">
      {children}
    </main>
  );
};

export default ContentLayout;
