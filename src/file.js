export class Validator {
    validateUsername(username) {
        const re = /^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z]$/;
        return re.test(username) && !/\d{4,}/.test(username);
    }
}
