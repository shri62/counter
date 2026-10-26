// props for the textinput component
// onTeaxtChange is function = parents passed it, input call it 
//everytime the text changes sending new text back up 


export interface TextInputProps {
    onTextChange: (text: string) => void;
    placeholder?: string;
    initialValue?: string;
}

//calculation from text
export interface TextStats {
    characterCount: number;
    wordCount: number;
    readingTime: number; //in min , or 
}

//props for calculation that component accepts
export interface StatsDisplayProps {
    stats: TextStats;
    showReadingTime?: boolean;
}

export interface CharacterCounterProps {
    minWords?: number;
    maxWords?: number;
    targetReadingTime?: number; // in min 
}