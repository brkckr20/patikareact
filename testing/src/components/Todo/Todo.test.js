import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Todo from './index'

describe("todo testleri", () => {
    let button, input;

    beforeEach(() => {
        render(<Todo />);

        button = screen.getByText("Ekle");
        input = screen.getByLabelText("text");
    });

    test("varsayilan olarak verilen 3 nesne render edilmeli", () => {
        const items = screen.getAllByText(/Item/i);

        expect(items.length).toEqual(3);
    });


    test('input ve button dokumanda bulunmalı', () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    })


    test("inputa string girilip butona basılınca listeye eklenmeli", () => {
        //inputu doldur
        const name = "Burak";
        userEvent.type(input,name)

        //butona tıkla
        userEvent.click(button);

        //assertion kısmı
        expect(screen.getByText(name)).toBeInTheDocument();
    })
})