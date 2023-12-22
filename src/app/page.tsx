import Cell from '@/components/cell';

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="flex">
        <Cell payload='a' count={3}/>
        <Cell payload='a' />
      </div>
      <div className="flex">
        <Cell payload='a' isEmpty/>
        <Cell payload='a' />
      </div>
    </main>
  )
}
