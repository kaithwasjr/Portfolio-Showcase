import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type Message } from "@shared/schema";

export default function ContactEntriesPage() {
  const [entries, setEntries] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEntries = async () => {
      try {
        const response = await fetch("/api/contact");
        if (!response.ok) {
          throw new Error("Failed to load entries");
        }

        const data = await response.json();
        setEntries(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load entries");
      } finally {
        setLoading(false);
      }
    };

    loadEntries();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-10 md:px-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-primary">Portfolio admin view</p>
            <h1 className="text-3xl font-bold">Get in Touch Entries</h1>
          </div>
          <Badge variant="outline">{entries.length} total</Badge>
        </div>

        {loading ? (
          <Card>
            <CardContent className="py-8 text-sm text-muted-foreground">Loading entries...</CardContent>
          </Card>
        ) : error ? (
          <Card>
            <CardContent className="py-8 text-sm text-destructive">{error}</CardContent>
          </Card>
        ) : entries.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-sm text-muted-foreground">No entries have been submitted yet.</CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {entries.map((entry) => (
              <Card key={entry.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <CardTitle className="text-lg">{entry.name}</CardTitle>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span>{entry.email}</span>
                      <span>•</span>
                      <span>
                        {entry.createdAt
                          ? new Date(entry.createdAt).toLocaleString()
                          : "Just now"}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap text-sm leading-6">{entry.message}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
