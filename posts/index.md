---
title: Announcements
---

{% for post in (collections.all | children(page.url)) %}
<article>

## {{ post.data.title }}
<time datetime="{{ post.date | isodate }}">{{ post.date | humandate }}</time>

{{ post.templateContent | safe }}

</article>
{% endfor %}
