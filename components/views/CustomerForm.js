export default () => `
<h2>New Customer</h2>
Please enter your company and contact so we can notify you via email and/or SMS for all project status.
<br>
<br>
<br>
<div>
<form id="register" method="POST" action="">
<label for="customer">Customer Name</label>
<input type="text" id="fname" name="customer" placeholder="Customer Name">

<label for="customer-contact">Customer Contact</label>
<input type="text" id="customercontact" name="customercontact" placeholder="Customer Contact">


<input type="submit" value="Add New Customer" class="btn">
<input type="submit" value="Update New Customer" class="btn">
</form>
</div>
`;

