export default () => `
<div class="detail-info">
<h2>Please select a project first</h2>
<a href="/ProjectList">Project List</a>
</div>


<div class="detail-page">
	<div class="project-title">
		<h2 id="projectCode"></h2>
		<h2 id="projectSiteName"></h2>
		<h2 id="projectNameTop"></h2>
	</div>
	<div class="project-btn-wrap">
		<button class="project-btn" id="project-details-btn">Project Details</button>
		<button class="project-btn" id="project-task">Project Tasks</button>
	</div>

		<div id="project-details-container">
				<div class="dropdown">
					<button class="dropbtn">Project Option</button>
					<div class="dropdown-content">
						<a href="./ProjectFormCreate">New</a>
						<a href="./ProjectFormUpdate">Edit</a>
						<a href="#">Delete</a>
					</div>
				</div>
				<br>
				<br>

			<div class="project-table-detail">
			<caption>Project Info</caption>
				<table class="project-detail">
					<tbody id="project-detail"></tbody>
				</table>
			</div>
		</div>

	<div id="project-task-container">
		<form id="form">
			<input type="text" class="input task-input" id="input" placeholder="Enter your task" autocomplete="on">
			<div class="add-task-wrap">
			<button class="project-btn" id="add-task">Add Task</button>
			</div>
		</form>

		
		<ol id="task-list">
			
		</ol>
	</div>
</div>

`;
