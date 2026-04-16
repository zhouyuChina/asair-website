import { redirect } from 'next/navigation'

// proxy.ts handles the redirect before this is ever rendered,
// but this is a safety fallback in case it is somehow reached.
export default function RootPage() {
  redirect('/en')
}
