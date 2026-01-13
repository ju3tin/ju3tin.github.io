---
layout: null
permalink: /json/timeline00.json   # optional but recommended
---
{
  "title": {
    "media": { ... },
    ...
  },
  "events": [
    {% for event in site.data.events %}
    {
      "media":     {{ event.media     | jsonify }},
      "start_date": {{ event.start_date | jsonify }},
      "text":      {{ event.text      | jsonify }}
      {% if event.background %},
      "background": {{ event.background | jsonify }}{% endif %}
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ]
}
