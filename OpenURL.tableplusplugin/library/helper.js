'use strict';

import isUrl from 'is-url';
import isEmail from 'isemail';

var getURL = function(string) {
    if (isUrl(string)) {
    	return string;
    }
    if (isEmail.validate(string)) {
    	return "mailto:".concat(string)
    }
    return null;
}

export { getURL };