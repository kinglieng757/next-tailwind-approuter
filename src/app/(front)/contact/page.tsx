import React from 'react'
import ContactPage from './Contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact page',
  keywords: ['Home', 'Next.JS', 'Tailwind CSS',]
}

export default function contact() {
  return (
    <ContactPage />
  )
}