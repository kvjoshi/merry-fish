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
import Prod_entry from "./components/prod_entry/prod_entry"
import Prod_list from "./components/prod_list/prod_list"

function App() {
    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: "400px" }}>
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
            </div>
        </Container>
    )
}

export default App
