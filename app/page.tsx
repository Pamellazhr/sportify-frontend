import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import Search from './components/Search'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Search />
    </>
  )
}
