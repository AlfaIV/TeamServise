import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import TaskModal from './taskModal.jsx';
import userEvent from '@testing-library/user-event';

describe('TaskModal - тестирование:', () => {
    let mockSetTasksFn = vi.fn();
    const mockExternalOpenModel = {
        get: true,
        set: vi.fn(),
    };

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('должен закрыть модальное окно после клика на кнопку "Закрыть"', async () => {
        render(<TaskModal
            externalOpenModel={mockExternalOpenModel}
            setTasks={mockSetTasksFn}
        />);

        const closeBtn = screen.getByText(/закрыть/i);
        userEvent.click(closeBtn);

        await waitFor(() => {
            expect(mockExternalOpenModel.set).toHaveBeenCalledTimes(1);
            expect(mockExternalOpenModel.set).toHaveBeenCalledWith(false);
        });

        const modalElement = screen.queryByRole('dialog');
        expect(modalElement).not.toBe();
    });
});