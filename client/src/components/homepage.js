import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";


class Home extends Component {
    render() {
        return (
            <div style={{ width: "100%", margin: "auto" }}>
                <Grid className="Landing-grid">
                    <Cell col={12}>
                        <img src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png" alt="Avatar" className="avatar-img" />

                        <div className="banner-text">

                            <h1>Full Stack Web Developer</h1>

                            <hr />

                            <p>HTML/CSS | Bootstrap | Javascript | React | NodeJS | MYSQL | MongoDB</p>

                            <div className="social-links">
                                
                                {/* Github */}
                                <a href="https://github.com/cdyall/" rel="noopener noreferrer" target="_blank" > <i className="fa fa-github-square" aria-hidden="true" /> </a>

                                {/* Stack Overflow*/}
                                <a href="https://stackoverflow.com/users/12244146/dyall" rel="noopener noreferrer" target="_blank" > <i className="fa fa-stack-overflow" aria-hidden="true" /> </a>

                                {/* Reddit*/}
                                <a href="https://www.reddit.com/user/CDyall" rel="noopener noreferrer" target="_blank" > <i className="fa fa-reddit-square" aria-hidden="true" /> </a>

                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/chris-dyall-aa0bba78/" rel="noopener noreferrer" target="_blank" > <i className="fa fa-linkedin-square" aria-hidden="true" /> </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>

        )
    }
}


export default Home;