/// <reference path="../../../typings/jquery/jquery.d.ts" />

import * as jQuery from 'jquery';

export default {
    getAll: () =>
        jQuery.ajax({
            url: '/api/book/all',
            method: 'GET'
        })
};
