import Image from 'public/logo'
import Link from 'next/link'
import ServiceCard from './components/ServiceCard'


export default function Home() {
  return (
    <main>
      <Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="33" height="33" fill="#fff" x="10" y="64" opacity="100%">
                <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
              </svg>
            </Link>
            <Link href="/">
              <h1>Index</h1>   
            </Link>
            <Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="25" height="25" fill="#fff" x="330" y="65" opacity="100%">
                <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
              </svg>
            </Link>
      <h1>
        EquiParents
      </h1>
      <div>
    <img src="/public/logo.svg" alt="Logo EquiParents " /> 
      </div>
    <Link href="/users">
    <h1>User</h1>
    </Link> 
    <Link href="/users/new">
    <h1>Register</h1>
    </Link>
    <ServiceCard />
    </main>
  )
}

