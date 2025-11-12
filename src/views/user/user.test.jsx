import { describe, it, expect } from 'vitest';
import { render, screen, within, waitFor } from '@testing-library/react';
import testIcon from '../../assets/icon/testIcon.png'
import User from './user.jsx'
import userEvent from '@testing-library/user-event';

describe('тестирирование tooltip', () => {
    it('tooltip показывает "Delete" при наведении курсора', async () => {
        render(<User />);

        const deleteButton = screen.getAllByRole('button')[0];
        expect(deleteButton).not.toBeNull();

        await userEvent.hover(deleteButton);

        await waitFor(() => {
            expect(screen.getByRole('tooltip')).not.toBeNull();
            expect(screen.getByText('Delete')).not.toBeNull();
        });

        await userEvent.unhover(deleteButton);

        await waitFor(() => {
            expect(screen.queryByRole('tooltip')).toBeNull();
        });
    });

    it('tooltip is associated with delete button', () => {
        render(<User />);

        const deleteButton = screen.getAllByRole('button')[0];

        expect(deleteButton.getAttribute('aria-label')).toBe('Delete');
    });
})
