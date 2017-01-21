class JustifyString {
    constructor(text, lineLength, wordSeperator = null) {
        this.text = text;
        this.maxlineLength = lineLength;
        this.wordSeperator = wordSeperator;
        this.newLineTrimmedText = text.trim().replace(/(\r\n|\n|\r)/gm, '');
        this.words = this.newLineTrimmedText.split(/\s+/g);
    }



    getArrayOfWordLengths() {
        const arrayOfLenghts = this.words.map(function (word) {
            return word.length;
        });
        return arrayOfLenghts;
    }


    getLengthOfBiggestWord() {
        const wordLengthsArray = this.getArrayOfWordLengths();
        return Math.max.apply(null, wordLengthsArray);
    }



    justifiedText(expectPlainText = true) {
        const wordSeperator = expectPlainText ? ' ' : this.wordSeperator ? this.wordSeperator : '&nbsp;';
        const lineSeparator = expectPlainText ? '\n' : '<br/>';
        const words = this.words;
        const totalCharacters = this.newLineTrimmedText.length;
        const numberOfLines = Math.ceil(totalCharacters / this.maxlineLength);
        // console.log("total lines: " + numberOfLines);
        //console.log("totalCharacterOnEachLine :" + this.maxlineLength);

        let newParagraph = '';
        let beginWord = 0;
        let oldWordIndex = 0;
        for (let lineNum = 1; lineNum <= numberOfLines ; lineNum++) {
            let currentLine = '';
            for (let i = beginWord; i < words.length; i++) {
                if (currentLine.trim().length < this.maxlineLength) {
                    currentLine += words[i] + ' ';
                    beginWord = i;
                } else {
                    let usedWords = words.slice(oldWordIndex, beginWord);
                    let remainningSpace = this.maxlineLength - usedWords.join('').length;
                  //  console.info('remainging space: ' + remainningSpace);

                    while (remainningSpace >= 0) {
                        usedWords = usedWords.map(function (word, index) {
                            --remainningSpace;
                            if (remainningSpace >= 0) { //decremented befor this line thats why negated to -1
                                if (index < usedWords.length ) {
                                    return word + ' ';
                                } else {
                                    return word;
                                }

                            }

                            return word;
                        });

                        currentLine = usedWords.join('').trim().replace(/[ ]/g, wordSeperator);

                    }

                    oldWordIndex = beginWord;
                    break;
                }

            }
            newParagraph = newParagraph + currentLine.trim() + lineSeparator;
        }

        return newParagraph;

    }

}

export default JustifyString;
