/* eslint-disable no-undef */
import { Validator } from "../file";

test("Корректный никнейм", () => {
    const validator = new Validator;
    expect(validator.validateUsername('user-123_user')).toBe(true)
})

test("Более 3 цифр подряд", () => {
    const validator = new Validator;
    expect(validator.validateUsername('user-12345_user')).toBe(false)
})

test("Начинается с дефиса", () => {
    const validator = new Validator;
    expect(validator.validateUsername('-user-123_user')).toBe(false)
})

test("Заканчивается не буквой", () => {
    const validator = new Validator;
    expect(validator.validateUsername('user-123_user-123')).toBe(false)
})