export default () => `
<h2>New Contact</h2>
Please enter your contact so we can notify you via email and/or SMS.
<br>
<br>
<br>
<div>
<form id="register" method="POST" action="">
<label for="fname">First Name</label>
<input type="text" id="fname" name="firstname" placeholder="Your name..">
<br>
<br>

<label for="lname">Last Name</label>
<input type="text" id="lname" name="lastname" placeholder="Your last name..">
<br>
<br>


<label for="email">Email</label>
<input type="email" id="email" name="email" placeholder="Your email..">
<br>
<br>

<label for="phone">Phone</label>
<input type="tel" id="number" name="number" placeholder="Your phone number..">

<br>
<br>
<label for="notification">Email/SMS Notification</label>
<input type="checkbox" id="number" name="number" placeholder="Notification">
<br>
<br>

<input type="submit" value="Add New Contact" class="btn">
<input type="submit" value="Update Contact" class="btn">

</form>
</div>
`;

