import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Alert,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { getAllEmployees, deleteEmployee, updateEmployee } from '../API/api';
import UpdateForm from './UpdateForm';

function Home({ navigation }) {
  const [employees, setEmployees] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedEmp, setSelectedEmp] = useState(null);

  const fetchEmployees = () => {
    getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error fetching employees:', error);
      });
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete = (id) => {
    Alert.alert('Confirm Delete', 'Are you sure you want to delete this employee?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        onPress: () => {
          deleteEmployee(id)
            .then(() => {
              Alert.alert('Deleted successfully');
              fetchEmployees();
            })
            .catch((error) => {
              console.error(' Delete Error:', error);
            });
        },
      },
    ]);
  };

  const handleUpdate = (id, emp) => {
    navigation.navigate('USER');
    setSelectedEmp(emp);
    updateEmployee(id, emp).then(() => {
      setShowUpdateForm(false);
      setSelectedEmp(null);
      fetchEmployees();
    });
    navigation.navigate('USER');
    setShowUpdateForm(true);
  };

  const handleUpdateSubmit = (updatedEmp) => {
    updateEmployee(updatedEmp.id, updatedEmp)
      .then(() => {
        Alert.alert('Updated successfully');
        setShowUpdateForm(false);
        setSelectedEmp(null);
        fetchEmployees();
      })
      .catch((err) => console.error(' Update Error:', err));
  };

  const GotoLogin = () => {
    navigation.navigate('USER');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📋 Data Attendance</Text>
      <TouchableOpacity style={styles.buttonPrimary} onPress={GotoLogin}>
        <Text style={styles.buttonText}>➕ ADD USER</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scrollView}>
        {employees.map((emp, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.name}>👤 {emp.name}</Text>
            <Text style={styles.detail}><Text style={styles.boldLabel}>🆔 ID:</Text> {emp.id}</Text>
            <Text style={styles.detail}><Text style={styles.boldLabel}>📌 Title:</Text> {emp.title}</Text>
            <Text style={styles.detail}><Text style={styles.boldLabel}>📝 Description:</Text> {emp.description}</Text>
            <Text style={styles.detail}><Text style={styles.boldLabel}>📅 Due Date:</Text> {emp.dueDate}</Text>
            <Text style={styles.detail}><Text style={styles.boldLabel}>📊 Status:</Text> {emp.status}</Text>
            <Text style={styles.detail}><Text style={styles.boldLabel}>⭐ Priority:</Text> {emp.priority}</Text>

            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={styles.buttonUpdate}
                onPress={() => handleUpdate(emp.id, emp)}
              >
                <Text style={styles.buttonText}>✏️ Update</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonDelete}
                onPress={() => handleDelete(emp.id)}
              >
                <Text style={styles.buttonText}>🗑️ Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Modal for update form */}
      <Modal visible={showUpdateForm} animationType="slide">
        <UpdateForm
          emp={selectedEmp}
          onClose={() => setShowUpdateForm(false)}
          onSubmit={handleUpdateSubmit}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4EAF1',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4B0082',
    marginBottom: 20,
  },
  scrollView: {
    marginTop: 10,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 16,
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  detail: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  boldLabel: {
    fontWeight: 'bold',
    color: '#333',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  buttonPrimary: {
    backgroundColor: '#4B0082',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    elevation: 4,
  },
  buttonUpdate: {
    flex: 1,
    backgroundColor: '#228B22',
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3,
  },
  buttonDelete: {
    flex: 1,
    backgroundColor: '#B22222',
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 0.5,
  },
});

export default Home;

