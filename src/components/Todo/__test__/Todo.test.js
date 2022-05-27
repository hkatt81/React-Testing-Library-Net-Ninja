import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button")
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } })
        fireEvent.click(buttonElement)
    })
}

describe("Todo integration test", () => {

    it('Integration test on the Todo component which contains a couple of interacting components', () => {
        render(<MockTodo />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole("button")
        fireEvent.change(inputElement, { target: { value: "Go grocery shopping" } })
        fireEvent.click(buttonElement)
        const divElement = screen.getByText(/Go grocery shopping/i)
        expect(divElement).toBeInTheDocument()  
    });

    it('Integration test on the Todo component to see if the element receives 3 items', () => {
        render(<MockTodo />);
        addTask(["Go grocery shopping","Mow the lawn","Clean the bathroom"])
        const divElements = screen.getAllByTestId("task-div")
        expect(divElements.length).toBe(3)  
    });

    it('Tasks should not have active class when they are initially rendered', () => {
        render(<MockTodo />);
        addTask(["Go grocery shopping"])
        const divElement = screen.getByText(/Go grocery shopping/i)
        expect(divElement).not.toHaveClass("todo-item-active")
    });

    it('Tasks should have active class when they are clicked', () => {
        render(<MockTodo />);
        addTask(["Go grocery shopping"])
        const divElement = screen.getByText(/Go grocery shopping/i)
        fireEvent.click(divElement)
        expect(divElement).toHaveClass("todo-item-active")
    });

})