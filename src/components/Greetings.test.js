import { render, screen } from "@testing-library/react"
import Greetings from "./Greetings"
import userEvent from "@testing-library/user-event";


describe('Greetings', () => {
    test('renders "Some text" if btn wasn\'t clicked', () => {
        render(<Greetings />);

        const someText = screen.getByText('Some text', { exact: true });
        expect(someText).toBeInTheDocument();
    });

    test('renders "Changed text" if btn WAS clicked', async () => {
        render(<Greetings />);

        // Actions
        const btnElement = screen.getByRole('button');
        await userEvent.click(btnElement);

        // Checking
        const changedText = screen.getByText('Changed text', { exact: true });
        expect(changedText).toBeInTheDocument();
    });

    test('doesn\'t render "Some text" if btn WAS clicked', async () => {
        render(<Greetings />);

        // Actions
        const btnElement = screen.getByRole('button');
        await userEvent.click(btnElement);

        // Checking
        const someTextElement = screen.queryByText('Some text', { exact: true });
        expect(someTextElement).toBeNull();
    });

});

