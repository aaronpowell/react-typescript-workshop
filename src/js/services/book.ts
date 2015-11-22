/// <reference path="../../../typings/jquery/jquery.d.ts" />

import * as jQuery from 'jquery';

export default {
    getAll: () =>
        jQuery.ajax({
            url: '/api/book/all',
            method: 'GET'
        }),

    getById: (id: number) =>
        jQuery.ajax({
            url: `/api/book/${id}`,
            method: 'GET'
        }),

    save: (title: string, authors: string[], link: string) => {
        return jQuery.ajax({
            url: '/api/book',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                title,
                authors,
                link
            })
        });
    }
};
