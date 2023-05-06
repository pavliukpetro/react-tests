import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async component', () => {
    // test('renders posts', async () => {
    //     render(<Async />);

    //     const listItems = await screen.findAllByRole('listitem');
    //     expect(listItems).not.toHaveLength(0);
    // });

    test('renders posts with fake data', async () => {
        // Fake fetch
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 1, title: 'Post title' }, { id: 2, title: 'Post title 2' }]
        });

        render(<Async />);

        const listItems = await screen.findAllByRole('listitem');
        expect(listItems).not.toHaveLength(0);
    });
});
