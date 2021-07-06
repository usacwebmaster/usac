---
title: Ex-Officio Members
weight: -1
---

# Ex-Officio Members

<div class="people">

{% for member in ex_officio %}
<section>
<main>

## {{ member.name }}
### {{ member.position }}

<address>

<{{ member.email }}><br>
{% if member.ext %}{{ member.ext }}<br>{% endif %}
{{ member.addr }}

</address>

</main>
</section>
{% endfor %}

</div>
