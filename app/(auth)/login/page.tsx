"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { LoginForm } from "./login-form";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  function handleSubmit(formData: FormData) {
    setEmail(formData.get("email") as string);
    router.push("/");
  }
  return (
    <main className="grid min-h-svh bg-background lg:grid-cols-5">
      <div className="col-span-2 flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Logo />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md rounded-xl border bg-card p-8 sm:p-12">
            <LoginForm action={handleSubmit} defaultEmail={email} />
          </div>
        </div>
      </div>
      <div className="relative z-0 col-span-3 m-6 hidden place-content-center overflow-hidden rounded-3xl bg-blue-800 lg:grid">
        <div className="z-10 grid justify-items-center p-10">
          <h1 className="mb-2 font-bold text-4xl text-white 2xl:text-6xl">
            Welcome to Slow Fit
          </h1>
          <p className="text-center text-white text-xl">
            Here, you build your fitness routine at your own pace. Small steps.
            Big results.
          </p>
        </div>
        <Image
          alt="Image"
          className="absolute inset-0 z-[-1] h-full w-full object-cover opacity-70 mix-blend-overlay grayscale"
          height={720}
          loading="eager"
          src="https://images.unsplash.com/photo-1629339837617-7069ce9e7f6b?q=80&w=1600"
          width={1280}
        />
      </div>
    </main>
  );
}
