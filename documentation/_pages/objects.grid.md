---
title: "Objects: grid"
layout: documentation
permalink: "/objects/grid/"
---

<div class="au-c-content">

## Grid

`au-o-grid`: Main grid container
`au-o-grid__item`: Grid item (default is full width)

<div class="au-o-box au-o-box--flush">
  <div class="au-o-grid">
    <div class="au-o-grid__item">
      <div class="au-o-box au-o-box--small au-d-component au-u-text-center">
        <p class="au-u-h4">Single grid item</p>
      </div>
    </div>
  </div>
</div>

## Combined with width utilities

`au-u-1-2`: Available widths are defined with fractions (defined in `_s-global.scss`)

<div class="au-o-box au-o-box--flush">
  <div class="au-o-grid">
    <div class="au-o-grid__item au-u-1-2">
      <div class="au-o-box au-o-box--small au-d-component au-u-text-center">
        <p class="au-u-h4">Half width grid item (.au-u-1-2)</p>
      </div>
    </div>
    <div class="au-o-grid__item au-u-1-2">
      <div class="au-o-box au-o-box--small au-d-component au-u-text-center">
        <p class="au-u-h4">Half width grid item (.au-u-1-2)</p>
      </div>
    </div>
  </div>
</div>

## Responsive

`au-u-1-2@medium`: Add breakpoints to create a responsive grid (defined in `_s-global.scss`)

<div class="au-o-box au-o-box--flush">
  <div class="au-o-grid">
    <div class="au-o-grid__item au-u-1-2@small au-u-1-3@medium">
      <div class="au-o-box au-o-box--small au-d-component au-u-text-center">
        <p class="au-u-h5">Responsive width grid item (.au-u-1-2@small .au-u-1-3@medium)</p>
      </div>
    </div>
    <div class="au-o-grid__item au-u-1-2@small au-u-2-3@medium">
      <div class="au-o-box au-o-box--small au-d-component au-u-text-center">
        <p class="au-u-h5">Responsive width grid item (.au-u-1-2@small .au-u-1-3@medium)</p>
      </div>
    </div>
  </div>
</div>

## Gutter modifier

`au-o-grid--flush`: no gutter

<div class="au-o-box au-o-box--flush">
  <div class="au-o-grid au-o-grid--flush">
    <div class="au-o-grid__item au-u-1-2@small au-u-1-3@medium">
      <div class="au-o-box au-o-box--small au-d-component au-u-text-center">
        <p class="au-u-h5">First grid item</p>
      </div>
    </div>
    <div class="au-o-grid__item au-u-1-2@small au-u-2-3@medium">
      <div class="au-o-box au-o-box--small au-d-component au-u-text-center">
        <p class="au-u-h5">Second grid item</p>
      </div>
    </div>
  </div>
</div>

`au-o-grid--tiny`: tiny gutter

<div class="au-o-box au-o-box--flush">
  <div class="au-o-grid au-o-grid--tiny">
    <div class="au-o-grid__item au-u-1-2@small au-u-1-3@medium">
      <div class="au-o-box au-o-box--small au-d-component au-u-text-center">
        <p class="au-u-h5">First grid item</p>
      </div>
    </div>
    <div class="au-o-grid__item au-u-1-2@small au-u-2-3@medium">
      <div class="au-o-box au-o-box--small au-d-component au-u-text-center">
        <p class="au-u-h5">Second grid item</p>
      </div>
    </div>
  </div>
</div>

`au-o-grid--small`: small gutter

<div class="au-o-box au-o-box--flush">
  <div class="au-o-grid au-o-grid--small">
    <div class="au-o-grid__item au-u-1-2@small au-u-1-3@medium">
      <div class="au-o-box au-o-box--small au-d-component au-u-text-center">
        <p class="au-u-h5">First grid item</p>
      </div>
    </div>
    <div class="au-o-grid__item au-u-1-2@small au-u-2-3@medium">
      <div class="au-o-box au-o-box--small au-d-component au-u-text-center">
        <p class="au-u-h5">Second grid item</p>
      </div>
    </div>
  </div>
</div>

`au-o-grid--large`: large gutter

<div class="au-o-box au-o-box--flush">
  <div class="au-o-grid au-o-grid--large">
    <div class="au-o-grid__item au-u-1-2@small au-u-1-3@medium">
      <div class="au-o-box au-o-box--small au-d-component au-u-text-center">
        <p class="au-u-h5">First grid item</p>
      </div>
    </div>
    <div class="au-o-grid__item au-u-1-2@small au-u-2-3@medium">
      <div class="au-o-box au-o-box--small au-d-component au-u-text-center">
        <p class="au-u-h5">Second grid item</p>
      </div>
    </div>
  </div>
</div>

## Fill and aligment modifiers

`au-o-grid--middle`: Align all grid items to the middles of each other.
`au-o-grid--bottom`: Align all grid items to the bottoms of each other.
`au-o-grid--center`: Fill up the grid system from the centre.
`au-o-grid--right`:  Fill up the grid system from the right-hand side.
`au-o-grid--reverse`: Reverse the rendered order of the grid system.
`au-o-grid--stretch`: Stretch the grid in the available space.
`au-o-grid--fixed`: Fix the grid in the available space (height and width).

<div>
