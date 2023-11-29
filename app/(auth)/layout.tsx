import React from 'react';
import Image from 'next/image';
import BackButton from '@/components/buttons/BackButton';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className=' bg-background flex justify-end py-2   '>
        <Image
          src='/KINDLY_LOGO.png'
          alt='Kindly Logo'
          height={308}
          width={129}
        />
      </header>
      <BackButton />
      {children}
    </>
  );
}
