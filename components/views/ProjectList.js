export default () => `
<h2>Projects List Selection</h2>
<br>
<br>
<br>
<br>
<br>
<div class="flex-center-between">
	<div class="dropdown">
		<button class="dropbtn">View by Status</button>
		<div class="dropdown-content">
			<a href="#">New</a>
			<a href="#">Forecast</a>
			<a href="#">Start</a>
			<a href="#">WIP</a>
			<a href="#">Completed</a>
			<a href="#">Issue</a>
		</div>
	</div>
	<a href="./ProjectFormCreate" class="project-btn">Create New Project</a>
</div>
<br>
<br>
<br>
<table class="project-table-list" id="project-table-list">
	<thead>
		<tr>
			<th>Customer</th>
			<th>Project Name</th>
			<th>Site Code</th>
			<th>Status</th>
			<th>Start</th>
			<th>Complete</th>
		</tr>
	</thead>
	<tbody id="projectList"></tbody>
</table>

`;
