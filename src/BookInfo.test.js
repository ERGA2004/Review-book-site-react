import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from "react-router-dom"


import { BookInfo } from '../src/containers/BookInfo';

// header
import AppHeader from '../src/components/AppHeader';

test('Дочерний компонент должен существовать', () => {

    let mockClasses = jest.fn();
    const mockReviews = {
        Items: Array(0)
    }
    const mockLoactin = {
        state: {
            bookID: "123456",
            title: "test",
            thumbnailURL: "",
            ISBN10: "1234567899",
            amazonLink: "test",
            description: "test",
        }
    }
    
    const wrapper = shallow(
        
        <MemoryRouter initialEntries={["/bookinfo/1234"]} >
            <BookInfo
                classes={mockClasses}
                reviews={mockReviews}
                location={mockLoactin}
            />
        </MemoryRouter>
    );

    
    expect(wrapper).not.toBeNull();

});