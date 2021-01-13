export default () => `
<h2>Update Current Project</h2>
<br>
<br>
<br>
<div class="row">
    <div class="col-75">
        <div class="">
        <form>

        <div class="row">
        <div class="col-50">
            <h3>Site Info</h3>
            <label for="scode"><i class="fa fa-user"></i> Site Code *</label>
            <input type="text" id="scode" name="scode" placeholder="Site Code" required>

            <label for="sname"><i class="fa fa-user"></i> Site Name</label>
            <input type="text" id="sname" name="sname" placeholder="Site Name">

            <label for="slatlong"><i class="fas fa-map-marked"></i> Lat & Long</label>
            
            <input type="number" id="slat" name="slat" placeholder="Latitude">

            <input type="number" id="slong" name="slong" placeholder="Longitude">
            
            <br><br>
            <label for="slatlong"><i class="fas fa-broadcast-tower"></i> Structural Type</label>

            <input type="text" id="stype" name="stype" placeholder="Structural Type">

            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>

            <input type="text" id="address" name="address" placeholder="542 W. 15th Street">
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="New York">

            <div class="row">
            <div class="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY">
            </div>
            <div class="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="10001">
            </div>
            </div>
        </div>

        <div class="col-50">
            <h3>Project Info</h3>
            <label for="fname">Project Name</label>
            <input type="text" id="projectName" name="projectname" placeholder="Project Name">

            <label for="cname">Customer Name</label>
            <input type="text" id="customer" name="cname" placeholder="Customer Name">

            <label for="status">Status</label>
            <select name="status" id="status">
                <option value=""></option>
                <option value="New">New</option>
                <option value="Forecast">Forecast</option>
                <option value="Start">Start</option>
                <option value="WIP">WIP</option>
                <option value="Complete">Complete</option>
            </select>
            <br>
            <br>
            <div class="row">
            <div class="col-50">
                <label for="start">Start</label>
                <input type="date" id="startDate" placeholder="2018">
            </div>

            <div class="col-50">
                <label for="complete">Complete</label>
                <input type="date" id="completeDate" placeholder="2018">
            </div>

            <br>
            <br>

            <div class="col-50">
                <label for="note">Note</label>
                <input type="text" id="note" name="note" placeholder="Enter any detail note">
            </div>
            </div>
        </div>

        </div>
        <label>
        <input type="checkbox" checked="checked" name="enotification"> Email and SMS Project notification
        </label>
        <input type="submit" value="Update Project" class="btn updateProject">
        </form>
            </div>
    </div>


</div>
`;

