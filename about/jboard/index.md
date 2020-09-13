---
title: Judicial Board
weight: null
---

# Judicial Board

The Judicial Board is the judicial branch of the UCLA Undergraduate Students Association (USA). Serving in a similar capacity as the United States Supreme Court, the Judicial Board primarily adjudicates disputes involving infractions of the USA Constitution, Bylaws, and Election Code. Additionally, the Judicial Board serves as a board of appeals concerning decisions made by the Elections Board.

The Judicial Board is a reactionary institution and can only exercise its powers following a formal request via a petition. In order to file a petition, please complete a Petition for Consideration per the guidelines outlined in the document and the Official Rules of the Judicial Board. Both documents can be found [below](#documents).

- Email: <uclajudicialboard@gmail.com>
- Advisor: Orlando Luna (105 Kerckhoff)

# Documents

- [Petition for Consideration](/docs/Petition%20for%20Consideration.docx)
- [Petition for Consideration for Non-Adversarial Cases](/docs/Petition%20for%20Consideration%20(NA).docx)
- [The Official Rules of the Judicial Board](/docs/Official%20Rules%20of%20the%20Judicial%20Board.pdf)
- [List of Valid Objections](/docs/ObjectionList.pdf)

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
{% for child in collections.jboard | sort(true, true, 'fileSlug') %}
{% set year = child.fileSlug | float %}
{% if year > 0 %}
<li><a href="{{ child.url }}">{{ year }}&ndash;{{ year + 1 }}</a>
{% endif %}
{% endfor %}
<li><a href="old">Previous terms</a>
</ul>

If you believe there is a document missing, please [contact the webmaster](mailto:usacwebmaster@asucla.ucla.edu).
