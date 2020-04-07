---
title: "Foundation: colors"
layout: documentation
permalink: "/foundation/colors/"
---

​<div class="au-c-content">
    All color combinations should adhere to the [WCAG 2.0 AA standard](https://www.w3.org/TR/WCAG20/).
</div>

<div class="au-o-box au-d-component">
  <ul class="au-o-grid au-o-grid--small u-margin-bottom">
    {% for color in colors %}<li class="au-o-grid__item au-u-1-2 au-u-1-5@small">
      <div class="au-o-box au-o-box--flush">
        <div class="au-d-swatch au-d-swatch--yellow" style="background-color: {{ color.value }}"></div>
        <p class="au-u-h6">{{ color.name }}</p>
      </div>
    </li>{% endfor %}
  </ul>
</div>
