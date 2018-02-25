# Full Metal Alchemy

Full Metal Alchemy is a high-level analytics library for refining raw
application events into meaningful metrics. Its purpose is to help shape,
aggregate, or buffer events to provide you with better insight from the events
that are eventually submitted to your analytics provider.

The library is agnostic to your analytics provider (e.g. Google Analytics or
Mixpanel) since it operates at a layer between your application code and the
one that submits events to that backend.

## How it works

The heart of Full Metal Alchemy is in the [[refine]] routine which takes as
input a bunch of events triggered by your application, such as UI events, and
runs them through a set of refinement rules called [[metrics | Metric]]. A
metric can produce a [[metric point | MetricPoint]] which is the refined
version of the source event(s) and it is what you end up submitting to your
backend.

The next section goes over those concepts and later sections show how to
utilize them, or you can choose to jump to the [[usage | ./README.md#usage]]
section right away if you're feeling adventurous.

## Concepts

### Application events

An application event represents a micro-interaction with some function of your
application. In itself such an event may not be useful to track, perhaps
because it's too fine-grained and would end up cluttering your reports, or that
it doesn't capture the whole picture of the interaction (e.g. it needs to be
correlated with other events to do so.)

Examples of such events can include:

- pressing a keybinding to trigger some UI function like a Search widget
- performing a sequence of interactions with a UI widget like a Filter control
- a page visit
- a call to an API with certain parameters

If you're adding FMA to an existing analytics architecture, these events would
be what you're already submitting to the backend. However, with FMA they are
considered "raw" events that we want to further refine into useful metrics.

Let's look at metrics now.

### Metrics and points

A metric represents an interaction with your application **that you want to
track and analyze**. It is defined as a set of rules to apply over one or more
raw application events to produce _points_.

Points are produced when certain application events are triggered and can
contain data from application events (or the [[context | ./README.md
#application-context]] as we'll see later) but more interestingly, their
production can be _conditioned_ using _constraints_.

Constraints are the "brains" of metrics and they're probably the reason you'd want to use the library, so let's learn about them.

### Constraints

A constraint is a group of functions that are defined on a metric to answer the
following questions:

1. Is an application event, with its data, relevant to the metric?
2. Can a point be produced?

To answer those questions, a constraint maintains a state object and has the
ability to adjust it every time an event is triggered. Thus, its answer can
change from an event to another.

Constraints can provide a wide variety of control. For example, we can
condition a metric to produce a point at most once an hour, which would be
ideal for granular events that are expected to be triggered rapidly during a
session. In this case, we're only interested in the _visibility_ of a function
and not in how many times it's used.

You can browse the available constraints in the navigation to the left. You can
also create your own constraints as explained in its [[api documentation |
Constraint]].

### Application context

For practicality purposes, FMA accepts an arbitrary dependency to expose to
[[constraints | Constraint]] and to [[data point evaluators |
~Metric.dataPoints]]. This dependency is referred to as the context
and it can contain **whatever data you may need to produce points**.

The context is particularly useful when modeling UI interactions; for example
if you're on a page for a specific product and you want all the points produced
while on that page to have the relevant `productId`, you aren't required to
attach such a data point to _every_ event you trigger. Instead, you would
define it once on the context object (e.g. at the time of page visit) and then
reference that context for the product id when you produce the point.

Further, the context can be modified during [[refinement | refine]] by
constraints you implement and is yielded back to you to re-inject in your
application

### Data points

A data point refers to a single piece of data you want to attach to a metric
point when it's produced. Those points can be extracted from application events
or the context, or just have a pre-defined static value.

## Usage

For a start we need to define the metrics we want to track. The definition of a
metric is described in detail [[here | Metric]] but for now we'll use a minimal
definition:

```javascript
const metrics = [
  {
    name: 'User logged in',
    events: [
      'logged-in'
    ]
  }
]
```

Before we get to [[refine]] we need to create an initial state for the metrics
and their constraints using the the [[createState]] API.

```javascript
import { createState } from 'full-metal-alchemy'

const metrics = ... // from before

let metricState = createState(metrics)
```

Now we're ready to start producing points. We'll feed [[refine]] with the
metric state we've prepared along with some application events:

```javascript
import { refine } from 'full-metal-alchemy'

const metricEvents = ... // from before
let metricState = ...    // from before

// assume we got those from the application somehow:
const events = [
  { name: 'logged-out' },
  { name: 'logged-in' }
]

// run them through and produce points eligible for submission:
const nextMetricState = refine(metricState, events)
```

To see if any points were produced, you can inspect the [[.points |
~MetricState.points]] property of the [[metric state | MetricState]]:

```javascript
const pointsToSubmit = nextMetricState.points

// perhaps you'd submit them immediately:
pointsToSubmit.forEach(point => {
  analyticsAdapter.submit({
    name: point.name
    data: point.data
  })
})
```

Finally, be sure to grab a reference to the advanced state before the next call
to refine:

```javascript
metricState = nextMetricState
```

That should be the primary flow. Keep in mind that the APIs are immutable; they
won't have side-effects on any of the input parameters. For this reason it is
necessary to keep a reference to the "next" state and feed it as input to the
next call.

## Where to go from here

Look into the [[metric definition | Metric]] in more detail then perhaps go
over the available constraints which you can find in the sidebar.

If you're looking to write your own constraints, consult the [[Constraint]]
documentation.

## License

Copyright 2018 Ahmad Amireh <ahmad@amireh.net>.

This library is licensed under the MIT license.
