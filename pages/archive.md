---
layout: default
title: Archive
permalink: /archive/
---

# Archive

- {% for y in site.years %}
  {% if y != site.current_year %}
  [{{ y }}](/{{ y }}/)
  {% endif %}
  {% endfor %}
