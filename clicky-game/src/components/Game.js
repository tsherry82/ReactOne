class Game extends React.Component {
    state = {
        villian,
        score: 0,
        highScore: 0,
    }

    componentDidMount() {
        this.setState({
            villian: this.randomizeArr(this.state.villian.map(thisvillian => {
                thisvillian.clicked = false;
                return thisvillian;
            }
            ))
        })
    }

    randomizeArr(arr) {
        var ctr = arr.length, temp, index;

        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = arr[ctr];
            arr[ctr] = arr[index];
            arr[index] = temp;
        }
        return arr;


    }

    targetCard = event => {
        const thisId = event.target.getAttribute("data-id");

        if (!this.state.villian.clicked) {
            console.log(this.state.villian.clicked)
            this.handleCorrect();
            const newvillian = this.state.villian.map(thisvillian => {
                if (parseInt(thisvillian.id) === parseInt(thisId)) {
                    console.log("it worked")
                    thisvillian.clicked = true;
                    console.log(thisvillian.clicked)
                }
                
                return thisvillian;
            })
            console.log(newvillian);
            this.setState({ villian: newvillian })
        } else {
            this.handleIncorrect();
            this.setState({})
        }
    }

    handleCorrect = event => {


        // if (!event.target.clicked) {
        //     this.setState({clicked: true})
        //     this.setState({ score: this.state.score + 1 })
        //     if (this.state.score > this.state.highScore) {
        //         this.setState({ highScore: this.state.highScore + 1 })
        //     }
        //     this.setState({ villian: this.randomizeArr(this.state.villian) })
        // } else {
        //     this.handleIncorrect();
        // }
        console.log("correct");

    }

    handleIncorrect() {

        // this.setState({ score: 0 })
        // this.setState({ villian: this.randomizeArr(this.state.villian) })
        console.log("Incorrect");
    }

    render() {
        return (
            <div class="gameDiv">
                {this.setArr}
                {this.state.villian.map(villian => (
                    <Card
                        id={villian.id}
                        name={villian.name}
                        image={villian.image}
                        clicked={villian.clicked}
                        onClick={this.targetCard}
                    />
                ))}
            </div>
        );
    }
}
export default Game;