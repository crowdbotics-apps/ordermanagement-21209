import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class __Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = { CheckBox_3: true, CheckBox_5: true }
  render = () => (
    <View style={styles.View_1}>
      <CheckBox
        title="Checkbox"
        disabled={false}
        containerStyle={styles.CheckBox_3}
        checked={this.state.CheckBox_3}
        onPress={nextChecked => this.setState({ CheckBox_3: nextChecked })}
      />
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen1131408")}
      >
        <CheckBox
          title="Radio button"
          disabled={false}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          containerStyle={styles.CheckBox_5}
          checked={this.state.CheckBox_5}
          onPress={nextChecked => this.setState({ CheckBox_5: nextChecked })}
        />
      </TouchableOpacity>
      <Icon iconFont="FontAwesome Icons" style={styles.Icon_7} />
    </View>
  )
}

_Blank = withStyles(__Blank, theme => ({
  container: { backgroundColor: theme["color-basic-100"] }
}))

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(_Blank)
