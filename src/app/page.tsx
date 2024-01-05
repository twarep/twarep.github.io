import NavBar from '@/components/navbar';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <main className="flex flex-col">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
      <NavBar />
      <Hero />
      
      <div className="z-10 max-w-5xl w-full items-center justify-between font-karla text-sm lg:flex">
        <p>Coming soon</p>
      </div>
    </main>
  )
}
