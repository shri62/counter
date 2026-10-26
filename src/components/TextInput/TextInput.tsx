
import { useState } from 'react';
import type { ChangeEvent } from 'react';
import type { TextInputProps } from '../../types';

// create the TextInput component
export function TextInput({
  onTextChange,
  placeholder = 'Start typing your content here...',
  initialValue = '',
}: TextInputProps) {

  // store the text entered by the user
  const [text, setText] = useState(initialValue);

  // handle changes when the user types
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const newText = event.target.value;

    // update the text
    setText(newText);

    // send the text to the parent component
    onTextChange(newText);
  }

  // display the text area
  return (
    <div className="text-input">
      <label htmlFor="article-text">Start typing your content</label>

      <textarea
        id="article-text"
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
        rows={6}
      />
    </div>
  );
}
