export default () => `

<h2>Project Tasks</h2>
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
<br>
<br>
<br>
<form id="form">
    <input type="text" class="input" id="input" placeholder="Enter your task" autocomplete="on">

    <ul class="task" id="task"></ul>

</form>

<small>Left click to toggle completed. <br> Right click to delete task</small>
<ul id="task-list">
    
</ul>


`;