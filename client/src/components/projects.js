import React, { Component } from  "react";
import { Tab, Tabs, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from "react-mdl";

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
            {/*Project 1*/}
                <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
                    <CardTitle style={{color: "#fff", height: "176px", background: "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover"}}> React Project 1</CardTitle>
                        <CardText>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        </CardText>
                        <CardActions>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}>
                            <IconButton name="share" />
                        </CardMenu>
                </Card>

                 {/*Project 2*/}
                 <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
                    <CardTitle style={{color: "#fff", height: "176px", background: "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover"}}> React Project 2</CardTitle>
                        <CardText>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        </CardText>
                        <CardActions>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}>
                            <IconButton name="share" />
                        </CardMenu>
                </Card>

                 {/*Project 3*/}
                 <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
                    <CardTitle style={{color: "#fff", height: "176px", background: "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover"}}> React Project 2</CardTitle>
                        <CardText>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        </CardText>
                        <CardActions>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}>
                            <IconButton name="share" />
                        </CardMenu>
                </Card>
                </div>
            )
        }  else if (this.state.activeTab === 1) {
            return(
                <Card shadow={5} style={{minwidth: "450", Margin: "auto"}}>

                </Card>
            )
        } else if (this.state.activeTab === 2) {
            return(
                <Card shadow={5} style={{minwidth: "450", Margin: "auto"}}>

                </Card>
            )
        } else if (this.state.activeTab === 3) {
            return(
                <Card shadow={5} style={{minwidth: "450", Margin: "auto"}}>

                </Card>
            )
        }

    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>HTML/CSS</Tab>
                </Tabs>
                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>

            </div>    
        );
    }
}


export default Project;