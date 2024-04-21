import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return ( 
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center" style={{ backgroundImage: 'url("https://images.wallpapersden.com/image/download/astronaut-art-4k_a2xsaW6UmZqaraWkpJRobWllrWdma2U.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Navbar />
      {children}
    </div>
   );
}
 
export default ProtectedLayout;