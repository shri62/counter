
import { useState } from 'react';
import type { ChangeEvent } from 'react';
import type { TextInputProps } from '../../types';

// Create the TextInput component
export function TextInput({
  onTextChange,
  placeholder = 'Start typing your content here...',
  initialValue = '',
}: TextInputProps) {

  // Store the text entered by the user
  const [text, setText] = useState(initialValue);

  // Handle changes when the user types
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const newText = event.target.value;

    // Update the text
    setText(newText);

    // Send the text to the parent component
    onTextChange(newText);
  }

  // Display the text box
  return (
    <div className="text-input">
      <textarea
        id="article-text"
        aria-label="Writing content"
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
        rows={6}
      />
    </div>
  );
}
