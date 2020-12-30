export default () => `
<h2>Project Detail</h2>
<br>
<br>
<br>
<br>
<div class="dropdown">
	<button class="dropbtn">Project Option</button>
	<div class="dropdown-content">
		<a href="#">New</a>
		<a href="#">Edit</a>
		<a href="#">Delete</a>
	</div>
</div>
<br>
<br>
<br>

<div class="project-table-detail">
	<table class="project-detail" id="project-detail">
		<div class="bold">
			<tr>
				<th>Customer</th>
				<th>Project Name</th>
				<th>Site Code</th>
				<th>Project Status</th>
			</tr>
		</div>
		<tr>
			<td>AT&T</td>
			<td>NSB</td>
			<td>672481</td>
			<td>Wave 2 Modernization</td>
		</tr>
	</table>
</div>

<div>
	<table>
	<caption>Project Info</caption>
		<tr>
			<td></td>
			<th scope="col">Field</th>
		</tr>

		<tr>
			<th scope="row">Site Name</th>
			<td>Uphill Mountain</td>
		</tr>

		<tr>
			<th scope="row">Lat & Long</th>
			<td>24.348853, -89.248842</td>
		</tr>

		<tr>
			<th scope="row">Address</th>
			<td>2874 Clover Hill Rd, Nashville, TN 37211</td>
		</tr>

		<tr>
			<th scope="row">Structural Type</th>
			<td>Monopole</td>
		</tr>

		<tr>
		<th scope="row">Start</th>
		<td>12/30/2020</td>
		</tr>

		<tr>
		<th scope="row">Complete</th>
		<td>1/26/2021</td>
		</tr>
	</table>
</div>

`;