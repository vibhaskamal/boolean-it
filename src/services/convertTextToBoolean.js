export function convertTextToBoolean(text) {
    text = text.toLowerCase();
    let len = text.length;
    let i = 0;
    while (i < len) {
        if (text.charAt(i) === ' ') {
            if ((i + 1) < len && text.charAt(i + 1) === 'a' && (i + 2) < len && text.charAt(i + 2) === 'n'
                && (i + 3) < len && text.charAt(i + 3) === 'd' && (i + 4) < len && text.charAt(i + 4) === ' ') {
                text = text.slice(0, i) + ' ∧' + text.slice(i + 4);
            }
            else if ((i + 1) < len && text.charAt(i + 1) === 'n' && (i + 2) < len && text.charAt(i + 2) === 'o'
                && (i + 3) < len && text.charAt(i + 3) === 't' && (i + 4) < len && text.charAt(i + 4) === ' ') {
                text = text.slice(0, i) + ' ¬' + text.slice(i + 4);
            }
            else if ((i + 1) < len && text.charAt(i + 1) === 'o' && (i + 2) < len && text.charAt(i + 2) === 'r'
                && (i + 3) < len && text.charAt(i + 3) === ' ') {
                text = text.slice(0, i) + ' ∨' + text.slice(i + 3);
            }
        }
        i++;
    }
    return text
};