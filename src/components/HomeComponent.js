import React from "react";
import {withStyles} from "@material-ui/core";

const styles = theme => withStyles({

});

class HomeComponent extends React.Component {
    render() {
        return(
            <div>Home component</div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(HomeComponent);

