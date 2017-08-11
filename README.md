# Scitylana

A high-level, provider-agnostic analytics library.

## 2. Concepts

In this section we will go through the concepts utilized by Scitylana to allow
for finer control of what metrics you end up tracking.

The application of those concepts is covered in the Usage and API sections.

### 2.1 Application Events

Application events refer to events that occur in the host application that
signify a certain interaction you want to track and analyze. Those events are
fed into Scitylana for aggregation into what is called a metric event which
we'll learn about in the next section.

The definition of an application event and the conditions that lead to its
triggering are arbitrary to Scitylana; they could be anything. For example,
clicking on a certain DOM element, pressing a keybinding, performing a sequence
of interactions with UI widgets, performing a page visit, or performing an API
call with certain parameters can all be considered application events.

### 2.2 Metrics and Metric Events

A metric represents an interaction with your application that you want to track
and analyze. Metric events are events triggered by Scitylana when certain
pre-defined conditions (one of which is the triggering of application events)
are met, and it is those events that you end up submitting to your analytics
provider service.

The difference between metric events and application events is that the former
may be aggregated from several of the latter in different ways (or not at all.)

For example, a metric "Failed to Login" could be defined in such a way that its
event will be triggered only when the application event "login-failed" has been
triggered 3 times in a row within a single page visit.

### 2.3 Data Points

A data point refers to a single piece of data you want to attach to a metric
event. Those points can be extracted from application events, calculated from
multiple event parameters, or have a pre-defined static value.

### 2.4 Event Sequences

An event sequence describes a _constraint_ on the triggering of a metric event
from application events. Mostly, this is only useful when you're aggregating a
metric event from several application events.

An event sequence is said to _pass_ when its conditions are met upon the
triggering of an application event.

The nature of those constraints depends on which sequence you choose for the
metric, which are described below.

#### 2.4.1 The Any Event Sequence _(default)_

This sequence will pass when any of the specified application events are
triggered. In other words, this is the "null" constraint.

#### 2.4.2 The Ordered Event Sequence

This sequence will pass only when the specified application events have all
been triggered in the order they were defined in. Once such a "streak" has been
made, the sequence is reset.

### 2.5 Aggregation Strategies

Certain application events may be too "granular" to track each time they occur
and it may not be useful to track them in such a way at all. For example,
events that are expected to be triggered rapidly during a session or a page
visit. In such cases, you may only be interested in analyzing the _visibility_
of a function, that is, whether your users are using the function those
application events originate from and possibly how they're using it.

To that end, aggregation, or buffering, strategies allow you to refine the
triggering of application events and to "roll them" into a single metric event
according to certain time constraints, like "once a day", "once an hour", or
"once an hour for each specific page".

In this section we will go over the available aggregation strategies.

#### 2.5.1 Granular Aggregation Strategy _(default)_

This is the "no-op" aggregation strategy which will allow the metric event to
be triggered for each application event so long as the remaining conditions (if
any) are met.

#### 2.5.2 Buffered Aggregation Strategy

This strategy will allow the metric event to be triggered at most once during
the period you specify. Periods, as their name depict, represent periods of
time and are covered later in this document.

For example, assume we're tracking the use of filter UI-controls like filtering
by Name or Date, and we're interested only in analyzing whether our users are
using those filters at all. Such a condition could be said in English as:

> Trigger this metric event **only once a day**.

The emphasized part is what this strategy allows you to control.

#### 2.5.3 Parametric Buffered Aggregation Strategy

This strategy is similar to the [buffered aggregation strategy](#-2.5.2
-buffered-aggregation-strategy) only that its buffering is further refined by
the data points of the metric event.

Following with our example in the previous section, what if you wanted to also
analyze which filters are the users using, and perhaps which is most the common
filter?

Such a condition could be said in English as:

> Trigger this metric event only once a day **based on which filter control is
> used**.

So, if the user decides to filter by name, that would be aggregated in a buffer
separate from the one for had she decided to filter by both name and date,
since the parameters of the events differ.

### 2.6 Periods

A period is a time data structure that represents a period of time such as "a
day", "3 hours", or "forever". Periods are passed to certain APIs to define
time constraints (like "at most once every `period`".)

## 3. Usage

_TBD_

## 4. API

_TBD_

### 4.1 `Adapter`

### 4.2 Metrics and Application Events

#### 4.2.1 `MetricSpecification`
#### 4.2.2 `DataPoint`

### 4.3 Event Sequences

#### 4.3.1 `EventSequence`
#### 4.3.2 `EventSequence.Any`
#### 4.3.3 `EventSequence.Ordered`

### 4.4 Aggregation Strategies

#### 4.4.1 `GranularStrategy`
#### 4.4.2 `BufferedStrategy`
#### 4.4.3 `ParametricBufferedStrategy`

### 4.5 `Period` primitives

## License

Copyright 2017 Ahmad Amireh <ahmad@amireh.net>.

This library is licensed under the MIT license.
