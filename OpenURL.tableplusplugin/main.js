'use strict';

import { getURL } from './library/helper';

var onRun = function(context) {
    // Get table in opening tab
    var value = context.clickedRowValue();
    if (value == null) {
        context.alert('Error', 'Data is null');
        return;
    }
    let url = getURL(value);
    if (url == null) {
        context.alert('Error', 'Data is not an URL');
        return;
    }
    context.openURL(url);
};

global.onRun = onRun;