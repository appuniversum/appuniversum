---
title: "Foundation: Colors"
layout: documentation
permalink: "/foundation/colors/"
---

​<div class="au-c-content">

All color combinations should adhere to the [WCAG 2.0 AA standard](https://www.w3.org/TR/WCAG20/).

</div>

{% for group in colors %}
<div class="au-o-box au-d-component au-u-margin-top">
  <h2 class="au-u-h4">{{group.group}} color variables</h2>
  <div class="au-u-margin-top-small">
  <ul class="au-o-grid au-o-grid--small u-margin-bottom">
    {% for color in group.colors %}<li class="au-o-grid__item au-u-1-2 au-u-1-4@small">
      <div class="au-o-box au-o-box--flush">
        <div class="au-d-swatch au-d-swatch--yellow" style="background-color: {{ color.value }}">
          <p class="au-d-swatch__name" style="color: {{ color.contrast }}">{{ color.name }}</p>
          <p class="au-d-swatch__contrast" style="color: {{ color.contrast }}">AA contrast:<br> {{color.contrast-value}}
        </div>
      </div>
    </li>{% endfor %}
  </ul>
  </div>
</div>
{% endfor %}
