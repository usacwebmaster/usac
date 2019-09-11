---
title: Ex-Officio Members
weight: -1
---

# Ex-Officio Members

<div class="people columns">

{% for member in ex_officio %}
<section>
<main>

## {{ member.name }}
### {{ member.position }}

<address>

<{{ member.email }}><br>
{{ member.ext }}<br>
{{ member.addr }}

</address>

</main>
</section>
{% endfor %}

</div>
