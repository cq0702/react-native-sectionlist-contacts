# react-native-sectionlistContacts
Address Book library for React Native

Installation
=========
install the npm package:

npm install react-native-gifted-chat --save

##Example

    import SectionListContacts from 'react-native-sectionlistContacts'

    class Example extends React.Component {
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
