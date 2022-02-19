import React, {useState} from 'react';
import '../server';

export default class StoreService {

    _apiBase = '/api';

    async getResource(url) {

        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url},` +
                ` received ${res.status}`);
        }

        return await res.json();
    }

    async postItem(item) {

        const res = await fetch(`${this._apiBase}/items`, {
            method: "POST",
            body: JSON.stringify(item)
        });

        return await res.json();
    }

    async getItems() {
        return await this.getResource(`/items`);
    }

}