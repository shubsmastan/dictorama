export interface Word {
	word: string;
	phonetic: string;
	meanings: Meaning[];
	sourceUrls: string;
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
