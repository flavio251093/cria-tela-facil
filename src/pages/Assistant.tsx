import React from 'react';
import { MessageSquare, Send, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Assistant = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
          <Brain className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Assistente IA</h1>
          <p className="text-muted-foreground">Converse com o assistente de IA do sistema</p>
        </div>
      </div>

      <Card className="p-6 h-96 flex flex-col">
        <div className="flex-1 mb-4 p-4 bg-muted/50 rounded-lg">
          <div className="text-center text-muted-foreground">
            <MessageSquare className="h-8 w-8 mx-auto mb-2" />
            <p>Inicie uma conversa com o assistente IA</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Digite sua mensagem..." 
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button className="bg-gradient-primary">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Assistant;