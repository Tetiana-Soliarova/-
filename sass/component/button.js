import { Component } from "react";

class Button extends Component {
/*
state = {
      inputLinkClicked: false
    }
  }

  handleAddSecondInput(){
    setState({
      inputLinkClicked: true
    })
  }*/
    render() {
        return (
            <div>
                <button type="submit" className="make-button-link"
                onClick={this.handleAddSecondInput}> Добавить картку
                      </button>
            </div>
        )
    }
}
export default Button;