# PigLatin
Program that translates to Pig Latin.

Specs

User inputs a vowel. Vowel is returned.
_**ex:** input:_ "sentence" _output:_ "sentence"
User inputs a consonant. "+ **ay**" is appended following the consonant.
_**ex:** input:_ "b" _output:_ "bay"
User inputs a word into a blank form and receives output.
_**ex:** input:_ "word" _output:_ "word"
User submits no input. They are prompted to provide and submit input.
_**ex:** input:_ " " _output:_ "Please provide a sentence, user."
User provides a number. They are prompted to provide input using alphabetic characters.
_**ex:** input:_ " 3 " _output:_ "Pig Latin does not contain any numerals, please try again using only letters."
User provides a word starting with consonants. Consonants are removed and appended to the end of the word + **ay**.
_**ex:** input:_ "word" _output:_ "ordway"
User provides a word wherein the first consecutive consonants include **qu**. The **qu** is removed along with any preceding consonants and appended to the end of the word +**ay**.
_**ex:** input:_ "squelch" _output:_ "elchsquay"
User provides a word with two or more consonants as it's first characters. All consonants preceding the word's first vowel are removed and appended to the end of the word +**ay**.
_**ex:** input:_ "through" _output:_ "oughthray"
User provides a sentence. Output is returned with each word reflecting the above rules.
_**ex:** input:_ "you are through quaffing" _output:_ "ouyay areay oughthray affingquay"

_**ex:** input:_ "sentence" _output:_ "sentence"

_**ex:** input:_ "sentence" _output:_ "sentence"
