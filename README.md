# ember-time-field

Time field input, like Chrome's, with keyboard navigation within sections.


## Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v3.12 or above
* Node.js v8 or above


## Installation
------------------------------------------------------------------------------

```
ember install ember-time-field
```

## Usage

```handlebars
{{time-field on-change=(action "timeChanged") value=time hour12=true}}
```

* `value` is a `Time`
* `hour12` (default false) whether or not to display in 12 hour format with am/pm field.
* `on-change` action is triggered with a `Time` whenever the input value changes.

`Time` is simply a POJO with `hours` and `minutes` properties and is always 24 hours.

## Keyboard / Mouse Integration

* Clicking on a segment selects that segment (hours/minutes/period)
* Up/down increment/decrement the selected segment
* Left/right moves between segments
* Typing moves along the segments - eg typing "945p" will enter "09:45 pm"

## TODO pre 1.0

* Tests
* Ensure 12 hour times work correctly

## Installation

* `git clone` this repository
* `npm install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
