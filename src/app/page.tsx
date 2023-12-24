import NavBar from '@/components/navbar'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-karla text-sm lg:flex">
        <p>Coming soon</p>
      </div>
    </main>
  )
}
