import { describe, it, expect, waitFor, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('тесты - примеры:', () => {
    it('демонстрация функции - resolvePromise', async () => {
        const resolvePromise = vi.fn(() => Promise.resolve("Success"));
        await resolvePromise();
        expect(resolvePromise).toHaveResolved();
    });

    it('демонстрация функции - toHaveReturned', () => {
        const simpleFunction = () => 42;
        const simpleSpy = vi.fn(simpleFunction);
        simpleSpy();
        expect(simpleSpy).toHaveReturned();
    });

    it('демонстрация функции - toBeGreaterThanOrEqual', () => {
        const randomNumber = () => Math.floor(Math.random() * 10) + 1;
        expect(randomNumber()).toBeGreaterThanOrEqual(1);
    });

    it('демонстрация функции - toBeLessThan', () => {
        const fixedNumber = () => 5;
        expect(fixedNumber()).toBeLessThan(10);
    });

    it('демонстрация функции - toEqual', () => {
        const createObject = () => ({ a: 1, b: 2 });
        expect(createObject()).toEqual({ a: 1, b: 2 });
    });

    it('демонстрация функции - toContain', () => {
        const numbersArray = [1, 2, 3, 4];
        expect(numbersArray).toContain(3);
    });

    it('демонстрация функции - toHaveProperty', () => {
        const profile = { username: 'JohnDoe', email: 'john@example.com' };
        expect(profile).toHaveProperty('username');
    });

        it('демонстрация функции - toHaveProperty', () => {
        const generateEmail = () => `${Math.random().toString(36).substring(7)}@example.com`;
        expect(generateEmail()).toMatch(/\S+@\S+\.\S+/);
    });
});