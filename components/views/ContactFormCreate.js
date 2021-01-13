export default () => `
<h2>New Contact</h2>
<br>
<br>
<br>
<div class="body">
    <form action="action_page.php">

        <label for="fname">First Name</label>
        <input class="form-control" type="text" id="fname" name="firstname" placeholder="Your name..">

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name..">

        <label for="pnumber">Phone Number</label>
        <input type="pnumber" id="pnumber" name="pnumber" placeholder="Your phone number..">

        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email..">


        </select>

        <input type="submit" value="Create New Contact" class="btn">

    </form>
</div>
`
