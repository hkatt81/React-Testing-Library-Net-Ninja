import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodo = jest.fn()

describe("AddInput", () => {

  it('Should render input element with placeholder text', async () => {
    render(
        <AddInput 
            todos={[]}
            setTodos={mockedSetTodo}
        />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it('Should be able to type into the input field', async () => {
    render(
        <AddInput 
            todos={[]}
            setTodos={mockedSetTodo}
        />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "Go grocery shopping" } })
    expect(inputElement.value).toBe("Go grocery shopping");
  });

  it('Should have empty input when add button is clicked', async () => {
    render(
        <AddInput 
            todos={[]}
            setTodos={mockedSetTodo}
        />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "Go grocery shopping" } })
    const buttonElement = screen.getByRole("button")
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBe("");
  });

})