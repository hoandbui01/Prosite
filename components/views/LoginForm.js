export default () => `
<div class="lform">
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
      </form>
    </div>
`;