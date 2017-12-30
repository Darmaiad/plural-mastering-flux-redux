'use strict';
import Status from './Status';
import ApiStatus from './ApiStatus';

const defaultState = {
    messages: [{
        date: new Date('2016-10-10 10:11:55'),
        postedBy: 'Stan',
        content: 'I <3 the new productivity app!',
    }, {
        date: new Date('2016-10-10 10:12:00'),
        postedBy: 'Jerry',
        content: 'I don\'t know if the new version of Bootstrap is really better...',
    }, {
        date: new Date('2016-10-10 12:06:04'),
        postedBy: 'Llewlyn',
        content: 'Anyone got tickets to ng-conf?',
    }],
    userStatus: Status.ONLINE,
    apiCommunicationStatus: ApiStatus.READY,
};

export default defaultState;
