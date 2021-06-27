import React from "react"
import Signup from "./components/signup/signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./components/dashboard/dashboard"
import Login from "./components/login/Login"
import PrivateRoute from "./routes/PrivateRoute"
import ForgotPassword from "./components/forgotpassword/ForgotPassword"
import UpdateProfile from "./components/updateprofile/UpdateProfile"
import Prod_update from "./components/prod_update/prod_update"
import Prod_list from "./components/prod_list/prod_list"

function App() {
    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >

                <Router>
                    <AuthProvider>
                        <Switch>
                            <PrivateRoute exact path="/" component={Dashboard} />
                            <PrivateRoute path="/update-profile" component={UpdateProfile} />
                            <PrivateRoute path="/product" component={Prod_list} />

                            <Route path="/signup" component={Signup} />
                            <Route path="/login" component={Login} />
                            <Route path="/forgot-password" component={ForgotPassword} />
                        </Switch>
                    </AuthProvider>
                </Router>

        </Container>
    )
}

export default App
