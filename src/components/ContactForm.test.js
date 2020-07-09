import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'

test("ContactForm adds new people to the list", () => {
    render(<ContactForm />)

    const firstNameInput = screen.getByLabelText(/firstName/i)
    const lastNameInput = screen.getByLabelText(/lastName/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)

    // events
    fireEvent.change(firstNameInput, { target: {value: 'Bill'} })
    fireEvent.change(lastNameInput, { target: {value: 'Hankley'} })
    fireEvent.change(emailInput, { target: {value: 'Bill@hankley.com'} })
    fireEvent.change(messageInput, { target: {value: 'I love being bill.'} })


    // submit
    const submitButton = screen.getByText(/submit/i)
    fireEvent.click(submitButton)
})