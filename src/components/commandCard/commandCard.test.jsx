import { describe, it, expect, waitFor } from 'vitest';
import { render, screen } from '@testing-library/react';
import testIcon from '../../assets/icon/testIcon.png'
import CommandCard from './commandCard.jsx'
import userEvent from '@testing-library/user-event';

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

        expect(screen.getByText("Команда")).not.toBeNaN();
        expect(screen.getByText("Описание команды")).not.toBeUndefined();
    });
    it('открывает меню при нажатии на карточку', async () => {
        render(<CommandCard {...mockData} />);

        const cardButton = screen.getByTestId('commandCard-CardActionArea');
        userEvent.click(cardButton);

        const menuitem = await screen.findAllByRole('menuitem');

        expect(menuitem).toHaveLength(3);
        expect(menuitem).not.toBeNull();
    });

    it('сравнение разметки с снапшотом', () => {
        const { asFragment } = render(<CommandCard {...mockData} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
