class Task {
    constructor(props) {
        this.props = props;
    }
    onClick() {
        console.log("Clicked");
    }
    render() {
        return `<input type="checkbox"></input>  <span class="content"></span>`;
    }

}
export default Task;