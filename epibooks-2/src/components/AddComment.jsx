import { Form } from "react-bootstrap";
import { Component } from "react";

class AddComment extends Component{

    state = {
        comment : "",
    }

    postComment = async ()=>{
        try {

            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", 
            {   method: "POST",
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NGRkNWU3MzczODAwMTUzNzQ0MDYiLCJpYXQiOjE2NzUzNDYyODcsImV4cCI6MTY3NjU1NTg4N30.oaVIhmVyxOUdFP1mjGKJ2ncKPQY6Fz8qEyWjoCTuLcU",
                "Content-Type": "application/json"
                },
                body: JSON.stringify(this.state.comment)
            })
            if (response.ok) {
                this.setState({
                    comment: ""
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    render()
    {
        return (
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="
                    username" />
                </Form.Group>
                <Form.Select aria-label="Default select example">
                    <option>Rate the Book</option>
                    <option value="1">One ¬_¬</option>
                    <option value="2">Two =.=</option>
                    <option value="3">Three ~_~</option>
                    <option value="3">Four ^_^</option>
                    <option value="3">Five ^0^</option>
                </Form.Select>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
          );
    }
}

export default AddComment