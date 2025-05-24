export default function OnboardingLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-lg text-muted-foreground">
          Carregando sua experiência personalizada...
        </p>
        <div className="space-y-2">
          <div className="h-2 w-48 bg-muted rounded-full animate-pulse mx-auto" />
          <div className="h-2 w-32 bg-muted rounded-full animate-pulse mx-auto" />
        </div>
      </div>
    </div>
  );
} 