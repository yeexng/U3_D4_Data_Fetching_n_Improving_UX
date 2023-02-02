import { Component } from "react"
import { Card } from "react-bootstrap"
import AddComment from "./AddComment"

class CommentArea extends Component {

    state = {
        comment: []
    }

    fetchComment = async () =>{
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, 
            {  
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NGRkNWU3MzczODAwMTUzNzQ0MDYiLCJpYXQiOjE2NzUzNDYyODcsImV4cCI6MTY3NjU1NTg4N30.oaVIhmVyxOUdFP1mjGKJ2ncKPQY6Fz8qEyWjoCTuLcU"
                }
            })
            console.log(response)
            if (response.ok) {
                let data = await response.json();
                console.log(data)

                this.setState({
                    comment: data,
                })
                
            }else{
                console.log("error")
            }

        } catch (error) {
            console.log(error)
        }
    }
    componentDidMount(){
        this.fetchComment()
    }

    render() {
        return (

        <Card>
            {this.state.comment.map((res)=>{
                return(

                    <Card.Body key={res._id}>
                        <Card.Title>{res.author}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{res.createdAt}</Card.Subtitle>
                        <Card.Text>{res.comment}</Card.Text>
                    </Card.Body>

                )       
            })}
            {/* <AddComment /> */}
        </Card>

        )
    }
}


export default CommentArea