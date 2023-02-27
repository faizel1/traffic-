import * as React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={{width:200,}}>

    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{fontSize:10,alignItems:"center",justifyContent:"center",borderColor:"#55F38E",backgroundColor:"#fff",borderWidth:1}}
      />
      </View>
  );
};

export default Search;