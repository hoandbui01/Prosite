export default () => `
<h2>Please Enter Your User Account Login</h2>
<br>
<br>
<br>
<div class="body">
      <form id="lform" class="lform">
        <h2>Log in</h2>
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
        <input type="submit" value="Login" class="btn">
      </form>
    </div>
`;