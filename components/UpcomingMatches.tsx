import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays } from 'lucide-react'

const matches = [
  { date: '2024-04-15', opponent: 'River Plate', isHome: true },
  { date: '2024-04-22', opponent: 'Boca Juniors', isHome: false },
  { date: '2024-04-29', opponent: 'Racing Club', isHome: true },
]

export function UpcomingMatches() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Próximos Partidos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {matches.map((match, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">{match.date}</span>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${match.isHome ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                    {match.isHome ? 'Local' : 'Visitante'}
                  </span>
                </div>
                <p className="text-lg font-bold mb-2">San Lorenzo vs {match.opponent}</p>
                {match.isHome && (
                  <div className="flex space-x-2 mt-2">
                    <Button size="sm" variant="outline">Voy a la cancha</Button>
                    <Button size="sm" variant="outline">Ver quienes van</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}