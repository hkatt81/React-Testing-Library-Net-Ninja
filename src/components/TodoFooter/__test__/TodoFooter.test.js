import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom'

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
    return (
        <BrowserRouter>
            <TodoFooter 
                numberOfIncompleteTasks={numberOfIncompleteTasks}
            />
        </BrowserRouter>
    )
} // Without this mock, test would fail because BrowserRouter is not present within the TodoFooter component (it's in a parent) so you have to add manually

describe("TodoFooter", () => {
    it('Should render 5 tasks when 5 is passed down as a prop', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5} />);
        const paragraphElement = screen.getByText(/5 tasks left/i);
        expect(paragraphElement).toBeInTheDocument();
      });
      
      it('Should render 1 task (singular) when 1 is passed down as a prop', () => {
          render(<MockTodoFooter numberOfIncompleteTasks={1} />);
          const paragraphElement = screen.getByText(/1 task left/i);
          expect(paragraphElement).toBeInTheDocument();
      });
}) // describe blocks group tests, you can have describe blocks within



// it('Tells you if the value is truthy, not false or null etc.', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByText(/1 task left/i);
//     expect(paragraphElement).toBeTruthy();
// });

// it('Checks if this element is visible to the user.', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByText(/1 task left/i);
//     expect(paragraphElement).toBeVisible();
// });

// it('Checks if this element contains HTML paragraph element', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByText(/1 task left/i);
//     expect(paragraphElement).toContainHTML("p");
// });

// it('Checks if this element contains certain text content, IF you were finding it by method other than getByText', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByTestId("testfooter");
//     expect(paragraphElement).toHaveTextContent("1 task left");
// });

// it('Checks if this element contains certain text content, using element.textContent toBe instead', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByTestId("testfooter");
//     expect(paragraphElement.textContent).toBe("1 task left");
// });