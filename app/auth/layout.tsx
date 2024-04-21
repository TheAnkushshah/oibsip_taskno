const AuthLayout = ({ 
  children
}: { 
  children: React.ReactNode
}) => {
  return ( 
    <div className="h-full flex items-center justify-center" style={{ backgroundImage: 'url("https://images.wallpapersden.com/image/download/astronaut-art-4k_a2xsaW6UmZqaraWkpJRobWllrWdma2U.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {children}
    </div>
   );
}
 
export default AuthLayout;