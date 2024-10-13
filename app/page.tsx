import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UpcomingMatches } from '@/components/UpcomingMatches'
import { NewPost } from '@/components/NewPost'
import { Post } from '@/components/Post'
import { RecommendedUsers } from '@/components/RecommendedUsers'

export default function Home() {
  return (
    <main className="container mx-auto p-4 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Columna izquierda: Próximos partidos */}
        <UpcomingMatches />

        {/* Columna central: Feed de publicaciones */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Publicaciones de Hinchas</CardTitle>
          </CardHeader>
          <CardContent>
            <NewPost />
            <div className="space-y-6">
              <Post
                username="Hincha Apasionado"
                avatar="https://github.com/shadcn.png"
                timeAgo="2 horas atrás"
                imageUrl="https://source.unsplash.com/random/800x600?football"
                likes={123}
                content="¡Qué partidazo! Nuestro equipo demostró garra y corazón. #VamosSanLorenzo"
              />
              {/* Add more Post components here */}
            </div>
          </CardContent>
        </Card>

        {/* Columna derecha: Usuarios recomendados */}
        <RecommendedUsers />
      </div>
    </main>
  )
}