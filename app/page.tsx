import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center" style={{ backgroundImage: 'url("https://raw.githubusercontent.com/TheAnkushshah/oibsip_taskno/main/public/Pro-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="space-y-6 text-center">
        <h1 className={cn(
          "text-6xl font-semibold text-white drop-shadow-md",
          font.className,
        )}>
          🔐 Auth
        </h1>
        <p className="text-white text-lg">
          A simple authentication service
        </p>
        <div>
          <LoginButton  asChild>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
        <p className="text-white text-lg">
          Built with 💚 by Haven Futures
        </p>
      </div>
    </main>
  )
}
