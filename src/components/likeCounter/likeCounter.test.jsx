import { describe, it, expect, waitFor, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LikeCounter from './likeCounter';

describe('тест для демонстрации rerender', () => {
    it('Проверка что при ререндере пропсы сохраняються', async () => {
        const { rerender } = render(<LikeCounter initalLikeNumber={0} />);

        const likeButton = screen.getByRole('button', { name: /like/i });
        
        userEvent.click(likeButton);

        const likeCounterBefore = await screen.findByText('1');
        expect(likeCounterBefore).not.toBeNull();

        rerender(<LikeCounter initalLikeNumber={5} />)

        const likeCounterAfter = await screen.findByText('1');

        expect(likeCounterAfter).not.toBeNull();
    })
})