
import { useState, useCallback } from 'react';
import type { CharacterCounterProps, TextStats } from '../../types';
import { TextInput } from '../TextInput/TextInput';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';

// create the CharacterCounter component
export function CharacterCounter({
  minWords = 25,
  maxWords = 100,
  targetReadingTime = 1,
}: CharacterCounterProps) {

  // store the text entered by the user
  const [text, setText] = useState('');

  // calculate the number of characters
  const characterCount = text.length;

  // calculate the number of words
  const wordCount = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  // calculate the reading time using 200 words per minute
  const readingTime = Math.ceil(wordCount / 200);

  // store all statistics in one object
  const stats: TextStats = {
    characterCount,
    wordCount,
    readingTime,
  };

  // update the text when the user types
  const handleTextChange = useCallback((newText: string) => {
    setText(newText);
  }, []);

  // calculate progress toward the maximum word count
  const progress = Math.min((wordCount / maxWords) * 100, 100);

  // check whether the minimum word goal is reached
  const goalReached = wordCount >= minWords;

  // display the components and word count progress
  return (
    <main className="counter-container">
      <h1>Character Counter</h1>

      <p>Track your writing progress.</p>

      <TextInput onTextChange={handleTextChange} />

      <StatsDisplay stats={stats} />

      <h3>Word Count Goal</h3>

      <p>
        Min: {minWords} | Max: {maxWords}
      </p>

      // display the progress bar
      <progress value={progress} max={100} />

      // show a message based on the word count
      {goalReached ? (
        <p>You reached your minimum word goal!</p>
      ) : (
        <p>
          Write {minWords - wordCount} more words to reach your goal.
        </p>
      )}

      // show a warning if the maximum word count is exceeded
      {wordCount > maxWords && (
        <p>You exceeded the maximum word count.</p>
      )}

      <p>Target reading time: {targetReadingTime} minute(s)</p>
    </main>
  );
}
