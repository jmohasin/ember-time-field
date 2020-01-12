import { computed } from '@ember/object';
import Controller from '@ember/controller';
import { isNone } from '@ember/utils';
import { action } from '@ember/object';

import pad from 'ember-time-field/utils/pad';

function timePart(property) {
    return computed(property, {
        get() {
            const value = this.get(property);
            if (isNone(value)) {
                return '--';
            }

            return pad(value);
        }
    });
}

export default Controller.extend({
    time: null,
    hour12: false,

    hours: timePart("time.hours"),
    minutes: timePart("time.minutes"),


    @action
    timeChanged(time) {
        this.set("time", time);
    },

    @action
    toggleHour() {
        this.toggleProperty("hour12");
    }
});
