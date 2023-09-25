/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import SectionListModule from 'react-native-sectionlist-contacts'

function App(): JSX.Element {

  //name字段必须,其他可有可无
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

export default App;
