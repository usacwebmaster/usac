---
title: Miscellaneous
weight: 2
---

# Miscellaneous Documents

## Resolutions

- [The USAC Resolution Guide](/docs/USAC%20Resolution%20Guide.pdf)

## Charters

Guiding documents for various USAC initiatives.

- [Charter for the Good Clothes Good People Basic Needs Referendum](/docs/GCGP%20Charter.pdf)

## Statements

Statements made by the Undergraduate Students Association Council.

- [USC/UCLA Joint Statement on Campus Sexual Assault](/docs/USC_UCLA%20Joint%20Statement%20on%20Campus%20Sexual%20Assault.pdf)

## Clarification of Facts

Clarifications deemed necessary by the Undergraduate Students Association Council.

- [Daily Bruin: Thursday, October 7, 2010: "Unused fees end in USAC surplus"](/docs/DB%2010-7-2010.pdf)

## Historical Documents

Various historical documents from the recent and not so recent past.

<ul>
{% for year, cat in docs.misc %}
{% for doc in cat %}
<li><a href="{{ doc.url }}">{{ year.split('-')[1] }} &mdash; {{ doc.name }}</a>
{% endfor %}
{% endfor %}
<li><a href="/docs/roster.pdf">Historical Roster of Elected Student Body Officers</a>
</ul>
