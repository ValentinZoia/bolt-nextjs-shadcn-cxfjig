import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ImageIcon } from 'lucide-react'

export function NewPost() {
  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@usuario" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea placeholder="¿Qué estás pensando sobre el club?" />
            <div className="mt-2 flex justify-between items-center">
              <Button variant="outline" size="sm">
                <ImageIcon className="h-4 w-4 mr-2" />
                Agregar foto
              </Button>
              <Button size="sm">Publicar</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}