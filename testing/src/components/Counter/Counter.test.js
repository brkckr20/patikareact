import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './index'

describe("counter test", () => {
    let increaseBtn, decreaseBtn, count

    //her testten önce çalışır
    beforeEach(() => {
        console.log("Her testten once calisacak")
        render(<Counter />);
        increaseBtn = screen.getByText("Increase");
        decreaseBtn = screen.getByText("Decrease");
        count = screen.getByText("0");
    })
// tüm testlerden önce bir defaya mahsus çalışır
    beforeAll(()=>{
        console.log("Bir kere çalışacak")
    })


    //herşeyden sonra
    afterAll(()=>{
        console.log("herseyden sonra bir kere calisacagim")
    })

    afterEach(()=>{
        console.log("her testten sonra calisacagim")
    })

    test(" increase btn ", () => {
        render(<Counter />);

        userEvent.click(increaseBtn);
        expect(count).toHaveTextContent("1");
    })

    test(" descrease btn ", () => {

        userEvent.click(decreaseBtn);
        expect(count).toHaveTextContent("-1");
    })
})

/* test(" increase btn ", () => {
    render(<Counter />);

    const count = screen.getByText("0");
    const increaseBtn = screen.getByText("Increase");
    
    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
})


test(" descrease btn ", () => {
    render(<Counter />);

    const count = screen.getByText("0");
    const increaseBtn = screen.getByText("Decrease");
    
    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("-1");
}) */