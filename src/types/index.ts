export interface Word {
	word: string;
	phonetics?: Phonetics[];
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
	synonyms: string[];
}

interface Definition {
	definition: string;
	example: string;
}
