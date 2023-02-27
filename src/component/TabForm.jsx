import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Accident from './Accident';
import PenalityForm from './PenalityForm';

const TabForm = () => {
  const [activeTab, setActiveTab] = useState('Accident');
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Accident':
        return <Accident />;
      case 'PenalityForm':
        return <PenalityForm />;
      default:
        return null;
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, activeTab === 'Accident' && styles.activeTab]} onPress={() => setActiveTab('Accident')}>
          <Text style={styles.tabText}>Accident</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, activeTab === 'PenalityForm' && styles.activeTab]} onPress={() => setActiveTab('PenalityForm')}>
          <Text style={styles.tabText}>Penality</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {renderTabContent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    borderBottomColor:"#55F38E",
    borderBottomWidth:2
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    width: '100%',
    padding: 20,
    backgroundColor:"#fff"
  },
});

export default TabForm;
