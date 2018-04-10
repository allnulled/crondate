# CronDate

**CronDate** is a small JavaScript class to create and manage [cron](https://en.wikipedia.org/wiki/Cron)-friendly dates. 

# 1. Introduction

[Cron](https://en.wikipedia.org/wiki/Cron) is a very powerful tool. CronDate is only a JavaScript class that can manipulate (JavaScript objects that represent) dates that are *cron-friendly*. 

#### What is a cron-friendly date?

A cron-friendly date is a date representation that fits the type of date representations that cron expects to find.

#### What is CronDate for, then?

**CronDate** was made in order to be combined with other tools, or directly with cron itself. So, in a few words, to ease the management of dates that follow the cron format.

Note: there are different implementations of cron. We are going

# 2. Installation

You can install CronDate from NPM. From your command-line, type:

~$ `npm install crondate`

# 3. Usage

#### 1) Import the module from your code:

```js
var CronDate = require("crondate");
```

#### 2) Create a new CronDate:

```js
var crondate1 = new CronDate();
var crondate2 = CronDate();
var crondate3 = CronDate({
  minute: 5,
  hour: 3,
  day: 5,
  month: 10,
  dayOfWeek: 1
});
```

#### 3) Override the default values of the date:

```js
crondate1.set({
  day: 25,
  month: 12,
  hour: "*",
  minute: 0
});
```

#### 4) Obtain the string (the true **cron date** now):

```js
var cronRef1 = crondate1.asString();
// Expect: "0 * 25 12 *"
```


# 4. Reference: CronDate API

#### 1) The format for cron dates is:

`{minute} {hour} {day} {month} {day of the week}`

#### 2) The default value that CronDate takes is:

`0 * * * *`

Which means:

`for minute 0 of every hour, of every day, of every month and in any day of the week`

#### 3) Methods of a CronDate instance:

#### {CronDate}.set(overrider)

##### Description: 

You can use this method to change the minute, hour, day, month or dayOfWeek of the current {CronDate} instance.

##### Parameters:

  - `overrider`: {Object} set of properties and values to be added to the CronDate instance. Mainly, you will want to modify: `minute`, `hour`, `day`, `month`, `dayOfWeek`.

##### Returns

The {CronDate} instance itself.

#### {CronDate}.asString()

##### Description: 

With this method, you can obtain the {CronDate} instance representation, in a cron-friendly format.

##### Returns

A {String} representing the current state of this {CronDate} instance, but in a cron-friendly format.

#### 4) Properties of a CronDate instance:

- `minute`: by default 0.

- `hour`: by default *.

- `day`: by default *.

- `month`: by default *.

- `dayOfWeek`: by default *.