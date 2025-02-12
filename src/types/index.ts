export interface Word extends Record<string, unknown> {
	word: string;
	phonetics: string;
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
