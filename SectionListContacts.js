import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  View,
  Text,
  ViewPropTypes,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  SectionList
} from "react-native";

const { width, height } = Dimensions.get("window");
import { makePy } from "./getFirstAlphabet";
var _ = require("lodash");

export default class SectionListModule extends Component {
  static propTypes = {
    sectionListData: PropTypes.array.isRequired, //传入的数据
    sectionHeight: PropTypes.number, //内容的高度
    sectionHeaderHeight: PropTypes.number, //头部索引的高度
    letterViewStyle: ViewPropTypes.style, //右边字母组件样式
    sectionItemViewStyle: ViewPropTypes.style, //item组件样式
    sectionItemTextStyle: Text.propTypes.style, //item文字样式
    sectionHeaderTextStyle: Text.propTypes.style, //头部文字样式
    scrollAnimation: PropTypes.bool, //是否启动动画
    showAlphabet: PropTypes.bool, //是否显示右边字母
    otherAlphabet: PropTypes.string //其他的字符串
  };

  static defaultProps = {
    sectionHeight: 50,
    sectionHeaderHeight: 25,
    scrollAnimation: false,
    showAlphabet: true,
    otherAlphabet: "其他"
  };

  constructor(props) {
    super(props);
    var data = [
      { data: [], key: "A" },
      { data: [], key: "B" },
      { data: [], key: "C" },
      { data: [], key: "Ç" },
      { data: [], key: "D" },
      { data: [], key: "E" },
      { data: [], key: "F" },
      { data: [], key: "G" },
      { data: [], key: "H" },
      { data: [], key: "I" },
      { data: [], key: "İ" },
      { data: [], key: "J" },
      { data: [], key: "K" },
      { data: [], key: "L" },
      { data: [], key: "M" },
      { data: [], key: "N" },
      { data: [], key: "O" },
      { data: [], key: "Ö" },
      { data: [], key: "P" },
      { data: [], key: "Q" },
      { data: [], key: "R" },
      { data: [], key: "S" },
      { data: [], key: "Ş" },
      { data: [], key: "T" },
      { data: [], key: "U" },
      { data: [], key: "Ü" },
      { data: [], key: "V" },
      { data: [], key: "W" },
      { data: [], key: "X" },
      { data: [], key: "Y" },
      { data: [], key: "Z" },
      { data: [], key: this.props.otherAlphabet }
    ];
    this.state = {
      dataArray: data
    };
  }

  filterData() {
    var data = _.cloneDeep(this.state.dataArray);
    this.props.sectionListData.map((item, index) => {
      for (let i = 0; i < data.length; i++) {
        if (i == data.length - 1) {
          data[i].data.push(item);
          break;
        } else if (data[i].key == makePy(item.name.toUpperCase())) {
          data[i].data.push(item);
          break;
        } else {
          continue;
        }
      }
    });
    let delData = [];
    let letterData = [];
    for (var i in data) {
      if (data[i].data.length != 0) {
        delData.push(data[i]);
        letterData.push(data[i].key);
      }
    }
    return {
      delData: delData,
      letterData: letterData
    };
  }

  render() {
    let filterData = this.filterData();
    let delData = filterData.delData;
    let letterData = filterData.letterData;

    return (
      <View style={styles.container}>
        <SectionList
          {...this.props}
          style={this.props.SectionListStyle}
          ref={s => (this.sectionList = s)}
          keyExtractor={this._keyExtractor}
          sections={delData}
          renderSectionHeader={this._renderSectionHeader}
          renderItem={this._renderItem}
          getItemLayout={(data, index) => ({
            length: this.props.sectionHeight,
            offset: this.props.sectionHeight * index,
            index
          })}
        />
        {this.props.showAlphabet ? (
          <View style={[styles.letterView, this.props.letterViewStyle]}>
            {letterData.map((item, index) => {
              let otherStyle = [];
              if (index == letterData.length - 1) {
                if (item == this.props.otherAlphabet) {
                  otherStyle.push({ width: 20 });
                }
              }
              return (
                <TouchableWithoutFeedback
                  key={"letter_" + index}
                  onPress={() => {
                    this.sectionList.scrollToLocation({
                      animated: this.props.scrollAnimation,
                      itemIndex: 0,
                      sectionIndex: index,
                      viewOffset:
                        this.props.sectionHeight * (index + 1) +
                        this.props.sectionHeaderHeight * index
                    });
                  }}
                >
                  <View style={[styles.letterItemView, otherStyle]}>
                    <Text
                      numberOfLines={0}
                      style={[styles.letterText, this.props.letterTextStyle]}
                    >
                      {item}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        ) : (
          <View />
        )}
      </View>
    );
  }

  _renderSectionHeader = ({ section }) => {
    if (this.props.renderHeader) {
      return this.props.renderHeader(section);
    }
    return (
      <View
        style={[
          styles.sectionHeaderView,
          { height: this.props.sectionHeaderHeight }
        ]}
      >
        <Text
          style={[styles.sectionHeaderText, this.props.sectionHeaderTextStyle]}
        >
          {section.key}
        </Text>
        <View style={styles.lineView} />
      </View>
    );
  };

  _keyExtractor = (item, index) => index;

  _renderItem = ({ item, index, section }) => {
    if (this.props.renderItem) {
      return this.props.renderItem(item, index, section);
    }
    return (
      <SectionItem
        {...this.props}
        callback={() => {
          this.props.SectionListClickCallback(item, index, section);
        }}
        item={item}
      />
    );
  };
}

class SectionItem extends PureComponent {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.callback();
        }}
      >
        <View style={[styles.itemStyle, this.props.sectionItemViewStyle]}>
          <Text style={[styles.artistText, this.props.sectionItemTextStyle]}>
            {this.props.item.name}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemStyle: {
    height: 50,
    justifyContent: "center",
    backgroundColor: "#ffffff",
    width: "100%"
  },
  letterView: {
    width: 40,
    position: "absolute",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    right: 0
  },
  sectionHeaderView: {
    backgroundColor: "#ffffff",
    height: 25,
    justifyContent: "center"
  },
  sectionHeaderText: {
    color: "#333333",
    fontSize: 14,
    fontWeight: "bold",
    paddingLeft: 10
  },
  lineView: {
    width: "100%",
    height: 1,
    backgroundColor: "#e5e5e5",
    position: "absolute",
    bottom: 0
  },
  letterItemView: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 1,
    paddingHorizontal: 2
  },
  artistText: {
    fontSize: 15,
    color: "#333333"
  },
  letterText: {
    fontSize: 15,
    color: "#333333"
  }
});
