import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import testIcon from '../../assets/icon/testIcon.png'
import CommandCard from './commandCard.jsx'

describe('commandCard - тесты:', () => {
    it('проверка пропсов', () => {
        render(<CommandCard
            key={1}
            name={"Команда"}
            description={"Описание команды"}
            imgSrc={testIcon}
        />);
        expect(screen.getByText("Команда")).toBe;
        expect(screen.getByText("Описание команды")).toBe;
    });
});
