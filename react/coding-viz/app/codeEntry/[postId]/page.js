"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();
    return <p>Post: {router.slug}</p>;
  }
  