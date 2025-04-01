import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'

interface HealthResponse {
  success: boolean
  data: {
    status: string
  }
}

async function fetchHealth(): Promise<HealthResponse> {
  const response = await fetch('http://localhost:3001/api/health')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['health'],
    queryFn: fetchHealth,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="App">
      <h1>Hello World</h1>
      <div>Health Status: {data?.data.status}</div>
    </div>
  )
}
