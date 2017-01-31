---
layout: page
title: <span>Lib</span><span>/</span><span>Lab</span><span> Fellows</span>
permalink: /fellows/
tags:
    - current
id: fellows
---

{% if page.tags contains "apply" %}

{% include apply.md %}

{% endif %}

### 2016

{% assign fellows = site.data.contributors | where: "role", "fellow" | where: "year", 2016 %}

<div class="fellows-gallery">
{% for fellow in fellows %}

{% if fellow.image_path %}
    {% assign image_path = fellow.image_path %}
{% else %}
    {% assign image_path = site.owner.image_path %}
{% endif %}

<div class="fellow">
<div class="avatar" style="background-image:url({{ image_path | absolute_url }});" alt="{{ author.name }}"></div>
<div class="bio">
{% if fellow.bio %}
{{ fellow.bio | prepend: "<p>" | append: "</p>" }}
{% else %}
{{ fellow.name | prepend: "<h3>" | append: "</h3>" }}
{% endif %}
</div>
<div class="clearfix"></div>
</div>

{% endfor %}