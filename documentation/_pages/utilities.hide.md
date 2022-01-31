---
title: "Utilities: Hide"
layout: documentation
permalink: "/utilities/hide/"
---

<div class="au-c-content">

## Only visually hidden, available for

`.au-u-hidden-visually`

The below box is hidden only visually, but is <a href="http://snook.ca/archives/html_and_css/hiding-content-for-accessibility" target="_blank" rel="noopener">available to screen readers</a>.

<div class="au-o-box au-d-component au-u-hidden-visually">
  <p>I get picked up by screen readers.</p>
</div>

<hr />

## Both hidden visually and for screenreaders

`.au-u-hidden`

The below box is hidden both visually as for screen readers.

<div class="au-o-box au-d-component au-u-hidden">
  <p>You cannot see nor read me with a screenreader, except for in the code.</p>
</div>

<hr />

## Responsive hiding

### Hidden for screens larger than extra small
#### Visible on extra small

`.au-u-hidden-from@xsmall`

The box below is visible on extra small sizes, but hidden on larger responsive sizes:
<div class="au-o-box au-d-component au-u-hidden-from@xsmall">
  <p>Your screen width is extra small. Make your screen larger to see me disappear.</p>
</div>

### Hidden for screens larger than small
#### Visible on small screens and below

`.au-u-hidden-from@small`

The box below is visible on small sizes, but hidden on larger responsive sizes:
<div class="au-o-box au-d-component au-u-hidden-from@small">
  <p>Your screen width is small and below. Make your screen larger to see me disappear.</p>
</div>

### Hidden for screens larger than medium
#### Visible on medium screens and below

`.au-u-hidden-from@medium`

The box below is visible on medium sizes, but hidden on larger responsive sizes:
<div class="au-o-box au-d-component au-u-hidden-from@medium">
  <p>Your screen width is medium and below. Make your screen larger to see me disappear.</p>
</div>

### Hidden for screens larger than large
#### Visible on large screens and below

`.au-u-hidden-from@large`

The box below is visible on large sizes, but hidden on larger responsive sizes:
<div class="au-o-box au-d-component au-u-hidden-from@large">
  <p>Your screen width is large and below. Make your screen larger to see me disappear.</p>
</div>

</div>
