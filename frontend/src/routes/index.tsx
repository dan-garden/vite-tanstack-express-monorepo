import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { healthService } from '@/services'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['health'],
    queryFn: healthService.check,
  });

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="App">
      <h1>Hello World</h1>
      <div>Health Status: {data?.status}</div>
    </div>
  )
}
