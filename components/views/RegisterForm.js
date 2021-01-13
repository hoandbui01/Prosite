export default () => `
<h2>Please Enter All Required Fields</h2>
<br>
<br>
<br>
<div class="body">
    <div class="form-container">
        <form>
        <h2>Register With Us</h2>
        <div class="form-control">
            <label for="email">Email</label>
            <input type="text" id="email" placeholder="Enter email" />
            <small>Error message</small>
        </div>
        <div class="form-control">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" />
            <small>Error message</small>
        </div>
        <div class="form-control">
            <label for="password2">Confirm Password</label>
            <input
            type="password"
            id="confirmPassword"
            placeholder="Enter password again"
            />
            <small>Error message</small>
        </div>
        <button type="submit" class="btn register">Submit</button>
        <div class="home-form-info">
            <p>Already Registered?</p> 
            <a href="/">Login</a>
            </div>
        </form>
    </div>
</div>
`;