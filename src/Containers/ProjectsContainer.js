import React from 'react'
import {
    Card, CardImg, CardText, CardBody, CardGroup,
    CardTitle, Button
  } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'
import { SiReact } from "react-icons/si";
import { SiRails } from "react-icons/si";

class ProjectsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.location.state || {activeScreen: "PROJECTS"}; // In the ||, set default state.
        this.props.history.replace(this.props.location.pathname, this.state); // Update state of current entry in history stack.
      }

      componentDidUpdate(prevProps, prevState, snapshot) {
        // If Route has changed, update state (Ensures consistency between location state and Component state).
        if (this.props.location !== prevProps.location) {
          this.setState(this.props.location.state);
        }
    }

    render(){
        return (
            <>
            <div className="container" id="portfolio">
                <h3>PROJECTS</h3>
                <br/>
                <p className="left">
                    Featured projects from Flatiron are below.  All projects are available on <b><a target="_blank" rel="noopener noreferrer" href="https://github.com/catd825/">Github</a>.</b>
                </p>
                <div>
                    <CardGroup>
                        <Card className="padding">
                            <CardImg top width="100%" src="https://j.gifs.com/915YWB.gif" alt="budgetBuddy" />
                            <CardBody>
                            <CardTitle><b>budgetBuddy</b></CardTitle>
                            <CardText>
                                A simple way to create and modify monthly budgets and transactions.  This is a capstone project for the Flatiron School.
                                <br/><br/>
                                <p><b>Technologies Used:</b><br/>
                                    <SiReact size={30}/>&nbsp;&nbsp;<SiRails size={30}/>
                                </p>
                            </CardText>
                            <b><a href="https://youtu.be/xrYvw2IYEmI" target="_blank" rel="noopener noreferrer">Demo</a> | <a href="https://github.com/catd825/budgetBuddy_frontend" target="_blank" rel="noopener noreferrer">Github</a></b>
                            </CardBody>
                        </Card>

                        <Card className="padding">
                            <CardImg top width="100%" src="https://j.gifs.com/L7oDK4.gif" alt="feelingsOverflow" />
                            <CardBody>
                            <CardTitle><b>feelingsOverflow</b></CardTitle>
                            <CardText>
                            Forum-based app in which users post, comment, and vote on mental health questions and concerns.
                                <br/><br/>
                                <p><b>Technologies Used:</b><br/>
                                    <SiReact size={30}/>&nbsp;&nbsp;<SiRails size={30}/>
                                </p>
                            </CardText>
                            <b><a href="https://youtu.be/FfzPzYYGqw0" target="_blank" rel="noopener noreferrer">Demo</a> | <a target="_blank" rel="noopener noreferrer" href="https://github.com/catd825/feelingsOverflow-front-end">Github</a></b>
                            </CardBody>
                        </Card>

                        <Card className="padding">
                            <CardImg top width="100%" src="https://j.gifs.com/NLqWyN.gif" alt="fluffy tail" />
                            <CardBody>
                            <CardTitle><b>Fluffy Tail</b></CardTitle>
                            <CardText>
                            Fluffy tail is a Ruby on Rails app that allows you to browse and favorite pets to adopt in the NY Metro area. 
                                <br/><br/>
                                <p><b>Technologies Used:</b><br/>
                                <SiRails size={30}/>
                                </p>
                            </CardText>
                            <b><a href="https://youtu.be/scLpLe3zIxI" target="_blank" rel="noopener noreferrer">Demo</a> | <a href="https://github.com/catd825/fluffy_tail" target="_blank" rel="noopener noreferrer">Github</a></b>
                            {/* <Button>Button</Button> */}
                            </CardBody>
                        </Card>
                    </CardGroup>
                    <br/>
                    <Button style={{ color: 'white' }} to="/home" tag={Link}>return to main</Button>
                </div>
            </div>
            <br/><br/><br/><br/>
            </>
          );
    }
    
}

export default withRouter(ProjectsContainer)