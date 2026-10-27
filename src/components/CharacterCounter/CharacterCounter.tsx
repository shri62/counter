
import { useState, useCallback } from 'react';
import type { CharacterCounterProps, TextStats } from '../../types';
import { TextInput } from '../TextInput/TextInput';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';

// Create the CharacterCounter component
export function CharacterCounter({
  minWords = 25,
  maxWords = 100,
  targetReadingTime = 1,
}: CharacterCounterProps) {

  // Store the text entered by the user
  const [text, setText] = useState('');

  // Count the characters
  const characterCount = text.length;

  // Count the words
  const wordCount = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  // Estimate reading time using 200 words per minute
  const readingTime = Math.ceil(wordCount / 200);

  // Store statistics in one object
  const stats: TextStats = {
    characterCount,
    wordCount,
    readingTime,
  };

  // Update the text when the user types
  const handleTextChange = useCallback((newText: string) => {
    setText(newText);
  }, []);

  // Calculate progress toward the maximum word count
  const progress = Math.min((wordCount / maxWords) * 100, 100);

  // Check whether the minimum word goal is reached
  const goalReached = wordCount >= minWords;

  // Display the app
  return (
    <main className="counter-container">
      

      <TextInput onTextChange={handleTextChange} />

      <StatsDisplay stats={stats} />

      <h3>Word Count Goal</h3>
      <p>Minimum: {minWords} | Maximum: {maxWords}</p>

      <progress value={progress} max={100} />

      {goalReached ? (
        <p>You reached your minimum word goal!</p>
      ) : (
        <p>Write {minWords - wordCount} more words to reach your goal.</p>
      )}

      {wordCount > maxWords && (
        <p>You exceeded the maximum word count.</p>
      )}

      <p>Target reading time: {targetReadingTime} minute(s)</p>
    </main>
  );
}
