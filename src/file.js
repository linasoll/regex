export class Validator {
    validateUsername(username) {
        const re = /^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z]$/;
        const moreThanThreeNumbers = /\d{4,}/;
        return re.test(username) && !moreThanThreeNumbers.test(username);
    }
}
