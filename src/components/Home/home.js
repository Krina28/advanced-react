import React, { Component } from "react";
import Counter from "./counter";
import CounterHooks from "./counter_hooks";
import Welcome from "./welcome";
import PostList from "./list";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <h2>Home</h2>
                <Card style={{ maxWidth: "400px", padding: "10px" }}>
                    <CardHeader
                        title="Counter"
                        subheader="Class base counter"
                    />
                    <Counter />
                </Card>
                <Card style={{ maxWidth: "400px", padding: "10px" }}>
                    <CardHeader
                        title="Counter"
                        subheader="React Hooks base counter"
                    />
                    <CounterHooks />
                </Card>
                <Card style={{ maxWidth: "400px", padding: "10px" }}>
                    <CardHeader title="Welcome to React World" />
                    <Welcome />
                </Card>
                <PostList />
            </React.Fragment>
        );
    }
}

export default Home;
