export default () => `
<h2>Projects List Selection</h2>
<br>
<br>
<br>
<br>
<br>
<div class="dropdown">
	<button class="dropbtn">View by Status</button>
	<div class="dropdown-content">
		<a href="#">New</a>
		<a href="#">Forecast</a>
		<a href="#">Start</a>
		<a href="#">WIP</a>
		<a href="#">Completed</a>
		<a href="#">Issue</a>
		<a href="#">Archived</a>
	</div>
</div>
<br>
<br>
<br>
<table class="project-table-list" id="project-table-list">
	<tr>
		<th>Customer</th>
		<th>Project Name</th>
		<th>Site Code</th>
		<th>Status</th>
		<th>Start</th>
		<th>Complete</th>
	</tr>
	<tr>
		<td>AT&T</td>
		<td>NSB</td>
		<td>NV1983</td>
		<td>WIP</td>
		<td>2020-12-30</td>
		<td>2021-1-20</td>
	</tr>
	<tr>
		<td>T-Mobile</td>
		<td>Anchor</td>
		<td>9NV2391C</td>
		<td>Start</td>
		<td>2020-12-20</td>
		<td>2021-1-30</td>
	</tr>
	<tr>
		<td>US Cellular</td>
		<td>Wave 2</td>
		<td>731892</td>
		<td>Start</td>
		<td>2020-12-21</td>
		<td>2021-1-15</td>
	</tr>
</table>

`;
