const AuthLayout = ({ 
  children
}: { 
  children: React.ReactNode
}) => {
  return ( 
    <div className="h-full flex items-center justify-center" style={{ backgroundImage: 'url("https://raw.githubusercontent.com/TheAnkushshah/oibsip_taskno/main/public/Pro-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {children}
    </div>
   );
}
 
export default AuthLayout;