---
title: Judicial Board
---

# Judicial Board

The Judicial Board (J-Board) is the judicial branch of USAC. Similar to the Supreme Court, J-Board reviews cases of actions taken among the officers, commissioners, and funding bodies to ensure compliance with the USA Constitution & Bylaws, among many other types of cases.

In order to file a petition, please complete a <q>Petition for Consideration</q> according to the guidelines listed in the <q>Official Rules of the Judicial Board.</q> Both documents can be found [below](#documents).

- Email: <uclajudicialboard@gmail.com>
- Advisor: Orlando Luna (105 Kerckhoff)

# Documents

Important documents related to the Judicial Board:

- [List of Valid Objections](/docs/ObjectionList.pdf)
- [Petitions for Consideration](/docs/petition.doc)
- [Official Rules of the Judicial Board](/docs/jboard_rules.pdf)

# Members

<div class="people">

{% for member in jboard %}
<section>
<main>

## {{ member.name }}
### {{ member.position }}

</main>
</section>
{% endfor %}

</div>

# Terms

<ul>
{% for child in collections.all | children(page.url) | sort(true, true, 'fileSlug') %}
{% set year = child.fileSlug | float %}
{% if year > 0 %}
<li><a href="{{ child.url }}">{{ year }}&ndash;{{ year + 1 }}</a>
{% endif %}
{% endfor %}
<li><a href="old">Previous terms</a>
</ul>

If you believe there is a document missing, please [contact the webmaster](mailto:usacwebmaster@asucla.ucla.edu).
