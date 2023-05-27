"use client";
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import  { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const isUserLoggedIn = true;
  const [provider, setProvider] = useState(null);
  
  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProvider(response);
    }
    setProviders();
  }, [])

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src="/images/logo.svg" width={40} height={40} />
        <p className="logo_text">PimpMyPrompt</p>
      </Link>

      {/* Mobile */}
      <div className="sm:flex hidden">
        { isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">Create Post</Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile" className="flex justify-center">
              <Image src="/images/logo.svg" alt="profile_picture" width={37} height={37} />
            </Link>
          </div>
        ) : (
          <>
            { provider && Object.values(provider).map((provider) => (
              <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">
                  Sign in
              </button>
            ))}
          </>
        )}
        </div>
    </nav>
  )
}

export default Nav