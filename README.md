# react-native-sectionlist-contacts
Address Book library for React Native


![Simulator Screenshot - iPhone 14 - 2023-09-25 at 20 32 40](https://github.com/cq0702/react-native-sectionlist-contacts/assets/18210575/24d84795-73ca-43e2-8a67-b52bbc8cd01b)

Installation
=========
install the npm package:

    npm install react-native-sectionlist-contacts --save or yarn add react-native-sectionlist-contacts

Basic usage
=========
    import React from 'react';
    import {
      SafeAreaView,
      StyleSheet,
      View,
    } from 'react-native';
    
    import SectionListModule from 'react-native-sectionlist-contacts'
    
    function App(): JSX.Element {
    
      //name is required and other params such as id is optional
      const nameData=[
        {name:'阿玛尼',id:'amani',params: ''},
        {name:'OK',id:'ok',params: '123'},
        {name:'天津饭'},
        {name:'%……&'},
        {name:'周星驰'},
        {name:'习大表哥'},
        {name:'不要这样'},
        {name:'V字仇杀队'},
        {name:'拼车'},
        {name:'他妈跌'},
        {name:'淫僧'},
        {name:'钱学森'},
        {name:'宁采臣'},
        {name:'史泰龙'},
        {name:'恐龙'},
        {name:'任达华'},
        {name:'妈咪宝贝'},
        {name:'ing'},
        {name:'康麦隆'},
        {name:'刘德华'},
        {name:'精忠报国'},
        {name:'黄药师'},
        {name:'大叔皮'},
        {name:'布达拉宫'},
        {name:'方世玉'},
        {name:'ET外星人'},
        {name:'程咬金'},
        {name:'**&&&&'},
      ]
    
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <SectionListModule
                sectionListData={nameData}
                sectionHeight={50}
                initialNumToRender={nameData.length}
                showsVerticalScrollIndicator={false}
                highlightAlphabetColor={'blue'}
                showHighlightAlphabetColor={true}
                SectionListClickCallback={(item,index,section) => {
                  console.log('---SectionListClickCallback--:',item,index)
                }}
                otherAlphabet="#"
            />
          </View>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
    });
Props
=========

* **sectionListData** (Array) required- data to display
* **sectionHeight** (Integer) optional- height of the section item (Default: 50)
* **sectionHeaderHeight** (Integer) optional- height of the section header (Default: 25)
* **initialNumToRender** (Integer) optional- initial num of item to render
* **showAlphabet** (Bool)optional - When false, Alphabet will not be displayed , default is true
* **SectionListClickCallback** (Function(item, index)) optional- Callback when each item is pressed
* **sectionHeaderTextStyle** (Text.propTypes.style) optional- style of the section header text 
* **sectionItemViewStyle** (View.propTypes.style) optional- style of the section item View 
* **sectionItemTextStyle** (Text.propTypes.style) optional- style of the section item text
* **letterViewStyle** (View.propTypes.style) optional- style of right alphabet view
* **letterTextStyle** (Text.propTypes.style) optional- style of right alphabet text
* **scrollAnimation** (Bool)optional - (Default: false)
* **highlightAlphabetColor** (String)optional - (Default: 'blue')
* **showHighlightAlphabetColor** (Bool)optional - (Default: true)
* **renderHeader**(Function:ReactComponent) optional-  Custom header component, accept 1 argument props and should return a component to use as the header.
* **renderItem** (Function:ReactComponent) optional- Custom section item component,accept 2 argument props and should return a component to use as the ssction item.
* **otherAlphabet** (String) optional- the other alphabet

Advanced Usage
=========

If you want to custom header,you can do like this:

    render(){
         <SectionListContacts
            ...
            renderHeader={this._renderHeader}
        />
    }
    
    _renderHeader=(params)=>{
        console.log('---custom-renderHeader--',params)
        return <View><Text>{params.key}</Text></View>
    }
    
If you want to custom section item,you can do like this:

    render(){
         <SectionListContacts
            ...
           renderItem={this._renderItem}
        />
    }

    renderItem=(item,index,section)=>{
        console.log('---custom-renderItem--',item,index,section)
        return <View><Text>{item.name}</Text></View>
    }
    
Contribution
=========

Issues and contributions are very welcome: bug fixes, features, documentation.

