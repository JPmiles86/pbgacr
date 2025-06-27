import Layout from '@/components/layout/Layout'
import FAQClient from './FAQClient'

export const metadata = {
  title: 'FAQ | Pacific Business & Accounting Group',
  description: 'Frequently asked questions about doing business in Costa Rica and PBAG services. Find answers to common questions about accounting, tax, legal, and business advisory services.',
}

export default function FAQPage() {
  return (
    <Layout>
      <FAQClient />
    </Layout>
  )
}