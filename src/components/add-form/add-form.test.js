import React from 'react';
import AddForm from './index';
import {render, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { act } from 'react-dom/test-utils';


const mockStore = configureMockStore();

describe("Testing <AddForm/>", () => {

    const initialState = {};

    const store = mockStore(initialState);

    describe("with valid inputs", () => {

        it('calls the onSubmit function', async () => {
            const { getByPlaceholderText, container} = render(
                <Provider store={store}>
                    <AddForm />
                </Provider>
            );
            await act(async () => {
                fireEvent.change(getByPlaceholderText("title"), {target: {value: "Test title product"}});
                fireEvent.change(getByPlaceholderText("price"), {target: {value: "50"}});
                fireEvent.change(getByPlaceholderText("quantity"), {target: {value: "2"}});
            });
            expect(container.querySelector('button.add-item').disabled).toEqual(false);
        })
    });
    describe("with invalid inputs", () => {

        it('button disabled, when invalid price value', async () => {
            const { getByPlaceholderText, container} = render(
                <Provider store={store}>
                    <AddForm />
                </Provider>
            );
            await act(async () => {
                fireEvent.change(getByPlaceholderText("title"), {target: {value: "Correct title"}});
                fireEvent.change(getByPlaceholderText("price"), {target: {value: "50 param paparam"}});
                fireEvent.change(getByPlaceholderText("quantity"), {target: {value: "2"}});
            });
            expect(container.querySelector('button.add-item').disabled).toEqual(true);
        });

        it('button disabled, when invalid quantity value', async () => {
            const { getByPlaceholderText, container} = render(
                <Provider store={store}>
                    <AddForm />
                </Provider>
            );
            await act(async () => {
                fireEvent.change(getByPlaceholderText("title"), {target: {value: "Correct title"}});
                fireEvent.change(getByPlaceholderText("price"), {target: {value: "123"}});
                fireEvent.change(getByPlaceholderText("quantity"), {target: {value: "2tuturu"}});
            });
            expect(container.querySelector('button.add-item').disabled).toEqual(true);
        });
    });
});