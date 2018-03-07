# react-native-sectionlist-contacts
Address Book library for React Native

Installation
=========
install the npm package:

    npm install react-native-sectionlist-contacts --save

![][exampleImage]

Basic usage
=========
    import SectionListContacts from 'react-native-sectionlist-contacts'

    export default class Example extends React.Component {
    
     constructor(props) {
          super(props)

          let nameData=[
              '阿玛尼',
              'OK',
              '天津饭',
              '&&123',
              '周星驰',
              '习大表哥',
              '不要这样',
              'V字仇杀队',
              '拼车',
              '他妈跌',
              '淫僧',
              '钱学森',
              '宁采臣',
              '史泰龙',
              '恐龙',
              '任达华',
              '妈咪宝贝',
              'ing',
              '康麦隆',
              '刘德华',
              '精忠报国',
              '黄药师',
              '大叔皮',
              '布达拉宫',
              '方世玉',
              'ET外星人',
              '程咬金',
          ]
          this.state = {
              dataArray: nameData,
          }
      }

      render() {
            return(
                <View style={styles.container}>
                    <SectionListContacts
                        ref={s=>this.sectionList=s}
                        sectionListData={this.state.dataArray}
                        initialNumToRender={this.state.dataArray.length}
                        showsVerticalScrollIndicator={false}
                        SectionListClickCallback={(item,index)=>{
                           console.log('---SectionListClickCallback--:',item,index)
                        }}
                    />
                </View>
            )
        }
    }
Props
=========

* **sectionListData** (Array) - data to display
* **sectionHeight** (Integer) - height of the section item
* **initialNumToRender** (Integer) - initial num of item to render
* **showAlphabet** (Bool) - When false, Alphabet will not be displayed , default is true
* **SectionListClickCallback** (Function(item, index)) - Callback when each item is pressed
* **sectionHeaderTextStyle** (Text.propTypes.style) - style of the section header text 
* **sectionItemViewStyle** (View.propTypes.style) - style of the section item View 
* **sectionItemTextStyle** (Text.propTypes.style) - style of the section item text
* **letterViewStyle** (View.propTypes.style) - style of right alphabet view
* **letterTextStyle** (Text.propTypes.style)- style of right alphabet text
* **renderHeader**(Function:ReactComponent) -  Custom header component, accept 1 argument props and should return a component to use as the header.
* **renderItem** (Function:ReactComponent) - Custom section item component,accept 2 argument props and should return a component to use as the ssction item.

Advanced Usage
=========

If you want to custom header,you can do like this:

    render(){
         <SectionListContacts
            ...
            renderHeader={this._renderHeader}
        />
    }
    
    _renderHeader=(section)=>{
        return(
            <View>
                <Text>{section.key}</Text>
            </View>
        )
    }
    
If you want to custom section item,you can do like this:

    render(){
         <SectionListContacts
            ...
           renderItem={this._renderItem}
        />
    }

    _renderItem(item){
        return(
            <View>
                <Text>{item}</Text>
            </View>
        )
    }
    
Contribution
=========

Issues and contributions are very welcome: bug fixes, features, documentation.

