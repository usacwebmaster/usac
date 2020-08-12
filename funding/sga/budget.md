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
		<th>expense account
		<th>event number
	<tr>
		<td><samp>( 1 -</samp>
		<td><samp>4100 -</samp>
		<td><samp>190 -</samp>
		<td><samp>1901 -</samp>
		<td><samp>6220 -</samp>
		<td><samp>00000 )</samp>
	<tr>
		<td><samp>( x -</samp>
		<td><samp>xxxx -</samp>
		<td><samp>xxx -</samp>
		<td><samp>xxxx -</samp>
		<td><samp>xxxx -</samp>
		<td><samp>xxxxx )</samp>
</table>

## Historical Budget Reports

{% from 'doclist.html' import doclist %}
- [{{ docs._schoolYear }}](/docs/budget.pdf)
{% for year, _ in docs.budget -%}
- [{{ year }}]({{ docs.budget[year][0].url }})
{% endfor %}
