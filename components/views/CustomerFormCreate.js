export default () => `
<h2>New Customer</h2>
<br>
<br>
<br>
<div class="body">
    <form id="register" method="POST" action="">
    <label for="customer">Customer Name</label>
    <input type="text" id="fname" name="customer" placeholder="Customer Name">

    <label for="customer-contact">Customer Contact</label>
    <input type="text" id="customercontact" name="customercontact" placeholder="Customer Contact">


    <input type="submit" value="Add New Customer" class="btn">
    </form>
</div>
`;

