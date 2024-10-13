import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const recommendedUsers = [
  { name: 'Cuervo Fiel', username: '@cuervofiel', avatar: 'https://github.com/shadcn.png' },
  { name: 'Azulgrana Pasión', username: '@azulgranapasion', avatar: 'https://github.com/shadcn.png' },
  { name: 'Boedo de Corazón', username: '@boedodecorazon', avatar: 'https://github.com/shadcn.png' },
]

export function RecommendedUsers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Usuarios Recomendados</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendedUsers.map((user, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.username}</p>
                </div>
              </div>
              <Button size="sm" variant="outline">Seguir</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}