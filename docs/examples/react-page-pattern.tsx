export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Manage challenges and interview sessions.
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border p-6">
          <h2 className="text-lg font-semibold">Challenges</h2>
          <p className="text-sm text-muted-foreground">
            Create and manage coding challenges.
          </p>
        </div>
      </section>
    </main>
  );
}