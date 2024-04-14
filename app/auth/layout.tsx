const AuthLayout = ({ 
  children
}: { 
  children: React.ReactNode
}) => {
  return ( 
    <div className="h-full flex items-center justify-center" style={{ backgroundImage: 'url("https://cdn.wallpapersafari.com/79/3/TQrkbt.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {children}
    </div>
   );
}
 
export default AuthLayout;