import { describe, it, expect, beforeEach } from 'vitest';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

import AddUser from '../AddUser';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

describe('Add User Page', () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AddUser />
        </BrowserRouter>
      </QueryClientProvider>
    );
  });

  it('should render the user form page', () => {
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email Address');
    const mobileNumberInput = screen.getByLabelText('Mobile Number');
    const ageInput = screen.getByLabelText('Age');
    const genderInput = screen.getByLabelText('Gender');
    const statusInput = screen.getByLabelText('Status');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(mobileNumberInput).toBeInTheDocument();
    expect(ageInput).toBeInTheDocument();
    expect(genderInput).toBeInTheDocument();
    expect(statusInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should show validation errors when submitting with empty fields', async () => {
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    act(() => {
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      const emailError = screen.getByText('Email is required!');
      const nameError = screen.getByText('Username is required!');
      const mobileNumberError = screen.getByText('Mobile Number is required!');
      const ageError = screen.getByText('Age is required!');
      const genderError = screen.getByText('Gender is required!');
      const statusError = screen.getByText('Status is required!');

      expect(emailError).toBeInTheDocument();
      expect(nameError).toBeInTheDocument();
      expect(mobileNumberError).toBeInTheDocument();
      expect(ageError).toBeInTheDocument();
      expect(genderError).toBeInTheDocument();
      expect(statusError).toBeInTheDocument();
    });
  });

  it('should add the new user with valid input', () => {
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email Address');
    const mobileNumberInput = screen.getByLabelText('Mobile Number');
    const ageInput = screen.getByLabelText('Age');
    const genderInput = screen.getByLabelText('Gender');
    const statusInput = screen.getByLabelText('Status');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    act(() => {
      fireEvent.change(emailInput, { target: { value: 'aloi@admin.sg' } });
      fireEvent.change(nameInput, { target: { value: 'Aloi Admin' } });
      fireEvent.change(mobileNumberInput, { target: { value: '9841447831' } });
      fireEvent.change(ageInput, { target: { value: '25' } });
      fireEvent.change(genderInput, { target: { value: 'male' } });
      fireEvent.change(statusInput, { target: { value: 'active' } });
    });

    act(() => {
      fireEvent.click(submitButton);
    });
  });
});
