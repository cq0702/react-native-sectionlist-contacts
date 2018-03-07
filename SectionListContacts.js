import React, {
    Component,
    PureComponent
} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Text,
    Animated,
    Dimensions,
    TouchableWithoutFeedback,
    SectionList
} from 'react-native';

const {width,height} = Dimensions.get('window');
import {makePy} from "./getFirstAlphabet";

export default class SectionListContacts extends Component {

    static propTypes = {
        sectionHeight: PropTypes.number,
        letterViewStyle: View.propTypes.style,//右边字母组件样式
        sectionItemViewStyle: View.propTypes.style,//item组件样式
        sectionItemTextStyle: Text.propTypes.style,//item文字样式
        sectionHeaderTextStyle: Text.propTypes.style,//头部文字样式
        showAlphabet:PropTypes.bool //是否显示右边字母
    };

    static defaultProps = {
        sectionHeight: 50,
        showAlphabet: true
    };

    constructor(props) {
        super(props);
        var data=[
            {data: [],key: 'A'},
            {data: [],key: 'B'},
            {data: [],key: 'C'},
            {data: [],key: 'D'},
            {data: [],key: 'E'},
            {data: [],key: 'F'},
            {data: [],key: 'G'},
            {data: [],key: 'H'},
            {data: [],key: 'I'},
            {data: [],key: 'J'},
            {data: [],key: 'K'},
            {data: [],key: 'L'},
            {data: [],key: 'M'},
            {data: [],key: 'N'},
            {data: [],key: 'O'},
            {data: [],key: 'P'},
            {data: [],key: 'Q'},
            {data: [],key: 'R'},
            {data: [],key: 'S'},
            {data: [],key: 'T'},
            {data: [],key: 'U'},
            {data: [],key: 'V'},
            {data: [],key: 'W'},
            {data: [],key: 'X'},
            {data: [],key: 'Y'},
            {data: [],key: 'Z'},
            {data: [],key: '其他'},
        ]
        this.state = {
            data: null,
            dataArray: data,
            delData: [],
            letterData: []
        }
    }

    componentDidMount() {
        this.loadData()
    }

    loadData(){

        let data=this.state.dataArray
        this.props.sectionListData.map((item,index)=>{
            for (let i=0;i<data.length;i++){
                if (i==data.length-1){
                    if (data[i].key==makePy(item.toUpperCase())){
                        data[i].data.push(item)
                        break
                    }else {
                    }
                }
                if (data[i].key==makePy(item.toUpperCase())){
                    data[i].data.push(item)
                    break
                }else {
                    continue
                }
            }
        })
        let delData = []
        let letterData = []
        for (var i in data){
            if (data[i].data.length!=0){
                delData.push(data[i])
                letterData.push(data[i].key)
            }
        }

        this.setState({
            delData: delData,
            letterData: letterData
        })
    }

    render() {

        return(
            <View style={styles.container}>
                <SectionList
                    {...this.props}
                    style={this.props.SectionListStyle}
                    ref={s=>this.sectionList=s}
                    keyExtractor={this._keyExtractor}
                    sections={this.state.delData}
                    renderSectionHeader={this._renderSectionHeader}
                    renderItem={this._renderItem}
                    getItemLayout={(data, index) => ( {length: this.props.sectionHeight, offset: this.props.sectionHeight * index, index} )}
                />
                {
                    this.props.showAlphabet?(
                            <View style={[styles.letterView,this.props.letterViewStyle]}>
                                {
                                    this.state.letterData.map((item,index)=>{
                                        let otherStyle=[]
                                        if (index==this.state.letterData.length-1){
                                            if (item=='其他'){
                                                otherStyle.push({width: 36,height: 30,paddingLeft: 20})
                                            }
                                        }
                                        return(
                                            <TouchableWithoutFeedback key={'letter_'+index} onPress={()=>{
                                    this.sectionList.scrollToLocation({animated: false,itemIndex: 0,sectionIndex: index,viewOffset: 40})
                                }}>
                                                <View style={[styles.letterItemView,otherStyle]}>
                                                    <Text style={[styles.letterText,this.props.letterTextStyle]}>{item}</Text>
                                                </View>
                                            </TouchableWithoutFeedback>
                                        )
                                    })
                                }
                            </View>
                        ):(
                            <View></View>
                        )
                }
            </View>
        )
    }

    _renderSectionHeader=({section})=>{
        if (this.props.renderHeader){
            return(
                this.props.renderHeader(section)
            )
        }
        return(
            <View style={styles.sectionHeaderView}>
                <Text style={[styles.sectionHeaderText,this.props.sectionHeaderTextStyle]}>{section.key}</Text>
                <View style={styles.lineView}></View>
            </View>
        )
    }

    _keyExtractor = (item, index) => index;

    _renderItem=({item,index})=>{
        if (this.props.renderItem){
            return(
                this.props.renderItem(item)
            )
        }
        return(
            <SectionItem
                {...this.props}
                callback={()=>{
                    this.props.SectionListClickCallback(item,index)
                }}
                item={item} ></SectionItem>
        )
    }

}

class SectionItem extends PureComponent {
    render() {
        return(
            <TouchableWithoutFeedback onPress={()=>{
                 this.props.callback()
            }}>
                <View style={[styles.itemStyle,this.props.sectionItemViewStyle]}>
                    <Text style={[styles.artistText,this.props.sectionItemTextStyle]}>{this.props.item}</Text>
                </View>
            </TouchableWithoutFeedback>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemStyle: {
        height: 50,
        justifyContent: 'center',
        backgroundColor:'#ffffff',
        width: '100%'
    },
    letterView: {
        width: 40,
        position: 'absolute',
        height: '100%',
        alignItems: 'center',
        justifyContent:'center',
        right: 0
    },
    sectionHeaderView: {
        backgroundColor: '#ffffff',
        height: 40,
        justifyContent: 'center'
    },
    sectionHeaderText: {
        color: '#333333',
        fontSize: 14,
        fontWeight: 'bold'
    },
    lineView: {
        width: '100%',
        height: 1,
        backgroundColor: '#e5e5e5',
        position: 'absolute',
        bottom: 0
    },
    letterItemView: {
        width: 40,
        height: 18,
        alignItems:'center',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    artistText: {
        fontSize: 15,
        color: '#333333'
    },
    letterText: {
        fontSize: 15,
        color: '#333333'
    }
});
