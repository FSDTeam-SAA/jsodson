import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { BellRing} from "lucide-react";
import Image from 'next/image';

export default function ComingSoon() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#F5F7FB] px-4">
      
      {/* Main Section */}
      <section className="w-full max-w-2xl bg-[#F5F7FB] py-12 text-center">
        
        {/* Icon or Logo */}
        <div className="flex  justify-center">
          <div className="p-4 ">
            <Image src="/logo.png" width={400} height={400} alt='logo'/>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2A6B] mb-4 tracking-tight">
          Something Big is Coming!
        </h1>
        
        <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
          We&apos;re working hard to bring you the best experience. Stay tuned and get notified when we launch.
        </p>

        {/* Subscription Card */}
        <Card className="border-none shadow-lg bg-[#F5F7FB]">
          <CardContent className="pt-6">
            <form className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-white border-slate-200 h-12 focus-visible:ring-[#1B2A6B]"
                required
              />
              <Button 
                type="submit" 
                className="bg-[#1B2A6B] hover:bg-[#1B2A6B]/90 text-white h-12 px-8 font-semibold transition-all"
              >
                <BellRing className="mr-2 h-4 w-4" /> Notify Me
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

    </div>
  );
}