---
title: Ex-Officio Members
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
{{ member.ext }}<br>
{{ member.addr }}

</address>

</main>
</section>
{% endfor %}

</div>