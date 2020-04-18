---
title: Budget Report
---

# SGA &mdash; Budget Report

## View your Student Group's Account Budget and Balances

1. Go to the [SGA Budget Report](/docs/budget.pdf)
2. Click Search
3. In Search type in **your Department's name** or **your Department's four digit number** and click search
4. Click New Search for a different search

## How to Read Your Budget Report

1. On the left side of the report you will find your account code information first by fund number, then the division number of the funding source, the respective event number, and finally the expense line item account number.
2. On the bottom left-hand corner of the report is the run date. This date will change each week as we update the report. The assigned report name is located in the bottom center of the report with the page number in the right-hand corner.

## Sample Base Budget Account Numbers

<table class="acctnum-demo">
	<tr>
		<th>entity
		<th>fund
		<th>division
		<th>department
		<th>expense<br>account
		<th>event<br>number
	<tr>
		<td>( 1 -
		<td>4100 -
		<td>190 -
		<td>1901 -
		<td>6220 -
		<td>00000 )
	<tr>
		<td>( x -
		<td>xxxx -
		<td>xxx -
		<td>xxxx -
		<td>xxxx -
		<td>xxxxx )
</table>

## Historical Budget Reports

{% from 'doclist.html' import doclist %}
- [{{ docs._schoolYear }}](/docs/budget.pdf)
{% for year, _ in docs.budget -%}
- [{{ year }}]({{ docs.budget[year][0].url }})
{% endfor %}
