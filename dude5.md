---
layout: null
permalink: /json/timeline00.json
---
{
  "title": {
    "media": {
      "url": "/assets/img/bg-office2.jpg",
      "caption": "Justin Grierson in Hackathon",
      "credit": "flickr/<a href='http://www.flickr.com/photos/tm_10001/'>tm_10001</a>"
    },
    "text": {
      "headline": "Justin Grierson<br/>1979 – Still Here",
      "text": "<p>My love for Computing started in 1984 when I was given a Christmas present: Fisher-Price My First Computer.</p>"
    },
    "background": {
      "url": "/assets/img/bg-office2.jpg"
    }
  },
  "events": [
    {% for event in site.data.events %}
    {
      "media": {{ event.media | jsonify }},
      "start_date": {{ event.start_date | jsonify }},
      "text": {{ event.text | jsonify }}
      {% if event.background %},
      "background": {{ event.background | jsonify }}{% endif %}
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ]
}
