const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let phrase = '';
    let coded = [];

    for (let i = 0;  i < expr.length; i += 10) {
        let codedBin = expr.slice(i, i + 10);
        let decodedToMorse = codedBin.replaceAll('10', '.')
                                     .replaceAll('11', '-')
                                     .replaceAll('0', '')
                                     .replaceAll('**********', ' ');

        coded.push(decodedToMorse);
    }

    for (let code of coded) {
        if (code === ' ') {
            phrase += code;
            continue;
        }

        phrase += MORSE_TABLE[code];
    }

    return phrase;
}

module.exports = {
    decode
}