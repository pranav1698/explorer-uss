/**
 * This program and the accompanying materials are made available under the terms of the
 * Eclipse Public License v2.0 which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Copyright IBM Corporation 2016, 2018
 */

import { Map } from 'immutable';

import {
    REQUEST_VALIDATION,
    RECEIVE_VALIDATION,
    INVALIDATE_VALIDATION,
} from '../actions/validation';

const INITIAL_CONTENT_STATE = Map({
    validated: false,
    isValidating: false,
    username: 'Loading...',
});

export default function content(state = INITIAL_CONTENT_STATE, action) {
    switch (action.type) {
        case REQUEST_VALIDATION:
            return state.merge({
                isValidating: true,
            });
        case RECEIVE_VALIDATION:
            return state.merge({
                validated: true,
                username: action.username,
                isValidating: false,
            });
        case INVALIDATE_VALIDATION:
            return INITIAL_CONTENT_STATE;
        default:
            return state;
    }
}
