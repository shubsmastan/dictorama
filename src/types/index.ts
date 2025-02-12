export interface Word {
	word: string;
	phonetics: Phonetics[];
	meanings: Meaning[];
	sourceUrls: string;
}

interface Phonetics {
	text?: string;
	audio?: string;
}

interface Meaning {
	partOfSpeech: string;
	definitions: Definition[];
}

interface Definition {
	defintion: string;
	example: string;
	synonyms: string[];
}
