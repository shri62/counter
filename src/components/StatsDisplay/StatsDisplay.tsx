
 // import the props type from index.ts
import type { StatsDisplayProps } from '../../types';

// create the StatsDisplay component
export function StatsDisplay({
  stats,
  showReadingTime = true,
}: StatsDisplayProps) {

  // return the statistics to display on the screen
  return (
    <section className="stats-display" aria-live="polite">


      <div className="stat-card">
        <h3>Characters</h3>
        <p>{stats.characterCount}</p>
      </div>

     
      <div className="stat-card">
        <h3>Words</h3>
        <p>{stats.wordCount}</p>
      </div>

      {/* Show reading time only if showReadingTime is true */}
      {showReadingTime && (
        <div className="stat-card">
          <h3>Reading Time</h3>
          <p>{stats.readingTime}:00</p>
        </div>
      )}
    </section>
  );
}
