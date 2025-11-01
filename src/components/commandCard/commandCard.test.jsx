import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import testIcon from '../../assets/icon/testIcon.png'
import CommandCard from './commandCard.jsx'

describe('commandCard - тесты:', () => {
    const mockData = {
        key: 1,
        name: "Команда",
        description: "Описание команды",
        imgSrc: testIcon,
    }

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
    it('открывает меню при нажатии на карточку', () => {
        render(<CommandCard {...mockData} />);

        const cardButton = screen.getByTestId('commandCard-CardActionArea');
        fireEvent.click(cardButton);

        expect(screen.getAllByRole('menuitem')).toHaveLength(3);
    });

    it('закрывает меню при выборе любого пункта меню', () => {
        render(<CommandCard {...mockData} />);

        const cardButton = screen.getByTestId('commandCard-CardActionArea');
        fireEvent.click(cardButton);

        const firstMenuItem = screen.getByText('Участники');
        fireEvent.click(firstMenuItem);

        expect(screen.queryByRole('menu')).not.toBe;
    });

    it('закрывает меню при клике вне области карточки', () => {
        render(<CommandCard {...mockData} />);

        const cardButton = screen.getByTestId('commandCard-CardActionArea');
        fireEvent.click(cardButton);

        fireEvent.mouseDown(document.body);
        expect(screen.queryByRole('menu')).not.toBe;
    });

    it('сравнение разметки с снапшотом', () => {
        const { asFragment } = render(<CommandCard {...mockData} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
