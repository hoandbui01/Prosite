export default () => `

    <div id="home-overview">
    <h1 class="title">Prosite</h1>
    <img src="http://www.fielddailies.com/wp-content/uploads/s2-1350x450.png" class="home-banner" />
    
    <div class="form-container">
        <form>
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
            <input type="submit" value="Login" class="btn login">
            <div class="home-form-info">
            <p>Don't have an account yet?</p> 
            <a href="/RegisterForm">Register</a>
            </div>
        </form>
    </div>
`