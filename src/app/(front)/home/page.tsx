import React from 'react'
import HomePage from './home'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page description',
  keywords: ['Home', 'Next.JS', 'Tailwind CSS',]
}

export default function Home() {
  return (
    <HomePage />
  )
}