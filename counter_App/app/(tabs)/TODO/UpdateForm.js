import React, { useState } from 'react';
import {
  View,
  Alert,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

export default function UpdateForm({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');

  const postData = async () => {
    try {
      const response = await axios.post('http://192.168.29.254:8080/api/tasks/AddTask', {
        title,
        description,
        dueDate,
        status,
        priority,
      });

      console.log('Response:', response.data);
      Alert.alert('Success', 'Task submitted successfully');
    } catch (error) {
      console.error('Error posting data:', error);
      Alert.alert('Error', 'Failed to submit task');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Create & Update</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
          placeholder="Enter description"
          multiline
          value={description}
          onChangeText={setDescription}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Due Date</Text>
        <TextInput
          style={styles.input}
          placeholder="YYYY-MM-DD"
          value={dueDate}
          onChangeText={setDueDate}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Status</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., OPEN, CLOSED"
          value={status}
          onChangeText={setStatus}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Priority</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., HIGH, LOW"
          value={priority}
          onChangeText={setPriority}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={postData}>
        <Text style={styles.buttonText}>Submit Task</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: '#f0f2f5',
    flexGrow: 1,
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 30,
    textAlign: 'center',
    color: '#2c3e50',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 8,
    color: '#34495e',
  },
  input: {
    borderWidth: 1,
    borderColor: '#dcdde1',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 14,
    fontSize: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 1.5,
  },
  button: {
    backgroundColor: '#3b7ddd',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#3b7ddd',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 17,
  },
});
