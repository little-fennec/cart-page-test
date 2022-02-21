import React, {useState} from 'react';
import '../server';

export default class StoreService {

    _apiBase = '/api';

     getResource(url) {

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", `${this._apiBase}${url}`);
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.statusText);
                }
            };
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        });

        // const res = await fetch(`${this._apiBase}${url}`);
        // if (!res.ok) {
        //     throw new Error(`Could not fetch ${url},` +
        //         ` received ${res.status}`);
        // }
        // return await res.json();
    }

    async postItem(item) {

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", `${this._apiBase}/items`);
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.statusText);
                }
            };
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send(JSON.stringify(item));
        });

        // const res = await fetch(`${this._apiBase}/items`, {
        //     method: "POST",
        //     body: JSON.stringify(item)
        // });
        // return await res.json();
    }

    async getItems() {
        return await this.getResource(`/items`);
    }

}