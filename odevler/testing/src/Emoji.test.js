import React from 'react'
import { getByAltText, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Header from './Header'

describe("emoji testleri" , ()=>{
    let header;

    beforeEach(() => {
        render(<Header />);

        header = screen.getByText("Emoji Search");
    });

    test('search alani dokumanda bulunmali', () => {
        expect(header).toBeInTheDocument();
    })


    test("emoji listesinin başarılı bir şekilde render edildiği", ()=>{
        const items = screen.getAllByText("Emojiler")

        expect(items).toBeInTheDocument();
    })
})